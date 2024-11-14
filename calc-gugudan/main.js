// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';

function numberPut(message) {
    let number
    console.log(message);
    number = readlineSync.question();

    if (!isNaN(number) && number.trim() !== "") {
        return parseFloat(number); // 숫자로 변환하여 반환
    } else {
        console.log("숫자만 가능합니다.");
    }
}

// 프로그램 시작
function main() {
    // 사용자로부터 입력을 받습니다.
    console.log(`\n1. 사칙연산 계산기 2.구구단`);
    const choice = readlineSync.question('입력: ')
    switch (choice) {
        case '1': {
            console.clear();
            const firstNumber = numberPut("첫번째 숫자를 입력하세요");
            const secondNumber = numberPut("두번째 숫자를 입력하세요");
            calculator(firstNumber, secondNumber)
            break;
        }
        case '2': {
            printMultiplicationTable()
            break;
        }
    }

    // 입력에 따라 해당 기능을 실행합니다.
}


// 사칙연산 계산기 함수
function calculator(a, b) {
    // 4번 선택지를 b가 0일 때 비활성화
    if (b === 0) {
        console.log(`\n1: 덧셈, 2: 뺄셈, 3: 곱셈 (0으로 나눌수 없습니다)`);
    } else {
        console.log(`\n1: 덧셈, 2: 뺄셈, 3: 곱셈, 4: 나눗셈`);
    }

    const calculateChoice = readlineSync.question(`원하는 연산을 선택하세요 (1, 2, 3${b === 0 ? '' : ', 4'}): `);

    switch (calculateChoice) {
        case '1': {
            console.log(`결과: ${a} + ${b} = ${a + b}`);
            break;
        }
        case '2': {
            console.log(`결과: ${a} - ${b} = ${a - b}`);
            break;
        }
        case '3': {
            console.log(`결과: ${a} * ${b} = ${a * b}`);
            break;
        }
        case '4': {
            if (b === 0) {
                console.clear
                console.log(`잘못된 입력입니다. 1, 2, 3 중 하나를 선택하세요.\n`);
                return calculator(a, b);
            } else {
                console.log(`결과: ${a} / ${b} = ${a / b}`);
            }
            break;
        }
        default: {
            console.clear
            console.log(`잘못된 입력입니다. 1, 2, 3${b === 0 ? '' : ', 4'} 중 하나를 선택하세요.\n`);
            return calculator(a, b);
        }
    }
}


// 구구단 출력 함수
function printMultiplicationTable() {
    console.log(`몇단을 출력하겠습니까`)
    const multipleChoice = readlineSync.question('');

    for (let i = 1; i <= 9; i++) {
        if (multipleChoice >= '1' && multipleChoice <= '9') {
            console.log(`${multipleChoice} * ${i} = ${multipleChoice * i}`);
        } else {
            console.log("1에서 9 사이의 숫자를 입력하세요.");
            break;
        }
    }
    // 여기에 코드를 작성하세요.
}

// 프로그램 실행
main();
