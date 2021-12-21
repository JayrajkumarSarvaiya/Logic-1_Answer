function shareDigit(a, b){
  let aL = a / 10;
  let aR = a % 10;
  let bL = b / 10;
  let bR = b % 10;
   
  if (aL == bL || aL == bR || aR == bL || aR == bR)
  {
    return true;
  }
  else
  {
    return false;
  }
}