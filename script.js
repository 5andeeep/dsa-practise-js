let arr = [1, 2, 2, 1, 3, 4, 4, 5, 6, 6, 5, 4];

function checkSingleValue(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    };

    let uniqueValue = null;
    map.forEach((value, key) => {
        if (value === 1) {
            uniqueValue = key;
        }
    });
    return uniqueValue;
}

let ans = checkSingleValue(arr);
console.log(ans);