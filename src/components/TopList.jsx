import React from "react";

export const TopList = ({ icon, name, symbol, rank, price }) => {
  const roundedPrice = Math.floor(price * 100) / 100;
  return (
    <div className=" flex  gap-3 p-2  rounded-xl cursor-pointer items-center border border-transparent hover:border-slate-900 hover:opacity-80 ">
      <p className=" mr-5">#{rank}</p>
      <img className="w-8 " src={icon} alt={name} />
      <div className="flex items-baseline truncate">
        <h1 className="text-xl pr-3 truncate">{name}</h1>
        <h2 className="text-right text-gray-500">{symbol}</h2>
      </div>
      <div className=" hidden sm:block flex-2 pr-8 text-right ">
        <p className=""> ${roundedPrice}</p>
      </div>
    </div>
  );
};
