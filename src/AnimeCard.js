import React, { useState } from "react";
import Characters from "./Characters";

const AnimeCard = ({
  image,
  animetitle,
  Synonyms,
  Episodes,
  Genres,
  Theme,
  Demographic,
  Score,
  characters,
}) => {
  const [showCharacters, setShowCharacters] = useState(false);

  return (
    <div className=" m-4 flex flex-wrap  text-gray-300 text-lg font-semibold">
      <img className="w-[255px] mr-5" src={image} />
      <div>
        <h1> <span className="font-bold text-gray-400">Title:</span> {animetitle}</h1>
        <h1>Synonyms: {Synonyms}</h1>
        <h1>Episodes: {Episodes}</h1>
        <h1>Genres: {Genres}</h1>
        <h1>Theme: {Theme}</h1>
        <h1>Demographic: {Demographic}</h1>
        <h1>Score: {Score}</h1>
        <button
          className="px-3 py-2 rounded-lg  bg-pink-900 hover:bg-pink-800"
          onClick={() => {
            setShowCharacters(!showCharacters);
          }}
        >
         {showCharacters?"Hide Characters":"Show Characters"} 
        </button>
      </div>

      {showCharacters && characters?.map((char) => <Characters {...char} />)}
    </div>
  );
};

export default AnimeCard;
