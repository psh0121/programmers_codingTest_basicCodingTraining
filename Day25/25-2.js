// 특별한 이차원 배열 2

// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
// 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]

// 입력: [[5, 192, 33], [192, 72, 95], [33, 95, 999]]
// 출력: 1

function solution(arr) {
    len = arr.length;

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(arr[i][j] !== arr[j][i]) return 0;
        }
    }

    return 1;
}

console.log(solution([[5, 192, 33], [192, 72, 95], [33, 95, 999]]));