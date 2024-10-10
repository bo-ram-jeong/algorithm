function solution(array, commands) {
  const result = [];
  commands.forEach((data, index) => {
    const slicedArray = array.slice(data[0] - 1, data[1]);
    slicedArray.sort((a, b) => a - b);
    result.push(slicedArray[data[2] - 1]);
  });

  return result;
}