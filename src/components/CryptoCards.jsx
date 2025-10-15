import React from "react";

export const CryptoCards = ({ icon, name, symbol, price }) => {
  const roundedPrice = Math.floor(price * 100) / 100;
  return (
    <div className=" flex flex-col bg-[#060918]  p-8 rounded-2xl border-2 border-gray-900 space-y-4 hover:border-slate-700">
      <div className="flex items-center">
        <img className="w-10 mr-2" src={icon} alt={name} />
        <div className="flex truncate gap-1 items-baseline">
          <h1 className="text-2xl mr-2 font-jura truncate">{name}</h1>
          <h2 className="text-gray-500 text-end">{symbol}</h2>
        </div>
      </div>

      <div>
        <p className="text-gray-500">Value:</p>
        <p className="text-2xl font-bold self-">${roundedPrice}</p>
      </div>
    </div>
  );
};
