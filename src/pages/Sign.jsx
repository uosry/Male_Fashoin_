import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FormGroup } from "react-bootstrap";
import axios from "axios";
const Sign = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [image, setimage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [userName, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  
  function validateForm() {
  
    if (firstName.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }

   
    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
  

      }  if (!isNaN(password[i] * 1)) {
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          
          countLowerCase++
        }
      }
    

    if (countLowerCase == 0) {
           alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase == 0) {
     
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit == 0) {
           alert('Invalid Form, 0 digit characters in password')
      return
    }
    usersdata()


    if (countSpecialCharacters == 0) {
          alert('Invalid Form, 0 special characters in password')
      return
        }
    

      

    alert('Form is valid')
  }
  const usersdata = () => {
    axios({
      method: "post",
      url: "https://prodect.onrender.com/users",
       data: {
        city,
        email,
        firstName,
        gender,
        image,
        lastName,
        password,
        phoneNumber,
        role:"memeber",
        userName,
      },
    })
    // axios({
    //   method: "delete",
    //   url: "https://prodect.onrender.com/users/2",
    //   // data: {
    //   //   city: "giza",
    //   //   email: "uosryelprins@gmail.com",
    //   //   firstName: "uosry",
    //   //   gender: "male",
    //   //   image: "https://i.ibb.co/dJ4fWLV/src.jpg",
    //   //   lastName: "elprins",
    //   //   password: "1234567",
    //   //   phoneNumber: "01013774006",
    //   //   role: "admin",
    //   //   userName: "uosry_elprins"
    //   // },
    // });
  };  
 
  const handleForm = (e) => {
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
            <Form.Control type="number"  value={phoneNumber} onChange={(e)=>{setphoneNumber(e.target.value)}}/>
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
          {true ? (
            <Button variant="primary" type="submit" onClick={validateForm}>
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
