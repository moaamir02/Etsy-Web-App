import React from 'react';
import { BooksFilms_Products } from '../../Constant'; // Importing the cards array from a constants file

const BooksFilmsCard = () => {
  return (
    // Container for the entire card component with margin and padding
    <div className="container mx-auto py-6 mt-[90px]">
      {/* Grid layout for responsive design, changing the number of columns based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Mapping through the cards array to generate a card for each card */}
        {BooksFilms_Products.map((card) => (
          <div key={card.id} className="p-2"> {/* Unique key for each card */}
            <img
              src={card.image} // card image source
              alt={card.title} // Alt text for the image
              className="w-full h-72 object-cover mb-2 rounded-lg border border-gray-300" // Styling for the image
            />
            <h2 className="text-sm font-semibold mb-1 truncate">{card.title}</h2> {/* card title */}
            <div className="text-gray-700 mb-1">
              <span className="font-bold">{card.price}</span> {/* card price */}
              {/* Original price with a line-through style if it exists */}
              {card.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  {card.originalPrice}
                </span>
              )}
              {/* Discount information if it exists */}
              {card.discount && (
                <span className="text-red-500 ml-2">{card.discount}</span>
              )}
            </div>
            <div className="flex items-center text-yellow-500 mb-1">
              {/* Best seller badge if the card is a best seller */}
              {card.bestSeller && (
                <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg inline-block mr-2">
                  Best Seller
                </div>
              )}
              <span>{card.rating} ⭐</span> {/* card rating */}
              <span className="text-gray-500 ml-2">({card.reviews})</span> {/* Number of reviews */}
            </div>
            {/* Additional badge if it exists */}
            {card.badge && (
              <div className="text-xs text-purple-800 px-2 py-1 rounded-lg inline-block mb-1">
                {card.badge}
              </div>
            )}
            <div className="text-xs text-gray-600">Ad by {card.adBy}</div> {/* Advertiser information */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksFilmsCard;
