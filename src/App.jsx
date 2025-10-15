import React from "react";
import { Header } from "./components/Header";
import { Ranking } from "./components/Ranking";
import { coins } from "../data/coins";
import { Cryptolist } from "./components/Cryptolist";
import { Analytics } from "@vercel/analytics/next";
const App = () => {
  return (
    <>
      <Analytics />
      <div>
        <header>
          <Header />
        </header>
        <main className="p-10 space-y-11  text-white">
          <section>
            <Ranking coins={coins} />
          </section>
          <section>
            <Cryptolist coins={coins} />
          </section>
          <footer></footer>
        </main>
      </div>
    </>
  );
};

export default App;
