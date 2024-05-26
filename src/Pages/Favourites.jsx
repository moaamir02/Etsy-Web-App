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
    <div className="py-5">
      <h1 className="text-4xl mb-5 text-center">Liked Products</h1>
      {likedProducts && likedProducts.length > 0 ? (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-3">Image</th>
              <th className="border border-gray-200 p-3">Name</th>
              <th className="border border-gray-200 p-3">Price</th>
              <th className="border border-gray-200 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {likedProducts.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-200 p-3">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="border border-gray-200 p-3">{product.name}</td>
                <td className="border border-gray-200 p-3">{product.price}</td>
                <td className="border border-gray-200 p-3">
                  <button
                    onClick={() => handleRemoveFromLiked(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="h-96 flex items-center justify-center">
          <p className="">No liked products</p>
        </div>
      )}
    </div>
  );
};

export default LikedProductsPage;
