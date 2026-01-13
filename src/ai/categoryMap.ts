export const CATEGORY_KEYWORDS = {
  people: ["person", "face", "man", "woman"],
  nature: ["tree", "mountain", "forest", "flower", "animal"],
  architecture: ["building", "bridge", "house", "tower"],
  food: ["food", "pizza", "fruit", "drink"],
  technology: ["computer", "phone", "screen", "camera"],
  fashion: ["clothing", "dress", "shoe", "jacket"],
  abstract: []
};

export function mapLabelToCategory(label: string): string {
  const lower = label.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(k => lower.includes(k))) {
      return category;
    }
  }

  return "abstract";
}
