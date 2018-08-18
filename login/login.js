$(function (){
    $('#btn_login').click(function (){
    var global_status = ""
    var usrname = document.getElementById("username").value;
    var passwd = document.getElementById("password").value;
    if (usrname == "") {
 
        alert("请输入用户名");
 
    } else if (passwd  == "") {
 
        alert("请输入密码");
 
    } else {
        $.ajax({
            type:"POST",
            url:"/login_submit",
            data:{usrname:usrname,
                passwd:passwd},
            dataType:"json",
            success:function(data){
                global_status = data.trim();
                data = data.trim();
                if(data == "success"){
                    // alert(usrname);
                    var target = "/bookmark?username=" + usrname;
                    $.post(target);
                    // window.location.href=target;
                }else{
                    alert("username or passwd error");
                }
            }
        })
    }
    });


});

function register(){
    window.location.href='/register';
}