$( document ).ready(function() {


    function fizzbuzzer (maximumNum) {
    //From 0 to 100, until i = 100
    for (var i = 1; i <= maximumNum; i++) {

     //If if the variable 'i' is divisible by both 3 and 5, print fizzbuzz
      if (i%3 === 0  && i%5 === 0) {
        $('.list').append('<li>'+ 'fizzbuzz' + '</li>');
      }

      //If the variable 'i' is divisible by 3, print fizz
      else if (i%3 === 0) {
        $('.list').append('<li>'+ 'fizz' + '</li>');
      }

      //If the variable 'i' is divisible by 3, print buzz
      else if (i%5 === 0) {
        $('.list').append('<li>'+ 'buzz' + '</li>');
      }

      //If the variable 'i' is not divisible by 3 or 5, print just the number.
      else {
        $('.list').append('<li>'+ i + '</li>');
      }
    }

  }

    //Prompts the user for a number
    var max = prompt('Please enter a number you would like to fizzbuzz to');

    //Turns the user's number into an INT
    var maxINT = parseInt(max, 10);

    fizzbuzzer(maxINT);



});
