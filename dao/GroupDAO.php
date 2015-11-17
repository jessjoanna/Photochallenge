<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class GroupDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `p_groups`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id) {
		$sql = "SELECT * FROM `p_groups` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function countMembersInGroup() {
		$sql = "SELECT COUNT(group_id) AS members, MAX(group_id) AS id FROM `p_groups`
		WHERE group_id IN (SELECT MAX(group_id) FROM `p_groups` )";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectByUserId($id) {
		$sql = "SELECT * FROM `p_groups` WHERE `user_id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectAllByGroupId($id) {
		$sql = "SELECT * FROM `p_groups` WHERE `group_id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectAllDistinctGroups() {
		$sql = "SELECT * FROM `p_groups` GROUP BY group_id
		ORDER BY id DESC";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	// public function selectGroupMembersByUserId($id) {
	// 	$sql = "SELECT g.*, u.*, gn.name AS genre FROM p_groups as g
	// 	JOIN p_users AS u on u.id = g.user_id
	// 	JOIN p_genre AS gn ON gn.id = u.genre_id
	// 	WHERE group_id IN (SELECT MAX(group_id) FROM `p_groups` WHERE user_id = :id)";
	// 	$stmt = $this->pdo->prepare($sql);
	// 	$stmt->bindValue(':id', $id);
	// 	$stmt->execute();
	// 	return $stmt->fetchAll(PDO::FETCH_ASSOC);
	// }

	public function deleteGroup($id){
	    $sql = "DELETE FROM `p_groups`
	    		WHERE `id` = :id";
	    $stmt = $this->pdo->prepare($sql);
	    $stmt->bindValue(":id",$id);
	    if($stmt->execute()){
	        return true;
	    }
	    return false;
	}

	public function updateGroup($data){
	    $sql = "UPDATE `p_groups` SET day = :day WHERE group_id = :id";
	    $stmt = $this->pdo->prepare($sql);
	    $stmt->bindValue(":id",$data['group_id']);
	    $stmt->bindValue(":day",$data['day']);
	    if($stmt->execute()){
	        return true;
	    }
	    return false;
	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `p_groups` (`user_id`, `group_id`, `day`, `start_date`) VALUES (:user_id, :group_id, :day, :start_date)";
	        $stmt = $this->pdo->prepare($sql);
	        $stmt->bindValue(':user_id', $data['user_id']);
	        $stmt->bindValue(':group_id', $data['group_id']);
	        $stmt->bindValue(':day', $data['day']);
	        $stmt->bindValue(':start_date', $data['start_date']);
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
	    if(empty($data['group_id'])) {
	        $errors['group_id'] = 'please enter the group_id';
	    }
	    if(!isset($data['day'])) {
	        $errors['day'] = 'please enter the day';
	    }
	    if(empty($data['start_date'])) {
	        $errors['start_date'] = 'please enter the start_date';
	    }
		return $errors;
	}

}
