function inOrder(a, b, c, bOk){
  if(bOk==true)
  {
    if(c>b)
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
    if((b>a) && (c>b))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}