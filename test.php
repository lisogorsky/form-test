<?php
	
$name = $_POST["name"];
$surname = $_POST["surname"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$delivery = $_POST["delivery"];
$country = $_POST["country"];
$city = $_POST["city"];
$zip = $_POST["zip"];
$address = $_POST["address"];
$date = $_POST["date"];
$comments = $_POST["comments"];
$to = $_POST["email"];
$from = "mail@form-test.mcdir.ru";
$subject = "У Вас новый вопрос с сайта";
$message = '<br>'.'<b>'.'Имя клиента: '.'</b>'.$name.'<br>'.'<b>'.'Телефон клиента: '.'</b>'.$tel.'<br>'.'<b>'.'Email клиента: '.'</b>'.$email.'<br>'.'<b>'.'Доставка или самовывоз: '.'</b>'.$delivery.'<br>'.'<b>'.'Страна: '.'</b>'.$country.'<br>'.'<b>'.'Город: '.'</b>'.$city.'<br>'.'<b>'.'Индекс: '.'</b>'.$zip.'<br>'.'<b>'.'Адрес: '.'</b>'.$address.'<br>'.'<b>'.'Дата доставки: '.'</b>'.$date.'<br>'.'<b>'.'Комментарии: '.'</b>'.$comments;
$subject = "=?utf-8?B?".base64_encode($subject)."?=";
$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
if (mail ($to, $subject, $message, $headers)) {
	header("Location: /#thanks");
} else {
	header("Location: /#error");
}

?>