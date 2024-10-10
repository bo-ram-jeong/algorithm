function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const weight = [781, 156, 31, 6, 1]; // 각 자리에서의 가중치

    let result = 0;

    for (let i = 0; i < word.length; i++) {
        const index = vowels.indexOf(word[i]); // 현재 문자의 인덱스
        result += index * weight[i] + 1; // 가중치 계산
    }

    return result;
}