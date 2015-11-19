<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class ChallengeDAO extends DAO {

	public function selectAll(){
		$sql = "SELECT * FROM `p_challenges`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id) {
		$sql = "SELECT * FROM `p_challenges` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function insert($data){
		$errors = $this->getValidationErrors($data);
		if(empty($errors)){
			$sql = "INSERT INTO `p_challenges`(`group_id`, `color_id`, `object_id`, `day`) VALUES (:group_id, :color_id, :object_id, :day)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':group_id', $data['group_id']);
			$stmt->bindValue(':color_id', $data['color_id']);
			$stmt->bindValue(':object_id', $data['object_id']);
			$stmt->bindValue(':day', $data['day']);
			if($stmt->execute()){
				$inserted = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}

		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();

			if(empty($data['username'])) {
				$errors['username'] = "please enter your username";
			}

		return $errors;
	}


}
