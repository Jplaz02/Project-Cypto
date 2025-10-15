import React from "react";
import { TopList } from "./TopList";

export const Ranking = ({ coins }) => {
  return (
    <div className="bg-[#060918] h-fit w-full p-5 rounded-2xl border-2 border-gray-900">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-jura pb-6">
        Top 10 Gainers 🚀
      </h1>

      <div className="lg:w-xl lg:border-r-3 lg:border-gray-900 border-transparent ">
        {coins.slice(0, 10).map(({ icon, name, symbol, rank, price }) => (
          <TopList
            key={rank}
            icon={icon}
            name={name}
            symbol={symbol}
            rank={rank}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};
