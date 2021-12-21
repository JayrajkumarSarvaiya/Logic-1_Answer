function specialEleven(n){
  if((n%11 == 0))
  {
    return true;
  }
  else if(((n-1)%11 == 0))
  {
    return true;
  }
  else
  {
    return false;
  }
}