// 간단한 식 계산하기

// 문자열 binomial이 매개변수로 주어집니다. 
// binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 
// 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

// 입력: "43 + 12"
// 출력: 55

function solution(binomial) {
    let arr = binomial.split(" ");
    [arr[0], arr[2]] = [Number(arr[0]), Number(arr[2])];

    let result = 0;

    switch(arr[1]) {
        case "+":
            result = arr[0] + arr[2];
            break;
        case "-":
            result = arr[0] - arr[2];
            break;
        case "*":
            result = arr[0] * arr[2];
            break;
        default:
            break;
    }

    return result;
}

console.log(solution("43 + 12"));