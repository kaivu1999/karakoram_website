<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link href="https://getbootstrap.com/docs/4.1/examples/sticky-footer/sticky-footer.css" rel="stylesheet">

    <title>Karakoram Hostel IIT Delhi</title>
  </head>
  <body>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <!-- Static files -->
    <script src="./mess.js"></script>
    <link rel="stylesheet" href="index.css">


<?php include '../templates/header.php';?>
   

    
    <div class="container" id="mess">
      <br>
      <br>
      <p class="h2">
        Today's Mess Menu
      </p>
<!-- Place this tag where you want the Awesome Table Widget to render -->
         <button type="button" class="btn btn-info btn-block" onclick="loadDoc(1)">Next Day</button>
      <div id = "mess_data">
        <br>
        <div class = "container-fluid" id="employee_table">
        </div>
        <br>
         <button type="button" class="btn btn-info btn-block" onclick="loadDoc(-1)">Previous Day</button>
    </div>
    </div>
<br>
<br>
<?php include '../templates/footer.php';?>

  </body>
</html>