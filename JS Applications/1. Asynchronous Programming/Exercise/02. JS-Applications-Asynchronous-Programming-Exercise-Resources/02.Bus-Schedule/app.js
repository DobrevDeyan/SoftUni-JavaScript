function solve() {
  const arriveButton = document.getElementById("arrive");
  const departButton = document.getElementById("depart");
  const informationBox = document.getElementById("info");
  const url = `http://localhost:3030/jsonstore/bus/schedule/${depot}`;

  async function depart() {
    try {
      const firstBusStop = await fetch url;
      if (firstBusStop.ok !== 200) {
        // return firstBusStop.json();
        console.log(firstBusStop.json());
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log(error.message);
    }

    arriveButton.disabled = true;
    departButton.disabled = false;

    informationBox.innerHTML = `Next stop ${2}`;
  }

  function arrive() {
    // try {
    // } catch (error) {}

    arriveButton.disabled = false;
    departButton.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
