//Back-End//
var number = function(x) {
  for (var index = 1; index <= x; index += 1) {
    if (index % 15 === 0) {
         $(".pingpong").append("<li>" + "pingpong" + "</li>");
    } else if (index % 3 === 0) {
         $(".pingpong").append("<li>" + "ping" + "</li>");
    } else if (index % 5 === 0) {
         $(".pingpong").append("<li>" + "pong" + "</li>");
    } else {
         $(".pingpong").append("<li>" + index + "</li>");
    }
  }
};
//Front-End//
$(document).ready(function () {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var result = $("input#number").val();
    number(result);
    $("#output").show();
  });
});
