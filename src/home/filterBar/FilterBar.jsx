import React from "react";
import Ratings from "../../component/ratings/Ratings";

function FilterBar() {
  return (
    <div className="mt-2 border-r border-r-white/10 min-h-screen w-full max-w-xs p-6">
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
      <Ratings></Ratings>
      <div className="h-[1px] bg-white/20 w-full my-6"></div>
    </div>
  );
}

export default FilterBar;
