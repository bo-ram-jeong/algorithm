function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const words = [];

  // 재귀적으로 가능한 모든 단어 생성
  function createWord(currentWord, length) {
    if (length > 5) return; // 최대 길이가 5이므로, 5 이상이면 종료
    words.push(currentWord); 

    // 모음들로 새로운 단어를 생성
    for (let vowel of vowels) {
      createWord(currentWord + vowel, length + 1);
    }
  }

  // 빈 문자열부터 시작해서 가능한 모든 단어 생성
  createWord('', 0);
    
  return words.indexOf(word);
}