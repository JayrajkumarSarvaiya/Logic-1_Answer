function in1To10(n, outsideMode){
  if(outsideMode == false)
  {
    if((n>=1) && (n<=10))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  else
  {
    if((n<=1) || (n>=10))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}