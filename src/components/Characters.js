import React from "react";

const Characters = ({
  name,
  image,
  Birthplace,
  DateofBirth,
  Age,
  Family,
  Species,
  Occupation,
  Abilities,
  Weapon,
  description,
}) => {
  return (
    <div className="flex flex-wrap mt-4">
      <img className="w-[255px] h-[350px] mr-4" src={image} />
      <div>
        <h1><span className="font-bold text-gray-400">Name:</span> {name}</h1>
        <h1><span className="font-bold text-gray-400">Birthplace:</span> {Birthplace}</h1>
        <h1><span className="font-bold text-gray-400">Date of Birth: </span>{DateofBirth}</h1>
        <h1><span className="font-bold text-gray-400">Age: </span> {Age}</h1>
        <h1><span className="font-bold text-gray-400">Family: </span> {Family}</h1>
        <h1><span className="font-bold text-gray-400">Species: </span> {Species}</h1>
        <h1><span className="font-bold text-gray-400">Occupation: </span>{Occupation}</h1>
        <h1><span className="font-bold text-gray-400">Abilities: </span>{Abilities}</h1>
        <h1><span className="font-bold text-gray-400">Weapon: </span>{Weapon}</h1>
        <h1><span className="font-bold text-gray-400">Description:  </span> {description}</h1>
      </div>
    </div>
  );
};

export default Characters;
