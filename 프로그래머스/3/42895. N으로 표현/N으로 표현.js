function solution(N, number) {
    const dp = Array.from({ length: 9 }, () => new Set()); // dp[i]는 N을 i번 사용해서 만들 수 있는 숫자들의 집합

    // N을 여러 번 이어붙인 수를 초기화
    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(N.toString().repeat(i))); // 예: N=5라면 dp[3]에 555 추가
    }

    // 동적 계획법으로 해결
    for (let i = 1; i <= 8; i++) { // N을 1번부터 8번까지 사용
        for (let j = 1; j < i; j++) { // i를 두 그룹으로 나누어 처리
            for (let op1 of dp[j]) {
                for (let op2 of dp[i - j]) {
                    dp[i].add(op1 + op2); // 덧셈
                    dp[i].add(op1 - op2); // 뺄셈
                    dp[i].add(op1 * op2); // 곱셈
                    if (op2 !== 0) dp[i].add(Math.floor(op1 / op2)); // 나눗셈
                }
            }
        }
        // 만약 number가 dp[i]에 존재한다면 최소값은 i
        if (dp[i].has(number)) {
            return i;
        }
    }

    // number를 만들 수 없으면 -1 반환
    return -1;
}