const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validation(name, age, email, pass, nation) {
  if (name.trim().length <2 ) {
    alert('Name is emmpty!')
    return false;
  }
  if (email.trim().length <2 ) {
    alert('Email is emmpty!')
    return false;
  }
  if (pass.trim().length <2 ) {
    alert('Password is emmpty!')
    return false;
  }
  if (age <= 0 || age >= 200 ) {
    alert('Age is not correct!')
    return false;
  }
  if (!Number(age)) {
    alert('Age is not valid number!')
    return false;
  }
  const emailValid = validateEmail(email);
  if (!emailValid) {
    alert ('Email is not correct!')
    return false;
  }
  if (!nation) {
    alert('Naitonality is emmpty!')
    return false;
  }
  return true;

}
function getUsers() {
  let users = [];
  if (localStorage.getItem('users')) {
    users =JSON.parse(localStorage.getItem('users'))
  }
  return users;
 }
export {validation, getUsers}
