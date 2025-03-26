import React from "react";
import FilterBar from "./filterBar/FilterBar";
import Body from "./body/Body";

function Home() {
  return (
    <>
      <div className="flex">
        <FilterBar></FilterBar>
        <Body></Body>
      </div>
    </>
  );
}

export default Home;
