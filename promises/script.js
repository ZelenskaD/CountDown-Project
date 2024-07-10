// Part 1: Number Facts
// 1.
// function get(url){
//     const request = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         request.onload = function () {
//              if (request.readyState !== 4) return;
//              if (request.status >= 200 && request.status < 300) {
//                   resolve({
//                       data:JSON.parse(request.response),
//                       status:request.status,
//                       request:request,
//                   })
//
//                   }else{
//                    reject({
//                        msg: 'Server Error',
//                        status: request.status,
//                        request: request
//                    })
//              }
//         }
//          request.onerror = function handleError(){
//             request = null;
//             reject('NETWORK ERROR!')
//
//      }
//      request.open('GET', url);
//     request.send();
//   })
//  }


 // Number and fact
// get('http://numbersapi.com/random?json')//when /randpm?json - if write number instead "random" - it gives you a data about that number
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));
//  or
// 1.2
// let favNumber = 5;
// let baseURL = "http://numbersapi.com";
//
// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//   console.log(data);
// });

//
// 2.
// const url = 'http://numbersapi.com/1..3,10?json';
// get(url)
//     .then(res => {
//         const facts = res.data;
//         const factsContainer = document.getElementById('number-facts');
//         for (const number in facts) {
//             if (facts.hasOwnProperty(number)) {
//                 const factElement = document.createElement('p');
//                 factElement.textContent = `${number}: ${facts[number]}`;
//                 factsContainer.appendChild(factElement);
//             }
//         }
//     })
//     .catch(err => console.log(err));

// 3.
// const favoriteNumber = 29;
// const numberOfFacts = 4;
// let promises = [];
//
// for (let i = 0; i < numberOfFacts; i++) {
//     promises.push(get(`http://numbersapi.com/${favoriteNumber}?json`));
// }
//
// Promise.all(promises)
//     .then(results => {
//         const factsContainer = document.getElementById('number-facts');
//         results.forEach(res => {
//             const factElement = document.createElement('p');
//             factElement.textContent = res.data.text;
//             factsContainer.appendChild(factElement);
//         });
//     })
//     .catch(err => console.log(err));

//
// Part 2: Deck of Cards

function get(url){
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
             if (request.readyState !== 4) return;
             if (request.status >= 200 && request.status < 300) {
                  resolve({
                      data:JSON.parse(request.response),
                      status:request.status,
                      request:request,
                  })

                  }else{
                   reject({
                       msg: 'Server Error',
                       status: request.status,
                       request: request
                   })
             }
        }
         request.onerror = function handleError(){
            request = null;
            reject('NETWORK ERROR!')

     }
     request.open('GET', url);
    request.send();
  })
 }
// id=qoxxjlqif3bv

1.
let deckId = null;

function createNewDeck() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(data => {
      deckId = data.deck_id;
      console.log(`Deck ID: ${deckId}`);
    })
    .catch(error => console.log(error));
}
2.
function drawCard() {
  if (!deckId) {
    console.log('No deck available');
    return;
  }

  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      if (data.cards.length === 0) {
        console.log('No more cards in the deck');
        return;
      }
      const card = data.cards[0];
      console.log(`${card.value} of ${card.suit.toLowerCase()}`);
      displayCard(card);
    })
    .catch(error => console.log(error));
}
3.
function displayCard(card) {
  const cardContainer = document.getElementById('card-container');
  const img = document.createElement('img');
  img.src = card.image;
  img.classList.add('card');
  img.style.transform = `translate(${Math.random() * 200}px, ${Math.random() * 300}px) rotate(${Math.random() * 360}deg)`;
  cardContainer.appendChild(img);
}

document.getElementById('draw-card-btn').addEventListener('click', drawCard);

// Initialize the deck when the page loads
createNewDeck();




