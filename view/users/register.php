<a class="logout" href="index.php?page=login">Login</a>

<section id="content" class="content form_container register">

		<header><h1>Register</h1></header>

		<form action="index.php?page=register" method="post" class="form-horizontal" enctype="multipart/form-data">

			<div class="register01">

				<label class="col-sm-2 control-label" for="registerUsername">Username:</label>

				<div class="form-group<?php if(!empty($errors['username'])) echo ' has-error'; ?>">

						<div class="col-sm-10">
								<input type="text" name="username" id="registerUsername" class="form-control" value="<?php if(!empty($_POST['username'])) echo $_POST['username'];?>" />
								<?php if(!empty($errors['username'])) echo '<span class="error-message">' . $errors['username'] . '</span>'; ?>
						</div>

				</div>

				<label class="col-sm-2 control-label" for="registerPassword">Password:</label>

				<div class="form-group<?php if(!empty($errors['password'])) echo ' has-error'; ?>">

						<div class="col-sm-10">
								<input type="password" name="password" id="registerPassword" class="form-control" />
								<?php if(!empty($errors['password'])) echo '<span class="error-message">' . $errors['password'] . '</span>'; ?>
						</div>

				</div>

			<a href="#" class="register1btn">Start intro</a>

			</div>

			<div class="register02 hidden">

				<section class="add">

					<div class="form-group<?php if(!empty($errors['picture'])) echo ' has-error'; ?>">

							<div class="col-sm-10" id="addpicturepicture">

									<input type="file" name="picture" id="addpicturepic" class="form-control" value="<?php if(!empty($_POST['picture'])) echo $_POST['picture'];?>" />
									<span class="error-message"<?php if(empty($errors['picture'])) echo 'style="display: none;"';?>><?php
									if(empty($errors['picture'])) echo 'Please select an picture';
									else echo $errors['picture'];
									?></span>

							</div>

					</div>

				</section>

				<ul class="nav_slide">

					<li><img src="./assets/images/nav_active.png"></li>
					<li><img src="./assets/images/nav_inactive.png"></li>
					<li><img src="./assets/images/nav_inactive.png"></li>

				</ul>

				<a href="#" class="register2btn">Volgende</a>

			</div>

			<div class="register03 hidden">

				<a href="#" class="register3btn">Volgende</a>


				<ul class="nav_slide">

					<li><img src="./assets/images/nav_inactive.png"></li>
					<li><img src="./assets/images/nav_active.png"></li>
					<li><img src="./assets/images/nav_inactive.png"></li>

				</ul>

			</div>

			<div class="register04 hidden">

        <div class="col-sm-offset-2 col-sm-10"><input id="registerbtn" type="submit" value="Submit" class="btn btn-default"></div>

				<ul class="nav_slide">

					<li><img src="./assets/images/nav_inactive.png"></li>
					<li><img src="./assets/images/nav_inactive.png"></li>
					<li><img src="./assets/images/nav_active.png"></li>

				</ul>

			</div>

			</div>

		</form>

</section>