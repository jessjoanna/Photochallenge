<?php

$objectDAO = new ObjectDAO();

$app->get('/objects/?', authorize(), function() use ($objectDAO){
	header("Content-Type: application/json");
	echo json_encode($objectDAO->selectAll(), JSON_NUMERIC_CHECK);
	exit();
});

$app->get('/objects/:id/?', authorize(), function($id) use ($objectDAO){
	header("Content-Type: application/json");
	echo json_encode($objectDAO->selectById($id), JSON_NUMERIC_CHECK);
	exit();
});

$app->post('/objects/?', authorize(), function() use ($app, $objectDAO){
	header("Content-Type: application/json");
	$post = $app->request->post();
	if(empty($post)){
		$post = (array) json_decode($app->request()->getBody());
	}
	echo json_encode($objectDAO->insert($post), JSON_NUMERIC_CHECK);
	exit();
});

$app->delete('/objects/:id/?', authorize(), function() use ($objectDAO){
	header("Content-Type: application/json");
	echo json_encode($objectDAO->delete());
	exit();
});

$app->put('/objects/:id/?', authorize(), function() use ($app, $objectDAO){
	header("Content-Type: application/json");
	$post = $app->request->post();
	if(empty($post)){
		$post = (array) json_decode($app->request()->getBody());
	}
	echo json_encode($objectDAO->update($id, $post), JSON_NUMERIC_CHECK);
	exit();
});
