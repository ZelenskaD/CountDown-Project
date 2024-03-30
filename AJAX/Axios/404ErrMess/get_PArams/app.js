//==================.GET PARAM
// async function getJoke(firstName, lastName) {
//   let res = await axios.get(
//     `https://api.icndb.com/jokes/random?firstName=John&lastName=Doe`,
//     {
//       param: { firstName, lastName },
//     }
//   );
//   console.log(res.data.value.joke);
// }

// getJoke("butters", "Steele");

//===================== .POST REQUEST helper api

async function getUsers() {
  const res = await axios.get("https://reqres.in/api/users");
  console.log(res);
}
getUsers();

async function createUser() {
  const res = await axios.post("https://reqres.in/api/users", {
    username: "ChickenPicken",
    email: "hottychicken007@gmail.com",
    age: 18,
  });
  console.log(res);
}
getUsers();
createUser();
