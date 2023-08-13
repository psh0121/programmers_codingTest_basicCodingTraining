// 문자열 섞기

// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

// 입력: aaaaa, bbbbb
// 출력: ababababab

function solution(str1, str2) {
    let result = '';

    for(let i = 0; i < str1.length; i++) {
        result += str1[i];
        result += str2[i];
    }

    return result;
}

console.log(solution("aaaaa", "bbbbb"));