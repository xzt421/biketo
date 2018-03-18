<?php
	$data = file_get_contents('http://www.biketo.com/app.php?m=info&a=more&page='.$_GET["page"]);
	echo $_GET["cb"]."(".$data.")";
?>