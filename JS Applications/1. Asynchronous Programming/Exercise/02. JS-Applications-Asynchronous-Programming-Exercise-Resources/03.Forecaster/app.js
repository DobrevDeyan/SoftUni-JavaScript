function attachEvents() {
  const forecastButton = document.getElementById("submit");
  forecastButton.addEventListener("click", getLocation);
}
attachEvents();

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
}
async function currentWeatherForecast(code) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/forecaster/today/${code}`
  );
  const data = await response.json();
  //   return data;
  console.log(data);
}
async function threeDayWeatherForecast(code) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
  );
  const data = await response.json();
  //   return data;
  console.log(data);
}
