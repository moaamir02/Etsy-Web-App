import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";
import { addToLikedProducts } from "../Redux/Slice/favouritesSlice";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
    alert("Successfully!");
  };
  const handleAddtoFav = () => {
    dispatch(addToLikedProducts(data)); // Dispatch addToFavorites action with product data
    alert("Added to favorites successfully!");
  };
  return (
    <>
      <div>
        <div>
          <img src={data.imageUrl} alt="" />
          <p>{data.name}</p>
          <p>
            <i>{data.author}</i>
          </p>
        </div>
        <div>
          <span>{data.price}</span>
          <button onClick={handleAddToCart}>Add to cart</button>
          <button onClick={handleAddtoFav}>Favourite</button>
        </div>
      </div>
    </>
  );
};

export default Product;
