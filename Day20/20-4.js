// 배열의 길이에 따라 다른 연산하기

// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. 
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

// 입력: [49, 12, 100, 276, 33], 27
// 출력: [76, 12, 127, 276, 60]

function solution(arr, n) {
    let result = [];

    if(arr.length % 2 === 1) {
        result = arr.map((el, i) => {
            if(i % 2 === 0) return el + n;
            else return el;
        })
    }
    else {
        result = arr.map((el, i) => {
            if(i % 2 === 1) return el + n;
            else return el;
        })
    }

    return result;
}

console.log(solution([49, 12, 100, 276, 33], 27));