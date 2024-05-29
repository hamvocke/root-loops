export function clamp(actual: number, min: number, max: number) {
  return Math.max(min, Math.min(actual, max));
}

export function normalize(
  number: number,
  oldMin = 0,
  oldMax = 10,
  newMin = 0,
  newMax = 10,
): number {
  const oldRange = oldMax - oldMin;
  const newRange = newMax - newMin;

  const newValue = ((number - oldMin) * newRange) / oldRange + newMin;
  return Math.ceil(newValue * 100) / 100;
}
