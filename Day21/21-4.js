// 문자열 정수의 합

// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

// 입력: "123456789"
// 출력: 45

function solution(num_str) {
    let result = num_str.split('').map(el => Number(el)).reduce((acc, val) => acc + val, 0);
    return result;
}

console.log(solution("123456789"));