$(function(){
$.ajax({
	type:"get",
	url:"json/a.json",
	async:true,
	dataType:"json",
	success:function(data){
		
		var str="";
		$.each(data.title,function(idx,val){
			str+="<li><img src='"+val.imgurl+"'/><p class='price'>"+val.p1+"</p><p><a href='#'>"+val.p2+"</a></p><p><a href='#'>"+val.p3+"</a></p><p><a href='#'>"+val.p4+"</a></p></li>";
		})
		$(".left").append(str);

	}
});




$.ajax({
	type:"get",
	url:"json/b.json",
	async:true,
	dataType:"json",
	success:function(data){
		
		var str="";
		$.each(data.title,function(idx,val){
			str+="<li><a href='product.html'><img src='"+val.imgurl+"'/><p class='price'>"+val.p+"</p><p><a href='#'>"+val.p1+"<i class='bx'>冰箱</i></a></p><p><a href='#'>"+val.p2+"<i class='iconfont'>&#xe606;</i></a></p><p><a href='#'>"+val.p3+"<b class='p'>"+val.p4+"</b>"+val.p5+"</a></p><a class='k'>自营</a><dl class='clear'><dd><i class='iconfont'>&#xe6c6;</i>对比</dd><dd><i class='iconfont'>&#xe626;</i>关注</dd><dd class='l'><i class='iconfont'>&#xe603;</i>加入购物车</dd></dl></a></li>";
			
			
		})
		$(".right").append(str);
		
	}
});

	$.ajax({
	type:"get",
	url:"json/c.json",
	async:true,
	dataType:"json",
	success:function(data){
		
		var str="";
		$.each(data.title,function(idx,val){
			str+="<li><a href='product.html'><img src='"+val.imgurl+"'/><p class='price'>"+val.p1+"</p><p><a href='#'>"+val.p2+"</a></p><p><a href='#'>"+val.p3+"</a></p><p><a href='#'>"+val.p4+"</a></p></a></li>";
		})
		$("#huan ul").append(str);

	}
});


$("*").click(function(){
	location.href="product.html";
	
})	

	
	
	
	
	
	
	
	
})
























