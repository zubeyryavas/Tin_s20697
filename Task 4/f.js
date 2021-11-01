function testPrime(i)
{

  if (i===1)
  {
    return false;
  }
  else if(i === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < i; x++)
    {
      if(i % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(testPrime(7)); //true
console.log(testPrime(4)); //false