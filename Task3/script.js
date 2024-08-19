function longestConsecutiveChain(arr) {
  if (arr.length === 0) return 0;

  const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);

  let maxChainLength = 1;
  let currentChainLength = 1;

  for (let i = 1; i < uniqueArr.length; i++) {
    if (uniqueArr[i] === uniqueArr[i - 1] + 1) {
      currentChainLength++;
    } else if (uniqueArr[i] !== uniqueArr[i - 1]) {
      maxChainLength = Math.max(maxChainLength, currentChainLength);
      currentChainLength = 1;
    }
  }

  maxChainLength = Math.max(maxChainLength, currentChainLength);

  return maxChainLength;
}

const array = [1, 3, 4, 5, 8, 6, 2];
console.log(longestConsecutiveChain(array)); // Output: 6 (sequence: 1, 2, 3, 4, 5, 6)

// Time Complexity: O(n log n), where n is the number of elements in the array. This is due to the sorting operation. The iteration through the array is O(n).

// Space Complexity: O(n) due to the space required for storing unique elements in a set.
