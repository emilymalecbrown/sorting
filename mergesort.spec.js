describe('Split Array function', function() {
//   it("should show that method split is called with zero arguments", function() {
//     // Ensure the spy was called with the correct number of arguments
//     // In this case, no arguments
//     expect().toHaveBeenCalled();
// });
	
	beforeEach(function() {
		spyOn(window, 'Split').and.callThrough(); 
	})

	it ('calls the split function', function() {
		var splitter = [3,2,6,7,4,4]
		var result = Split(splitter)
		expect(Split.calls.count()).toBeGreaterThan(0);
	});


  it('handles an array with zero items', function() {
  	expect ( mergeSort([]) ).toEqual([]);
  })

  it('handles an array with six items', function() {
  	expect ( mergeSort([3,2,6,7,4,4]) ).toEqual([2,3,4,4,6,7]);
  })

 

});

