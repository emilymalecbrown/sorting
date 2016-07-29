describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with two items', function() {
  	expect ( bubbleSort([3,2]) ).toEqual( [2,3] );
  })

  it('handles an array with three items', function() {
  	expect ( bubbleSort([3,2,5]) ).toEqual( [2,3,5] );
  })

  it('handles an array with six items', function() {
  	expect ( bubbleSort([3,2,6,7,4,4]) ).toEqual( [2,3,4,4,6,7] );
  })

 


});
