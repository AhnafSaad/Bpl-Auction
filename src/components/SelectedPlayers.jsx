import React from "react";
import SelectedCard from "./SelectedCard";
import deleteIcon from "../assets/delete.png";

const SelectedPlayers = ({ purchasedPlayers }) => {
  
    return (
        <div className="flex items-center justify-between p-4 mb-4 border border-gray-100 rounded-2xl shadow-sm bg-white">
  {purchasedPlayers.map(player => <SelectedCard key={player.id} player={player} />)}

</div>
    );
};

export default SelectedPlayers;