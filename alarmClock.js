function alarmClock(day, vacation){
  let daily = '7:00';
  let weekend = '10:00';
  let weekend0 = 'off';
  
  if(vacation == true)
  {
    if((day == 0) || (day == 6))
    {
      return weekend0;
    }
    else
    {
      return weekend;
    }
  }
  else
  {
    if((day==0)|| (day == 6))
    {
      return weekend;
    }
    else
    {
      return daily;
    }
  }
}