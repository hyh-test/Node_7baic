const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
]

// myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
function myFilter(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price >= 200) {
            callback(arr[i])
        }
    }
    // myFilter 구현
}
myFilter(objArray, function (obj) {
    console.log(obj);
});



// myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
function myMap(arr, callback) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i].price)
    }
    callback(array)
}

myMap(objArray, function (obj) {
    console.log(obj);
});





const arr = [1, 2, 3, 4, 5];

// reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합을 구하기.
const reduced = arr.reduce(function (prev, current) {
    return prev + current * 2;
}, 0);
console.log(reduced)