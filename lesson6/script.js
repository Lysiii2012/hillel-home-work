const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(arr, item) {
    return array.filter(element => element !== item)
}

removeElement(array, 4);