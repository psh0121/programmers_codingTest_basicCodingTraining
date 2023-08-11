// 이어 붙인 수

// 정수가 담긴 리스트 num_list가 주어집니다. 
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// 입력: [3, 4, 5, 2, 1]	
// 출력: 393

function solution(num_list) {
    let odd = num_list.filter(el => el % 2 === 1).join("");
    let even = num_list.filter(el => el % 2 === 0).join("");

    return Number(odd) + Number(even);
}

console.log(solution([3, 4, 5, 2, 1]));