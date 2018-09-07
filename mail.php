<?php  
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$recipient = "ocasta06@gmail.com";
$subject = "Online portfolio contact form";
$formcontent="From: $name \n Message: $message";
$mailheader = "From: $email \r\n";

//validate 
if ($_POST) { 
//send confirmation email (or insert into database, etc...) 
    echo 'Sent'; die;  
    mail($recipient,$subject,$formcontent,$mailheader); 
} 
// 

?> 
