// 주사위 게임 2

// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 
// 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// 입력: 2, 6, 1
// 출력: 9

function solution(a, b, c) {
    let arr = [a, b, c];
    let sameCnt = 0;
    let result = 0;

    // 같은수의 개수가 가장 큰 수를 sameCnt에 넣기
    sameCnt = Math.max(arr.filter(el => a === el).length, 
                        arr.filter(el => b === el).length, 
                        arr.filter(el => c === el).length
                    );

    if(sameCnt >= 1) result += arr.reduce((acc, curr) => acc + curr);
    if(sameCnt >= 2) result *= arr.reduce((acc, curr) => acc + curr**2, 0);
    if(sameCnt >= 3) result *= arr.reduce((acc, curr) => acc + curr**3, 0);

    return result;
}

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));