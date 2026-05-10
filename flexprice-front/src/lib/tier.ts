export function calculateTierPrice(base: number, quantity: number) {
  if (quantity < 10) return base;
  if (quantity < 50) return base * 0.9;
  return base * 0.8;
}