function dateFashion(you, date){
  if((date<=2) ||(you<=2))
  {
    return 0;
  }
  else if((date>=8)||(you>=8))
  {
    return 2;
  }
  else
  {
    return 1;
  }
}