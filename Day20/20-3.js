// 문자열 묶기

// 문자열 배열 strArr이 주어집니다. 
// strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// 입력: ["a","bc","d","efg","hi"]
// 출력: 2

function solution(strArr) {
    let cntArr = [];
    let maxLen = Math.max(...strArr.map(el => el.length));
    let temp;

    for(let i = 1; i <= maxLen; i++) {
        temp = strArr.filter(el => el.length === i).length;
        cntArr.push(temp);
    }

    return Math.max(...cntArr);
}

console.log(solution(["a","bc","d","efg","hi"]));