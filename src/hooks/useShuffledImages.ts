import { useEffect, useState } from "react";

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function useShuffledImages(
  images: string[],
  slotCount: number,
  intervalMs: number
) {
  const [visibleImages, setVisibleImages] = useState<string[]>([]);

  useEffect(() => {
    // initial fill
    setVisibleImages(shuffleArray(images).slice(0, slotCount));

    const interval = setInterval(() => {
      setVisibleImages(shuffleArray(images).slice(0, slotCount));
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images, slotCount, intervalMs]);

  return visibleImages;
}
