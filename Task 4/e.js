function longest(str){
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";

    for(let i = 0; i < str.length; i++){

      if(str[i].length > largest.length){
        largest = str[i]
      }
    }
    return largest;
  }
    
  console.log(longest("aa ssss dddd fffffffff vvv")); 