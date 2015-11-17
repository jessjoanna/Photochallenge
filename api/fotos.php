<?php

$fotosDAO = new FotoDAO();

$app->get('/fotos/?', authorize(), function() use ($fotosDAO){
    header("Content-Type: application/json");
    echo json_encode($fotosDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/fotos/:id/?', authorize(), function() use ($fotosDAO){
    header("Content-Type: application/json");
    echo json_encode($fotosDAO->selectById(), JSON_NUMERIC_CHECK);
    exit();
});

$app->post('/fotos/?', authorize(), function() use ($app, $fotosDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($fotosDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/fotos/:id/?', authorize(), function() use ($fotosDAO){
    header("Content-Type: application/json");
    echo json_encode($fotosDAO->delete());
    exit();
});

$app->put('/fotos/:id/?', authorize(), function() use ($app, $fotosDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($fotosDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});
