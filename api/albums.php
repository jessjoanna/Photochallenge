<?php

$albumDAO = new AlbumDAO();

$app->get('/albums/?', function() use ($albumDAO){
    header("Content-Type: application/json");
    echo json_encode($albumDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->post('/albums/?', function() use ($app, $albumDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($albumDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/albums/:id/?', function($id) use ($albumDAO){
    header("Content-Type: application/json");
    echo json_encode($albumDAO->delete($id));
    exit();
});

$app->get('/albums/:format/?', function($format) use ($albumDAO){
    header("Content-Type: application/json");
    echo json_encode($albumDAO->selectByFormat($format), JSON_NUMERIC_CHECK);
    exit();
});
