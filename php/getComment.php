<?php
	$data = file_get_contents('http://www.biketo.com/app.php?m=comment&a=getComment&is_hot=1&classid='.$_GET['classid'].'&id='.$_GET['id'].'&plid=');
	echo $_GET["cb"]."(".$data.")";
?>