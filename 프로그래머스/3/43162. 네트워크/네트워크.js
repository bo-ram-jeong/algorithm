function solution(n, computers) {
  const visited = Array(n).fill(false); // 모든 컴퓨터 방문되지 않은 상태로 초기화
  let networkCount = 0; // 네트워크의 개수

  // DFS 탐색 함수
  function dfs(node) {
    visited[node] = true; // 현재 노드 방문 처리

    // 현재 컴퓨터와 연결된 다른 컴퓨터 탐색
    for (let i = 0; i < n; i++) {
      if (!visited[i] && computers[node][i] === 1) {
        dfs(i); // 연결된 컴퓨터가 있다면 그 컴퓨터 방문
      }
    }
  }

  // 모든 컴퓨터 순회하면서 네트워크 탐색
  for (let i = 0; i < n; i++) {
    // 아직 방문되지 않은 컴퓨터 있다면
    if (!visited[i]) {
      dfs(i); // DFS 탐색
      networkCount++; // 네트워크 추가
    }
  }

  return networkCount;
}