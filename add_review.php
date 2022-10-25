<?php
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];

	$sXML = simplexml_load_file('../xml/review.xml');
	$newchild = $sXML->addChild("review");
	$newchild->addChild("name", $name);
	$newchild->addChild("email", $email);
	$newchild->addChild("text", $text);
	file_put_contents('../xml/review.xml', $sXML->asXML());


?>