// // function wait3Seconds() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(resolve, 3000);
// //   });
// // }
// //
// // wait3Seconds()
// //   .then(() => console.log("ALL DONE!"))
// //   .catch(() => console.log("ERROR!"));
//
// //NASTING
//
// const h1 = document.querySelector('h1');
// //
// // setTimeout(function(){
// //   h1.style.color = 'red'
// //   setTimeout(()=>{
// //     h1.style.color='orange'
// //     setTimeout(()=>{
// //       h1.style.color='yellow'
// //         setTimeout(()=>{
// //           h1.style.color='green'
// //       },1000)
// //     },1000)
// //   },1000)
// // }, 1000)
//
// //CHAINING
// // function changeColor(el, color){
// //   return new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       el.style.color=color;
// //       resolve()
// //     },500)
// //   })
// // }
// //
// // changeColor(h1, 'red')
// // .then(()=> changeColor(h1, 'orange'))
// // .then(()=> changeColor(h1, 'yellow'))
// // .then(()=> changeColor(h1, 'green'))
// // .then(()=> changeColor(h1, 'blue'))
// // .then(()=> changeColor(h1, 'indigo'))
// // .then(()=> changeColor(h1, 'violet'))
// //
// //
// //
// // function  mockAjaxRequest() {
// //
// //   return new Promise(function (resolve, reject) {
// //     let probSuccess = 0.5;
// //     let requestTime = 1000;
// //
// //
// //     setTimeout(function () {
// //       let randomNum = Math.random();
// //       if (randomNum < probSuccess) {
// //         let data = "here's your data!";
// //         resolve(data);
// //       } else {
// //         reject("Sorry, your request failed.")
// //       }
// //     }, requestTime);
// //   });
// // }
// //
// // mockAjaxRequest()
// //     .then((data)=>{
// //       console.log(data);
// //       return mockAjaxRequest()
// //     })
// //     .then((data)=>{
// //        console.log(data);
// //     })
// //     .catch(err=>console.log(err))
//
//
// // const request = new XMLHttpRequest();
// //
// // request.onload = function (){
// //   if (request.readyState !== 4) return;
// //
// //   //Check status code
//   if (request.status >= 200&&request.status<300){
//     console.log("IT WORKED!", request)
//
//   }else{
//     console.log("ERROR!")
//   }
// }
//
// request.onerror = function handleError(){
//   console.log("NETWORK ERROR!")
//   request = null;
// };
// request.open('GET', 'https://swapi.dev/api/planets/1/');
//
// //Send it!
// request.send();
//
//
// function get(url) {
//   const request = new XMLHttpRequest();
//   return new Promise((resolve, reject) => {
//     request.onload = function () {
//       if (request.readyState !== 4) return;
//
//       //Check status code
//       if (request.status >= 200 && request.status < 300) {
//         resolve({
//           data:JSON.parse(request.response),
//           status:request.status,
//           request:request,
//           // headers: request.getAllResponseHeaders()
//         })
//       } else {
//         reject({
//           msg:'Server Error',
//           status: request.status,
//           request: request
//         })
//       }
//     }
//       request.onerror = function handleError(){
//         request = null;
//         reject('NETWORK ERROR!')
//
//     }
//     request.open('GET', url);
//     request.send();
//   })
// }
//
// get('https://swapi.dev/api/planets/1/')
// .then(res=>{
//   console.log(res)
//   return get('https://swapi.dev/api/planets/2/')
// })
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
//
//
//
// let fourPokemonPromises =[];
//
// for ( let i=1; i<5; i++){
//   fourPokemonPromises.push(
//       axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   );
// }
//
//
// Promise.all(fourPokemonPromises)
//   .then(pokemonArr=>{
//       for(res of pokemonArr){
//       console.log(res.data.name)
//   }
// })
//
//   .catch(err=> console.log(err));
//
//
// let fourPokemonRace =[];
//
// for ( let i=1; i<5; i++){
//   fourPokemonRace.push(
//       axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   );
// }
//
// Promise.race(fourPokemonRace)
//     .then(res=>console.log(`${res.data.name} won the Race!`))
//     .catch(err=> console.log(err))