import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';



const StarRating = ({ rating, onChange, totalStars = 5 }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  // Function to handle the rating on star click
  const handleClick = (value) => {
    onChange(value);
  };

  // Function to handle the mouse hover effect
  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  // Render stars based on the current rating and hovered rating
  const renderStars = () => {
    const stars = [];
    let StarType = FaRegStar;
    for (let i = 1; i <= totalStars; i++) {
       

      // Determine which icon to use
      if (hoveredRating >= i) {
        StarType = FaStar; // Filled star on hover
      } else if (rating >= i) {
        StarType = FaStar; // Filled star if the user has rated that star
      } else if (rating + 0.5 >= i && rating < i) {
        StarType = FaStarHalfAlt // Half star if it's partially rated
      }

      stars.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer', margin: '0 2px' }}
        >
          <StarType className='text-gray-300 hover:text-[#FFAD33]'/>
        </span>
      );
    }

    return stars;
  };

  return (
    <div>
      <div className="star-rating flex">
        {renderStars()}
      </div>
    </div>
  );
};

export default StarRating;
