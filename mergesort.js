function Split (arr)
{

	var middle = Math.floor(arr.length / 2);
	var leftArr = arr.slice(0, middle);
	var rightArr = arr.slice(middle);

	return [leftArr, rightArr];
}

function Merge (arr1, arr2)
{
	var result = [];

	while (arr1.length && arr2.length) {
		if (arr1[0] >= arr2[0]) {
			result.push(arr2.shift());
		} else {
			result.push(arr1.shift());
		}
	} 

	while (arr1.length) {
		result.push(arr1.shift());
	}

	while(arr2.length) {
		result.push(arr2.shift());
	}
	return result; 
}

function mergeSort (array) {
	if(array.length < 2) {
		return array; 
	}

	var splitLeft = Split(array)[0];
	var splitRight = Split(array)[1];

	return Merge(mergeSort(splitLeft), mergeSort(splitRight));

}
