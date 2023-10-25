import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./component/Header";
import Sign from "./pages/Sign";
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./component/Footer";
import Add from "./pages/Add";
import Shop from "./pages/shop";
import Cart from "./pages/Cart";
import Users from "./pages/Users";
import Maincontext from "./pages/MainContext";
import axios from "axios";
import Lodiong from "./pages/Lodiong";
import Adite from "./pages/Adite";
import Chekadmin from "./pages/Chekadmin";

const App = () => {
  const [checkcart, setchetcart] = useState(true);
  let [cart, setcart] = useState([]);
  const [users, setusers] = useState([]);
  const remove = (item) => {
      cart.map((e, t,j) => {
      if (item.id === e.id) {
        cart.splice(t,1)
        return t;
      }
    });
console.log(cart.length);
  };

  const addto_cart = (e) => {
    const chek = cart.some((t) => {
      return t.id === e.id;
    });
    if (chek) {
      e.count++;
    } else {
      e.count = 1;
      setcart([...cart, e]);
      setchetcart(false);
    }
  };
  const pluse = (e) => {};

  useEffect(() => {
    remove()
    if (cart.length > 0) {
      setchetcart(false);
    } else {
      setchetcart(true);
    }
  }, []);
  return (
    <div>
      <Header cart={cart} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/login/sign"} element={<Sign />} />
        <Route
          path={"/admin"}
          element={
            <Chekadmin>
              <Dashboard />
            </Chekadmin>
          }
        />

        <Route path={"/admin/add"} element={<Add />} />
        <Route path={"/shop"} element={<Shop addto_cart={addto_cart} />} />
        <Route path={"/users"} element={<Users />} />
        <Route path={"/lodiong"} element={<Lodiong />} />
        <Route path={"/*"} element={<Notfound />} />
        <Route path={"/adite/:id"} element={<Adite />} />
        <Route
          path={"/cart"}
          element={
            <Cart
              cartitem={cart}
              chekcart={checkcart}
              pluse={pluse}
              remove={remove}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
