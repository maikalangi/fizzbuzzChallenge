// =====================FIZZBUZZ CHALLENGE=========================
// Write a program that prints the numbers from 1 to 100.
// For numbers divisible by 3, print "Fizz"
// For numbers divisible by 5, print "Buzz"
// For numbers divisible by both 3 && 5, print "FizzBuzz"

let x=1;
const fizzBuzz=(num)=>{
  for (let i=num;i<=100;i++){
    if (i%3==0 && i%5==0){
      console.log('FizzBuzz')
    }else if(i%3==0){
      console.log('Fizz')
    }else if(i%5==0){
      console.log('Buzz')
    }
    else{
      console.log(i)
    }
  }
};
fizzBuzz(x);
  
  // ==========================================================================
  // ==========================BONUS CHALLENGE=================================
  
  // Too easy? here's an additional challenge, create a function that returns the average of the numbers in an array.
  
  // No hints necessary, you got this :)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const average=(num)=>{
    let j=0;
    for (let i=0;i<num.length;i++){
      j += num[i];
    }
    console.log(j/num.length)
  };
  average(arr);