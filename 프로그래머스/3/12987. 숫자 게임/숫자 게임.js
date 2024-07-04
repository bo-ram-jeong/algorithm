function solution(A, B) {
  // 승점 횟수
  let count = 0;

  // A 배열 인덱스
  let aIndex = 0;

  // A, B 오름차순 정렬
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  // B 배열 순회하면서 체크
  for (let bIndex = 0; bIndex < B.length; bIndex++) {
    if (B[bIndex] > A[aIndex]) {
      count++;
      aIndex++;
    }
  }

  return count;
}