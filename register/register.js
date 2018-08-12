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
	info[0] = document.getElementById("username");
	info[1] = document.getElementById("password");
	info[2] = document.getElementById("email");
	info[3] = document.getElementById("phone");
	info[4] = document.getElementById("Fisrt_name");
	info[5] = document.getElementById("Last_name");
	info[6] = document.getElementById("question_name");
	info[7] = document.getElementById("question_answer");
	for(key in info){
		if (info[key].value==""){
			alert("请将信息填写完整");
			return 1;
		}
	}
}