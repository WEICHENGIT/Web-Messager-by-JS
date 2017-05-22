<?php

	$chaine = "<br />- ";
	$chaine .= "<a href='javascript:recherche(\"" . gethostbyname($_SERVER['SERVER_NAME']) . "\");'>"
	. gethostbyname($_SERVER['REMOTE_ADDR']) . "</a>";
	$chaine .=  " - " . date("h:i:sa") ."   ".date("Y.m.d");
	$chaine .=  " - " . $_GET['phrase'];


	$fp = fopen("text.html","a");

	fwrite($fp, $chaine);
	fclose($fp);
	echo "Message has been sent. Please return to the chatting page.";

?>
