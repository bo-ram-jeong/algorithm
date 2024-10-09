function solution(numbers) {
  const sortedNumbers = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b));

  return sortedNumbers[0] === '0' ? '0' : sortedNumbers.join('');
}