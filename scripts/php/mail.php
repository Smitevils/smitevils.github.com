<?php

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['text'])) {$text = $_POST['text'];}
$to = "smitevils@yandex.ru"; /*УКАЗАТЬ СВОЙ АДРЕС! rait1@list.ru*/
$headers = "Content-type: text/plain; charset = utf-8";
$subject = "Кто то написал мне - SmiteVils.ru";
$message = "Кто то написал мне - SmiteVils.ru:\nИмя: $name \nEmail: $email \nСообщение: $text";

$send = mail ($to, $subject, $message, $headers);

/*if ($send == 'true')
{
echo "";
}
else 
{
echo "Ошибка. Сообщение не отправлено!";
}*/

echo json_encode($send);

?>