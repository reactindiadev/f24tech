<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

include '../config/database.php';

try {
    // Get stats
    $total_projects = DB::query("SELECT COUNT(*) as count FROM projects")->fetch()['count'] ?? 0;
    $total_contacts = DB::query("SELECT COUNT(*) as count FROM contact_submissions")->fetch()['count'] ?? 0;
    $total_newsletter = DB::query("SELECT COUNT(*) as count FROM newsletter_subscriptions WHERE status = 'active'")->fetch()['count'] ?? 0;
    $recent_views = DB::query("SELECT COUNT(*) as count FROM page_views WHERE view_time >= DATE_SUB(NOW(), INTERVAL 30 DAY)")->fetch()['count'] ?? 0;
    
    echo json_encode([
        'success' => true,
        'stats' => [
            'totalProjects' => (int)$total_projects,
            'totalContacts' => (int)$total_contacts,
            'totalNewsletter' => (int)$total_newsletter,
            'recentViews' => (int)$recent_views
        ]
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch stats']);
}
?>