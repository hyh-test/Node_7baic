const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
]

// forEach를 이용하여 objArray의 name을 모두 출력
objArray.forEach(function (value) {
    console.log(value.name);
})

// myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
}
const index1 = arr.indexOf(3); // 2
const index2 = myIndexOf(arr, 3); // 2
console.log(`index : ${index1 === index2}`); // true

// myIncludes를 구현하여 arr.myIncludes와 동일한 값이 나오도록 하기.
const arr2 = [1, 2, 3, 4, 5];
function myIncludes(arr, value) {
    // myIncludes 구현
    let check = 0;
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            check +=1;
        }
    }
    if (check === 0) {
        return false;
    }
    else {
        return true;
    }
}
const includes1 = arr2.includes(3); // true
const includes2 = myIncludes(arr, 3); // true
const includes3 = myIncludes(arr, 6); // true
console.log(`include : ${includes1 === includes2}`); // true
console.log(`include : ${includes1 === includes3}`); // false

