describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single item array', function(){
    expect(bubbleSort([3])).toEqual([3]);
  });
  it('handles a multiple item array', function(){
    expect(bubbleSort([3, 2, 88, 43, 1])).toEqual([1, 2, 3, 43, 88]);
  });
});
