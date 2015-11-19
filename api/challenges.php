<?php

$challengeDAO = new ChallengeDAO();

$app->get('/challenges/?', authorize(), function() use ($challengeDAO){
	header("Content-Type: application/json");
	echo json_encode($challengeDAO->selectAll(), JSON_NUMERIC_CHECK);
	exit();
});

$app->get('/challenges/:id/?', authorize(), function($id) use ($challengeDAO){
	header("Content-Type: application/json");
	echo json_encode($challengeDAO->selectById($id), JSON_NUMERIC_CHECK);
	exit();
});

$app->post('/challenges/?', authorize(), function() use ($app, $challengeDAO){
	header("Content-Type: application/json");
	$post = $app->request->post();
	if(empty($post)){
		$post = (array) json_decode($app->request()->getBody());
	}
	echo json_encode($challengeDAO->insert($post), JSON_NUMERIC_CHECK);
	exit();
});

$app->delete('/challenges/:id/?', authorize(), function() use ($challengeDAO){
	header("Content-Type: application/json");
	echo json_encode($challengeDAO->delete());
	exit();
});

$app->put('/challenges/:id/?', authorize(), function() use ($app, $challengeDAO){
	header("Content-Type: application/json");
	$post = $app->request->post();
	if(empty($post)){
		$post = (array) json_decode($app->request()->getBody());
	}
	echo json_encode($challengeDAO->update($id, $post), JSON_NUMERIC_CHECK);
	exit();
});
