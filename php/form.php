<?php
if($_POST['submit']= "Envoyer"){   
    $to = "joubert.mathieu753783@gmail.com";     
    $from = $_POST['email'];     
    $first_name = $_POST['first-name'];     
    $last_name = $_POST['last-name'];      
    $number = $_POST['number'];    
    $message_demande = $_POST['message'];     
    $send_copie = $_POST['send-copie'];    
    $subject = "Demande de contact de". " " . $last_name." ". $first_name;    
    $subject2 = "Copie de votre demande de contact sur le portofolio du chat";     
    $message = $first_name . " " . $last_name . " ". $_POST['number'] . " wrote the following:" . "\n\n" . $_POST['message'];     
    $message2 = "Voici la copie de votre demande" . $first_name . "\n\n" . $_POST['message'];     
    $headers = "From:" . $from;     
    $headers2 = "From:" . $to;     
    mail($to,$subject,$message,$headers);     
    if (isset($send_copie)){        
        mail($from,$subject2,$message2,$headers2);    
    }        
    $response = "Votre message a bien été envoyé";    
    header('Location: ../index.html'); 
}
else{    
    echo "Erreur";
}
?>