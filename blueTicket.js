function blueTicket(a, b, c){
  let sum1 = a+b;
  let sum2 = b+c;
  let sum3 = a+c;
  
  if((sum1==10) || (sum2==10) || (sum3==10))
  {
    return 10;
  }
  else if((sum1==(10+sum2)) || (sum1==(10+sum3)) )
  {
    return 5;
  }
  else
    return 0;
}