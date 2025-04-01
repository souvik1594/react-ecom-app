import React, { useState } from "react";
import Ratings from "../../component/ratings/Ratings";

function FilterBar() {
  const [Filter, setFilter] = useState({
    ascending: false,
    descending: false,
    includeOutOfStock: false,
    fastDelivery: false,
    ratings: 1,
    price: 20,
  });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...Filter, [name]: value });
  };

  console.log(Filter);

  return (
    <div className="mt-2 border-r border-r-white/10 w-full max-w-xs p-6 sticky top-[4.5rem] h-screen">
      <div className="form-control">
        <label className="label cursor-pointer flex justify-between">
          <span className="label-text">Ascending</span>
          <input type="radio" name="radio-10" className="radio" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex justify-between pt-1">
          <span className="label-text">Desending</span>
          <input type="radio" name="radio-10" className="radio" />
        </label>
      </div>
      <div className="h-[1px] bg-white/20 w-full my-6"></div>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-between pt-1">
            <span className="label-text">Include Out of Stock</span>
            <input
              type="checkbox"
              className="checkbox border-gray-600 bg-white-500 checked:bg-blue-400 checked:text-blue-800 checked:border-blue-500 "
            />
          </label>
        </div>
      </div>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-between pt-1">
            <span className="label-text">Fast Delivery only</span>
            <input
              type="checkbox"
              className="checkbox border-gray-600 bg-white-500 checked:bg-blue-400 checked:text-blue-800 checked:border-blue-500 "
            />
          </label>
        </div>
      </div>
      <div className="h-[1px] bg-white/20 w-full my-6"></div>
      <p>Ratings</p>
      <Ratings
        defaultRating={Filter.ratings}
        isEditable={true}
        onRatingChange={(rating) => {
          setFilter({ ...Filter, ratings: rating });
        }}
      ></Ratings>
      <div className="h-[1px] bg-white/20 w-full my-6"></div>

      <div className="flex flex-col gap-3">
        <strong>Price : INR {Filter.price}</strong>
        <input
          name="price"
          type="range"
          min={0}
          max="100000"
          value={Filter.price}
          className="range range-primary"
          onChange={handlerInputChange}
        />
      </div>

      <div className="pt-4">
        <button className="btn btn-primary w-full">Clear Filters</button>
      </div>
    </div>
  );
}

export default FilterBar;
