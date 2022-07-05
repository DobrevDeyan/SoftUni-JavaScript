function solve() {
  const arriveButton = document.getElementById("arrive");
  const departButton = document.getElementById("depart");
  const informationBox = document.getElementById("info");
  let stop = {
    next: "depot",
  };

  async function depart() {
    departButton.disabled = true;
    const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

    const response = await fetch(url);
    stop = await response.json(); // generating each subsequent stop via new request

    informationBox.textContent = `Next stop ${stop.name}`;
    arriveButton.disabled = false;
  }

  function arrive() {
    informationBox.textContent = `Arriving at ${stop.name}`;

    arriveButton.disabled = true;
    departButton.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}
let result = solve();
