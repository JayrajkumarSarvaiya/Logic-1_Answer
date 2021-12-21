function sumLimit(a, b){
  let alen = a.toString();
  let blen = b.toString();
  
  let sum = a+b;
  let sumlen = sum.toString();
  
  if(sumlen.length == alen.length)
    return a+b;
  else
    return a;
}