function solution(citations) {
  let count = 0;
  citations.sort((a, b) => b - a);

  let length = citations.length;
  for (let i = 0; i < length; ++i) {
    if (i + 1 <= citations[i]) count++;
  }
  return count;
}