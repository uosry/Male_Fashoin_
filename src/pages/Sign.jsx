import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FormGroup } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Sign = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [image, setimage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [userName, setusername] = useState("");
  const [chekuser, setchekuser] = useState(true);
  const [chekpassword, setchekpassword] = useState(true);
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [user, setuser] = useState([]);
  const a = useNavigate("/");
  const [chek, setchek] = useState(true);
  const [chekemail, setchekemail] = useState(false);

  const usersdata = () => {
    axios({
      method: "post",
      url: "https://data-api-yv91.onrender.com/users",
      data: {
        city,
        email,
        firstName,
        gender,
        image,
        lastName,
        password,
        phoneNumber,
        role: "memeber",
        userName,
      },
    });
  };
  const sbmit = () => {
    if (chekemail) {
      usersdata();
      setchekemail(false);
    }
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-api-yv91.onrender.com/users",
    }).then((data) => setuser(data.data));
  }, []);

  const handleForm = (e) => {
    if (email !== " ") {
      user.map((user) => {
        if (user.email === email) {
          Swal.fire("already sigin up!");
          setchekemail(false);
        } else {
          setchekemail(true);
        }
      });
    } else 
      {
        Swal.fire("invailed!");
      }
      
    e.preventDefault();
  };

  return (
    <div className="d-flex flex-column algin-item-center">
      <Form onSubmit={handleForm}>
        <div className="d-flex justify-content-evenly bg bg-secondary p-3  ">
          <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control
              aria-label="First name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <Form.Control
              aria-label="Last name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="d-flex justify-content-evenly bg bg-secondary p-3  flex-column">
          <Form.Label htmlFor="basic-url">Your image</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              value={image}
              onChange={(e) => setimage(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-evenly bg bg-secondary p-3  flex-column ">
          <Form.Label>Your city</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type="tect"
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              className="w-50"
            />
          </InputGroup>
        </div>

        <div className="d-flex justify-content-evenly bg bg-secondary p-3 ">
          <Form.Group className="mb-3">
            <Form.Label>email</Form.Label>
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
        </div>
        <div className="d-flex justify-content-evenly bg bg-secondary p-3 ">
          <Form.Group className="mb-3">
            <Form.Label>gender</Form.Label>
            <Form.Control
              type="option"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>phoneNumber</Form.Label>
            <Form.Control
              type="number"
              value={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
            />
          </Form.Group>
          <div>
            <Form.Group>
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setusername(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>

        <div className="d-flex justify-content-evenly bg bg-secondary p-3">
          {chek ? (
            <Button variant="primary" type="submit" onClick={sbmit}>
              Submit
            </Button>
          ) : (
            <Spinner animation="border" role="status"></Spinner>
          )}
        </div>
      </Form>
    </div>
  );
};

export default Sign;
