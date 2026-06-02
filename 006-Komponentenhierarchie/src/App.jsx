// App.jsx
import { useState } from "react";
import Button from "./components/Buttoncomponent/button"; // will import button
import Nav from "./components/navcomponent/nav"; // will import nav

const names = [
  "Ahmad","Ali","Dilek","Feras","I-Chieh",
  "Ines","Josi","Julius","Mohammad","Olha",
  "Rasha","Razieh","Szymon","Vladislav","Yana"
];

export default function App() {
  const [picked, setPicked] = useState(null);

  function pickName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    setPicked(names[randomIndex]);
  }

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <p>{picked || "click the button"} </p>
        <Button onClick={pickName} />

        {/* Names List */}
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}