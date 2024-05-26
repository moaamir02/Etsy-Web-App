import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromLikedProducts } from "../Redux/Slice/favouritesSlice";

const LikedProductsPage = () => {
  const likedProducts = useSelector((state) => state.likedProducts);
  const dispatch = useDispatch();

  const handleRemoveFromLiked = (productId) => {
    dispatch(removeFromLikedProducts(productId));
  };

  return (
    <div>
      <h1>Liked Products</h1>
      {likedProducts.length > 0 ? (
        <ul>
          {likedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
              <button onClick={() => handleRemoveFromLiked(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No liked products</p>
      )}
    </div>
  );
};

export default LikedProductsPage;