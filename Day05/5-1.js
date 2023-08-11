// 코드 처리하기

// https://school.programmers.co.kr/learn/courses/30/lessons/181932 링크 참고

// 입력: "abc1abc1abc"
// 출력: "acbac"

function solution(code) {
    let mode = 0;
    let result = "";

    for(let i = 0; i < code.length; i++) {
        // 1을 만나면 모드 변경
        if(code[i] === "1") {
            mode = (mode + 1) % 2;
            continue;
        }

        if(mode === 0) {
            if(i % 2 === 0) result += code[i];
            else continue;
        }
        else {
            if(i % 2 === 1) result += code[i];
            else continue;
        }
    }

    return result.length === 0 ? "EMPTY" : result;
}

console.log(solution("abc1abc1abc"));