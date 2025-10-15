import React from "react";
import { CryptoCards } from "./CryptoCards";

export const Cryptolist = ({ coins }) => {
  return (
    <div className="space-y-9">
      <h1 className="text-center text-2xl md:text-5xl font-jura font-extrabold">
        Crypto Currency List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {coins.map(({ icon, name, symbol, rank, price }) => (
          <CryptoCards
            key={rank}
            icon={icon}
            name={name}
            symbol={symbol}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};
