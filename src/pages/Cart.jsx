import React from "react";
import bg from "../data/empty-shopping.jpg";
import { Button } from "react-bootstrap";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Cart = ({ cartitem, chekcart }) => {
  console.log(cartitem);
  const x=cartitem.length>0&& cartitem.map((g)=>g.price*g.count).reduce((x,r)=>x+r)
// console.log(x)
  // console.log( cartitem.lenght>0&& cartitem.map((item)=>item.count*item.price).reduce((X,y)=> {return X+y} ));
  const pluse = (x) => {
    x++;
  };
  const muins = (x) => {
    x--;
  };

  {
    if (chekcart===true) {
      return (
        <div
          className="min bg bg-dark"
          style={{
            backgroundImage: `url(${bg})`,
            width: "100%",
            height: "100vh",
          }}
        >

          <Link to={"/shop"}><Button variant="success">Go to Shop</Button></Link>
        </div>
      );
    } else {
      return (
        <div className="d-flex">
          <div>
            {cartitem.map((item) => (
              <div
                className="d-flex justify-content-evenly bg bg-secondary mt-3 rounded w-75"
                key={item.id}
              >
                <span className="w-25">
                  <img
                    src={item.img}
                    style={{ width: "7%" }}
                    className="rounded w-25 mt-2"
                  />
                </span>
                <span className="w-25">
                  <p className="text-center mt-3"> {item.name} </p>
                  <p className="text-center mt-3">
                    {" "}
                    {item.price}
                    {"$"}{" "}
                  </p>
                </span>
                <span className="d-flex justify-content-evenly w-25 text-center">
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => pluse(item.cout)}
                  >
                    +
                  </Button>
                  <h6 className="mt-5">{item.count}</h6>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      muins(item.cout);
                    }}
                  >
                    -
                  </Button>
                </span>
                <span className="w-25 text-center fs-4 mt-4">
                  {" "}
                  <RiDeleteBin6Line />
                </span>
                <br />
              </div>
            ))}
          </div>
          <div
            className="bg bg-secondary rounded text-warning d-flex flex-column px-3"
            style={{ width: "25%", height: "20vh" }}
          >
            <h1>cart total </h1>
            <h1 className="d-flex justify-content-between">
              {x}
              $ <BsFillCreditCard2BackFill />
            </h1>
            <Button
              className="rounded 
            s "
            >
              pay{" "}
            </Button>
          </div>
        </div>
      );
    }
  }
};

export default Cart;
