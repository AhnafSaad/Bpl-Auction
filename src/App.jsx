import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers";
import dollar from "./assets/dollar1.png";
import navimg from "./assets/logo.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Suspense } from "react";

function App() {

const playersPromise = fetchPlayers();
const [toggle , setToggle] = useState(true);

  return (
   <div className="px-[200px]">
  <div id="navbar" className="navbar bg-base-100 shadow-sm">

    <div className="flex-1">
      <a className="btn btn-ghost text-xl">
        <img className="w-10 h-10" src={navimg} alt="Logo" />
      </a>
    </div>
    <div className="flex">
      <button className="btn btn-ghost flex items-center gap-2">
        <span>6000000</span>
        <span>Coin</span>
        <img className="w-5 h-5" src={dollar} alt="Dollar Icon" />
      </button>
    </div>
  </div>

<div id="available" className="flex justify-between mt-3 mb-3">
  <div> <h3 className="font-bold text-3xl">Available Players</h3></div>
  <div className="flex">
    <button onClick={()=> setToggle(true)} className={`btn border-gray-300 rounded-l-2xl rounder-r-none border-r-0 ${toggle? 'bg-[#E7FE29]':''}`}>Available</button>
    <button onClick={()=> setToggle(false)} className={`btn border-gray-300 rounded-l-none rounded-r-2xl border-l-0 ${!toggle? 'bg-[#E7FE29]':''}`}>Selected <span>(0)</span></button>
  </div>
 
  
</div>

{toggle == true ? <Suspense fallback={<div>Loading...</div>}>
  <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense> : <SelectedPlayers playersPromise={playersPromise}></SelectedPlayers>} 

  

</div>

  );
}

  const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
  }


export default App
