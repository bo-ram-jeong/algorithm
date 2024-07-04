function solution(citations) {
  let count = 0;
  //내림차순
  citations.sort((a, b) => b - a);
  citations.map((num, index) => {
    if (index+1 <= citations[index]) count++;
  });
  return count;
}