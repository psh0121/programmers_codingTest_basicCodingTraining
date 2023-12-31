// 이차원 배열 대각선 순회하기

// 2차원 정수 배열 board와 정수 k가 주어집니다.
// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

// 입력: [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]], 2
// 출력: 8

function solution(board, k) {
    let result = [];

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(i + j <= k) result.push(board[i][j]);
        }
    }

    return result.reduce((acc, val) => acc + val, 0);
}

console.log(solution([[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]], 2));