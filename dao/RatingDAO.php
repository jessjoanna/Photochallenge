<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class RatingDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `p_rating`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id) {
		$sql = "SELECT * FROM `p_rating` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectAllById($id) {
		$sql = "SELECT * FROM `p_rating` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectAllByGroupId($id) {
		$sql = "SELECT * FROM `p_rating` WHERE `group_id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectAllByUserId($id) {
		$sql = "SELECT * FROM `p_rating` WHERE `user_id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}


	public function deleteRating($id){
	    $sql = "DELETE FROM `p_rating`
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
			$sql = "INSERT INTO `p_rating` (`user_id`, `rating_foto_id`, `rating`, `rated_user_id`, `group_id`)
			VALUES (:user_id, :rating_foto_id, :rating, :rated_user_id, :group_id)";
	        $stmt = $this->pdo->prepare($sql);
	        $stmt->bindValue(':user_id', $data['user_id']);
	        $stmt->bindValue(':rating_foto_id', $data['rating_item_id']);
	        $stmt->bindValue(':rating', $data['rating']);
	        $stmt->bindValue(':rated_user_id', $data['rated_user_id']);
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
		if(empty($data['user_id'])) {
			$errors['user_id'] = "please enter the user_id";
		}
	    if(empty($data['rating_foto_id'])) {
	        $errors['rating_foto_id'] = 'please enter the rating_foto_id';
	    }
	    if(empty($data['rating'])) {
	        $errors['rating'] = 'please enter the rating';
	    }
	    if(empty($data['rated_user_id'])) {
	        $errors['rated_user_id'] = 'please enter the rated_user_id';
	    }
		return $errors;
	}

}
