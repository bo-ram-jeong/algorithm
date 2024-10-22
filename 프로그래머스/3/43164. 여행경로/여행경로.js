function solution(tickets) {
  const routes = []; // 1차원 배열로 경로 저장

  // 도착지 기준 알파벳 순서로 정렬
  tickets.sort((a, b) => a[1].localeCompare(b[1]));

  const visited = Array(tickets.length).fill(false); // 티켓 사용 여부 체크

  // DFS 함수
  function dfs(current) {
    routes.push(current);

    // 모든 티켓 사용한 경우
    if (routes.length === tickets.length + 1) {
      return true;
    }

    // 모든 티켓 탐색
    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === current) {
        visited[i] = true; // 티켓 사용
        if (dfs(tickets[i][1])) return true; // 다음 목적지로 DFS 재귀 호출
        visited[i] = false; // 티켓 미사용
      }
    }

    routes.pop(); // 경로에서 제거
    return false;
  }

  dfs('ICN'); // ICN에서 시작하는 DFS 호출

  return routes;
}