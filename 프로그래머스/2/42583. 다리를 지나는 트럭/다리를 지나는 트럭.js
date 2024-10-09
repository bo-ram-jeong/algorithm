function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0); // 다리 길이만큼 배열 생성
  let time = 0; // 시간 초기화
  let bridgeWeight = 0; // 다리 위 트럭들의 현재 무게

  while (bridge.length) {
    time++; // 시간 흐름

    // 다리 맨 앞의 트럭(또는 0) 내보냄
    bridgeWeight -= bridge.shift();

    // 대기 트럭이 남아있다면 다리 위 무게와 비교
    if (truck_weights.length > 0) {
      if (bridgeWeight + truck_weights[0] <= weight) {
        // 대기 중인 트럭을 다리로 올림
        const truck = truck_weights.shift();
        bridge.push(truck);
        bridgeWeight += truck;
      } else {
        // 무게가 초과되면 0(빈 공간) 추가
        bridge.push(0);
      }
    }
  }

  return time;
}