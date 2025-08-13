<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);
$username = $input['username'] ?? '';
$password = $input['password'] ?? '';

// Simple authentication (in production, use proper password hashing)
if ($username === 'admin' && $password === 'Admin@f24tech24') {
    // Generate a simple token (in production, use JWT or similar)
    $token = base64_encode($username . ':' . time());
    
    echo json_encode([
        'success' => true,
        'token' => $token,
        'message' => 'Login successful'
    ]);
} else {
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid username or password'
    ]);
}
?>