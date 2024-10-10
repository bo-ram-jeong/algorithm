function solution(array, commands) {
  return commands.map((data) => {
    const slicedArray = array.slice(data[0] - 1, data[1]);
    slicedArray.sort((a, b) => a - b);
    return slicedArray[data[2] - 1];
  });
}