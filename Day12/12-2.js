// 첫 번째로 나오는 음수

// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 
// 음수가 없다면 -1을 return합니다.

// 입력: [12, 4, 15, 46, 38, -2, 15]
// 출력: 5

function solution(num_list) {
    let result = -1;

    for(let i = num_list.length - 1; i >= 0; i--) {
        if(num_list[i] < 0) result = i;
    }

    return result;
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));