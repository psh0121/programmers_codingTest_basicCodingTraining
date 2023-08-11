// 원소들의 곱과 합

// 정수가 담긴 리스트 num_list가 주어질 때, 
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 입력: [3, 4, 5, 2, 1]	
// 출력: 1

function solution(num_list) {
    let gop = num_list.reduce((acc, curr) => acc * curr, 1);
    let sum = num_list.reduce((acc, curr) => acc + curr, 0)**2;

    return Number(gop < sum);
}

console.log(solution([3, 4, 5, 2, 1]));