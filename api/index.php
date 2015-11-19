<?php
session_start();
define("WWW_ROOT", dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'FotoDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'RatingDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'UserDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'GroupDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'ColorDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'ChallengeDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'ObjectDAO.php';

require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'Slim'. DIRECTORY_SEPARATOR .'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'fotos.php';
require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'rating.php';
require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'users.php';
require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'group.php';
require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'colors.php';
require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'challenges.php';
require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'objects.php';

function authorize() {
    return function () {
	    	$app = new \Slim\Slim();

        if(empty($_SESSION['user'])) {

            $app->halt(401, 'You shall not pass!');
        }
    };
}
$app->run();
