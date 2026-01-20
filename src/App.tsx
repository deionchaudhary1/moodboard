import { useState } from "react";
import MoodboardGrid from "./components/MoodboardGrid";
import "./styles/moodboard.css";
import BackgroundSelector from "./components/BackgroundSelector";

export default function App() {
  const [bgColor, setBgColor] = useState("#111");

  return (
    <div
      className="app-root"
      style={{ backgroundColor: bgColor }}
    >
      <BackgroundSelector
        value={bgColor}
        onChange={setBgColor}
      />

      <MoodboardGrid />
    </div>
  );
}
