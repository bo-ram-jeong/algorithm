// // 섬의 parent 반환
// function getParent(parentArr, point) {
//   // 만약 point가 자신의 부모라면, point를 반환
//   if (parentArr[point] === point) return point;
//   // 그렇지 않으면, point의 부모를 재귀적으로 찾고 경로 압축
//   return (parentArr[point] = getParent(parentArr, parentArr[point]));
// }

// // 섬의 parent 설정
// function setParent(parentArr, a, b) {
//   const parentA = getParent(parentArr, a);
//   const parentB = getParent(parentArr, b);

//   // parentA와 parentB를 비교하여 더 작은 쪽을 부모로 설정
//   if (parentA < parentB) return (parentArr[parentB] = parentA); // parentB의 부모를 parentA로 설정
//   return (parentArr[parentA] = parentB); // parentA의 부모를 parentB로 설정
// }

// function solution(n, costs) {
//   let answer = 0;

//   // 섬들의 parent 저장하는 배열 세팅
//   let parentArr = Array.from({ length: n }, (obj, index) => index);

//   // 섬 다리 건설 비용의 오름차순으로 정렬
//   costs.sort((a, b) => {
//     if (a[2] === b[2]) return a[0] - b[0];
//     return a[2] - b[2];
//   });

//   // 크루스칼 알고리즘(Union, Find) 활용하여 경로 찾음
//   for (const cost of costs) {
//     // 두 섬이 같은 부모를 가지지 않는 경우에만
//     if (getParent(parentArr, cost[0]) !== getParent(parentArr, cost[1])) {
//       answer += cost[2]; // 비용 추가
//       setParent(parentArr, cost[0], cost[1]); // 두 섬을 하나의 집합으로 합침
//     }
//   }

//   return answer;
// }

// 다른 방법 -> set 이용
function solution(n, costs) {
    // 비용 기준으로 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);

    let totalCost = 0;
    let connected = new Set();
    
    // 첫 번째 다리로 초기 연결 상태 설정
    let [from, to, cost] = costs.shift();
    connected.add(from);
    connected.add(to);
    totalCost += cost;

    // 모든 섬이 연결될 때까지 다리 추가
    while (connected.size < n) {
        for (let i = 0; i < costs.length; i++) {
            let [a, b, cost] = costs[i];

            // 한쪽 노드는 연결되었고, 다른 쪽 노드는 연결되지 않은 경우
            if ((connected.has(a) && !connected.has(b)) || 
                (connected.has(b) && !connected.has(a))) {
                
                // 비용 추가
                totalCost += cost;
                connected.add(a).add(b);

                // 사용한 다리 제거
                costs.splice(i, 1);
                break; // 이 다리로 인한 연결이 완료되었으므로 루프 종료
            }
        }
    }

    return totalCost;
}