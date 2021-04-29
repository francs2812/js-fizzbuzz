//numeri da 1 a 100
var number;
for(var i=0 ; i<100 ; i++){
    
    if([i] % 3) {
        if([i] % 5) {
        console.log("FizzBuzz", [i]);
        }else{
            console.log("Fizz", [i]);
        }
   
    }else if([i] % 5) {
        console.log("Buzz", [i]);

    } else {
        console.log([i]);
    }
}

