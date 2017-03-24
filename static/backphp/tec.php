<?php
include "conn_sql.php";
header("Content-Type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
/**
* 
*/
// class Tec extends ConnMySQL
// {
// 	public function getData(){
// 		$allTec = parent::makeConnect('tec');
// 		print_r($allTec);
// 		echo '<?br>';
// 	}

// }

// $test = new Tec();
// $test->getData();


$conn = new ConnMySQL;
$type = '';
function options($conn,$type,$post){
	print_r($type);
	echo '<br>';
	print_r($post);
	echo '<br>';
	// $conn -> test();
	// $conn -> hosttest();
	$conn -> makeConnect('tec');
	$conn -> makeConnect('art');
}

options($conn,$_POST["type"],$_POST)

?>