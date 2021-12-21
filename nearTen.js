function nearTen(num){
  let n = num;
  if(((n+1)%10 == 0) ||((n+2)%10 == 0) || ((n-1)%10 == 0) || ((n-2)%10 == 0) || (n%10 == 0))
  {
    return true;
  }
  else
  {
    return false;
  }
}