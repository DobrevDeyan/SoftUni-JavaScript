async function getInfo() {
  const busStop = document.getElementById("stopId").value;
  const stopNameElement = document.getElementById("stopName");
  const timeTable = document.getElementById("buses");
  const button = document.getElementById("submit");
  const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;

  try {
    stopNameElement.textContent = "Loading...";
    button.setAttribute("disabled", "");
    timeTable.replaceChildren();
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Stop ID not found!");
    }
    const data = await response.json();
    stopNameElement.textContent = data.name;
    Object.entries(data.buses).forEach((bus) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
      timeTable.appendChild(li);
    });
    button.removeAttribute("disabled");
  } catch (error) {
    stopNameElement.textContent = "Error";
  }
}
