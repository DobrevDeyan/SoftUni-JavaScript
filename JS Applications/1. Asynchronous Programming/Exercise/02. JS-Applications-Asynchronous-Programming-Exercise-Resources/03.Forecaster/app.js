function attachEvents() {
  const forecastButton = document.getElementById("submit");
  forecastButton.addEventListener("click", getLocation);
}
attachEvents();

const symbols = {
  Sunny: "&#x2600;",
  "Partly sunny": "&#x26C5;",
  Overcast: "&#x2601;",
  Rain: "&#x2614;",
  Degrees: "&#176;",
};

async function getLocation() {
  const locationInput = document.getElementById("location").value;
  const getLocationInfo = await fetch(
    "http://localhost:3030/jsonstore/forecaster/locations"
  );
  const locationData = await getLocationInfo.json();
  locationData.map((location) => {
    const { code, name } = location;
    if (name === locationInput) {
      currentWeatherForecast(code);
      threeDayWeatherForecast(code);
    }
  });
  document.getElementById("forecast").style.display = "";
}

async function currentWeatherForecast(code) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/forecaster/today/${code}`
  );
  const data = await response.json();

  let { condition, high, low } = data;
  const wrapper = document.createElement("span");
  wrapper.className = "upcoming";

  wrapper.innerHTML = `<span class="symbol">${symbols[condition]}</span><span class="forecast-data">${high}&#176;/${low}&#176;</span><span class="forecast-data">${condition}</span>`;

  document.getElementById("current").appendChild(wrapper);
}

async function threeDayWeatherForecast(code) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
  );
  const data = await response.json();

  let { forecast, name } = data;

  for (let i = 0; i < forecast.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "forecasts";
    wrapper.innerHTML = `<span class="condition symbol">${
      symbols[forecast[i].condition]
    }</span><span class="condition"><span class="forecast-data">${name}</span><span class="forecast-data">${
      forecast[i].high
    }&#176;/${forecast[i].low}&#176;</span><span class="forecast-data">${
      forecast[i].condition
    }</span></span>`;
    document.getElementById("upcoming").appendChild(wrapper);
  }
}

// const getData = async (uri) => {
// 	const data = await fetch(`http://localhost:3030/jsonstore/forecaster/${uri}`)
// 	if (! data.ok) throw new Error()
// 	const deserialized = data.json()
// 	if (! deserialized) throw new Error()

// 	return deserialized
// }

// const getCode = (arr, n) => {
// 	const location = arr.find(x => x.name === n)

// 	if (location === undefined) throw new Error()

// 	return location.code
// }
// const symbols = {
// 	Sunny: '&#x2600;',
// 	'Partly sunny': '&#x26C5;',
// 	Overcast: '&#x2601;',
// 	Rain: '&#x2614;',
// 	Degrees: '&#176;',
// }

// function tomorrowTemplate ({ forecast, name }) {
// 	const wrapper = document.createElement('div')
// 	wrapper.className = 'forecasts'

// 	wrapper.innerHTML = `<span class="condition symbol">${
// 		symbols[forecast.condition]}</span><span class="condition"><span class="forecast-data">${
// 		name}</span><span class="forecast-data">${
// 		forecast.high}&#176;/${forecast.low}&#176;</span><span class="forecast-data">${
// 		forecast.condition}</span></span>`

// 	return wrapper
// }

// function dayTemplate ({ condition, high, low }) {
// 	const wrapper = document.createElement('span')
// 	wrapper.className = 'upcoming'

// 	wrapper.innerHTML = `<span class="symbol">${
// 		symbols[condition]}</span><span class="forecast-data">${
// 		high}&#176;/${low}&#176;</span><span class="forecast-data">${condition}</span>`

// 	return wrapper
// }

// const outputVisibility = (display) => document.getElementById('forecast').style.display = display

// const clearSections = () => {
// 	document.getElementById('current').innerHTML = `<div class="label">Current conditions</div>`
// 	document.getElementById('upcoming').innerHTML = `<div class="label">Three-day forecast</div>`
// }

// async function displayData (name) {
// 	const html = {
// 		tmrwOutput: document.getElementById(`current`),
// 		threeDayOutput: document.getElementById(`upcoming`),
// 		forecastMain: document.getElementById('forecast'),
// 	}

// 	outputVisibility('block')
// 	clearSections()

// 	try {
// 		const initialNfo = await getData('locations')
// 		const code = getCode(initialNfo, name)
// 		const tomorrowNfo = await getData(`today/${code}`)
// 		const threeDayNfo = await getData(`upcoming/${code}`)

// 		html.tmrwOutput.appendChild(tomorrowTemplate(tomorrowNfo))

// 		Object.values(threeDayNfo.forecast)
// 			.forEach(x => html.threeDayOutput.appendChild(dayTemplate(x)))

// 	} catch (e) {
// 		html.tmrwOutput.appendChild(document.createTextNode('Error'))
// 	}
// }

// function attachEvents () {
// 	const inputField = document.getElementById('location')

// 	document.getElementById('submit').addEventListener('click', () => displayData(inputField.value))
// }

// attachEvents()
