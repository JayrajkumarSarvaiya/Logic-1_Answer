function answerCell(isMorning, isMom, isAsleep){
  if(isAsleep == true)
  {
    return false;
  }
  else
  {
    if((isMorning == false) && (isMom == false))
    {
      return true;
    }
    else if(isMom== true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}