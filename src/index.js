module.exports = function reverse (n) {
  var result;
  
  if (n < 0)
	  n *=-1;
  result = 0; 
  while (n)
  {
	  result = result * 10 + n % 10;
	  n = Math.floor(n / 10);
  }
  return (result);
}
