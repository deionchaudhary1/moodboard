import { useEffect, useState, useRef } from "react";
import { classifyImageToCategory } from "../hooks/useImageClassifier";

type Props = {
  src: string;
};

export default function ImageSlot({ src }: Props) {
  const [displayedSrc, setDisplayedSrc] = useState(src);
  const [visible, setVisible] = useState(true);
  const [category, setCategory] = useState("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  // Transition effect when src changes
  useEffect(() => {
    if (src === displayedSrc) return;

    setVisible(false);

    const timeout = setTimeout(() => {
      setDisplayedSrc(src);
      setVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [src, displayedSrc]);

  // Run MobileNet classification when image changes
  useEffect(() => {
  const img = imgRef.current;
  if (!img) return;

  async function run() {
    console.log("[UI] running classification");
    const result = await classifyToCategory(img);
    setCategory(result.category);
  }

  if (img.complete) {
    run(); // image already loaded
  } else {
    img.onload = run;
  }
}, [displayedSrc]);


  return (
    <div className={`image-slot ${category}`}>
      <img
        ref={imgRef}
        src={displayedSrc}
        className={`image ${visible ? "fade-in" : "fade-out"}`}
      />
      <span className="category-label">{category}</span>
    </div>
  );
}