const formatArray = (arr) => `The array has ${arr?.length} items, and the first item is "${arr[0]}", and the last item is "${arr[arr?.length-1]}"`

const items = ["apple","banana","orange"];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".