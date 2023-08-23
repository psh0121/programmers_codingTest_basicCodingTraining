// 문자열이 몇 번 등장하는지 세기

// 문자열 myString과 pat이 주어집니다. 
// myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

// 입력: "banana", "ana"
// 출력: 2

function solution(myString, pat) {
    let cnt = 0;

    for(let i = 0; i < myString.length; i++) {
        if(myString.slice(i, i + pat.length) === pat) cnt++;
    }

    return cnt;
}

console.log(solution("banana", "ana"));