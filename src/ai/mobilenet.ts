import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

let model: mobilenet.MobileNet | null = null;

export async function loadMobileNet() {
  console.log("[AI] loadMobileNet() called");

  if (!model) {
    console.log("[AI] Loading MobileNet model...");
    model = await mobilenet.load({
      version: 2,
      alpha: 1.0
    });
    console.log("[AI] MobileNet loaded");
  }

  return model;
}

export async function classifyImage(img: HTMLImageElement) {
  console.log("[AI] classifyImage() called");
  const net = await loadMobileNet();
  const predictions = await net.classify(img);
  console.log("[AI] predictions:", predictions);
  return predictions;
}
