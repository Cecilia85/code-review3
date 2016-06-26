//
// var fruits= function(fruit1,fruit2,fruit3){
// var fruitSliced=fruit1.slice(2)+fruit2.slice(2)+fruit3.slice(2);
// var milkshake= fruitSliced.map(function(fruitsCombined){
//   return "You had a "+ fruitsCombined.join('')+"milkshake!";
// });
//
// };
var milkshake = function(fruits) {
var fruits=[];
var fruitSliced=fruits[0].slice(2)+fruits[1].slice(2)+fruits[2].slice(2);
  return("You had a "+ fruitSliced+" milkshake!");

};


$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var fruit1 = ($("input#fruit1").val()).toUpperCase();
    var fruit2 = ($("input#fruit2").val()).toUpperCase();
    var fruit3 = ($("input#fruit3").val()).toUpperCase();
    var result = milkshake(fruits);
    // $("#output").text(result);
    alert(result);

  });



});
