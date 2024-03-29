import React from "react";
import LaunchPage from "./components/LaunchPage";

const year = 2024;
const noWeekend = true;

function App() {
  return (
    <main>
      <LaunchPage noWeekend={noWeekend} year={year} />
    </main>
  );
}

export default App;
