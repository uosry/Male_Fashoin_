import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Maincontext from "./MainContext";
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [checkuser, setchekuser] = useState(true);
  const [checkemail, setchekemail] = useState(true);
  const chang =useNavigate("")
  const rest = () => {
    setchekemail(true);
    setchekuser(true);
  };
  const { users } = useContext(Maincontext);

  const handelform = (e) => {
  
    e.preventDefault();
  };
  const valadtiion=()=>{
    users.map((user) => {
      if (user.email !== email) {
        setchekemail(false);
        alert("wrong email");
      } else if (user.password !== password) {
        alert("wrong pssword");
      }
      else{
chang("/")

localStorage.name=user.firstName
localStorage.role=user.role
      }
    });
  }

 

return (
  <div className="d-flex   justify-content-center">
    <Form
      onClick={handelform}
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

      <Button variant="primary" type="submit" onClick={valadtiion} >
        Submit
      </Button>
    </Form>
  </div>
);
}
export default Login;
