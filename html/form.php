<?php

if($_POST['submit']= "Envoyer"){
    $to = "joubert.mathieu753783@gmail.com"; 
    $from = $_POST['email']; 
    $first_name = $_POST['first-name']; 
    $last_name = $_POST['last-name'];  
    $number = $_POST['number'];
    $message_demande = $_POST['message']; 
    $subject = "Demande de contact de". " " . $last_name." ". $first_name;
    $email_data = [$to, $from, $subject, $first_name, $last_name, $number, $message_demande];
    // $subject2 = "Copy of your form submission"; 
    // $message = $first_name . " " . $last_name . " ". $_POST['number'] . " wrote the following:" . "\n\n" . $_POST['message']; 
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message']; 

    // $headers = "From:" . $from; 
    // $headers2 = "From:" . $to; 
    // mail($to,$subject,$message,$headers); 
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender 
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // Vous pouvez également utiliser header('Location: thank_you.php'); pour rediriger vers une autre page. 
    
    echo $email_data; 
}else{
    echo "Erreur";
}
?>