import React, { useState } from "react";

const Ratings = () => {
  const stars = [1, 2, 3, 4, 5];
  const [selectedRating, setSelectedRating] = useState(1);
  return (
    <div>
      <div className="rating flex-row">
        {stars.map((star) => {
          return star <= selectedRating ? (
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-600"
              key={star}
              onClick={() => setSelectedRating(star)}
              checked="true"
            />
          ) : (
            <input
              className="mask mask-star-2"
              key={star}
              onClick={() => setSelectedRating(star)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;
