// 주사위 게임 3

// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 
// 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// 입력: 2, 2, 2, 2
// 출력: 2222

// 같은 수 4(p) -> 1111 * p
// 같은 수 3(p), 다른 수 1(q) -> (10 * p + q)^2
// 같은 수 2(p), 다른 같은 수 2(q) -> (p + q) * |p - q|
// 같은 수 2(p), 다른 수 1(q), 또 다른 수1(r) -> q * r
// 다 다른 수 -> 가장 작은 수
function solution(a, b, c, d) {
    let arr = [a, b, c, d];
    let obj = {};
    let objKeys = [];
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        if(!obj.hasOwnProperty(String(arr[i]))) obj[arr[i]] = 1;
        else obj[arr[i]]++;
    }

    objKeys = Object.keys(obj);

    switch(objKeys.length) {
        case 1:
            result = 1111 * Number(objKeys[0]);
            break;
        case 2:
            if(obj[objKeys[0]] === 1){
                result = (10 * Number(objKeys[1]) + Number(objKeys[0]))**2;
            }
            else if(obj[objKeys[1]] === 1) {
                result = (10 * Number(objKeys[0]) + Number(objKeys[1]))**2;
            }
            else {
                result = (Number(objKeys[0]) + Number(objKeys[1])) * Math.abs(Number(objKeys[0]) - Number(objKeys[1]));
            }
            break;
        case 3:
            result = objKeys.filter(el => obj[el] === 1).map(el => Number(el)).reduce((acc, val) => acc * val, 1);
            break;
        default:
            result = Math.min(...arr);
            break;
    }

    return result;
}

console.log(solution(2, 2, 2, 2));