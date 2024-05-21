const mixedArray = [1, 3, 'first', '2 aples', 20, null, undefined, 305, '22'  ]

function filterNumber(arr) {
    const ressFilter = arr.filter(item => typeof item === 'number' );
    if (ressFilter.length === 0) {
            return 0;
        }

    let resultSum = ressFilter.reduce((sum, current) => sum + current, 0);
    const resultsAverage = resultSum / ressFilter.length;

    return resultsAverage ;
}

filterNumber(mixedArray)
