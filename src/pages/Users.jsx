import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import photo from "../src.jpg";
const Users = () => {
  const [users, setusers] = useState([]);

  const usersdata = () => {
    axios({
      method: "get",
      url: "https://data-api-yv91.onrender.com/users",
    }).then((data) => {
      setusers(data.data);
    });
  };
  useEffect(() => {
    usersdata();
  }, []);
  return (
    <div>
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id} className="bg bg-secondary mt-5">
            <div className="d-flex justify-content-evenly rounded">
              <img
                src={user.image}
                style={{ width: "30%", height: "30vh" }}
                className="rounded-circle"
              />
            </div>
            <div className="d-flex justify-content-evenly rounded">
              <h1 className="bg bg-warning mt-5 ">
                {" "}
                firstname:{user.firstName}{" "}
              </h1>
              <h1 className="bg bg-warning mt-5 ">
                {" "}
                lastname: {user.lastName}{" "}
              </h1>
            </div>
            <div className="d-flex justify-content-evenly rounded">
              <h1 className="bg bg-warning mt-5 "> city:{user.city} </h1>
              <h1 className="bg bg-warning mt-5 "> gender: {user.gender} </h1>
            </div>
            <div className="d-flex justify-content-evenly rounded">
              <h1 className="bg bg-warning mt-5 ">
                {" "}
                password:{user.password}{" "}
              </h1>
              <h1 className="bg bg-warning mt-5 ">
                {" "}
                phoneNumber: {user.phoneNumber}{" "}
              </h1>
            </div>
            <div className="d-flex justify-content-evenly rounded">
              <h1 className="bg bg-warning mt-5 "> email:{user.email} </h1>
              <h1 className="bg bg-warning mt-5 "> role: {user.role} </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
