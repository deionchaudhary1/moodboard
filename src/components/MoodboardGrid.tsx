import ImageSlot from "./ImageSlot";
import { useShuffledImages } from "../hooks/useShuffledImages";
import { useViewportGrid } from "../hooks/useViewportGrid";

// Import images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

export default function MoodboardGrid() {
  const slotCount = useViewportGrid();

  const visibleImages = useShuffledImages(
    images,
    slotCount,        // number of slots on screen
    2500              // change every 2.5 seconds
  );

  return (
    <div className="moodboard-grid">
      {visibleImages.map((img, index) => (
        <ImageSlot key={index} src={img} />
      ))}
    </div>
  );
}