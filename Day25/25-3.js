// 정사각형으로 만들기

// 이차원 정수 배열 arr이 매개변수로 주어집니다. 
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// 입력: [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]
// 출력: [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]

function solution(arr) {
    let maxLen = Math.max(arr.length, ...arr.map(el => el.length));
    let result = new Array(maxLen).fill().map(el => new Array(maxLen).fill(0));

    arr.forEach((el1, i1) => {
        for(let i = 0; i < el1.length; i++) result[i1][i] = el1[i];
    });

    return result;
}

console.log(solution([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]));