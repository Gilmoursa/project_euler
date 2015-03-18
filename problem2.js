//problem 2
var fib = [1,1,2];
var sum = 0;
while(fib[2]<=4000000){
  if(fib[2] % === 0){
    sum += fib[2];
  };
fib[2]=fib[0]+fib[1];
fib[0]=fib[1];
fib[1]=fib[2];
}
console.log(sum);