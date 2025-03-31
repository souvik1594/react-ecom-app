import React, { useEffect, useState } from "react";

const Ratings = ({ defaultRating = 1, isEditable = false, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];
  const [selectedRating, setSelectedRating] = useState(defaultRating);

  useEffect(() => {
    onRatingChange(selectedRating);
  }, [selectedRating]);
  return (
    <div>
      <div
        className={`rating flex-row ${isEditable ? "" : "pointer-events-none"}`}
      >
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
