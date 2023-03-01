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
        <h1><span className="font-bold text-purple-400">Name:</span> {name}</h1>
        { Birthplace && <h1><span className="font-bold text-purple-400">Birthplace:</span> {Birthplace}</h1>}
        {DateofBirth && <h1><span className="font-bold text-purple-400">Date of Birth: </span>{DateofBirth}</h1>}
        {Age && <h1><span className="font-bold text-purple-400">Age: </span> {Age}</h1>}
        {(Family.length != 0) && <h1><span className="font-bold text-purple-400">Family: </span> {Family.join(",")}</h1>}
        {Species && <h1><span className="font-bold text-purple-400">Species: </span> {Species}</h1>}
        {Occupation && <h1><span className="font-bold text-purple-400">Occupation: </span>{Occupation}</h1>}
        {(Abilities.length !=0) && <h1><span className="font-bold text-purple-400">Abilities: </span>{Abilities.join(",")}</h1>}
        {(Weapon.length !=0) && <h1><span className="font-bold text-purple-400">Weapon: </span>{Weapon.join(",")}</h1>}
        {description && <h1><span className="font-bold text-purple-400">Description:  </span> {description}</h1>}
      </div>
    </div>
  );
};

export default Characters;
