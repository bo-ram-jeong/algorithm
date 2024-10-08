function solution(numbers) {
  const maxNum = Math.floor(numbers.length / 2); // 최대 고를 수 있는 수
  const uniqueNumbers = new Set(numbers); // 중복 제거된 숫자들을 Set 객체로 저장

  // Set의 크기와 maxNum 중 작은 값을 반환
  return Math.min(uniqueNumbers.size, maxNum);
}