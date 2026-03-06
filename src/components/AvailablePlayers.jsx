import PlayerCard from "./PlayerCard";
import React from "react";
import { use } from "react";

const AvailablePlayers = ({ playersPromise, availablebalance, setavailablebalance, purchasedPlayers, setPurchasedPlayers }) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className="mt-2 grid md:grid-cols-3 grid-cols-1 gap-4">
        {playerData.map(player => <PlayerCard player={player} availablebalance={availablebalance} setavailablebalance={setavailablebalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></PlayerCard> )}
        </div>
    );
};

export default AvailablePlayers;