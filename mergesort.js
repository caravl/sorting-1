function split(array) {
  let first = [],
  second = [];
  let midpoint = Math.floor(array.length / 2)
  first = array.slice(0, midpoint);
  second = array.slice(midpoint);
  return [first, second]
}

function mergeSort(array) {
  let firstArray = array[0],
  secondArray = array[1];

  let resultArray =[];

  let queue = new Array(2);

  queue[0] = firstArray.shift();
  queue[1] = secondArray.shift();

  while (queue.length) {

    if (queue[0] < queue[1]) {
      resultArray.push(queue.shift());
      if (firstArray.length) { queue.unshift(firstArray.shift()) };

    } else {
      resultArray.push(queue.pop());
      if (secondArray.length) { queue.push(secondArray.shift()) };
    }
  }

  return resultArray;
}
