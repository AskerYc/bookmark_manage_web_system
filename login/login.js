document.write('<script type="text/javascript" src="jquery.js"></script>');

function login() {
    var global_status = ""
    var usrname = document.getElementById("username").value;
    var passwd = document.getElementById("password").value;
    if (username.value == "") {
 
        alert("请输入用户名");
 
    } else if (passwd.value  == "") {
 
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
                    alert("getin");
                    $("#form1").attr("action",'/register.htm');
                }
            }
        })
    }
}

function register(){
    window.location.href='register.htm';
}