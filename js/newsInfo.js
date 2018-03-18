let arr = [];
$(window)[0].location.search.replace(/^\?/, '').split('&').filter((v) => {
	arr.push(v.split('=')[1]);
});

const datas = new Vue({
	el: '#app',
	data: {
		newsInfo: [],
		comments: []
	},
	created() {
		$.ajax({
			type: "get",
			url: "php/getNewsInfo.php",
			async: true,
			data: {
				classid: arr[0],
				id: arr[1]
			},
			dataType: 'jsonp',
			jsonp: 'cb',
			success(data) {
				datas.newsInfo = data.details;
				fn.getNewInfo();
			}
		});
		$.ajax({
			type: "get",
			url: "php/getComment.php",
			async: true,
			data: {
				classid: arr[0],
				id: arr[1]
			},
			dataType: 'jsonp',
			jsonp: 'cb',
			success(data) {
				datas.comments = data.data.newcomment;
				fn.getComments();
			}
		});
	}
});

const fn = {
	getNewInfo() {
		$('#content').html(datas.newsInfo.newstext);
		$('#content').find('img').filter((i, v) => {
			v.src = v.src.replace(/localhost/, 'c2.biketo.com');
			v.style.height = 'auto';
		});
	},
	getComments() {
		datas.comments.filter((v) => {
			$('.comments').append('<div class="comment"><div class="headimg"><img src="//i.biketo.com/avatar.php?uid=' + v.userid + '"/></div><div class="wrap"><p class="user"><span class="username">' + v.username + '</span><span class="zan"><img src="img/zan.png"/>' + v.zcnum + '</span></p><p class="saytext">' + v.saytext + '</p><p class="saytime">' + v.time_desc + '</p></div></div>');
			if($('.saytext').children('img').length > 0) {
				$('.saytext').children('img').filter((i, v) => {
					v.src = v.src.replace(/localhost/, 'c2.biketo.com');
				})
			}
		});
	}
}