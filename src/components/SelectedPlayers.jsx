import React from "react";
import deleteIcon from "../assets/delete.png";

const SelectedPlayers = ({ purchasedPlayers }) => {
  
    return (
        <div className="flex items-center justify-between p-4 mb-4 border border-gray-100 rounded-2xl shadow-sm bg-white">
  
 
  <div className="flex items-center gap-4">
    
    
    <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden">
      <img 
        src="naim-sheikh.jpg" 
        alt="Naim Sheikh" 
        className="w-full h-full object-cover" 
      />
    </div>

   
    <div>
      <h2 className="text-lg font-bold text-black mb-2">Naim Sheikh</h2>
      <p className="text-gray-400 font-semi text-sm mt-2">Left-Hand-Bat</p>
    </div>
  </div>

 
  <div className="pr-2">
    <button className="text-red-500 hover:scale-110 transition-transform">
        <img src={deleteIcon} alt="Delete Icon" className="w-5 h-5" />
    </button>
  </div>

</div>
    );
};

export default SelectedPlayers;