<?
$fio = $_POST['fio'];
$country = $_POST[name='order[country]'];
$comment = $_POST[name='comment']; 
$phone = $_POST[name='phone'];
$to  = 'example@example.com';
// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['fio'] .'<br> Номер: '.$_POST[name='phone'].'<br> Комментарий: '.$_POST[name='comment'].'Страна: '.$_POST[name='order[country]'];


// Отправляем
mail($to, $subject, $message);
?>