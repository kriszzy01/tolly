import React from "react";
import { Header } from "./blocks/Header";
import { Payments } from "./blocks/Payments";
import { Summary } from "./blocks/Summary";

export const App = () => {
  return (
    <>
      <main>
        <Header />
        <Payments />
      </main>
      <aside>
        <Summary />
      </aside>
    </>
  );
};
