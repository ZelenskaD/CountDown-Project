async function sayHi() {
    return "HELLO!"
}


function sayHi(){
    return new Promise.resolve("Hello!")
}

async function oops(){
    throw "BAD IDEA!"
}

sayHi().then((msg) => console.log(msg))
oops().then(msg=> console.log(msg))
.catch(err=>console.log("INSIDE CATCH: ", err))



async function oyoy(){
    await axios.get(value, "some value from the data")
    return value
}


 async function getStarWarsFilms(){
    console.log("Starting!")
    const res = await axios.get("https://swapi.dev/api/films/")
    console.log("Ending!")
    console.log(res)

}

console.log("Starting!")
axios.get("https://swapi.dev/api/films/")
.then(res => {
    console.log("Ending!")
    console.log(res.data)
})

CHAINING
function changeColor(el, color){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      el.style.color=color;
      resolve()
    },500)
  })
}

changeColor(h1, 'red')
.then(()=> changeColor(h1, 'orange'))
.then(()=> changeColor(h1, 'yellow'))
.then(()=> changeColor(h1, 'green'))
.then(()=> changeColor(h1, 'blue'))
.then(()=> changeColor(h1, 'indigo'))
.then(()=> changeColor(h1, 'violet'))

const h1 = document.querySelector('h1')

function changeColor(el, color){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            el.style.color = color;
            resolve()

        },1000)
    })

}

async function rainbow(el){
    await changeColor(el, 'red')
    await changeColor(el, 'orange')
    await changeColor(el, 'yellow')
    await changeColor(el, 'green')
    await changeColor(el, 'blue')
    await changeColor(el, 'indigo')
    await changeColor(el, 'violet')
}

rainbow(h1)

let starWars = {
    genre: "sci-fi",
    async logMovieData(){
        let url = "https://swapi.dev/api/films/";
        let movieData = await axios.get(url)
        console.log(movieData.data.results);
    }
}

starWars.logMovieData();


const deck={
    async init(){
       let res = await axios.get ('https://deckofcardsapi.com/api/deck/new/')
        this.deckId = res.data.deck_id;
    },
    async shuffle(){
        let res =  await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
        console.log(res)
    },
      async drawCard(){
        let res =  await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        console.log(res.data)
    }
}
'ivi7o7s0v5bk',

class Pokemon{
    constructor(id){
        this.id=id;
        // this.name = res.data.name;
        this.types = [];
    }

    async getInfo(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(res)
        this.name=res.data.name;
        for (let type of res.data.types){
            this.types.push(type.type.name)
        }
    }

    // async getName(){
    //     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
    //     console.log(res.data.name)
    // }
}

let pokemon = new Pokemon(56);

 async function getStarWarsFilms(){
    const res = await axios.get("https://swapi.dev/api/films/")
    console.log(res)

}

try{
    console.frog(45)
}
catch{
    console.log(45)
}

async function getUser(user){
    try{
        let url = `https://api.github.com/users/${user}`;
        let res = await axios.get(url);
        console.log(`${res.data.name}: ${res.data.bio}`);
    } catch(e){
        console.log("User does not exist!", e)
    }
}

// getUser('mmmaaatttttt')
getUser('zelenskaD')

function getThreePokemon(){
    let baseURL = "https://pokeapi.co/api/v2/pokemon";

    axios.get(`${baseURL}/1`)
        .then(((data)) => {
            console.log(`The first pokemon is ${data.name}`);
            return axios.get(`${baseURL}/2`);
        })
        .then(((data)) => {
            console.log(`The first pokemon is ${data.name}`);
            return axios.get(`${baseURL}/2`);
        })
}


function getThreePokemon() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";

    axios.get(`${baseURL}/1`)
        .then(response => {
            console.log(`The first pokemon is ${response.data.name}`);
            return axios.get(`${baseURL}/2`);
        })
        .then(response => {
            console.log(`The second pokemon is ${response.data.name}`);
            return axios.get(`${baseURL}/3`);
        })
        .then(response => {
            console.log(`The third pokemon is ${response.data.name}`);
        })
        .catch(error => {
            console.error("There was an error!", error);
        });
}

getThreePokemon();


async function getThreePokemonAsync() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let {data: p1} = await axios.get(`${baseURL}/1`)
    console.log(p1.name);
    let {data: p2} = await axios.get(`${baseURL}/2`)
    console.log(p2.name);
    let {data: p3} = await axios.get(`${baseURL}/3`)
    console.log(p3.name);

}

    axios.get(`${baseURL}/1`)
        .then(response => {
            console.log(`The first pokemon is ${response.data.name}`);
            return axios.get(`${baseURL}/2`);
        })
        .then(response => {
            console.log(`The second pokemon is ${response.data.name}`);
            return axios.get(`${baseURL}/3`);
        })
        .then(response => {
            console.log(`The third pokemon is ${response.data.name}`);
        })
        .catch(error => {
            console.error("There was an error!", error);
        });
}