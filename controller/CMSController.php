<?php
require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'GroupDAO.php';

class CMSController extends Controller {

	private $groupDAO;

	function __construct() {
		$this->groupDAO = new GroupDAO();
	}

	public function cms() {

		$this->set('groups', $this->groupDAO->selectAllDistinctGroups());

		if(!empty($_POST)){
			$data = [
				"group_id" => $_POST['groups'],
				"day" => $_POST['days']
			];

			$update = $this->groupDAO->updateGroup($data);

		}
	}

}
