

import React from 'react';
import { Jewellery_Products } from '../../Constant'; // Importing the Jewellery_Products array from a constants file

const JewelleryCard = () => {
  return (
    // Container for the entire card component with margin and padding
    <div className="container mx-auto py-6 mt-[90px]">
      {/* Grid layout for responsive design, changing the number of columns based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Mapping through the Jewellery_Products array to generate a card for each Jewellery_Product */}
        {Jewellery_Products.map((Jewellery_Product) => (
          <div key={Jewellery_Product.id} className="p-2"> {/* Unique key for each Jewellery_Product */}
            <img
              src={Jewellery_Product.image} // Jewellery_Product image source
              alt={Jewellery_Product.title} // Alt text for the image
              className="w-full h-72 object-cover mb-2 rounded-lg border border-gray-300" // Styling for the image
            />
            <h2 className="text-sm font-semibold mb-1 truncate">{Jewellery_Product.title}</h2> {/* Jewellery_Product title */}
            <div className="text-gray-700 mb-1">
              <span className="font-bold">{Jewellery_Product.price}</span> {/* Jewellery_Product price */}
              {/* Original price with a line-through style if it exists */}
              {Jewellery_Product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  {Jewellery_Product.originalPrice}
                </span>
              )}
              {/* Discount information if it exists */}
              {Jewellery_Product.discount && (
                <span className="text-red-500 ml-2">{Jewellery_Product.discount}</span>
              )}
            </div>
            <div className="flex items-center text-yellow-500 mb-1">
              {/* Best seller badge if the Jewellery_Product is a best seller */}
              {Jewellery_Product.bestSeller && (
                <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg inline-block mr-2">
                  Best Seller
                </div>
              )}
              <span>{Jewellery_Product.rating} ⭐</span> {/* Jewellery_Product rating */}
              <span className="text-gray-500 ml-2">({Jewellery_Product.reviews})</span> {/* Number of reviews */}
            </div>
            {/* Additional badge if it exists */}
            {Jewellery_Product.badge && (
              <div className="text-xs text-purple-800 px-2 py-1 rounded-lg inline-block mb-1">
                {Jewellery_Product.badge}
              </div>
            )}
            <div className="text-xs text-gray-600">Ad by {Jewellery_Product.adBy}</div> {/* Advertiser information */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelleryCard;
