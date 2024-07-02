function solution(info, query) {
  const answer = [];
  const infoMap = {};

  function addInfo(key, score) {
    if (!infoMap[key]) {
      infoMap[key] = [];
    }
    infoMap[key].push(score);
  }

  function combinations(arr, score, start) {
    const key = arr.join('');
    addInfo(key, score);
    for (let i = start; i < arr.length; i++) {
      const temp = [...arr];
      temp[i] = '-';
      combinations(temp, score, i + 1);
    }
  }

  info.forEach((item) => {
    const split = item.split(' ');
    const score = Number(split.pop());
    const keys = split;
    combinations(keys, score, 0);
  });

  for (const key in infoMap) {
    infoMap[key].sort((a, b) => a - b);
  }

  query.forEach((q) => {
    const split = q.replace(/ and /g, ' ').split(' ');
    const score = Number(split.pop());
    const key = split.join('');

    if (!infoMap[key]) {
      answer.push(0);
      return;
    }

    const scores = infoMap[key];
    let left = 0;
    let right = scores.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (scores[mid] >= score) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    answer.push(scores.length - left);
  });

  return answer;
}