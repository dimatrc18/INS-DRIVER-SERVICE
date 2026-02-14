<?php
/**
 * ============================================================
 * DOROGO BOOKING SYSTEM v4.0
 * ============================================================
 * This script handles booking form submissions from the website.
 * It performs the following actions:
 *   1. Connects to MySQL database
 *   2. Reads all POST data from the form
 *   3. Inserts booking into the `bookings` table
 *   4. Sends an HTML email notification to the business owner
 *   5. Displays a confirmation message to the user
 * 
 * Hosting: Hostinger Business Shared Hosting (PHP 8.x + MySQL)
 * ============================================================
 */

// ============================================================
// SECTION 1: DATABASE CONFIGURATION
// ============================================================
// Replace these placeholders with your actual Hostinger credentials.
// You can find these in Hostinger Panel > Databases > MySQL Databases.

$db_host     = "localhost";                      // Usually "localhost" on Hostinger
$db_name     = "u944850581_DOROGO_Booking";      // Your database name (with prefix)
$db_user     = "u944850581_Igor_2004";           // Your database username (with prefix)
$db_password = "Igrik123452004%$";               // Your database password

// ============================================================
// SECTION 2: EMAIL CONFIGURATION
// ============================================================
// The email address where booking notifications will be sent.
// The "From" address MUST be on your own domain for Hostinger to send it.

$admin_email = "booking@dorogo.eu";              // Your business email (receives notifications)
$from_email  = "noreply@dorogo.eu";              // Must be an address on YOUR domain
$from_name   = "DOROGO Booking System";          // Display name in the email

// ============================================================
// SECTION 3: CORS & ERROR HANDLING
// ============================================================
// These headers allow your React frontend to communicate with this PHP script.
// Error reporting is enabled for debugging; disable in production if desired.

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request (for CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Enable error reporting (comment out in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ============================================================
// SECTION 4: DATABASE CONNECTION
// ============================================================
// Create a new MySQLi connection using the credentials above.

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    http_response_code(500);
    die("Database Connection Failed: " . $conn->connect_error);
}

// Set character encoding to UTF-8 for proper special character handling
$conn->set_charset("utf8mb4");

// ============================================================
// SECTION 5: AUTO-CREATE TABLE (if it doesn't exist)
// ============================================================
// This ensures the `bookings` table exists with all required columns.
// Safe to run on every request; it won't overwrite existing data.

$create_table_sql = "CREATE TABLE IF NOT EXISTS `bookings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(50),
    `email` VARCHAR(255) NOT NULL,
    `service_type` VARCHAR(100),
    `pickup_location` VARCHAR(255),
    `dropoff_location` VARCHAR(255),
    `duration` VARCHAR(50),
    `date` DATE,
    `time` VARCHAR(10),
    `passengers` INT DEFAULT 1,
    `luggage` INT DEFAULT 0,
    `vehicle` VARCHAR(100),
    `message` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

if (!$conn->query($create_table_sql)) {
    http_response_code(500);
    die("Table Setup Error: " . $conn->error);
}

// Auto-add `duration` column if missing (for older table versions)
$check_duration = $conn->query("SHOW COLUMNS FROM `bookings` LIKE 'duration'");
if ($check_duration->num_rows == 0) {
    $conn->query("ALTER TABLE `bookings` ADD `duration` VARCHAR(50) AFTER `dropoff_location`");
}

// ============================================================
// SECTION 6: READ POST DATA
// ============================================================
// Extract all form fields from the POST request.
// The names here MUST match the `name` attributes in your HTML form.

$full_name        = trim($_POST['full_name'] ?? '');
$phone            = trim($_POST['phone'] ?? '');
$email            = trim($_POST['email'] ?? '');
$service_type     = trim($_POST['service_type'] ?? '');
$pickup_location  = trim($_POST['pickup_location'] ?? '');
$dropoff_location = trim($_POST['dropoff_location'] ?? '');
$duration         = trim($_POST['duration'] ?? '');
$date             = trim($_POST['date'] ?? '');
$time             = trim($_POST['time'] ?? '');
$passengers       = (int)($_POST['passengers'] ?? 1);
$luggage          = (int)($_POST['luggage'] ?? 0);
$vehicle          = trim($_POST['vehicle'] ?? '');
$message          = trim($_POST['message'] ?? '');

// Basic Validation: Require at least name and email
if (empty($full_name) || empty($email)) {
    http_response_code(400);
    die("Error: Full Name and Email are required fields.");
}

// ============================================================
// SECTION 7: INSERT INTO DATABASE (Prepared Statement)
// ============================================================
// Use a prepared statement to prevent SQL injection attacks.

$insert_sql = "INSERT INTO bookings 
    (full_name, phone, email, service_type, pickup_location, dropoff_location, duration, date, time, passengers, luggage, vehicle, message) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($insert_sql);

if ($stmt === false) {
    http_response_code(500);
    die("SQL Prepare Error: " . $conn->error);
}

// Bind parameters: s = string, i = integer
// Order: full_name, phone, email, service_type, pickup, dropoff, duration, date, time, passengers, luggage, vehicle, message
$stmt->bind_param(
    "sssssssssiiss",
    $full_name,
    $phone,
    $email,
    $service_type,
    $pickup_location,
    $dropoff_location,
    $duration,
    $date,
    $time,
    $passengers,
    $luggage,
    $vehicle,
    $message
);

// Execute the insert
if (!$stmt->execute()) {
    http_response_code(500);
    die("SQL Execution Error: " . $stmt->error);
}

// Get the ID of the newly inserted booking (useful for reference numbers)
$booking_id = $conn->insert_id;

$stmt->close();

// ============================================================
// SECTION 8: SEND EMAIL NOTIFICATION
// ============================================================
// Construct a professional HTML email and send it using PHP's mail() function.
// Note: Hostinger's mail() uses their internal SMTP, so no external library needed.

$email_subject = "🚘 New Booking #{$booking_id}: {$full_name} - {$service_type}";

$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #1a1a1a 0%, #333 100%); color: #D4AF37; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .header .booking-id { font-size: 14px; color: #999; margin-top: 5px; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .field-label { font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
        .field-value { font-size: 16px; color: #333; }
        .two-col { display: flex; gap: 20px; }
        .two-col .field { flex: 1; }
        .message-box { background: #f9f9f9; border-left: 4px solid #D4AF37; padding: 15px; margin-top: 10px; }
        .footer { background: #1a1a1a; color: #666; padding: 20px; text-align: center; font-size: 12px; }
        .cta { display: inline-block; background: #D4AF37; color: #000; padding: 12px 30px; text-decoration: none; font-weight: bold; margin-top: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Booking Request</h1>
            <div class='booking-id'>Booking ID: #{$booking_id}</div>
        </div>
        <div class='content'>
            <div class='two-col'>
                <div class='field'>
                    <div class='field-label'>Client Name</div>
                    <div class='field-value'>{$full_name}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Phone</div>
                    <div class='field-value'>{$phone}</div>
                </div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Email</div>
                <div class='field-value'><a href='mailto:{$email}'>{$email}</a></div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Service Type</div>
                <div class='field-value'>{$service_type}</div>
            </div>
            
            <div class='two-col'>
                <div class='field'>
                    <div class='field-label'>Pick-up Location</div>
                    <div class='field-value'>" . ($pickup_location ?: 'Not specified') . "</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Drop-off Location</div>
                    <div class='field-value'>" . ($dropoff_location ?: 'N/A') . "</div>
                </div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Duration (Hourly Service)</div>
                <div class='field-value'>" . ($duration ?: 'N/A') . "</div>
            </div>
            
            <div class='two-col'>
                <div class='field'>
                    <div class='field-label'>Date</div>
                    <div class='field-value'>{$date}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Time</div>
                    <div class='field-value'>{$time}</div>
                </div>
            </div>
            
            <div class='two-col'>
                <div class='field'>
                    <div class='field-label'>Passengers</div>
                    <div class='field-value'>{$passengers} pax</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Luggage</div>
                    <div class='field-value'>{$luggage} bags</div>
                </div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Vehicle Preference</div>
                <div class='field-value'>{$vehicle}</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Client Message</div>
                <div class='message-box'>" . ($message ?: 'No message provided.') . "</div>
            </div>
            
            <center>
                <a href='mailto:{$email}' class='cta'>Reply to Client</a>
            </center>
        </div>
        <div class='footer'>
            This booking was submitted via dorogo.eu<br>
            &copy; " . date('Y') . " DOROGO Luxury Transfers
        </div>
    </div>
</body>
</html>
";

// Email Headers (IMPORTANT: "From" must be on your domain for Hostinger)
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$from_name} <{$from_email}>\r\n";
$headers .= "Reply-To: {$full_name} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Attempt to send email
$email_sent = mail($admin_email, $email_subject, $email_body, $headers);

// Optional: Log email failure (booking is still saved)
if (!$email_sent) {
    error_log("Email notification failed for booking #{$booking_id}");
}

// ============================================================
// SECTION 9: CLOSE DATABASE CONNECTION
// ============================================================

$conn->close();

// ============================================================
// SECTION 10: RESPONSE TO USER
// ============================================================
// Return a success message. Your React frontend catches this text.
// For a traditional HTML form, you could output a full HTML thank-you page instead.

echo "SUCCESS: Your booking has been saved.";

// If you want a full HTML confirmation page instead, uncomment below:
/*
echo "
<!DOCTYPE html>
<html>
<head>
    <title>Booking Confirmed | DOROGO</title>
    <style>
        body { font-family: Arial; background: #000; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .box { text-align: center; border: 1px solid #D4AF37; padding: 60px; max-width: 500px; }
        h1 { color: #D4AF37; }
        a { color: #D4AF37; }
    </style>
</head>
<body>
    <div class='box'>
        <h1>Thank You!</h1>
        <p>Your booking request (#{$booking_id}) has been received.</p>
        <p>We will contact you shortly at <strong>{$email}</strong>.</p>
        <p><a href='/'>Return to Homepage</a></p>
    </div>
</body>
</html>
";
*/
?>
