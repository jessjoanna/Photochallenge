<?php
require_once WWW_ROOT . 'php-image-resize' . DS . 'ImageResize.php';
require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'FotoDAO.php';

class FotosController extends Controller {

	private $fotoDAO;

	function __construct() {
		$this->fotoDAO = new FotoDAO();
	}

	public function index() {

	}

	public function addObject() {

		$errors = false;

		if(!empty($_FILES['imageInput']['name'])){

			$ext 	= pathinfo($_FILES["imageInput"]['name'], PATHINFO_EXTENSION);
			$name = pathinfo($_FILES["imageInput"]['name'], PATHINFO_FILENAME);


			if(!in_array( strtolower($ext), array('jpg', 'png', 'gif', 'bmp'))){
				// echo "Invalid file";

        header('HTTP/1.1 500 Internal Server');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Onjuist bestandsformaat', 'code' => 1)));

				die();
			}

				move_uploaded_file($_FILES["imageInput"]["tmp_name"], WWW_ROOT. DS . 'assets' . DS . 'storage' . DS . $_FILES["imageInput"]["name"]);


				$picture = new Eventviva\ImageResize(WWW_ROOT . 'assets' . DS . 'storage' . DS . $_FILES['imageInput']['name']);

				$picture->resize(200,200);
				$picture->save(WWW_ROOT . 'assets' . DS . 'storage' . DS . $name . '_th.' . $ext);

				$data = array(
					'fotoname' => $_FILES["imageInput"]['name'],
					'day' => $_POST['day'],
					'user_id' => $_SESSION['user']['id'],
					'group_id' => $_POST['group_id']
				);

				$addObject = $this->fotoDAO->insert($data);

				echo json_encode(array("filename"=>$_FILES["imageInput"]['name'], "id"=>$addObject['id']));

		}

		die();

	}

}
