<?php
	$data = file_get_contents('http://www.biketo.com/app.php?m=client&a=render&classid='.$_GET['classid'].'&id='.$_GET['id']);
	echo $_GET["cb"]."(".$data.")";
?>