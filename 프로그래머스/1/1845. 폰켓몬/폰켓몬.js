function solution(numbers) {
  const maxNum = Math.floor(numbers.length / 2);
  const numbersMap = new Map();

  numbers.forEach((num, index) => {
    if (!numbersMap.has(num)) {
      numbersMap.set(num, 0);
    }
    numbersMap.set(num, numbersMap.get(num) + 1);
  });

  return numbersMap.size > maxNum ? maxNum : numbersMap.size;
}