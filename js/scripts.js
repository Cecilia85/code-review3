// Business logic or Back end//

var numerology= function(x) {


        if(x[0]+x[1]+x[2]+x[3]+x[4]+x[5]+x[6]+x[7] <= 30){
        return("Your number is less than 30.Youre a happy person, you like to share and hang out with friends");
      } else if(x[0]+x[1]+x[2]+x[3]+x[4]+x[5]+x[6]+x[7] > 30 && x[0]+x[1]+x[2]+x[3]+x[4]+x[5]+x[6]+x[7] <=60 );{
        return("Your number is between 30 and 60.Youre a sweet person, you always put others needs before yours");
      } else if(x[0]+x[1]+x[2]+x[3]+x[4]+x[5]+x[6]+x[7] > 60 && x[0]+x[1]+x[2]+x[3]+x[4]+x[5]+x[6]+x[7]  <= 100 );{
        return("your number is between 60 and 100.You like to get into trouble");
      } else {
        return("Enter a date");
      }

    };

//Front-end logic//
    $(function() {
      $("form#blanks").submit(function(event) {
        event.preventDefault();
        var date = ($("input#date").val());
        var result =numerology(date);
        // $("#output").text(return);
      });
    });
