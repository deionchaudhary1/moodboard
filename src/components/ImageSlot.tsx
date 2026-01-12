import { useEffect, useState } from "react";

type Props = {
  src: string;
};

export default function ImageSlot({ src }: Props) {
  const [displayedSrc, setDisplayedSrc] = useState(src);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (src === displayedSrc) return;

    setVisible(false);

    const timeout = setTimeout(() => {
      setDisplayedSrc(src);
      setVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [src, displayedSrc]);

  return (
    <div className="image-slot">
      <img
        src={displayedSrc}
        className={`image ${visible ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
}
