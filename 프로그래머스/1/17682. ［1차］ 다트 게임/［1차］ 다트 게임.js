function solution(dartResult) {
    let answer = 0;
    let scores = [];
    let score = 0;

    for (let i = 0; i < dartResult.length; i++) {
        let char = dartResult[i];

        if (!isNaN(char)) { // 숫자인 경우
            if (char === '1' && dartResult[i + 1] === '0') { // "10"인 경우
                score = 10;
                i++; // "0"을 건너뜀
            } else {
                score = Number(char);
            }
            scores.push(score);
        } else if (char === 'S') {
            scores[scores.length - 1] = Math.pow(scores[scores.length - 1], 1);
        } else if (char === 'D') {
            scores[scores.length - 1] = Math.pow(scores[scores.length - 1], 2);
        } else if (char === 'T') {
            scores[scores.length - 1] = Math.pow(scores[scores.length - 1], 3);
        } else if (char === '*') {
            if (scores.length > 1) {
                scores[scores.length - 2] *= 2;
            }
            scores[scores.length - 1] *= 2;
        } else if (char === '#') {
            scores[scores.length - 1] *= -1;
        }
    }

    answer = scores.reduce((acc, cur) => acc + cur, 0);
    return answer;
}
