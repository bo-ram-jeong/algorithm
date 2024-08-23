function solution(N, number) {
  //dp: N을 i번 사용해서 만들 수 있는 숫자들의 집합
  const dp = Array.from(new Array(9), () => new Set());
  if (N == number) return 1;
  else {
    //N을 여러번 이어붙인 수 초기화
    dp.forEach((element, index) => {
      if (index !== 0) element.add(Number(String(N).repeat(index)));
    });

    // N을 1부터 8까지 사용하여 만들 수 있는 모든 숫자 계산
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j < i; j++) {
        for (const arg1 of dp[j]) {
          for (const arg2 of dp[i - j]) {
            dp[i].add(arg1 + arg2);
            dp[i].add(arg1 - arg2);
            dp[i].add(arg1 * arg2);
            dp[i].add((arg1 / arg2) >> 0);
          }
        }
      }

      //최소값 리턴
      if (dp[i].has(number)) return i;
    }

    //8번만에 number 못 찾으면 -1 반환
    return -1;
  }
}