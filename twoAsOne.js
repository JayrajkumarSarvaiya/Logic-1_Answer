function twoAsOne(a, b, c){
  if ( a + b == c || c + b == a || c + a == b)
    return true;
  else
    return false;

}