function bubbleSort(array) {
	var minValue;
	var newArray = []; 
	for (var i=0; i<array.length; i++) {
		for (var j=0; j<array.length-i-1; j++) {
			if (array[j] > array[j+1]) {
				var minValue = array[j+1];
				array[j+1] = array[j];
				array[j] = minValue;
			} 
		} 
	}
	return array; 
}



// for (var i=0; i<array.length; i++) {
// 		for (var j=i+1; j<array.length; j++) {
// 			if (array[i] > array[j]) {
// 				newArray.push(array[j]);
// 				swap++;
// 				break;
// 			} else {
// 				newArray.push(array[i]);
// 			}
// 		} comparison++;
// 	}