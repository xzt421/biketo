<?php
	$data = file_get_contents('http://www.biketo.com/app.php?m=info&a=getNewsList&type=channel&id='.$_GET['id'].'&page='.$_GET['page']);
	echo $_GET["cb"]."(".$data.")";
?>