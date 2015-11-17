<?php
session_start();
define('DS', DIRECTORY_SEPARATOR);
define('WWW_ROOT', __DIR__ . DS);

$routes = array(

	'register' => array(
		'controller' => 'Users',
		'action' => 'register'
	),
	'login' => array(
		'controller' => 'Users',
		'action' => 'login'
	),
	'cms' => array(
		'controller' => 'CMS',
		'action' => 'cms'
	),
	'logout' => array(
		'controller' => 'Users',
		'action' => 'logout'
	),
    'add_object' => array(
  	'controller' => 'Fotos',
  	'action' => 'addObject'
	),
    'replay' => array(
  	'controller' => 'Users',
  	'action' => 'replay'
	)
);


if(empty($_GET['page'])) {
	$_GET['page'] = 'login';
}

$route 			= $routes[$_GET['page']];
$controllerName = $route['controller'] . 'Controller';

require_once WWW_ROOT . 'controller' . DS . $controllerName . ".php";

$controllerObj = new $controllerName();
$controllerObj->route = $route;
$controllerObj->filter();
$controllerObj->render();
