
var fruits= function(fruit1,fruit2,fruit3){
var fruitSliced=fruit1.slice(2)+fruit2.slice(2)+fruit3.slice(2);
var fruitsCombined= fruitSliced.map(function(milkshake){
  alert ("You had a "+ milkshake.join(''))+"milkshake!";
});

};


$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var fruit1 = toUpperCase()($("input#fruit1").val());
    var fruit2 = toUpperCase()($("input#fruit1").val());
    var fruit3 = toUpperCase()($("input#fruit1").val());
    var fruits= milkshake(fruit1,fruit2,fruit3);
    // $("#output").text(fruits);

  });
});
