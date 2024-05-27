import React from 'react';
import { Baby_Products } from '../../Constant'; // Importing the Baby_Products array from a constants file

const BabyCard = () => {
  return (
    // Container for the entire card component with margin and padding
    <div className="container mx-auto py-6 mt-[90px]">
      {/* Grid layout for responsive design, changing the number of columns based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Mapping through the Baby_Products array to generate a card for each Baby_Product */}
        {Baby_Products.map((Baby_Product) => (
          <div key={Baby_Product.id} className="p-2"> {/* Unique key for each Baby_Product */}
            <img
              src={Baby_Product.image} // Baby_Product image source
              alt={Baby_Product.title} // Alt text for the image
              className="w-full h-72 object-cover mb-2 rounded-lg border border-gray-300" // Styling for the image
            />
            <h2 className="text-sm font-semibold mb-1 truncate">{Baby_Product.title}</h2> {/* Baby_Product title */}
            <div className="text-gray-700 mb-1">
              <span className="font-bold">{Baby_Product.price}</span> {/* Baby_Product price */}
              {/* Original price with a line-through style if it exists */}
              {Baby_Product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  {Baby_Product.originalPrice}
                </span>
              )}
              {/* Discount information if it exists */}
              {Baby_Product.discount && (
                <span className="text-red-500 ml-2">{Baby_Product.discount}</span>
              )}
            </div>
            <div className="flex items-center text-yellow-500 mb-1">
              {/* Best seller badge if the Baby_Product is a best seller */}
              {Baby_Product.bestSeller && (
                <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg inline-block mr-2">
                  Best Seller
                </div>
              )}
              <span>{Baby_Product.rating} ⭐</span> {/* Baby_Product rating */}
              <span className="text-gray-500 ml-2">({Baby_Product.reviews})</span> {/* Number of reviews */}
            </div>
            {/* Additional badge if it exists */}
            {Baby_Product.badge && (
              <div className="text-xs text-purple-800 px-2 py-1 rounded-lg inline-block mb-1">
                {Baby_Product.badge}
              </div>
            )}
            <div className="text-xs text-gray-600">Ad by {Baby_Product.adBy}</div> {/* Advertiser information */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyCard;
