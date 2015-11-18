<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class GroupDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `p_groups`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectAllWithUsers(){
		$sql = "SELECT * FROM `p_groups` INNER JOIN `p_users` ON p_users.group_id = p_groups.id";
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

	public function selectByGroupName($groupname) {
		$sql = "SELECT * FROM `p_groups` WHERE `groupname` = :groupname";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':groupname', $groupname);
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

	// public function selectAllByGroupId($id) {
	// 	$sql = "SELECT * FROM `p_groups`
	// 	INNER JOIN `p_users` ON p_users.id = p_groups.user_id WHERE `group_id` = :id";
	// 	$stmt = $this->pdo->prepare($sql);
	// 	$stmt->bindValue(':id', $id);
	// 	$stmt->execute();
	// 	return $stmt->fetchAll(PDO::FETCH_ASSOC);
	// }

	public function selectAllDistinctGroups() {
		$sql = "SELECT * FROM `p_groups` GROUP BY group_id
		ORDER BY id DESC";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	// public function selectGroupMembersByUserId($id){
 // 		$sql = "SELECT * FROM  `p_groups` INNER JOIN  `p_users` ON p_users.id = p_groups.user_id WHERE `group_id` = :id";
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
			$sql = "INSERT INTO `p_groups` (`day`, `start_date`, `groupname`) VALUES (:day, :start_date, :groupname)";
	        $stmt = $this->pdo->prepare($sql);
	        $stmt->bindValue(':day', $data['day']);
	        $stmt->bindValue(':start_date', $data['start_date']);
	        $stmt->bindValue(':groupname', $data['groupname']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
	    if(!isset($data['day'])) {
	        $errors['day'] = 'please enter the day';
	    }
	    if(empty($data['start_date'])) {
	        $errors['start_date'] = 'please enter the start_date';
	    }
	    if(empty($data['groupname'])) {
	        $errors['groupname'] = 'please enter the groupname';
	    }

		return $errors;
	}

}
