// 홀수 vs 짝수

// 정수 리스트 num_list가 주어집니다. 
// 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 
// 두 값이 같을 경우 그 값을 return합니다.

// 입력: [4, 2, 6, 1, 7, 6]	
// 출력: 17

function solution(num_list) {
    let oddSum = num_list.filter((el, i) => i % 2 === 0).reduce((acc, val) => acc + val, 0);
    let evenSum = num_list.filter((el, i) => i % 2 === 1).reduce((acc, val) => acc + val, 0);

    return Math.max(oddSum, evenSum);
}

console.log(solution([4, 2, 6, 1, 7, 6]));