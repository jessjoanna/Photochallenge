<section class="add">
	<header id="register-page">
		<h1>
			<span>Registreren</span>
		</h1>
	</header>

	<form action="index.php?page=register" method="post" enctype="multipart/form-data">
		<div class="register01">
			<span class="form_field">
				<div class="form_icon">
					<img src="assets/visual/icons/username.jpg" alt="username">
				</div>
				<input type="text" name="username" placeholder="gebruikersnaam">&nbsp;
				<?php if(!empty($errors['username'])) echo '<span class="error-message">' . $errors['username'] . '</span>'; ?>
			</span>
			<span class="form_field">
				<div class="form_icon">
					<img src="assets/visual/icons/password.jpg" alt="password">
				</div>
				<input type="password" name="password" placeholder="passwoord">&nbsp;
				<?php if(!empty($errors['password'])) echo '<span class="error-message">' . $errors['password'] . '</span>'; ?>
			</span>

			<button id="register" class="button register1btn" type="submit">registreer</button>

			<span>
				<a href="index.php?page=login"><button  id="to-login" class="button" type="button">aanmelden</button></a>
			</span>
		</div>

		<div class="register02 hidden">
			<header id="profile-photo-page">
				<h1>
					<span>Profielfoto kiezen</span>
				</h1>
			</header>

			<span id="profile-photo-holder">
				<?php
					if(!empty($_POST['picture'])) echo '<img src="'. $_POST['picture'].'" id="profile-photo-preview">'
				;?>

			</span>

			<label class="button input-button" id="load-picture-label">
				kies of maak een foto
				<input id="load-picture" name="picture" class="hidden" type="file" accept="image/*" value="<?php if(!empty($_POST['picture'])) echo $_POST['picture'];?>" />
				<span class="error-message"<?php if(empty($errors['picture'])) echo 'style="display: none;"';?>><?php
									if(empty($errors['picture'])) echo 'Please select an picture';
									else echo $errors['picture'];
									?></span>
			</label>

		<span>
			<!-- <button  id="to-login" class="button" type="button">volgende</button> -->
			<input type="submit" value="Volgende" class="button" id="to-login">
		</span>
		</div>
	</form>

</section>
