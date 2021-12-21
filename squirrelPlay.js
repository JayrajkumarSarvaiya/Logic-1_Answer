function squirrelPlay(temp, isSummer){
  if(isSummer == false)
  {
    if((temp>=60)&&(temp<=90))
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
    if((temp>=60)&&(temp<=100))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}