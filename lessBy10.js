function lessBy10(a, b, c){
  if((a-b>=10)||(b-c>=10)||(c-a>=10)||(c-b>=10))
  {
    return true;
  }
  else
    return false;
}