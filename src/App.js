import React from "react";
import AnimeCard from "./components/AnimeCard";
import {AnimeData}from "./assets/resources";


const App = ()=>{
    return(
    <div className="h-full bg-gray-900">

    <div className="flex flex-wrap   bg-gray-900 ">
        
     {AnimeData.map(e=> <AnimeCard key={e.id} {...e}/>)}  

    </div>
    </div>
    )
}



export default App;