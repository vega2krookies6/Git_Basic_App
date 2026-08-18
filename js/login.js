// login 관련 함수
function login(username, password) {
    if(username){
        console.log(username);
    }else if(username && password) {
        console.log(username + ' ' + password);
    }else {
        console.log('>>>> login fail');
    }
};

function logout() {
    console.log('로그아웃');
}