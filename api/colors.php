<?php

$colorDAO = new ColorDAO();

$app->get('/colors/?', authorize(), function() use ($colorDAO){
	header("Content-Type: application/json");
	echo json_encode($colorDAO->selectAll(), JSON_NUMERIC_CHECK);
	exit();
});

$app->get('/colors/:id/?', authorize(), function($id) use ($colorDAO){
	header("Content-Type: application/json");
	echo json_encode($colorDAO->selectById($id), JSON_NUMERIC_CHECK);
	exit();
});

$app->post('/colors/?', authorize(), function() use ($app, $colorDAO){
	header("Content-Type: application/json");
	$post = $app->request->post();
	if(empty($post)){
		$post = (array) json_decode($app->request()->getBody());
	}
	echo json_encode($colorDAO->insert($post), JSON_NUMERIC_CHECK);
	exit();
});

$app->delete('/colors/:id/?', authorize(), function() use ($colorDAO){
	header("Content-Type: application/json");
	echo json_encode($colorDAO->delete());
	exit();
});

$app->put('/colors/:id/?', authorize(), function() use ($app, $colorDAO){
	header("Content-Type: application/json");
	$post = $app->request->post();
	if(empty($post)){
		$post = (array) json_decode($app->request()->getBody());
	}
	echo json_encode($colorDAO->update($id, $post), JSON_NUMERIC_CHECK);
	exit();
});
