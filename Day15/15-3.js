// 1로 만들기

// 정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 
// 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.
// 10 / 2 = 5
// (5 - 1) / 2 = 4
// 4 / 2 = 2
// 2 / 2 = 1
// 위와 같이 4번의 나누기 연산으로 1이 되었습니다.
// 정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.

// 입력: [12, 4, 15, 1, 14]
// 출력: 11

function solution(num_list) {
    let cnt = 0;
    let temp = undefined;
    let result = num_list.map(el => {
        cnt = 0;
        temp = el;

        while(temp !== 1) {
            if(temp % 2 === 0) temp = temp / 2;
            else temp = (temp - 1) / 2;
            cnt++;
        }

        return cnt;
    }).reduce((acc, val) => acc + val, 0);

    return result;
}

console.log(solution([12, 4, 15, 1, 14]));