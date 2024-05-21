const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr;
}

removeElement(array, 4);