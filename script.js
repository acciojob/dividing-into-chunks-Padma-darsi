const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      // Add num to the current chunk if it doesn't exceed n
      currentChunk.push(num);
      currentSum += num;
    } else {
      // Push the current chunk to result and start a new chunk
      result.push(currentChunk);
      currentChunk = [num];
      currentSum = num;
    }
  }

  // Push the last chunk if it's not empty
  if (currentChunk.length) {
    result.push(currentChunk);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
