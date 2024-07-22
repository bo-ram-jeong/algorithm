function solution(n, wires) {
  // 최소 차이 저장 변수
  let diff = Number.MAX_SAFE_INTEGER; // 최대 정수로 초기화하여 최소값을 찾을 수 있도록 함 

  // 인접 리스트 배열 초기화
  const graph = Array.from({ length: n + 1 }, () => []);

  // 인접 리스트 세팅
  wires.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  // BFS: start에서 시작하여 except 노드 제외하여 탐색
  const bfs = (start, except) => {
    let count = 0; // 도달할 수 있는 노드 개수
    let queue = [start]; // 시작 노드를 큐에 추가
    let visited = Array(n + 1).fill(false); // 방문 여부 배열

    visited[start] = true; // 시작 노드 방문 처리

    // 큐가 비어있지 않는 동안
    while (queue.length) {
      const currentNode = queue.shift(); // 큐의 맨 앞 노드를 꺼내 현재 노드로 설정
      // 현재 노드에 연결된 모든 이웃 노드 탐색
      graph[currentNode].forEach((neighbor) => {
        // 이웃 노드가 제외할 노드가 아니고, 아직 방문하지 않은 경우
        if (neighbor !== except && !visited[neighbor]) {
          visited[neighbor] = true; // 방문 처리
          queue.push(neighbor); // 이웃 노드 큐에 추가하여 다음 탐색 대상으로 설정
        }
      });
      count++;
    }
    return count;
  };

  // 각 전선을 하나씩 끊어서 두 네트워크 차이 계산
  wires.forEach(([from, to]) => {
    diff = Math.min(diff, Math.abs(bfs(from, to) - bfs(to, from)));
  });
    
  return diff;
}
