function greenTicket(a, b, c){
  if((a!=b) && (b!=c) && (c!=a))
  {
    return 0;
  }
  else if (a==b && b==c)
  {
    return 20;
  }
  else
    return 10;
}