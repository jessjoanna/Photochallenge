<section class="login">
	<header>
		<h1><span>Login</span></h1>
		<a href="index.php?page=register">Register</a>
		<!-- <img class="titel" src="./assets/images/Karaoke.png" height="241" width="640" alt="Karaoke"> -->
	</header>
	<article>
		<header>
			<h1><span>User credentials</span></h1>
		</header>
			<form action="index.php?page=login" method="post">
				<div class="form-group<?php if(!empty($errors['username'])) echo ' has-error'; ?>">
					<!-- <label class="col-sm-2 control-label" for="username">Email:</label> -->
					<div class="col-sm-10">
						<input type="text" name="username" placeholder="Username"  id="username" data-required=true class="form-control" value="<?php if(!empty($_POST['username']))
						echo $_POST['username'];?>" />
						<span class="error-message"> <?php if(!empty($errors['username'])) echo $errors['username']; ?></span>
					</div>
				</div>
				<div class="form-group<?php if(!empty($errors['password'])) echo ' has-error'; ?>">
					<!-- <label class="col-sm-2 control-label" for="password">Password:</label> -->
					<div class="col-sm-10">
						<input type="password" placeholder="Password" name="password" id="password" data-required=true class="form-control" value="<?php if(!empty($_POST['password']))
						echo $_POST['password'];?>" />
						<span class="error-message"> <?php if(!empty($errors['password'])) echo $errors['password']; ?></span>
					</div>
				</div>
				<input type="submit" value="Login">
			</form>
	</article>
</section>

