
//Part 1 : Numbers API
// async function getFact(number){
//     try{
//         let url = `http://numbersapi.com/${number}`;
//         let res = await axios.get(url);
//         console.log(res)
//
//     } catch(e){
//         console.log("Not found.", e)
//     }
// }
//
// getFact(29)

// 1.2
// async function getThreeNumbersData(){ //Parallel
//     let baseUrl = "http://numbersapi.com";
//
//     let n1Promise = axios.get(`${baseUrl}/1?json`)
//     let n2Promise = axios.get(`${baseUrl}/2?json`)
//     let n3Promise = axios.get(`${baseUrl}/3?json`)
//
//     let n1 = await n1Promise;
//     let n2 = await n2Promise;
//     let n3 = await n3Promise;
//
//     console.log(`The first number is ${n1.data.number} : ${n1.data.text}`);
//     console.log(`The second number is ${n2.data.number} : ${n2.data.text}`)
//     console.log(`The third number is ${n3.data.number} : ${n3.data.text}`)
//
//       let factsDiv = document.getElementById('facts');
//             factsDiv.innerHTML = `
//
//                 <p>The first number is ${n1.data.number} : ${n1.data.text}</p>
//                 <p>The second number is ${n2.data.number} : ${n2.data.text}</p>
//                 <p>The third number is ${n3.data.number} : ${n3.data.text}</p>
//
//             `;
//
// }

// getThreeNumbersData()
// 1.2(2)
// async function getThreeNumbersData(){ //Parallel
//     let baseURL = "http://numbersapi.com";
//
//     let number = await Promise.all([
//     axios.get(`${baseURL}/1?json`),
//     axios.get(`${baseURL}/2?json`),
//     axios.get(`${baseURL}/3?json`)
// ]);
//
//
//     console.log(`The first number is ${number[0].data.number} - ${number[0].data.text}`);
//     console.log(`The second number is ${number[1].data.number} -  ${number[1].data.text}`);
//     console.log(`The third number is ${number[2].data.number}  - ${number[2].data.text}`);
//
//     let factsDiv = document.getElementById('facts');
//             factsDiv.innerHTML = `
//
//                 <p>The first number is ${number[0].data.number} : ${number[0].data.text}</p>
//                 <p>The second number is ${number[1].data.number} : ${number[1].data.text}</p>
//                 <p>The third number is ${number[2].data.number} : ${number[2].data.text}</p>
//
//             `;
// }
//
// getThreeNumbersData()
//
// 1.3
//
// async function getThreeNumbersData(number){ //Parallel
//     let baseURL = `http://numbersapi.com/${number}`;
//
//     let facts = await Promise.all([
//     axios.get(`${baseURL}/?json`),
//     axios.get(`${baseURL}/?json`),
//     axios.get(`${baseURL}/?json`),
//     axios.get(`${baseURL}/?json`)
// ]);
//
//
//     console.log(`The first fact is ${facts[0].data.text}`);
//     console.log(`The second fact is ${facts[1].data.text}`);
//     console.log(`The third fact is ${facts[2].data.text}`);
//     console.log(`The forth fact is ${facts[3].data.text}`);
//
//     let factsDiv = document.getElementById('facts');
//             factsDiv.innerHTML = `
//                 <p>The first fact about - ${facts[0].data.text}</p>
//                 <p>The second fact about -  ${facts[1].data.text}</p>
//                 <p>The third fact about - ${facts[2].data.text}</p>
//                 <p>The fourth fact about - ${facts[3].data.text}</p>
//
//
//             `;
// }
//
// getThreeNumbersData(5)

//
// Part 2: Desk of cards

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
         if (res.data.remaining === 0) {
            alert('No more cards left in the deck!');
            return null;
        }
         let card = res.data.cards[0];
        console.log(`${card.value} of ${card.suit}`);
        return card;
    }
};
async function initializeDeckAndButton() {
    await deck.init();

    const drawButton = document.getElementById('draw-button');
    const cardContainer = document.getElementById('card-container');

    drawButton.addEventListener('click', async () => {
        let card = await deck.drawCard();
        if (card) {
            let cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.value} of ${card.suit}">
            `;
            // Randomly rotate the card
            cardElement.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
            cardContainer.appendChild(cardElement);
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeDeckAndButton);
