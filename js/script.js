$( document ).ready(function() {

    var max = prompt('Please Enter a number you would like to fizzbuzz to');
    //From 0 to 100, until i = 100
    for (var i = 1; i <= 100; i++) {

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


});
