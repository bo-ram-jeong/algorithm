function solution(sizes) {
  const bigSizes = sizes.map((data) => Math.max(...data));
  const smallSizes = sizes.map((data) => Math.min(...data));
  return Math.max(...bigSizes) * Math.max(...smallSizes);
}