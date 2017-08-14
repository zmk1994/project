$(function(){
	$("*").click(function(){
		location.href="shopcart.html"
		
	})
	
	$(".sort").hover(function(){
		$(".sort-f").show(function(){
		});
		$(".t").show().siblings("i").hide();
	},function(){
		$(".sort-f").hide();
	$(".t").hide().siblings("i").show();
	})
	
	
	$(".small-t li").hover(function(){
		$(".normal-t li").eq(($(this).index())).fadeIn(300).siblings("li").fadeOut(300)
		$(".big-t li").eq(($(this).index())).fadeIn(300).siblings("li").fadeOut(300)
	
	})
	
	$("#main .normal-t").mousemove(function(e){
		$(".move").show()
		$(".big-t").show()
		var evt=e||event;
		//console.log(evt.pageX)
		var top=$(".normal-t").offset().top;
		var left=$(".normal-t").offset().left;
		var t1=evt.pageY-top-$(".move").height()/2;
		var l1=evt.pageX-left-$(".move").width()/2;
		if(t1<0){t1=0};
		if(l1<0){l1=0};
		if(t1>$("#main .normal-t").height()-$(".move").height()){
			t1=$("#main .normal-t").height()-$(".move").height();
				};
		if(l1>$("#main .normal-t").width()-$(".move").width()){
			l1=$("#main .normal-t").width()-$(".move").width();
				}
				$(".move").css({"top":t1,"left":l1});
				$(".big-t li img").css({
					top:-t1/$("#main .normal-t").height()*$(".big-t li img").height(),
					left:-l1/$("#main .normal-t").width()*$(".big-t li img").width()})
	});
		
		$("#main .normal-t").mouseout(function(){
			$(".move").hide();
			$(".big-t").hide()
		})
		
	})
	
$(".main-c li").click(function(){
	$(this).addClass("active").siblings("li").removeClass("active")
})
	var i=1;
$(".jia").click(function(){
		i++;
		$(".ii").find("i")[0].innerHTML=i;
})

	
	$(".jian").click(function(){
		i--;
		if(i==0){
			i=1;
			$(".ii").find("i")[0].innerHTML=i;
		}
		$(".ii").find("i")[0].innerHTML=i;
})

//lubo
var $of1=$(".main-r ul");
var $al=$of1.find("li");
var $btn1=$(".btn1");
var $btn2=$(".btn2");
$al.eq(0).clone(true).appendTo($of1)
$al.eq(0).clone(true).appendTo($of1)
$al.eq(0).clone(true).appendTo($of1)
$al.eq(0).clone(true).appendTo($of1)
var len=$al.length+4;
console.log(len)
var perhei=$al.length;
var hei=len*perhei;
$al.css("height","hei");
var i=0;
function move(){
	i+=4;
	if(i==len){
		$of1.css("height",0);
		i=4;
	}
	$of1.stop().animate(function(){
		$of1.css("height",-i*perhei*4);
	},1000)
}

$(".btn2").click(function(){
	move();
	console.log(i)
})


$.cookie('cart','ids',{expires:-7,path:"/"})
if($.cookie('cart')==undefined){
	//不存在
	var carArr=new Array();
	$.parseJSON($.cookie("cart"));
	cartArr.push(id);
	JSON.stringify(cartArr);
	
}

	
	

	
	
	
	
	
	
	
	
	
