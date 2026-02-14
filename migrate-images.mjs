
import fs from 'fs';
import path from 'path';

const dirs = ['./pages', './components', './'];
const extensions = ['.tsx', '.ts'];
const skipDirs = ['node_modules', 'dist', 'public', '.git'];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (skipDirs.includes(file)) return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

// Start walking from root
const files = walk('./');
let updatedCount = 0;

console.log(`Scanning ${files.length} files for image imports...`);

for (const file of files) {
  if (!extensions.includes(path.extname(file))) continue;

  let content = fs.readFileSync(file, 'utf-8');
  const originalContent = content;

  // Regex to find: import varName from '../images/filename.ext';
  // Matches quotes ' or "
  // Support ../images, ./images, ../../images
  // Capture group 1: variable name
  // Capture group 2: filename (including extension)
  // Note: This replaces the entire import line.

  // Pattern breakdown:
  // ^import\s+               : import keyword at start of line (multiline flag m isn't used, but we iterate line by line? No, whole content)
  //                            Actually imports can be anywhere, but usually top level.
  // (\w+)                    : Variable name (default import)
  // \s+from\s+               : from keyword
  // ['"]                     : open quote
  // (?:\.\.?\/)+             : one or more ../ or ./
  // images\/                 : images/ folder
  // ([^'"]+)                 : filename
  // ['"]                     : close quote
  // ;?                       : optional semicolon

  // We use a global replace on the whole file content.

  const regex = /import\s+(\w+)\s+from\s+['"](?:\.\.?\/)+images\/([^'"]+)['"];?/g;

  content = content.replace(regex, (match, varName, fileName) => {
    // Construct replacement
    // Using template literal in the replacement string to be safe
    console.log(`Replacing in ${file}: ${varName} -> ${fileName}`);
    return `const ${varName} = import.meta.env.BASE_URL + 'images/${fileName}';`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    updatedCount++;
  }
}

console.log(`Migration complete. Updated ${updatedCount} files.`);
