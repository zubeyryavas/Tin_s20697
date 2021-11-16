function convert(){
    
    const cellsiusEl = document.querySelector("#first-input");
    const fahrenheitEl = document.querySelector("#second-input");
    const cellsiusVal = parseInt(cellsiusEl.value);
    const fahrenheitVal = parseInt(fahrenheitEl.value);
    console.log(cellsiusVal, fahrenheitVal);

    switch(cellsiusVal || fahrenheitVal) {
        case cellsiusVal:
            fahrenheitEl.value = (cellsiusVal * 9/5) + 32;
          break;
        case fahrenheitVal:
            cellsiusEl.value = (fahrenheitVal - 32) * (5/9);
          break;
        default:
          console.log("You should fill one of inputs")
      }
}