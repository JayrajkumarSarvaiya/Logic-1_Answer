function cigarParty(cigars, isWeekend){
  if(isWeekend == false){
    if((cigars>=40) && (cigars<=60))
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
    if(cigars>=40)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}