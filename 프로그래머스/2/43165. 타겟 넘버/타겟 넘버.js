function solution(numbers, target) {
  let count = 0;

  const dfs = (index, currentSum) => {
    if (index === numbers.length) {
      if (currentSum === target) {
        count++;
      }
      return;
    }

    // 더하기 연산
    dfs(index + 1, currentSum + numbers[index]);

    // 빼기 연산
    dfs(index + 1, currentSum - numbers[index]);
  }

  // 초기 호출
  dfs(0, 0);

  return count;
}