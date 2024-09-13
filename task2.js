const input = document.querySelector("#input");
const button = document.querySelector("#button");
const weather = {
  temperature: 0,
  humidity: 95,
  windSpeed: 1000000000000000,
  checkTemparature() {
    if (parseFloat(this.temperature) >= 0) {
      console.log("aaa");
      return false;
    } else {
      return true;
    }
  },
};
const checkHandler = () => {
  weather.temperature = input.value;
  weather.checkTemparature();
  if (weather.checkTemparature() === true) {
    alert("температура нижче 0 градусів Цельсія");
  }
  if (weather.checkTemparature() === false) {
    alert("температура дорівнюе або більше 0 градусів Цельсія");
  }
};
button.addEventListener("click", checkHandler);
