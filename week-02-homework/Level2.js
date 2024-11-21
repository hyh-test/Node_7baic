const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
]

// myForEach 를 구현하여 arr.forEach 와 동일한 값이 나오도록 하기.
function myForEach(arr, callback) {
    // myForEach 구현
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}
/**
{ name: 'apple', price: 100 }
{ name: 'banana', price: 200 }
{ name: 'grape', price: 300 }
 */

objArray.forEach(function (obj) {
    console.log(obj);
});

myForEach(objArray, function (obj) {
    console.log(obj);
});

// find를 이용하여 name 이 grape 인 객체를 찾기
const found = objArray.find(function (value) {
    return value.name === 'grape';
});
console.log(found);

// findIndex를 이용하여 name 이 apple 인 객체의 index 찾기
const foundIndex = objArray.findIndex(function (value) {
    return value.name === 'apple';
});
console.log(foundIndex);
