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
    <div className="flex mt-4">
      <img className="w-[255px] h-[350px] mr-4" src={image} />
      <div>
        <h1>name: {name}</h1>
        <h1>Birthplace: {Birthplace}</h1>
        <h1>Date of Birth: {DateofBirth}</h1>
        <h1>Age: {Age}</h1>
        <h1>Family: {Family}</h1>
        <h1>Species: {Species}</h1>
        <h1>Occupation: {Occupation}</h1>
        <h1>Abilities: {Abilities}</h1>
        <h1>Weapon: {Weapon}</h1>
        <h1>Description: {description}</h1>
      </div>
    </div>
  );
};

export default Characters;
