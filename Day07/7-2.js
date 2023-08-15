// 배열 만들기 2

// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

// 입력: 5, 555
// 출력: [5, 50, 55, 500, 505, 550, 555]

function solution(l, r) {
    let result = [];
    let i = 1;
    let num = 0;    // 2진수로 변환

    while(true) {
        num = Number((i.toString(2)) * 5);

        if(num > r) break;
        if(num >= l) result.push(num);

        i++;
    }

    return result.length ? result : [-1];
}

console.log(solution(5, 555));