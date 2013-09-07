function pad(n) {
	n = n + '';
	return n.length >= 3 ? n : new Array(4 - n.length).join('0') + n;
}

$(document).ready(function(){
	var drawer = null;
	var now = 0;
	var number = $("#number");

	$("#button").click(function(){
		if ( drawer === null ) {
			drawer = setInterval(function() {
				rand = Math.floor(Math.random() * 1000) % 244 + 1;
				rand = pad(rand);
				number.html(rand);
			}, 80);
			$("#button").html('停止');
		} else {
			clearInterval(drawer);
			drawer = null;
			$("#button").html('开始');
		}
	});

	number.click(function(){
		if ( drawer === null ) {
			now++;
			$("#r"+now).html(number.html());
		} else {
			$("#button").click();
		}
	});
});
