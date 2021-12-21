function fizzString2(n){
  let div3 = 'Fizz!';
  let div5 = 'Buzz!';
  let div35 = 'FizzBuzz!';
  let str = '!';
  
  if((n%3==0) && (n%5==0))
  {
    return div35;
  }
  else if((n%3==0))
  {
    return div3;
  }
  else if((n%5==0))
  {
    return div5;
  }
  else
  {
    return n+str;
  }
}