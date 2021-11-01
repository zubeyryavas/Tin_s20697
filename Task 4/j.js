const binarySearch = (val,arr) =>{
    let lower =0;
    let upper=arr.length-1;

    while(lower<=upper){
        console.log("try"); //for iteration
        const middle = lower + Math.floor((upper-lower)/2);
        if(val===arr[middle]){
            return middle;
        }
        if(val<arr[middle]){
            upper = middle-1;
        }else{
            lower=middle+1;
        }
    }
    return -1;
}

const values = [0,1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(7, values)); 