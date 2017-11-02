function swap(first, second, array) {
  let holder = array[second];
  array[second] = array[first];
  array[first] = holder;
  return array;
}

function bubbleSort(array){
  if (array.length <= 1) return array;
  let length = array.length;
  while (length > 0){
    let first = 0,
    second = first + 1;
    for (first; second < length; first++, second++){
       if (array[first] > array[second]){
          array = swap(first, second, array);
        }
      }
    length--;
  }
  return array;
}
