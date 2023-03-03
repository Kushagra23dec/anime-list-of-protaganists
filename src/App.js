import React from "react";
import AnimeCard from "./components/AnimeCard";
import { AnimeData } from "./assets/resources";
import { dummyresources } from "./assets/dummy-resources";

const App = () => {
  
  return (
    <div className="h-full bg-gray-900">
      <div className=" flex flex-col  bg-gray-900 ">
        {dummyresources.map((e) => (
          <AnimeCard key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
};

export default App;
