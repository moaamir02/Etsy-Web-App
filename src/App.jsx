import React, { useEffect, useState } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthNavbar from "./Components/NavBar/AuthNavbar";
import SignIn from "./Pages/SignIn/SignIn";
import Cart from "./Pages/Cart/Cart"
import ProductsPage from "./Pages/ProductsPage";
import Favourites from './Pages/Favourites'
import Accessories from './Components/Accessories/Accessories'; // Importing Accessories component
import ArtCollectibles from './Components/Art & Collectibles/ArtCollectibles.jsx'; // Importing ArtCollectibles component
import Clothing from './Components/Clothing/Clothing.jsx'; // Importing Clothing component
import Jewellery from './Components/Jewellery/Jewellery.jsx';
import Shoes from './Components/Shoes/Shoes.jsx';
import Baby from './Components/Baby/Baby.jsx';
import Gifts from './Components/Gifts/Gifts.jsx';
import ToysGames from "./Components/Toys & Games/ToysGames.jsx";
import BooksFilms from "./Components/Books-films-music/BooksFilms.jsx";

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
        <Route path="/accessories" element={<Accessories />} /> {/* Route for Accessories component */}
        <Route path="/art-collectibles" element={<ArtCollectibles />} /> Route for ArtCollectibles component
        <Route path="/clothing" element={<Clothing />} /> {/* Route for Clothing component */}
        <Route path="/jewellery" element={<Jewellery />} /> {/* Route for Jewellery component */}
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/baby" element={<Baby />} /> {/* Route for Accessories component */}
        <Route path="/books-films-music" element={<BooksFilms />} /> {/* Route for ArtCollectibles component */}
        <Route path="/gifts" element={<Gifts />} /> {/* Route for Clothing component */}
        <Route path="/jewellery" element={<Jewellery />} /> {/* Route for Jewellery component */}
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/toys-games" element={<ToysGames />} />
      </Routes>
    </>
  );
};

export default App;
