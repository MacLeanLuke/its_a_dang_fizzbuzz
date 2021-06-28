for(var i = 1; i <= 100; i++){
    var fizzbuzz = i;

    if (i%3==0 && i%5==0) {
        fizzbuzz="FizzBuzz";
    } else if (i%5==0) {
        fizzbuzz="Buzz";
    } else if (i%3==0) {
        fizzbuzz="Fizz";
    } 
    console.log(fizzbuzz);
}
