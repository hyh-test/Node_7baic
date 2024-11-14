// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function sum(a, b) {
  return a + b
}
console.log(sum(1, 2))
// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function hello(name) {
  return `안녕하세요, ${name}님!`
}

console.log(hello('황종하'))

// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function compare(a, b, c) {
  return Math.max(a, b, c)
}

console.log(compare(9, 1, 8))

// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function oddEven(a) {
  if (a % 2 === 0) {
    console.log('짝수입니다.')
  }
  else {
    console.log('홀수입니다.')
  }
}
oddEven(2)

// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
let arry = [1, 7, 5, 4, 8]
function allArry(a) {
  for (let i = 0; i < arry.length; i++) {
    console.log(a[i])
  }
}
allArry(arry)
