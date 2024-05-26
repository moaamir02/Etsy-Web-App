import React, { useEffect, useState } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthNavbar from "./Components/NavBar/AuthNavbar";
import SignIn from "./Pages/SignIn/SignIn";
import Cart from "./Pages/Cart/Cart"
import ProductsPage from "./Pages/ProductsPage";
import Favourites from './Pages/Favourites'

const App = () => {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Check if user is stored in localStorage
    if (storedUser) {
      setUsers(true); // If user is stored, set user to true
    }
  }, []);

  return (
    <>
      {users ? <NavBar setUsers={setUsers}/> : <AuthNavbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn setUsers={setUsers}/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/product"/>
        <Route path='/favourites'element={<Favourites/>}/>
      </Routes>
    </>
  );
};

export default App;
