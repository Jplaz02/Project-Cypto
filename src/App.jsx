import React from "react";
import { Header } from "./components/Header";
import { Ranking } from "./components/Ranking";
import { coins } from "../data/coins";
import { Cryptolist } from "./components/Cryptolist";

const App = () => {
  return (
    <>
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
