<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="css/screen.min.css">

	<title>PhotoChallenge</title>
</head>

<body>

		<div class="container" id="container" class="main-centered">
		    <?php if(!empty($_SESSION['info'])): ?><div class="info box"><?php echo $_SESSION['info'];?></div><?php endif; ?>
		    <?php if(!empty($_SESSION['error'])): ?><div class="error box"><?php echo $_SESSION['error'];?></div><?php endif; ?>

		    <?php echo $content; ?>

		</div>

    </body>
    <script src="js/script.js"></script>


</html>
