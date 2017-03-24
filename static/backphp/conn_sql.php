<?php
/**
* 
*/

class ConnMySQL 
{
	protected $HOST = '127.0.0.1';
	protected $UserName = 'root';
	protected $PassWord = '123456';
	protected $Database = 'tristalee_blog';
	public $TEST = 'test';

	public function makeConnect($type){
		$db = new mysqli($this->HOST, $this->UserName, $this->PassWord,
			$this->Database);
		// if ($mysqli->connect_error) {
  //   		die('Connect Error (' . $mysqli->connect_errno . ') '
  //           	. $mysqli->connect_error);
		// }
		// if (mysqli_connect_error()) {
		//     die('Connect Error (' . mysqli_connect_errno() . ') '
		//             . mysqli_connect_error());
		// }
		// 技术文章
		if($type === 'tec'){
			$result = $db -> query("SELECT * FROM tec_blog");
		// 杂文
		}else if($type === 'art'){
			$result =  $db -> query("SELECT * FROM art_blog");
		}

		if ($result) {
			while ($row = $result -> fetch_object()){
				$tecData[] = $row;
			}
			print_r($tecData);
			echo '<br>';
			echo '<br>';

		    /* free result set */
		    $result->close();
		}else {
			echo "wrong type";
		}
		$db->close();
	}	


	public function hosttest(){
		echo  $this->HOST;
		echo '<br>';
	}
	public function test(){
		echo $this -> TEST;
		echo '<br>';
	}


}
// $mysqli = new mysqli('127.0.0.1', 'root', '123456', 'tristalee_blog');
// if ($mysqli->connect_error) {
//     die('Connect Error (' . $mysqli->connect_errno . ') '
//             . $mysqli->connect_error);
// }
// if (mysqli_connect_error()) {
//     die('Connect Error (' . mysqli_connect_errno() . ') '
//             . mysqli_connect_error());
// }

// echo 'Success... ' . $mysqli->host_info . "\n";

// $mysqli->close();


?>