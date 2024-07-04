function solution(operations) {
  let numArray = [];

  operations.map((operation) => {
    const op = operation.split(' ');

    //추가
    if (op[0] === 'I') {
      numArray.push(Number(op[1]));
    }
    //삭제
    else if (numArray.length && op[0] === 'D') {
      if (op[1] === '1') {
        //최댓값 삭제
        numArray = numArray.filter((item) => item !== Math.max(...numArray));
      } else if (op[1] === '-1') {
        //최솟값 삭제
        numArray = numArray.filter((item) => item !== Math.min(...numArray));
      }
    }
  });

  if (!numArray.length) return [0, 0];

  return [Math.max(...numArray), Math.min(...numArray)];
}