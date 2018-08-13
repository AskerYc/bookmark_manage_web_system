document.write('<script type="text/javascript" src="jquery.js"></script>');

function choose_question(obj) {
	var q_name = document.getElementById("question_name");
	var q_answer = document.getElementById("question_answer");
	var q_a = document.getElementById("q_a");
	var index = obj.selectedIndex;
	var temp = obj.options[index].value;
	q_name.value = temp;
	q_answer.style.visibility = "visible";
	q_a.style.visibility = "visible";
	// alert(q_name.value);
}

function register(){
	var info = new Array();
	info[0] = document.getElementById("username").value;
	info[1] = document.getElementById("password").value;
	info[2] = document.getElementById("email").value;
	info[3] = document.getElementById("phone").value;
	info[4] = document.getElementById("First_name").value;
	info[5] = document.getElementById("Last_name").value;
	info[6] = document.getElementById("question_name").value;
	info[7] = document.getElementById("question_answer").value;
	// for(key in info){
	// 	if (info[key]==""){
	// 		alert("请将信息填写完整");
	// 		return 1;
	// 	}
	// }
	$.ajax({
		type:"POST",
		url:"/register_submit",
		data:{info:info},
		dataType:"json",
		success:function(data){
			alert(data);
			if(data == "success"){
				window.location.href='/login';
			}
		}
	})
}