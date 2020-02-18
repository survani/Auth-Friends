import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../components/Auth";
import AddFriend from "./AddFriend";
import { Link } from "react-router-dom";

const FriendList = () => {
  //=> Will add spinner later.
  //used [] in state to make .map() work.
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(respond => {
        console.log("gg: Friend data incoming: ", respond.data);
        setFriend(respond.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <AddFriend />
      <div>
        <h2>All Friends Below</h2>
        <Link to="/">Back Home</Link>
      </div>
      {friend.map(item => (
        <div className="list" key={item.id}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Email: {item.email}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
