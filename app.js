const API_KEY = `dde669c54dbec53c562abad52d716702`;

const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const mainDiv = document.querySelector(".container");
const inp = document.querySelector("#search");
const btn = document.querySelector(".btn");

async function getData(City) {
  const data = await fetch(
    `${BASE_URL}/weather?q=${inp.value}&appid=${API_KEY}&units=metric`
  );
  if (inp.value === "") {
    alert("You have not entered a city");
  }
  const response = await data.json();
  console.log(response);
  return response;
}

btn.addEventListener("click", () => {
  getData(inp.value).then((res) => {
    newCard(res.name, res.main, res);
  });
});

function newCard(name, main, pic) {
  let card = document.createElement("div");
  card.className = "card";

  let text = document.createElement("p");
  text.innerHTML = `temperature from ${main.temp_min} to ${main.temp_max} °С`;

  let ime = document.createElement("p");
  ime.innerHTML = `City: ${name}`;

  let temp = document.createElement("p");
  temp.innerHTML = `Temp: ${main.temp}<br>`;

  let slika = document.createElement("img");
  slika.className = "slika";
  slika.src = `http://openweathermap.org/img/w/${pic.weather[0].icon}.png`;

  card.append(slika);
  card.append(ime);
  card.append(temp);
  card.append(text);
  mainDiv.append(card);
}


















































