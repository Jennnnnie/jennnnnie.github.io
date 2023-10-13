// Your first assignment is to write the function selectionSort(int arr[])
// note: sorting an array requires that the elements of an array be comparable, i.e. element1 > element2 will return true or false. We use ints in this case for that reason)
// Don't forget to make your output look nice.
// I'd say you should manually create an array of like 20 numbers
// print the unsorted array
// print the array after your sort has been done on it.

const arr = [7, 9, 3, 5, 15, 10, 0];

const selectionSort = (arr) => {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    // taking the first index we ASSUME is the smallest value
    let minIndex = i;

    for (let j = i + 1; j < arrLength; j++) {
      // checking if the second index value is smaller than the first and so and so forth until the last index of the array
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }

      if (minIndex !== i) {
        // swap
        const swap = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = swap;
      }
    }

    return arr;
  }

  selectionSort(arr);
  console.log(arr);
};
