// 정수를 나선형으로 배치하기

// 양의 정수 n이 매개변수로 주어집니다. 
// n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// 입력: 4
// 출력: [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]

function solution(n) {
    let arr = new Array(n).fill().map(_ => new Array(n).fill(0));
    let [y, x] = [0, 0];  // arr에 값을 넣을 위치
    let [dy, dx] = [[0, 1, 0, -1], [1, 0, -1, 0]];  // 시계방향
    let num = 1;  // 정수값
    let direction = 0;  // 현재 방향 (0: 오른쪽, 1: 아래, 2: 왼쪽, 3: 위)
    
    while(num <= n ** 2) {  // arr안에 num값이 다 채워질때까지 동작
      arr[y][x] = num++;  // arr안 num값 채우기
      
      switch(direction) {  // dirction기준으로 다음 방향 설정
        case 0:  // 오른쪽
          if(x === n - 1 || arr[y + dy[0]][x + dx[0]] !== 0) {  // 더이상 오른쪽으로 갈 수 없다면
            direction = 1;
            y += dy[1];
            x += dx[1];
          }
          else { // 오른쪽으로 갈 수 있다면
            y += dy[0];
            x += dx[0];
          }
          break;
        case 1:  // 아래
          if(y === n - 1 || arr[y + dy[1]][x + dx[1]] !== 0) { 
            direction = 2;
            y += dy[2];
            x += dx[2];
          }
          else {
            y += dy[1];
            x += dx[1];
          }
          break;
        case 2:  // 왼쪽
          if(x === 0 || arr[y + dy[2]][x + dx[2]] !== 0) { 
            direction = 3;
            y += dy[3];
            x += dx[3];
          }
          else {
            y += dy[2];
            x += dx[2];
          }
          break;
        case 3:  // 위
          if(y === 0 || arr[y + dy[3]][x + dx[3]] !== 0) { 
            direction = 0;
            y += dy[0];
            x += dx[0];
          }
          else {
            y += dy[3];
            x += dx[3];
          }
          break;
      }
    }
    return arr;
  }

console.log(solution(4));