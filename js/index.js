//gundongtiao
$(function(){	
	$("header .xx").click(function(){$("header").hide();})
	$("#nav .ewm").hover(function(){
		$(".erweima").hide().siblings(".erweima-2").show();
	},function(){$(".erweima").show().siblings(".erweima-2").hide();})
	
	function scroll(){
		var scrollTop=$(window).scrollTop();
		scrollTop>800?$("#header").fadeIn(300):$("#header").fadeOut(300);
		
	}
	$(window).scroll(function(){
		scroll();
	})
	

		
	/*	var oInput = document.getElementById("txt");
		var oList = document.getElemementById("list");
		var oHead = document.getElementsByTagName("head")[0];
		oInput.oninput = function(){
			var val = this.value;
			var oScript = document.createElement("script");
			oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=data1";
			oHead.appendChild(oScript);
			oHead.removeChild(oScript);
			//data([1,2,3,4])
		}		
		function data1(data){			
			data = data.s;
			var html = "";
			for(var i in data){
				html+="<li><a href='https://www.baidu.com/s?wd="+data[i]+"'>"+data[i]+"</a></li>";
			}
			oList.innerHTML = html;
			oList.style.display = "block";
		}*/
	

	

	
	
	
$.ajax({
	type:"get",
	url:"json/a-2.json",
	async:true,
	dataType:"json",
	success:function(data){
		var str="";
		$.each(data.title,function(idx,val){
		str+="<li class='tr'><a href='#' class='ax'>"+val.a+"</a><a href='#' class='ax'>"+val.b+"</a><a href='#' class='ax'>"+val.b+"</a></li>";
		
		})
		$(".none-l").prepend(str);
	}
	
});

$(".tab-l").hover(function(){
	$("#none").show();
	
$(".tab-l li").hover(function(){
		$(".tr").show()
		$(".tr").eq($(this).index()).show().siblings(".tr").hide()
	})

},function(){
	$("#none").hide()
	
})
$(".special").hover(function(){
	$(this).stop().animate({"top":"10px"})	
},function(){$(this).stop().animate({"top":"20px"})	})


	
	
	
	
	
	
	
	
$.ajax({
	type:"get",
	url:"json/a-1.json",
	async:true,
	dataType:"json",
	success:function(data){
		var str="";
		$.each(data.title,function(idx,val){
		str+="<li><a href='#'>"+val.p1+"</a><span>|</span><a href='#'>"+val.p2+"</a></li>";
		})
		$(".tab-l").append(str);

	}
});

//lunbo

	var $of1=$("#first");
	var $a1=$of1.find("li");
	var $of2=$("#second");
	var $a2=$of2.find("li");
	var $btn1=$(".btn1");
	var $btn2=$(".btn2");
	$a1.eq(0).clone(true).appendTo($of1);
	var len=$a1.length+1;
	
	var perwidth=$a1.eq(0).width();
	var width=len*perwidth;
	
	$of1.css("width",width);
		var i=0;
		var timer1=null;
	function move(){
		i++;
		if(i==len){
		$of1.css("left",0);
			i=1;
		}
		if(i==len-1){
			$a2.eq(0).addClass("active").siblings().removeClass("active");
			
			
		}else{
			$a2.eq(i).addClass("active").siblings().removeClass("active");
		}
		
		$of1.stop().animate({"left":-i*perwidth},400);
	}
	
	function start(){
		timer1=setInterval(function(){
		move();
	},1000)
		
	}
	start();
	
	
	$of1.hover(function(){
		clearInterval(timer1);
	},function(){
		start();
	})
	
	$btn2.click(function(){	
		clearInterval(timer1);
	move();
	})
	
	$btn1.click(function(){	
		clearInterval(timer1);	
		if(i==0){
			$of1.css("left",-(len-1)*perwidth);//-8*width
			i=len-3;//6+1=7正数第8张，倒数第二张。
		}else{
			i=i-2;
		}
		move();		
	})
	
	$of2.find("li").hover(function(){
		clearInterval(timer1);
		i=$(this).index()-1;
		move();
		
	},function(){
		start();
		
	})
	
//lunbo2
	var j=0;
	var timer=setInterval(function(){
		j++;
		if(j==0){
			$(".mms-r ul").find("li").eq(0).fadeIn(600).siblings("li").fadeOut(600);
			$(".mms-r .bb1").addClass("active").siblings(".mms-r .bb2").removeClass("active")
			
		}else{
			$(".mms-r ul").find("li").eq(1).fadeIn(600).siblings("li").fadeOut(600);			
			$(".mms-r .bb2").addClass("active").siblings(".mms-r .bb1").removeClass("active")
			j=-1;
		}
	},1000)

	//lubo3
	
	
	
	var z=0;
	var timer=setInterval(function(){
		z++;
		if(z==0){
			$(".lquan-c-c ul").find("li").eq(0).fadeIn().siblings("li").fadeOut();
			$(".bb1").addClass("active").siblings(".bb2, .bb3").removeClass("active")
			
		}else if(z==1){
				$(".lquan-c-c ul").find("li").eq(1).fadeIn().siblings("li").fadeOut();
			$(".bb2").addClass("active").siblings(".bb1 ,.bb3").removeClass("active")
		}
		
		else{
			$(".lquan-c-c ul").find("li").eq(2).fadeIn().siblings("li").fadeOut();
			
			$(".bb3").addClass("active").siblings(".bb1, .bb2").removeClass("active")
			z=-1;
		}
	},1000)
	

$("*").click(function(){
	location.href="list.html"
})

		
	
})
























