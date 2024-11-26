const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
]

function myFilter(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]); 
        }
    }

    return result; 
}

const result1 = myFilter(objArray, function(obj) {
    return obj.price >= 200;  // price가 200 이상인 요소들만 필터링
});
console.log(result1)



function myMap(arr, callback) {
    let Array = []; 
    for (let i = 0; i < arr.length; i++) {
        Array.push(callback(arr[i]));  
    }
    return Array; 
}

const result = myMap(objArray, function(obj) {
    return obj.price; 
});

console.log(result);

const arr = [1, 2, 3, 4, 5];

// reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합을 구하기.
const reduced = arr.reduce(function (prev, current) {
    return prev + current * 2;
}, 0);
console.log(reduced)