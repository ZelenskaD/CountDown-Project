const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  //add ev list and give it a callback//if comes back successfull
  console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  const nextUrl = data.next;
  const secondReq = new XMLHttpRequest();
  secondReq.addEventListener("load", function () {
    console.log("SUCCESS!!");
    const data = JSON.parse(this.responseText); //turn it to an obj, if not turn - will be string
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
  });
  secondReq.addEventListener("error", () => {
    //case if comes back with error
    console.log("ERROR!!!!!!");
  });

  secondReq.open("GET", nextUrl);
  secondReq.send();
  console.log("JUST SEND SECONDREQ!");
});

firstReq.addEventListener("error", () => {
  //case if comes back with error
  console.log("ERROR!!!!!!");
});

firstReq.open("GET", "https://swapi.dev/api/planets/"); //what type of request we want+ URL
firstReq.send(); // call send
console.log("SENDING REQUEST.......");

const response = axios.get("https://swapi.dev/api/planets/"); //getting promise - placeholder for a future value

// setTimeout(function(){

// }3000)
// "https://swapi.dev/api/films/1/"
