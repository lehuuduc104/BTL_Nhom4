var admin_name='admin';
var admin_pass='123456';
var user_name='user';
var user_pass='123456';
function login(){
    let name=document.getElementById('acctxt').value;
    let pass=document.getElementById('passtxt').value;
    let error_txt=document.getElementById('text_error');
    if(name==admin_name && pass==admin_pass){
        location.href='../about.html';
    }
    else if(name==user_name && pass==user_pass){
        location.href='../index.html';
    }
    else{
        error_txt.textContent="Please try again."
    }
}
