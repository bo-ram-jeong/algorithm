function solution(numbers) {
  // 숫자 배열을 문자열로 변환 후 정렬
  const sorted = numbers
    .map(num => num.toString()) // 숫자를 문자열로 변환
    .sort((a, b) => (b + a) - (a + b)); // 이어붙였을 때 큰 순서대로 정렬

  // 정렬된 배열을 하나의 문자열로 합침
  const result = sorted.join('');

  // 만약 결과가 '0'으로 시작하면, 이는 모든 값이 0이었음을 의미
  return result[0] === '0' ? '0' : result;
}