function convertAmountToCoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( convertAmountToCoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return convertAmountToCoins(amount, coins);
        }
    }
} 
console.log(convertAmountToCoins(46, [25, 10, 5, 2,1]));