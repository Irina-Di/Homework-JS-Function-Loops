

 function areaRectangle(a, b) {
   let S = a * b;
   return S;
}
console.log(areaRectangle(2, 5));

  

function circumFerence(arg1) {
   let p = 3.14;
   let resultF = arg1 * p
   return resultF;
}
console.log(circumFerence(6));


function cylinderVolume(arg1H, arg2D) {
   let p = 3.14;
   let arg3R = arg2D / 2;
   let resultC = (p * (arg3R ** 2) * arg1H) 
   return resultC;
}
console.log(cylinderVolume(2, 4));



function calcDevorse(num1, num2) { 
for (let i=num1; i<=num2; i++){
   if (i % 5 === 0) {console.log (i)}
}}
console.log(calcDevorse(2, 55));




for (let i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log ("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log('You just lost');
}