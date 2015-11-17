<?php

$userDAO = new UserDAO();

$app->get('/users/?', authorize(), function() use ($userDAO){
    header("Content-Type: application/json");
    echo json_encode($userDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/users/self/?', authorize(), function() use ($userDAO){
    header("Content-Type: application/json");
    echo json_encode($userDAO->selectByUserId($_SESSION['user']['id']), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/users/:id/?', authorize(), function($id) use ($userDAO){
    header("Content-Type: application/json");
    echo json_encode($userDAO->selectById($id), JSON_NUMERIC_CHECK);
    exit();
});


$app->get('/users/login/:mail/?', authorize(), function($mail) use ($userDAO){
    header("Content-Type: application/json");
    echo json_encode($userDAO->selectByMail($mail), JSON_NUMERIC_CHECK);
    exit();
});

$app->post('/users/?', authorize(), function() use ($app, $userDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($userDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/users/:id/?', authorize(), function() use ($userDAO){
    header("Content-Type: application/json");
    echo json_encode($userDAO->delete());
    exit();
});

$app->put('/users/:id/?', authorize(), function() use ($app, $userDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($userDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});
