export function multipleOfIndex(array: number[]): number[] {
  return array.filter((x, i) => x === 0 || x % i === 0);
}
