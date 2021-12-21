function inOrderEqual(a, b, c, equalOk){
  if(equalOk == false)
  {
    if((a<b) && (b<c))
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
    if((a<=b) && (b<=c))
       {
      return true;
    }
    else
    {
      return false;
    }
  }
}