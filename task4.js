const title = document.querySelector("#filmTitle");
const check = document.querySelector("#button");
const movie = {
  title: "Гаррі Поттер",
  director: "не знаю",
  year: "...",
  rating: 7,
  raitingCheck() {
    if (this.rating >= 8) {
      return true;
    } else {
      return false;
    }
  },
};
const checkHandler = () => {
  console.log(title);
  if (movie.raitingCheck()) {
    title.style.color = "green";
  }
  if (!movie.raitingCheck()) {
    title.style.color = "red";
  }
};
check.addEventListener("click", checkHandler);
