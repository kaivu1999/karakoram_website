var date = new Date();
var day_index = date.getDay();
var currentDayPos = day_index;
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      
      // Store hash
      var hash = this.hash;
      
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    $.ajax({
      url: "mess.tsv",
      dataType: "text",
      success: function (data) {
        var employee_data = data.split(/\r?\n|\r/);
        var row_index=currentDayPos;
        var cell_data = employee_data[row_index+1].split("\t");
        var head_data = employee_data[0].split("\t");
        var table_data = '<div class="h4">';
        table_data += cell_data[0] + "</div><br>";
        table_data += '<div class="row">';
        table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[1] + '</h5><p class="card-text">' + cell_data[1] + '</p></div></div></div>';
        table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[2] + '</h5><p class="card-text">' + cell_data[2] + '</p></div></div></div>';
        table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[3] + '</h5><p class="card-text">' + cell_data[3] + '</p></div></div></div>';
        table_data += '</div>';
        $('#employee_table').html(table_data);
      }
    });
});


// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         currentDayPos+=1;
//         if ((day_index+currentDayPos)>6) {
//           currentDayPos-=7;
//         }
//         var day_index_temp = day_index + currentDayPos;
//         var row_index = day_index_temp + 1;
//         $.ajax({
//           url: "mess.tsv",
//           dataType: "text",
//           success: function (data) {
//             var employee_data = data.split(/\r?\n|\r/);
//             var cell_data = employee_data[row_index + 1].split("\t");
//             var head_data = employee_data[0].split("\t");
//             var table_data = '<div class="h4">';
//             table_data += cell_data[0] + "</div><br>";
//             table_data += '<div class="row">';
//             table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[1] + '</h5><p class="card-text">' + cell_data[1] + '</p></div></div></div>';
//             table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[2] + '</h5><p class="card-text">' + cell_data[2] + '</p></div></div></div>';
//             table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[3] + '</h5><p class="card-text">' + cell_data[3] + '</p></div></div></div>';
//             table_data += '</div>';
//             $('#employee_table').html(table_data);
//           }
//         });
//       }
//       xhttp.open("GET", "ajax_info.txt", true);
//       xhttp.send();
//   };
// }

function loadDoc(sign) {
  $.ajax({
    url: "mess.tsv",
    dataType: "text",
    success: function (data) {
      var employee_data = data.split(/\r?\n|\r/);
      currentDayPos += sign; // sign is 1 or -1
      if ((currentDayPos)>6) {
        currentDayPos-=7;
      }
      else if (currentDayPos<0) {
        currentDayPos+=7;
      }
      var row_index_new = currentDayPos;
      var cell_data = employee_data[row_index_new + 1].split("\t");
      var head_data = employee_data[0].split("\t");
      var table_data = '<div class="h4">';
      table_data += cell_data[0] + "</div><br>";
      table_data += '<div class="row">';
      table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[1] + '</h5><p class="card-text">' + cell_data[1] + '</p></div></div></div>';
      table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[2] + '</h5><p class="card-text">' + cell_data[2] + '</p></div></div></div>';
      table_data += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">' + head_data[3] + '</h5><p class="card-text">' + cell_data[3] + '</p></div></div></div>';
      table_data += '</div>';
      $('#employee_table').html(table_data);
    }
  });
};