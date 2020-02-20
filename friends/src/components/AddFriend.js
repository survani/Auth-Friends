//@ts-nocheck
import React, { useState } from "react";
import { axiosWithAuth } from "./Auth";

const AddFriend = props => {
  const [addFriend, setAddFriend] = useState({
    id: Date.now,
    name: "",
    age: "",
    email: ""
  });

  const handleChange = event => {
    setAddFriend({
      ...addFriend,
      [event.target.name]: event.target.value
    });
  };

  const addNewFriend = event => {
    //no refresh
    event.preventDefault();

    axiosWithAuth()
      .post("/friends", addFriend)
      .then(respond => {
        setAddFriend(
          [...respond.data, respond.data],
          props.history.push("/protected")
        );
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Add Friend here</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={addFriend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={addFriend.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={addFriend.email}
          onChange={handleChange}
        />
        <button onClick={addNewFriend}>Add Friend</button>
      </form>
      <br></br>
    </div>
  );
};

export default AddFriend;
