const email = document.querySelector("#email");
const password = document.querySelector("#password");
const check = document.querySelector("#check");
const user = {
  name: "Anna",
  email: "famzu2918@gmail.com",
  password: "1234A",
  login(email, password) {
    if (email === this.email && password === this.password) {
      alert(`Вітаю ${this.name}`);
    } else {
      alert("Ти хто такий??????");
    }
  },
};
const handlerLogin = () => {
  user.login(email.value, password.value);
};
check.addEventListener("click", handlerLogin);
console.log(typeof email.value);
