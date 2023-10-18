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

const App = () => {
  const [checkcart, setchetcart] = useState(true);
  const [cart, setcart] = useState([]);
  const [users,setusers]=useState([])

  const addtocart = (e) => {
    e.count = 1;
    //  console.log(e.name);

  cart.length>0?  cart.map((t) => {
    
      if (t===e) {
        e.count++;
      } else {
        setcart([...cart, e])
      }
    }):setcart([...cart, e]);

  };
  const users_data=()=>{
axios({

  method:"get",
  url:"https://data-api-yv91.onrender.com/users"
}).then((data)=>setusers(data.data))


  }
  useEffect(() => {

    users_data()
    if (cart.length > 0) {
      setchetcart(false);
    } else {
      setchetcart(true);
    }
  },[]);
  return (
    <Maincontext.Provider value={{users}}>
      <Header cart={cart} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sign"} element={<Sign />} />
        <Route path={"/admin"} element={<Dashboard />} />
        <Route path={"/admin/add"} element={<Add />} />
        <Route path={"/shop"} element={<Shop addtocart={addtocart} />} />
        <Route path={"/users"} element={<Users />} />

        <Route path={"*"} element={<Notfound />} />
        <Route
          path={"/cart"}
          element={<Cart cartitem={cart} chekcart={checkcart} />}
        />
      </Routes>
      <Footer />
    </Maincontext.Provider>
  );
};

export default App;
