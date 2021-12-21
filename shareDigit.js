function shareDigit(a, b){
  let aL = a / 10;
  aL = Math.floor(aL);
  let aR = a % 10;
  let bL = b / 10;
  bL = Math.floor(bL);
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