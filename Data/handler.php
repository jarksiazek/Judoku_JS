<?php
$json = $_POST['json'];

file_put_contents('results.txt', $json)

$file = fopen('results.txt','w+');
    fwrite($file, $response);
    fclose($file);
?>
    
