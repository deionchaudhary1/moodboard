import { useEffect, useState } from "react";

export function useViewportGrid(tileWidth = 240, tileHeight = 320) {
  const [slotCount, setSlotCount] = useState(0);

  useEffect(() => {
    function calculate() {
      const cols = Math.floor(window.innerWidth / tileWidth);
      const rows = Math.floor(window.innerHeight / tileHeight);
      setSlotCount(cols * rows);
    }

    calculate();
    window.addEventListener("resize", calculate);

    return () => window.removeEventListener("resize", calculate);
  }, [tileWidth, tileHeight]);

  return slotCount;
}
