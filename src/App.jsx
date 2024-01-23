import React from "react";
import CountryList from "./component/CountryList";

const App = () => {
  return (
    <div>
      <h1 className="Name">Country Details</h1>
      <article className="heroarti">
        Explore the World with Ease! 🌍 Country Explorer is your gateway to a
        world of information.
      </article>
      <CountryList />
    </div>
  );
};

export default App;
