function add(){
    const nameEl = document.querySelector("#first-input");
    const surnameEl = document.querySelector("#second-input");
    const ageEl = document.querySelector("#third-input");
    const nameVal = nameEl.value;
    const surnameVal = surnameEl.value;
    const ageVal = ageEl.value;
    
    let table = document.querySelector("table");

    var row = table.insertRow(-1);

    var nameCell = row.insertCell(0);
    var surnameCell = row.insertCell(1);
    var ageCell = row.insertCell(2);

    nameCell.innerHTML = nameVal;
    surnameCell.innerHTML = surnameVal;
    ageCell.innerHTML = ageVal;

    return true
}