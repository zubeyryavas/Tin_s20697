function secondFinder(x) {
    let sorted = x.sort();
    return [x[1],x[x.length-1]];
  }
  
  x = [1,2,3,4,5]
  
  console.log(secondFinder(x))