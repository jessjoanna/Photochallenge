<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class UserDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `p_users`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id) {
		$sql = "SELECT * FROM `p_users` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectByUsername($name) {
		$sql = "SELECT * FROM `p_users` WHERE `username` = :name";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':name', $name);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectByUserId($id) {
		$sql = "SELECT * FROM `p_users` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectAllById($id) {
		$sql = "SELECT * FROM `p_users` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function deleteUser($id){
	    $sql = "DELETE FROM `p_users`
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
			$sql = "INSERT INTO `p_users` (`username`, `picture`, `password`, `role`) VALUES (:username, :picture, :password, :role)";
	        $stmt = $this->pdo->prepare($sql);
	        $stmt->bindValue(':username', $data['username']);
	        $stmt->bindValue(':picture', $data['picture']);
	        $stmt->bindValue(':password', $data['password']);
	        $stmt->bindValue(':role', $data['role']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
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
	    if(empty($data['picture'])) {
	        $errors['picture'] = 'please enter the picture';
	    }
	    if(empty($data['password'])) {
	        $errors['password'] = 'please enter the password';
	    }
	    if(empty($data['role'])) {
	        $errors['role'] = 'please enter the role';
	    }
		return $errors;
	}

}
