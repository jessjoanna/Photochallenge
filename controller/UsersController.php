<?php
require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'GroupDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'UserDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'FotoDAO.php';

require_once WWW_ROOT . 'phpass' . DS . 'Phpass.php';
require_once WWW_ROOT . 'php-image-resize' . DS . 'ImageResize.php';

class UsersController extends Controller {

	private $userDAO;
	private $groupDAO;
	private $imageDAO;

	function __construct() {
		$this->groupDAO = new GroupDAO();
		$this->userDAO = new UserDAO();
		$this->imageDAO = new FotoDAO();
	}

	public function index() {
		$this->set('users', $this->userDAO->selectAllWithImageCount());
	}

	public function view() {
		$this->set('user', $this->userDAO->selectById($_GET['id']));
		$this->set('images', $this->imageDAO->selectAllByUserId($_GET['id']));
	}

	public function replay(){

		$group_id = $this->getNewGroupId();

		$data = array(
			'user_id' => $_SESSION['user']['id'],
			'group_id' => $group_id,
			'day' => 0,
			'start_date' => date("Y-m-d")
		);

		$insertedgroup = $this->groupDAO->insert($data);
		if(!empty($insertedgroup)) {
			$_SESSION['info'] = 'Registratie Succesvol!';
			$this->redirect('backbone.html');
		}
	}

	public function register() {
		if(!empty($_POST)) {
			$this->_handleRegister();
			var_dump($_POST);
		}
	}
	public function login(){
		if(!empty($_POST)) {
			$this->_handleLogin();
		}
	}
	public function logout(){
		unset($_SESSION['user']);
		$this->redirect('index.php');
	}
	private function _handleRegister() {

		$errors = array();

		/* image validation */
		if(empty($_FILES["picture"]['name'])){
			$errors["picture"] = "Geen file geselecteerd";
		}

		if(empty($errors)){
			if(!empty($_FILES["picture"]['errors'])){
				$errors["picture"] = "Er is iets fout gegaan";
			}
		}

		if(empty($errors)){
			$size = getimagesize($_FILES["picture"]['tmp_name']);
			if(empty($size)){
				$errors["picture"] = "Uploadbestand is geen afbeelding";
			}
		}

		/* form validation */
		if(empty($_POST['username'])) {
			$errors['username'] = 'Vul een username adres in ';
		} else {
			$existing = $this->userDAO->selectByUsername($_POST['username']);
			if(!empty($existing)) {
				$errors['username'] = 'Username is al in gebruik';
			}
		}

		if(empty($_POST['password'])) {
			$errors['password'] = 'Vul een wachtwoord in';
		}

		if(empty($errors)) {
			$this->_handleImageUpload($_FILES);

			/* add user to database */
			$hasher = new \Phpass\Hash;
			$inserteduser = $this->userDAO->insert(array(
				'username' => $_POST['username'],
				'picture' => $_FILES['picture']['name'],
				'password' => $hasher->hashPassword($_POST['password']),
				'role' => 1
			));

			/* add user to group */
			if(!empty($inserteduser)) {

				$group_id = $this->getNewGroupId();

				$data = array(
					'user_id' => $inserteduser['id'],
					'group_id' => $group_id,
					'day' => 0,
					'start_date' => date("Y-m-d")
				);

				if(is_null($data['group_id'])){
					$data['group_id'] = 1;
				}

				$insertedgroup = $this->groupDAO->insert($data);
			}

			if(!empty($insertedgroup)) {
				$_SESSION['info'] = 'Registratie Succesvol!';
				$_SESSION['user'] = $inserteduser;
				$this->redirect('index.php');
			}
		}
		$_SESSION['error'] = 'Registratie mislukt.';
		$this->set('errors', $errors);
	}

	public function getNewGroupId(){

		$membersInGroup = $this->groupDAO->countMembersInGroup();

		if($membersInGroup['members'] >= 3 ){
			return $membersInGroup['id']+1;
		}else{
			return $membersInGroup['id'];
		}
	}

	public function _handleImageUpload($image){
			/* Process image */
			move_uploaded_file($image["picture"]["tmp_name"], WWW_ROOT. DS . 'assets' . DS . 'storage' . DS . $image["picture"]["name"]);
			$fileData = array();
			$fileData['extension'] 	= pathinfo($image["picture"]['name'], PATHINFO_EXTENSION);
			$fileData['name'] 		= pathinfo($image["picture"]['name'], PATHINFO_FILENAME);
			$dotPos = strrpos($image['picture']['name'], '.');
			$name 	= substr($image['picture']['name'], 0, $dotPos);
			$ext 	= substr($image['picture']['name'], $dotPos + 1);
			$picture = new Eventviva\ImageResize(WWW_ROOT . 'assets' . DS . 'storage' . DS . $image['picture']['name']);
			$picture->resize(400,400);
			$picture->save(WWW_ROOT . 'assets' . DS . 'storage' . DS . $name .".". $ext);
			$picture->resize(100,100);
			$picture->save(WWW_ROOT . 'assets' . DS . 'storage' . DS . $name . '_th.' . $ext);
	}
	private function _handleLogin() {
		$errors = array();
		if(empty($_POST['username'])) {
			$errors['username'] = 'Please enter your username';
		}
		if(empty($_POST['password'])) {
			$errors['password'] = 'Please enter your password';
		}
		if(empty($errors)) {
			$existing = $this->userDAO->selectByUsername($_POST['username']);
			if(!empty($existing)) {
				$hasher = new \Phpass\Hash;
				if ($hasher->checkPassword($_POST['password'], $existing['password'])) {
					$_SESSION['user'] = $existing;
					$this->redirect('backbone.html');
				} else {
					$_SESSION['error'] = 'Unknown username / password';
				}
			} else {
				$_SESSION['error'] = 'Unknown username / password';
			}
		} else {
			$_SESSION['error'] = 'Unknown username / password';
		}
		$this->set('errors', $errors);
	}
}
