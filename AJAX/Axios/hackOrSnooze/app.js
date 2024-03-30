// async function getUsers() {
//   try {
//     const res = await axios.get(
//       "https://hack-or-snooze-v3.herokuapp.com/users",
//       {
//         headers: {
//           Authorization: `Bearer YOUR_TOKEN_HERE`,
//         },
//       }
//     );
//     console.log(res);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// }
// getUsers();
async function getUsers(token) {
  const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {
    params: { token },
  });
  console.log(res);
}
getUsers();

async function signUp(username, password, name) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/signup",
    {
      user: { name, username, password },
    }
  );
  console.log(res);
}

async function login(username, password) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/login",
    {
      user: { username, password },
    }
  );
  console.log(res);
  return res.data.token;
}

async function getUsersWithAuth() {
  const token = await login("dangerchi23", "butterChicken");
  getUsers(token);
}

async function createStory() {
  const token = await login("dangerchi23", "butterChicken");
  const newStory = {
    token,
    story: {
      author: "Butters",
      title: "BOCK BOCK BOCK",
      url: "http://chicken4lyfe.com",
    },
  };
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/stories",
    newStory
  );
  console.log(res);
}

login("dangerchi23", "butterChicken");
