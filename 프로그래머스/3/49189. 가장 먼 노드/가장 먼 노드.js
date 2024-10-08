function solution(n, edge) {
  const graph = [];

  const dist = Array(n + 1).fill(0); // 모든 노드를 0으로 초기화
  dist[1] = 1; // 1번 노드에서 출발하기 위해 초기화

  for (let i = 0; i < n + 1; i++) {
    graph.push([]);
  }

  edge.forEach(([i, j]) => {
    graph[i].push(j);
    graph[j].push(i);
  });

  const queue = [1]; // 시작 노드 1을 넣어서 초기화

  // 큐에 노드가 남아있을 동안
  while (queue.length) {
    // 현재 꺼낸 노드
    const cur = queue.shift();
    // 현재 꺼낸 노드와 연결된 노드를 돌면서
    graph[cur].forEach((v) => {
      // 확인 중인 노드가 방문하지 않은 노드라면
      // 방문 처리해주면서 해당 노드까지의 거리를 현재 노드까지의 거리 + 1로 설정
      if (!dist[v]) {
        dist[v] = dist[cur] + 1;
        queue.push(v); // 연결된 노드를 큐에 넣어줌
      }
    });
  }

  const result = dist.filter((v) => v === Math.max(...dist));

  return result.length;
}