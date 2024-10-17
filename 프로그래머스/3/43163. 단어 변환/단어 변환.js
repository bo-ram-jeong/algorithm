// 두 단어가 한 글자만 다른지 확인하는 함수
function checkWord(word1, word2) {
  let diffCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
    }

    if (diffCount > 1) {
      return false; // 한 글자보다 더 많이 다르면 false
    }
  }

  return diffCount === 1; // 한 글자만 다르면 true
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가

  const queue = [[begin, 0]]; // 큐에 [현재 단어, 변환 횟수] 저장
  const visited = new Set(); // 방문한 단어 저장할 Set
  visited.add(begin);

  while (queue.length > 0) {
    const [currentWord, step] = queue.shift();

    if (currentWord === target) {
      return step; // target 도달하면 변환 횟수 반환
    }

    // 현재 단어에서 변환 가능한 단어들을 찾아 큐에 추가
    for (let word of words) {
      if (!visited.has(word) && checkWord(currentWord, word)) {
        visited.add(word); // 방문한 단어로 체크
        queue.push([word, step + 1]); // 큐에 [다음 단어, 변환 횟수 + 1]을 추가
      }
    }
  }

  return 0; // target에 도달할 수 없으면 0 반환
}