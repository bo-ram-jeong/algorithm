function solution(numbers) {
  const maxNum = Math.floor(numbers.length / 2); // 최대 고를 수 있는 수
  const numbersMap = new Map(); // 숫자 등장 횟수를 저장할 Map 객체

  // 각 숫자의 등장 횟수를 Map에 저장
  numbers.forEach((num) => {
    numbersMap.set(num, (numbersMap.get(num) || 0) + 1);
  });

  // Map의 사이즈와 maxNum 중 작은 값을 반환
  return Math.min(numbersMap.size, maxNum);
}