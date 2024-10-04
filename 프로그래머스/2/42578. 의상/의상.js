function solution(clothes) {
  const clothesMap = new Map(); // Map 객체를 사용하여 의상 종류별 개수 저장

  // 1. 의상 종류별로 개수 세기
  for (const [name, type] of clothes) {
    if (!clothesMap.has(type)) {
      clothesMap.set(type, 0); // 의상 종류가 처음 등장하면 0으로 초기화
    }
    clothesMap.set(type, clothesMap.get(type) + 1); // 해당 의상 종류 개수 증가
  }
  // 2. 조합 수 계산
  let combinations = 1;

  for (const count of clothesMap.values()) {
    combinations *= count + 1; // 각 종류 선택 가능성 (의상 수 + 1: 선택 안할 경우)
  }

  // 3. 아무 의상도 선택하지 않는 경우 제외하기 위해 1을 뺌
  return combinations - 1;
}