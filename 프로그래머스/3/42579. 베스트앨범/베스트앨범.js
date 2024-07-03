function solution(genres, plays) {
  const answer = [];
  const playMap = {};
  const genrePlayCount = {};

  // 장르별로 재생 횟수 저장한 키-값 객체 생성
  for (let i = 0; i < genres.length; i++) {
    if (!playMap[genres[i]]) {
      playMap[genres[i]] = [];
      genrePlayCount[genres[i]] = 0;
    }
    playMap[genres[i]].push({ index: i, count: plays[i] });
    genrePlayCount[genres[i]] += plays[i];
  }

  // 장르별 재생 횟수 내림차순 정렬
  const sortedGenres = Object.keys(playMap).sort((a, b) => genrePlayCount[b] - genrePlayCount[a]);

  // 각 장르의 곡들을 재생 횟수 내림차순으로 정렬하고 상위 두 개의 곡을 가져옴
  sortedGenres.forEach((genre) => {
    playMap[genre].sort((a, b) => b.count - a.count);
    answer.push(...playMap[genre].slice(0, 2).map(song => song.index));
  });

  return answer;
}