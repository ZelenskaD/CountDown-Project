// async function getData() {
//   const response = await axios.get("https://swapi.dev/api/planets/"); //await use only inside ASYNC FUNC ONLY
//   const { next, results } = response.data;
//   for (let planet of results) {
//     console.log(planet.name);
//   }
//   const response2 = await axios.get(next);
//   console.log("SECOND REQUEST!!!");
//   const results2 = response2.data.results;
//   for (let planet of results2) {
//     console.log(planet.name);
//   }
// }

// getData();
// console.log("I HAPPEN AFTER getData()");

async function getLaunches() {
  const res = await axios.get(
    "https://api.spacexdata.com/v3/launches/upcoming/"
  );
  renderLaunches(res.data);
}

function renderLaunches(launches) {
  const ul = document.querySelector("#launches");
  for (let launch of launches) {
    ul.appendChild(makeLaunchLI(launch)); // Use appendChild to append the list item to the ul
  }
}

function makeLaunchLI(launch) {
  const newLI = document.createElement("LI");
  const mission = document.createElement("B");
  mission.innerText = launch.mission_name; // Correctly set the text of the mission element

  newLI.appendChild(mission); // Use appendChild to correctly append the mission element
  newLI.innerHTML += ` - ${launch.rocket.rocket_name}`; // Use template literals correctly for the rocket name
  return newLI;
}

const btn = document.querySelector("#getLaunches");
btn.addEventListener("click", getLaunches);
