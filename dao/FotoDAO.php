<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class FotoDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `p_fotos`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id) {
		$sql = "SELECT * FROM `p_fotos` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectAllById($id) {
		$sql = "SELECT * FROM `p_fotos` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}


	public function selectAllByGroupId($id) {
		$sql = "SELECT * FROM `p_fotos` WHERE `group_id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}


	public function deleteImage($id){
	    $sql = "DELETE FROM `p_fotos`
	    		WHERE `id` = :id";
	    $stmt = $this->pdo->prepare($sql);
	    $stmt->bindValue(":id",$id);
	    if($stmt->execute()){
	        return true;
	    }
	    return false;
	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `p_fotos` (`fotoname`, `day`, `user_id`, `group_id`) VALUES (:fotoname, :day, :user_id, :group_id)";
	        $stmt = $this->pdo->prepare($sql);
	        $stmt->bindValue(':fotoname', $data['fotoname']);
	        $stmt->bindValue(':day', $data['day']);
	        $stmt->bindValue(':user_id', $data['user_id']);
	        $stmt->bindValue(':group_id', $data['group_id']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(empty($data['fotoname'])) {
			$errors['fotoname'] = "please enter the fotoname";
		}
	    if(empty($data['day'])) {
	        $errors['day'] = 'please enter the day';
	    }
	    if(empty($data['user_id'])) {
	        $errors['user_id'] = 'please enter the user_id';
	    }
	    if(empty($data['user_id'])) {
	        $errors['user_id'] = 'please enter the group_id';
	    }
		return $errors;
	}

}
