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
$token = $input['token'] ?? '';

if (!$token) {
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'error' => 'Token required'
    ]);
    exit;
}

// Simple token verification (in production, use proper JWT verification)
$decoded = base64_decode($token);
$parts = explode(':', $decoded);

if (count($parts) === 2 && $parts[0] === 'admin') {
    $timestamp = (int)$parts[1];
    $current_time = time();
    
    // Token expires after 7 days
    if (($current_time - $timestamp) < (7 * 24 * 60 * 60)) {
        echo json_encode([
            'success' => true,
            'message' => 'Token valid'
        ]);
    } else {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'error' => 'Token expired'
        ]);
    }
} else {
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid token'
    ]);
}
?>