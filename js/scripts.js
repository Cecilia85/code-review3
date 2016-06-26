
function milkshake(fruits) {
  var fruitSliced = fruits[0].slice(2) + fruits[1].slice(2) + fruits[2].slice(2);
  return("You had a "+ fruitSliced+" milkshake!");
};

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var fruits = [];
    fruits.push(($("input#fruit1").val()).toUpperCase());
    fruits.push(($("input#fruit2").val()).toUpperCase());
    fruits.push(($("input#fruit3").val()).toUpperCase());
    var result = milkshake(fruits);
    alert(result);
  });
});
