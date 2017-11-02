describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([3, 5, 93, 4])).toEqual( [[3, 5], [93, 4]] );
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort([ [1, 3, 5], [2, 4, 6] ]) ).toEqual( [1, 2, 3, 4, 5, 6] );
  });
});
