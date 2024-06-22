export const getLevelClass = (quantity: number): string => {
  const lowThreshold = 10;
  const mediumThreshold = 20;

  if (quantity <= lowThreshold) {
    return "level-low";
  }

  if (quantity <= mediumThreshold) {
    return "level-medium";
  }

  return "level-high";
};
