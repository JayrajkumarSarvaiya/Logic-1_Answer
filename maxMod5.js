function maxMod5(a, b){
  if(a==b)
  {
    return 0;
  }
  else if((a%5) == (b%5))
  {
    if(a>b)
    {
      return b;
    }
    else
    {
      return a;
    }
  }
  else
  {
    if(a>b)
    {
      return a;
    }
    else
    {
      return b;
    }
  }
  
}