<?php

$groupDAO = new GroupDAO();

// $app->get('/group/?', authorize() ,function() use ($groupDAO){
//     header("Content-Type: application/json");
//     echo json_encode($groupDAO->selectAll(), JSON_NUMERIC_CHECK);
//     exit();
// });

$app->get('/group/?', authorize() ,function() use ($groupDAO){
    header("Content-Type: application/json");
    echo json_encode($groupDAO->selectAllWithUsers(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/group/:id/?', authorize(), function($id) use ($groupDAO){
    header("Content-Type: application/json");
    echo json_encode($groupDAO->selectById($id), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/group/:groupname/?', authorize(), function($groupname) use ($groupDAO){
    header("Content-Type: application/json");
    echo json_encode($groupDAO->selectByGroupName($groupname), JSON_NUMERIC_CHECK);
    exit();
});

$app->post('/group/?', function() use ($app, $groupDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($groupDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/group/:id/?', authorize(), function() use ($groupDAO){
    header("Content-Type: application/json");
    echo json_encode($groupDAO->delete());
    exit();
});

$app->put('/group/:id/?', authorize(), function() use ($app, $groupDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($groupDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});
