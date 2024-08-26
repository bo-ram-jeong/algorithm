function solution(n, times) {
  const sorted = times.sort((a, b) => a - b);
  //심사 최소시간
  let min = 1;
  //모든사람 심사 최대시간
  let max = sorted[sorted.length - 1] * n;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    //mid 시간동안 심사할수있는 사람의수
    const total = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (total < n) {
      //현재시간 mid로는 충분하지 않으므로 1증가
      min = mid + 1;
    } else {
      //충분하므로 1감소
      max = mid - 1;
    }
  }

  return min;
}
