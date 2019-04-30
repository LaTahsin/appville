<?php

$sendTo = "labeba.tahsin1996@gmail.com";//don't forget to change it

$action = $_POST['action'];

    $name = $_POST['form'][0]['name'];
    $email = $_POST['form'][0]['email'];
    $message = $_POST['form'][0]['message'];

    if ($name == "" || $email == "" || $message == "") {
        echo "<p class=\"error\">There was problem while sending E-Mail. Please try again!</p>";
        exit();
    }

    else
    {
        $header = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

        $sent = mail($sendTo, $message, $header);

        if ($sent) {
            echo "<p class=\"success\">Message sent succesfully.</p>";
        } else {
            echo "<p class=\"error\">There was problem while sending E-Mail.</p>";
        }
    }

?>
