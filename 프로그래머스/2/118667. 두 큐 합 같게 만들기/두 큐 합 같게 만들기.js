function solution(queue1, queue2) {
  //이동횟수
  let count = 0;
  //queue1 합
  let queueTotal1 = queue1.reduce((acc, cur) => acc + cur, 0);
  //queue2 합
  let queueTotal2 = queue2.reduce((acc, cur) => acc + cur, 0);
  //queue1 + queue2
  let totalLength = queue1.length + queue2.length;

  let queue1Index = 0;
  let queue2Index = 0;

  while (queueTotal1 !== queueTotal2) {
    //1번 큐가 크다면 1번 큐에 있는걸 뺌.
    if (queueTotal1 > queueTotal2) {
      queueTotal1 -= queue1[queue1Index];
      queue2.push(queue1[queue1Index]);
      queueTotal2 += queue1[queue1Index++];
    }
    // 2번 큐가 크다면 2번 큐에 있는걸 뺌
    else {
      queueTotal1 += queue2[queue2Index];
      queue1.push(queue2[queue2Index]);
      queueTotal2 -= queue2[queue2Index++];
    }
    count++;

    if (queue1Index > totalLength || queue2Index > totalLength) {
      return -1;
    }
  }
  return count;
}