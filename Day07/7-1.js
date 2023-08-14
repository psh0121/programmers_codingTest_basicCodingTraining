// 수열과 구간 쿼리 4

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
// queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 입력: [0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]]
// 출력: [3, 2, 4, 6, 4]

function solution(arr, queries) {
    let result = arr;
    let arangeArr = [];
    let filterArr = [];

    for(let i = 0; i < queries.length; i++) {
        // 지정된 범위의 숫자로 채워진 배열을 만든다.
        arangeArr = Array(queries[i][1] - queries[i][0] + 1).fill(queries[i][0]).map((v, k) => v+k);

        // 조건에 성립되는 값들을 분류해 filterArr에 넣는다.
        filterArr = arangeArr.filter(el => el % queries[i][2] === 0);

        // filterArr에 있는 숫자의 인덱스에 위치한 요소값을 +1한다.
        for(let j = 0; j < filterArr.length; j++) {
            result[filterArr[j]] ++;
        }

    }

    return result;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]]));