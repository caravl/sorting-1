describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });
  it('swaps a certain number of times', function () {
    bubbleSort([3, 2, 88]);
    expect(swap.calls.count()).toEqual(1);
  })
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
