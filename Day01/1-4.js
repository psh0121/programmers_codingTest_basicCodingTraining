// 대소문자 바꿔서 출력하기

// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
// 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

// 입력: aBcDeFg
// 출력: AbCdEfG

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[i].toUpperCase()){
            result += str[i].toUpperCase();
        }
        else result += str[i].toLowerCase();
    }
    
    console.log(result);
});