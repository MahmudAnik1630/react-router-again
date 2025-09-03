import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={ <FeaturedProduct/>}/>
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
         <Route path="/users" element={<Users/>}/> 
          <Route path="/users/1" element={<UserDetails/>}/> 
           <Route path="/users/2" element={<UserDetails/>}/> 
            <Route path="/users/3" element={<UserDetails/>}/> 
            <Route path="/users/4" element={<UserDetails/>}/> 
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
