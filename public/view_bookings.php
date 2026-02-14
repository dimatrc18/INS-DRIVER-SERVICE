<?php
/**
 * DATABASE VERIFICATION SCRIPT
 * Use: yoursite.com/view_bookings.php?key=verify123
 */

$servername = "localhost";
$username   = "u944850581_Igor_2004";
$password   = "Igrik123452004%$";
$dbname     = "u944850581_DOROGO_Booking";

// Basic Security
if (($_GET['key'] ?? '') !== 'verify123') {
    die("Access Denied. Incorrect verification key.");
}

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM bookings ORDER BY created_at DESC LIMIT 10";
$result = $conn->query($sql);

echo "<html><head><style>
    body { background: #000; color: #fff; font-family: sans-serif; padding: 40px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid #333; padding: 12px; text-align: left; }
    th { background: #D4AF37; color: #000; }
    tr:nth-child(even) { background: #111; }
    .status { color: #D4AF37; font-weight: bold; }
</style></head><body>";

echo "<h1>Recent Bookings <span class='status'>(Database: $dbname)</span></h1>";

if ($result->num_rows > 0) {
    echo "<table><tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Service</th>
        <th>Pickup</th>
        <th>Dropoff</th>
        <th>Duration</th>
        <th>Date/Time</th>
        <th>Created</th>
    </tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["id"]. "</td>";
        echo "<td>" . $row["full_name"]. "</td>";
        echo "<td>" . $row["email"]. "</td>";
        echo "<td>" . $row["service_type"]. "</td>";
        echo "<td>" . $row["pickup_location"]. "</td>";
        echo "<td>" . $row["dropoff_location"]. "</td>";
        echo "<td>" . ($row["duration"] ?: '-') . "</td>";
        echo "<td>" . $row["date"]. " " . $row["time"] . "</td>";
        echo "<td>" . $row["created_at"]. "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "<p>No bookings found in the database. Ensure the table has been created.</p>";
}

$conn->close();
echo "</body></html>";
?>
