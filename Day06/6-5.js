// 수열과 구간 쿼리 2

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
// queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.
// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

// 입력: [0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]
// 출력: [3, 4, -1]

function solution(arr, queries) {
    let result = [];
    let arangeArr = [];
    let filterArr = [];

    for(let i = 0; i < queries.length; i++) {
        // queries[i] 범위만큼 잘라서 변수안에 담는다.
        arangeArr = arr.slice(queries[i][0], queries[i][1] + 1);

        // 특정 값보다 큰 값을 filterArr에 넣은 뒤 그중 가장 작은 값을 넣는다.
        // filterArr에 값이 없으면 -1을 넣는다.
        filterArr = arangeArr.filter(el => el > queries[i][2]);

        if(filterArr.length === 0) result.push(-1);
        else result.push(Math.min(...filterArr));
    }

    return result;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]));