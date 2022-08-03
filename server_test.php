<?php
    $to      = 'manager@kaztoolexpo.kz';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: manager@kaztoolexpo.kz'       . "\r\n" .
                 'Reply-To: manager@kaztoolexpo.kz' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>
