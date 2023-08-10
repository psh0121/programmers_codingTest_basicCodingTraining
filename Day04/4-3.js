// 홀짝에 따라 다른 값 반환하기

// 양의 정수 n이 매개변수로 주어질 때, 
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

// 입력: 7
// 출력: 16

function solution(n) {
    let result = 0;

    // 만약 홀수라면 --> n이하의 홀수 합
    if(n % 2 === 1) {
        for(let i = 1; i <= n; i+=2) {
            result += i;
        }
    }

    // 만약 짝수라면 --> n이하의 짝수 제곱의 합
    else {
        for(let i = 2; i <= n; i+=2) {
            result += i**2;
        }
    }

    return result;
}

console.log(solution(7));