// 문자열 뒤집기

// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

// 입력: "Progra21Sremm3", 6, 12
// 출력: "ProgrammerS123"

function solution(my_string, s, e) {
    let result = my_string.split("");
    let reverseArr = result.splice(s, e - s + 1);
    reverseArr.reverse();
    result.splice(s, 0, reverseArr.join(""));
    return result.join("");
}

console.log(solution("Progra21Sremm3", 6, 12));