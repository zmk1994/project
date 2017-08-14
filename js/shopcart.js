

$(function(){
	//加入购物车
	function addToCart(num){
		
        //获取购物车cookie信息
        var cartStr = $.cookie("numId");
   
        var cartObj = cartStr ? JSON.parse(cartStr) : {};
   
        cartObj[1] =cartObj[1] ? cartObj[1]+=num : num;    
		console.log(cartObj);
        //存cookie
        var cart = JSON.stringify(cartObj);
        console.log(cart);
        $.cookie("numId",cart,{"expires":7,"path":"/"});
       	
    }

	//var numId=[];//用来保存每个详情页点击的商品的id;
//	//点击加入购物车；
var num=0;
  $(".btn").click(function(){
  	var num=$("#num").html();	
  	num = parseFloat(num);
  	
  	num++;
  	
  	addToCart(num);
  	
	});
	
	
	
	
	
})









