<?php

$ratingDAO = new RatingDAO();

$app->get('/rating/?', authorize(), function() use ($ratingDAO){
    header("Content-Type: application/json");
    echo json_encode($ratingDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/rating/:id/?', authorize(), function($id) use ($ratingDAO){
    header("Content-Type: application/json");
    echo json_encode($ratingDAO->selectAllByGroupId($id), JSON_NUMERIC_CHECK);
    exit();
});

$app->post('/rating/?', authorize(), function() use ($app, $ratingDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($ratingDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/rating/:id/?', authorize(), function() use ($ratingDAO){
    header("Content-Type: application/json");
    echo json_encode($ratingDAO->delete());
    exit();
});

$app->put('/rating/:id/?', authorize(), function() use ($app, $ratingDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($ratingDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});
