
var milkshake = function(fruit1, fruit2, fruit3) {
var slice= fruit1.slice( 2 )+fruit2.slice(2)+fruit3.slice(2);
var fruitscombined = slice.join(" ");
slice.forEach(function(fruitscombined){

  alert("You had a" + fruitscombined + "milkshake");

});
};
$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var fruit1 = toUpperCase()($("input#fruit1").val());
    var fruit2 = toUpperCase()($("input#fruit2").val());
    var fruit3 = toUpperCase()($("input#fruit3").val());

  });
});
