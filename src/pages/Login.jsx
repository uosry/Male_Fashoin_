import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Maincontext from "./MainContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Chekadmin from "./Chekadmin";
const Login = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [user, setuser] = useState([]);
  const [checkuser, setchekuser] = useState(false);
  const [role, setrole] = useState("");
  const [username, setusername] = useState("");
  const [checkemail, setchekemail] = useState(false);
  const chang = useNavigate();
  const add = () => {
    if (checkemail && checkuser===true) {
      localStorage.name = username;
      localStorage.role = role;
      chang("/");
      rest();
    } else {
      alert("wrong");
      rest()
    }
  };
  const rest = () => {
    setchekemail(false);
    setchekuser(false);
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-api-yv91.onrender.com/users",
    }).then((data) => setuser(data.data));
  }, []);
  const valadtiion = (e) => {
    user.map((user) => {
      if (user.email === email) {
        rest();

        setchekemail(true);
      } else if (user.password === password) {
        setchekuser(true);
      } else if (checkemail && checkuser) {
        setrole(user.role);
        setusername(user.firstName);
      }
    });
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        onClick={valadtiion}
        className="d-flex mt-5 p-2  flex-column justify-content-center algin-items-center w-50"
      >
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" as={Link} onClick={add}>
          login
        </Button>
        <Button
          className="text-light w-25 mt-3 "
          variant="success"
          as={Link}
          to={"/login/sign"}
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
};
export default Login;
