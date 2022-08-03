
	<?php
     if(isset($_SERVER["HTTP_ORIGIN"]))
     {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
     }
     else
     {
        header("Access-Control-Allow-Origin: *");
     }

     header("Access-Control-Allow-Credentials: true");
     header("Access-Control-Max-Age: 600");   

     if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
     {
        if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); 

        if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
            header("Access-Control-Allow-Headers: 
            {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
      }

     if(!empty($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
     }

     $message = "$message";

     $to  = 'manager@kaztoolexpo.kz';
     $subject = "$subject";
     $headers = `From: manager@kaztoolexpo.kz`       . "\r\n" .
                 'Reply-To: manager@kaztoolexpo.kz' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
                 
    mail($to, $subject, $message, $headers);

    ?>
