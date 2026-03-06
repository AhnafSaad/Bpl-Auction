import Flag from "../assets/flag.png";
import React, { useState } from "react";
import User1 from "../assets/user1.png";

const PlayerCard = ({ player, availablebalance, setavailablebalance, purchasedPlayers, setPurchasedPlayers }) => {
    
const [isSelected , setIsSelected] = useState(false);
    return (
        <div className="card bg-base-100 w-full p-2 shadow-sm">
  <figure>
    <img
      src={player.playerImg}
      alt="Shoes" className="w-full h-[300px] object-cover" />
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
            <button disabled={isSelected} onClick={() => {
   
    if (player.price > availablebalance) {
      alert("Not enough coins!");
    } else {
     setIsSelected(true);
     setavailablebalance(availablebalance - player.price);
    setPurchasedPlayers([...purchasedPlayers, player]);
     
    }
  }} className="btn border-rounded-2">{isSelected === true? 'Selected': 'Choose Player'}</button>
        </div>
</div>
  </div>
</div>
    );
};

export default PlayerCard;

