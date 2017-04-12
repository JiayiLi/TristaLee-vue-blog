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

// echo "<br>";
$conn = new ConnMySQL;
function options($conn,$post){
	$params = $post;
	if(key_exists("type",$params)&&key_exists("content",$params)&&key_exists('title',$params)){
		$operate = $params["type"];
		$content = $params["content"];
		$title = $params["title"];
		$typeupload = $params["typeupload"];
		$brief = $params["brief"];
		$addnew = array('title' => $title , 'content'=> $content, 
			'typeupload'=>$typeupload,'brief'=>$brief);

		$results = $conn -> makeConnect('',$operate,$addnew);
		echo $results;
	}

	// $conn -> test();
	// $conn -> hosttest();
}

options($conn,$_POST);

?>