import React, { useState } from "react";
import { axiosWithAuth } from "./Auth";

const Login = props => {
  //set state here
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const login = event => {
    //no refresh
    event.preventDefault();

    //post credential info => to match with token.
    axiosWithAuth()
      .post("/login", credentials)
      .then(respond => {
        localStorage.setItem("token", respond.data.payload);

        //if credentials === correct then push to "/protected" route.
        props.history.push("/protected");
      })
      //if wrong credentials === get error...
      .catch(error => console.warn("Wrong Credentials... Try again.", error));
  };

  //handles all changes when user types in the form.
  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  // I can remove <forms/> below and just use Input.
  return (
    <>
      <div>
        <h1>Login to Start</h1>
      </div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button onClick={login}>Login</button>
      </form>
    </>
  );
};

export default Login;
