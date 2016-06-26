
var fruits= function(fruit1,fruit2,fruit3){
var fruitSliced=fruit1.slice(2)+fruit2.slice(2)+fruit3.slice(2);
var milkshake= fruitSliced.map(function(fruitsCombined){
  alert ("You had a "+ fruitsCombined.join('')+"milkshake!");
});

};

$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var fruit1 = ($("input#fruit1").val()).toUpperCase();
    var fruit2 = ($("input#fruit2").val()).toUpperCase();
    var fruit3 = ($("input#fruit3").val()).toUpperCase();
  });



});
