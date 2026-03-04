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

  return (
   <div className="px-[50px]">
  <div className="navbar bg-base-100 shadow-sm">

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
  <Suspense fallback={<div>Loading...</div>}>
  <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
<SelectedPlayers playersPromise={playersPromise}></SelectedPlayers>
</Suspense>
</div>

  );
}

  const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
  }


export default App
