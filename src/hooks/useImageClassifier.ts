import { classifyImage } from "../ai/mobilenet";
import { mapLabelToCategory } from "../ai/categoryMap";

export async function classifyToCategory(img: HTMLImageElement) {
  console.log("[HOOK] classifyToCategory called");

  const predictions = await classifyImage(img);
  console.log("[HOOK] predictions:", predictions);

  const top = predictions[0];

  return {
    category: mapLabelToCategory(top.className),
    confidence: top.probability
  };
}
