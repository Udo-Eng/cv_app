// All Authenitcation API fetch functions

export function loginUser(User) {
  let loginUrl = "http://localhost:5000/auth/login";


  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(User),
  })
    .then((data) => data.json())
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
}

export function createUser(User) {
  let registerUrl = "http://localhost:5000/auth/register";

  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(User),
  })
    .then((data) => data.json())
    .then((result) => result)
    .catch((err) => {
      throw err;
    });
}

const Auth = {loginUser,createUser};


export default Auth ;