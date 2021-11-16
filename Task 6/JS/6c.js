function validate() {
  const numberEl = document.querySelector("#first-input");
  const emailEl = document.querySelector("#second-input");
  const numberVal = document.querySelector("#first-input").value;
  const emailVal = document.querySelector("#second-input").value;

  if (!numberVal) {
    console.log("invalid number");
    numberEl.classList.add("is-invalid");
    return false;
  }

  if (!emailVal) {
    console.log("invalid email");
    emailEl.classList.add("is-invalid");
    return false;
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = re.test(String(emailVal).toLowerCase());
  console.log(validEmail);
  if (!validEmail) {
    console.log("invalid email");
    emailEl.classList.add("is-invalid");
    return false;
  }

  console.log("valid");

  numberEl.classList.remove("is-invalid");
  emailEl.classList.remove("is-invalid");


  return true;
}
