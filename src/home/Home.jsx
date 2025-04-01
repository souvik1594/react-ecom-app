import React from "react";
import FilterBar from "./filterBar/FilterBar";
import Body from "./body/Body";

function Home() {
  return (
    <>
      <div className="flex">
        <div className="hidden lg:block">
          <FilterBar></FilterBar>
        </div>

        <Body></Body>
      </div>
    </>
  );
}

export default Home;
