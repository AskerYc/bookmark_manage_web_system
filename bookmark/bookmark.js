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
})

function IndexClicked(name){
	var IndexList = document.getElementById("IndexList").childNodes;
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