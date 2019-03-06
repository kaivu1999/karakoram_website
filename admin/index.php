<?php
session_start();
if ($_SERVER["REQUEST_METHOD"]=="POST" && !isset($_SESSION["access"])){
	if (isset($_POST["submit"])){
		consol.log(md5($_POST["user"]));
		if (md5($_POST["user"])== "21232f297a57a5a743894a0e4a801fc3"){ //admin
			if(md5($_POST["pass"])=="60374a9168ce57de62e4476dabe4cc53"){ //kara1965
				$_SESSION["access"] = "Allow";
				/*$response = "<script>alert('Success')</script>";*/
			}
			else
				$response = "<script>alert('Invalid Password')</script>";
		}
		else{
			$response = "<script>alert('Invalid Username')</script>";
		}
		
	}
}

if (isset($_SESSION["access"])){
	if ($_SERVER["REQUEST_METHOD"]=="POST"){
		if (isset($_POST["logout"])){
			session_destroy();
			header("Location: ".$_SERVER['REQUEST_URI']);
			$response = "<script>alert('close the browser')</script>";
		}
	}
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link href="https://getbootstrap.com/docs/4.1/examples/sticky-footer/sticky-footer.css" rel="stylesheet">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	

	<title>Kara Admin</title>
</head>
<body>
	<!-- Navbar -->
    <nav class="navbar sticky-top navbar-expand-sm navbar-light" style="background-image: linear-gradient(141deg, #2cb5e8 0%, #1fc8db 51%, #9fb8ad 75%); ">
      <a class="navbar-brand" href="#">
        Karakoram
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item">
            <a class="nav-link" href="#about">About Kara</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#work">Our Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#secy">Secys</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#alumni">Alumni</a>
          </li> -->

        </ul>
        <?php
        if (isset($_SESSION["access"])) {
        	if (isset($response))
        		echo $response;
        	?>
        	<div class="ml-3">
				<form method="POST" action="" class="text-right">
					<button type="submit" name="logout" value="Logout" class="btn btn-primary">Logout</button>
				</form>
			</div>
	        <?php
	    }
        ?>
        
        
      </div>
    </nav>

	<?php
	if (isset($_SESSION["access"])){
		if (isset($response))
			echo $response ;
		?>
		<br>
		<div class="container">
			<hr>
			<div class="media">
				
				<div class="media-body">
					<h4 class="mt-0 mb-1">Welcome Admin</h4>
				</div>
					
				<!-- <div class="ml-3">
					<form method="POST" action="" class="text-right">
						<button type="submit" name="logout" value="Logout" class="btn btn-primary">Logout</button>
					</form>
				</div> -->	
				<br>
			</div>
			<hr>
			<div class="h5">
				Link for Updating Hostel Mess Menu
			</div>
			<div class="h6">
				<a href="https://docs.google.com/spreadsheets/d/1w2c39MHBlt_4jkPfSprAsQp57jtShcZXwq8uYTqM8uA/edit?usp=sharing" target="_blank">https://docs.google.com/spreadsheets/d/1w2c39MHBlt_4jkPfSprAsQp57jtShcZXwq8uYTqM8uA/edit?usp=sharing</a>
				
			<!-- Refresh Button -->
			</div>
			<form action="script.php">
    			<input type="submit" value="Update Mess Menu">
			</form>


			<div class="embed-responsive embed-responsive-16by9">
			  <iframe class="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/1w2c39MHBlt_4jkPfSprAsQp57jtShcZXwq8uYTqM8uA/edit?usp=sharing" allowfullscreen></iframe>
			</div>
		</div>

		<?php
	}
	else{
		echo $response ;
		?>

		<div class="container">
			<br><hr><h4>Login</h4><hr><br>
			<form method="POST" action="">
				<div class="form-group">
					<label for="exampleInput1">Username</label>
					<input type="text" name="user" class="form-control" id="exampleInput1" aria-describedby="emailHelp" placeholder="Enter Username">		
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" name="pass" class="form-control" id="exampleInputPassword1" placeholder="Password">
				</div>
				<button type="submit" name="submit" value="Login" class="btn btn-primary">Submit</button>
			</form>
		</div>
		<br>
		<?php
	}
	?>

	<div class="container">
	</div>
	<br>
	<br>
	<br>
	<footer class="footer">
		<div class="container">
			<span class="align-content-center">&copy; Paritosh Raj</span>
		</div>
	</footer>
</body>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</html>