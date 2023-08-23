// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

// 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

// 입력: "AbCdEFG", "dE"
// 출력: "AbCdE"

function solution(my_string, alp) {
    let lastIdx = my_string.lastIndexOf(alp);
    let result = my_string.slice(0, lastIdx + alp.length);
    return result;
}

console.log(solution("AbCdEFG", "dE"));