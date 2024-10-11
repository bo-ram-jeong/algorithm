function solution(maps) {
  const n = maps.length; // 맵 행 크기
  const m = maps[0].length; // 맵 열 크기

  // 4방향 설정 (상, 하, 좌, 우)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // BFS 큐
  const queue = [[0, 0, 1]]; // [x좌표, y좌표, 이동 거리]
  maps[0][0] = 0; // 시작점 방문 처리

  // BFS 시작
  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    // 상대 팀 진영 도착시 거리 반환
    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    // 4방향으로 이동
    for (let i = 0; i < 4; i++) {
      const [dx, dy] = directions[i];
      const nx = x + dx;
      const ny = y + dy;

      // 맵 안에 있고 벽이 아닌 경우에만 이동
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny, dist + 1]);
        maps[nx][ny] = 0; // 방문 처리
      }
    }
  }

  // 도달할 수 없는 경우
  return -1;
}