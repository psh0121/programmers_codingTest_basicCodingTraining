// 특수문자 출력하기

// 다음과 같이 출력하도록 코드를 작성해 주세요.

// 입력: x
// 출력: !@#$%^&*(\'"<>?:;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log('!@#$%^&*(\\\'"<>?:;');
});