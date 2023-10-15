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
import Shop from './pages/shop';
import Cart from './pages/Cart';

const App = () => {
const[checkcart,setchetcart]=useState(true)
const[cart,setcart]=useState([])
const addtocart=(e)=>{
setchetcart(e)
cart.push(e)
console.log(cart);
  }
  useEffect(()=>{
if(cart.length>0){
setchetcart(false)
}
else{
  setchetcart(false)
}
  })
  return (
    <div>
    <Cart/>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sign"} element={<Sign />} />
        <Route path={"/admin"} element={<Dashboard />} />
        <Route path={"/admin/add"} element={<Add />} />
        <Route path={"/shop"} element={<Shop addtocart={addtocart} />} />
        <Route path={"*"} element={<Notfound />} />
        <Route path={"/cart" } element={<Cart cart={cart} checkcart={checkcart} />}/>
      
      </Routes>
      <Footer />

    </div>
  );
};

export default App;
