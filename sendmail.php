<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

/*От кого письмо*/
$mail->setFrom('info@fls.guru', "Робот");
/*Кому отправить*/
$mail->addAddress('salavat.sadriev@gmail.com');
/*Тема письма*/
$mail->Subject = 'Привет! Это Робот сайта';

/*Тело письма*/
$body = '<h1>Сообщение от посетителя</h1>';

if (trim(!empty($_POST['name']))) {
  $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['surname']))) {
  $body .= '<p><strong>Фамилия:</strong> ' . $_POST['surname'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
  $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

/*Отправляем*/
if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Сообщение отправлено!';
}

$pesponse = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
