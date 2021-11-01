function findType(value)
{
var types = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = types.length; x < len; x++) 
     {
            if (value instanceof types[x])
            {
                return types[x];
            }
      }
    }
    return typeof value;
}
console.log(findType(5));
console.log(findType('Nodejs'));
console.log(findType(true));