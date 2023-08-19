// 배열 만들기 1

// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 입력: 10, 3
// 출력: [3, 6, 9]

function solution(n, k) {
    let arr = new Array(n).fill().map((el, i) => i + 1).filter(el => el % k === 0);
    return arr;
}

console.log(solution(10, 3));