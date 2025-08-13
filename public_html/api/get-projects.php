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
    $projects = DB::query("
        SELECT p.*, 
               GROUP_CONCAT(DISTINCT pt.technology) as technologies,
               GROUP_CONCAT(DISTINCT ptag.tag) as tags
        FROM projects p
        LEFT JOIN project_technologies pt ON p.id = pt.project_id
        LEFT JOIN project_tags ptag ON p.id = ptag.project_id
        WHERE p.status = 'published'
        GROUP BY p.id
        ORDER BY p.updated_at DESC
    ")->fetchAll();
    
    // Format technologies and tags as arrays
    foreach ($projects as &$project) {
        $project['technologies'] = $project['technologies'] ? explode(',', $project['technologies']) : [];
        $project['tags'] = $project['tags'] ? explode(',', $project['tags']) : [];
    }
    
    echo json_encode([
        'success' => true,
        'projects' => $projects
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch projects']);
}
?>