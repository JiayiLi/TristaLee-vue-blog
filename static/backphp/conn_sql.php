<?php

$q=1;
$con = mysql_connect('localhost', 'root', 'abc123');
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }

mysql_select_db("tristalee_blog", $con);

$sql="SELECT * FROM art_blog WHERE id = '".$q."'";

$result = mysql_query($sql);
echo "<table border='1'>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Age</th>
<th>Hometown</th>
<th>Job</th>
</tr>";

while($row = mysql_fetch_array($result))
 {
 echo "<tr>";
 echo "<td>" . $row['id'] . "</td>";
 echo "<td>" . $row['title'] . "</td>";
 echo "<td>" . $row['brief'] . "</td>";
 echo "<td>" . $row['content'] . "</td>";
 echo "<td>" . $row['creat_time'] . "</td>";
 echo "</tr>";
 }
echo "</table>";

mysql_close($con);
// class vueblog
// {	
// 	public function getMysqlData()
// 	{
// 		print_r("uhuh")
// 	}

// 	$con = mysql_connect("localhost","root","123456");

// 	if (!$con)
// 	  {
// 	  die('Could not connect: ' . mysql_error());
// 	  }
// 	mysql_close($con);

// 	return $con;
// 	some code
	
// }
// 




?>