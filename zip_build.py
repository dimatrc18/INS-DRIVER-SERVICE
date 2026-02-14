import os
import zipfile

dist_dir = 'dist'
code_zip_name = 'deploy_code.zip'
images_zip_name = 'deploy_images.zip'

image_extensions = {'.png', '.jpg', '.jpeg', '.webp', '.svg', '.avif', '.heic', '.gif', '.ico'}

with zipfile.ZipFile(code_zip_name, 'w', zipfile.ZIP_DEFLATED) as code_zip, \
     zipfile.ZipFile(images_zip_name, 'w', zipfile.ZIP_DEFLATED) as images_zip:

    for root, dirs, files in os.walk(dist_dir):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, dist_dir)
            _, ext = os.path.splitext(file)
            
            if ext.lower() in image_extensions:
                images_zip.write(file_path, arcname)
            else:
                code_zip.write(file_path, arcname)

print(f"Created {code_zip_name} and {images_zip_name}")
