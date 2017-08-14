<?php
/*$val=$_REQUEST["name"];
$psd=$_REQUEST["psd"];
$arr=array(array("name"=>"111111","psw"=>"111"),array("name"=>"zmk","psw"=>"zmk"),array("name"=>"222222","psw"=>"222"));
foreach($arr as $item){
	//echo $item['psw'];
	 if($item["name"]==$val){
	 	if($item["psw"]==$psd){
	 		echo 1;
	 	}else{echo 0;}
	 }else{
	 	echo 0;
	 }
}
*/
//php获取后台的用户名和密码名。
$uid=$_REQUEST["uid"];
$psd=$_REQUEST["psd"]

$arrry=array(array("name"=>"1111","psd"=>"1111"),array=("name"=>"zmk","psd"="123"),array("name"=>"2222","psd"="222"));

foreach($arr as $item){
	if($item["name"]==$uid){
		
		if($item["psd"]==$psd){
			echo 1;
		}else{
			echo 0;
		}
	}else{
		echo 0;
	}
	
	
}







//include("../fengzhuang/DBDA.class.php");
/*$db = new DBDA();
$uid = $_POST["u"];
$pwd = $_POST["p"];

$sql = "select pwd from users where uid='{$uid}'";
$attr = $db->Query($sql);
if(!empty($pwd) && !empty($attr) && $attr[0][0]==$pwd)
{
    echo "OK";
}
else
{
    echo "NO";
}
*/
?>