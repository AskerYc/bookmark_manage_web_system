document.write('<link rel="stylesheet" type="text/css" href="/bookmark.css" />');
$(function(){
	$('#TopMenuFct').mouseover(function(){
		$('#TopMenuFct').addClass("MouseOver");
	});
	$('#TopMenuFct').mouseout(function(){
		$('#TopMenuFct').removeClass("MouseOver");
	});
	$('#TopMenuFct_').mouseover(function(){
		$('#TopMenuFct_').addClass("MouseOver");
	});
	$('#TopMenuFct_').mouseout(function(){
		$('#TopMenuFct_').removeClass("MouseOver");
	});
	$('#TopMenuFct').click(function(){
		$('#TopBar').css("display", "none");
		$('#TopSearchBar').css("display", "block");
	})
	$("#TopSearchBar").click(function(e){
		var con = $('#TopSearch');
		if(!con.is(e.target) && con.has(e.target).length === 0){
			$('#TopBar').css("display", "table-row");
			$('#TopSearchBar').css("display", "none");
		};
	})
	$('#TopMenuFct_').click(function(){
		var name=prompt("请输入书签名","URL_NAME");
		alert(name);
		if(name==null || name==""){
			return;
		}
		var url=prompt("请输入书签完整地址","URL")
		alert(url);
		if(url==null || url==""){
			return;
		}
		var username = getQueryVariable("username");
		$.ajax({
			type:"POST",
			url:"/add_url",
			dataType:"json",
			data:{
				username:username,
				url_name:name,
				url:url
			},
			success:function(data){
				if(data=="success add url"){
					alert("添加成功");
					getUrlList();
				}else{
					alert("添加失败");
				}
			}
		})
	})
})

function IndexClicked(name){
	var IndexList = document.getElementById("IndexList").getElementsByTagName("div");
	for (var i = 0; i < IndexList.length; i++) {
		// IndexList[i].style.color="#666";
		if( IndexList[i].nodeType == 1){
			IndexList[i].style.color="#666";
			for (var j = 0; j < IndexList[i].childNodes.length; j++) {
				if(IndexList[i].childNodes[j].nodeType == 1){
					IndexList[i].childNodes[j].setAttribute("src","/folder_close.jpg");
				}
			}
		}
	}
	name.style.color="#0066cc";
	for (var i = 0; i < name.childNodes.length; i++) {
		if( name.childNodes[i].nodeType == 1){
			name.childNodes[i].setAttribute("src","/folder.jpg");
		}
	}
}
function getQueryVariable(variable){
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){
			return(pair[1]);
		}
	}
}
function getUrlList(){
	var username = getQueryVariable("username");
	$.ajax({
		type:"POST",
		url:"/getUrlList",
		data:{username:username},
		dataType:"json",
		success:function(data){
			data = data['URL'];
			var my_tbody = document.getElementById("USER_URL_LIST");
			while(my_tbody.hasChildNodes()){
				my_tbody.removeChild(my_tbody.childNodes[0]);
			}
			for (var i = 0; i < data.length; i++) {
				var pair = data[i].split(":::");
				var my_tr = document.createElement("tr");
				var my_td = document.createElement("td");
				pair[0] = unescape(pair[0].replace(/\\u/g,'%u'));
				my_td.innerHTML = '<a href="'+pair[1]+'">'+pair[0]+'</a><div style="display:inline;float:right;margin-right:10px;"><input type="button" class="deleteButton" onclick="delete_url(this);" value="删除"/></div>';
				my_td.className="SingleURL";
				my_tr.appendChild(my_td);
				my_tbody.appendChild(my_tr);
			}
			getUrlList();
		}
	})
}
function delete_url(obj){
	var username = getQueryVariable("username");
	var href = obj.parentNode.parentNode.getElementsByTagName("a")[0].href;
	$.ajax({
		type:"POST",
		url:"del_url",
		dataType:"json",
		data:{
			username:username,
			url:href
		},
		success:function(data){
			if(data=="success del url"){
				alert("删除成功");
				getUrlList();
			}else{
				alert("删除失败");
			}
		}
	})
}
window.onload = function(){
	getUrlList();
}