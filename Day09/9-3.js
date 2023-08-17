// 문자열의 뒤의 n글자

// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 입력: "ProgrammerS123", 11
// 출력: "grammerS123"

function solution(my_string, n) {
    return my_string.slice(-n);
}

console.log(solution("ProgrammerS123", 11));