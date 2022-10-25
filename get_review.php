<?php
	$url = '../xml/review.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);
	$massive = array();
	$i=0;
	foreach ($xml as $review) {
		$massive[$i] = $review;
		$i++;
	}


	echo json_encode($massive);
?>