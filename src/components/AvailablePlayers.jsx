import Flag from "../assets/flag.png";
import React from "react";
import User1 from "../assets/user1.png";
import { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className="mt-2 grid md:grid-cols-3 grid-cols-1 gap-4">
        {playerData.map(player => <div className="card bg-base-100 w-96 p-2 shadow-sm">
  <figure>
    <img
      src={player.playerImg}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><span><img src={User1} alt="" /></span>{player.playerName}</h2>
    <div id="Country and Position" className="flex justify-between border-b border-gray-300 gap-2">
        <div className="flex gap-0.5 items-center">
            <span><img src={Flag} alt="" /></span><span><h2 className="font-bold">{player.playerCountry}</h2></span>
        </div>
        <div className="pb-2">
            <button className="btn border-rounded-2">{player.playingRole}</button>
        </div>
        
    </div>
<div id="Rating" className="">
    <h2 className="font-bold">{player.rating}</h2>
</div>

<div id="Playing Style" className="flex justify-between">
    <div><h3 className="font-bold text-black-300">{player.battingStyle}</h3></div>
    <div><h3 className="text-gray-500 font-bold">{player.bowlingStyle}</h3></div>
</div>
<div id="choose Player" className="flex justify-between">
<div className="flex gap-0.5 items-center">
            <span> <h2 className="font-bold">Price:</h2></span><span><h2 className="font-bold">{player.price}</h2></span>
        </div>
        <div className="pb-2">
            <button className="btn border-rounded-2">Choose Player</button>
        </div>
</div>
  </div>
</div>)}
        </div>
    );
};

export default AvailablePlayers;