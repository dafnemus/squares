import Square from "./components/square";
import { useState } from "react";
import "./App.css";

function App() {
  const principalColors = ["red", "blue", "yellow", "green"]
  const [colors, setColors] = useState(principalColors);
  const newColors = ["pink", "orange", "purple", "gray"];

  const changeColor = (index) => {
    const newColorList = [...colors];
    const currentColor = newColorList[index];

    if (currentColor === principalColors[index]) {
      newColorList[index] = newColors[index];
    } else {
      newColorList[index] = principalColors[index];
    }

    setColors(newColorList);
  };
  return (
    <main>
      {colors.map((color, index) => (
        <Square
          key={color}
          color={color}
          onClick={() => changeColor(index)}
        />
      ))}
    </main>
  );
}

export default App;
