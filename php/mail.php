<Location "/">
  AllowMethods GET POST OPTIONS
</Location>


<?php
$to = "joubert.mathieu753783@gmail.com";
$subject = "Test d'envoi de courriel";
$message = "Ceci est un test d'envoi de courriel en utilisant PHP.";
$headers = "From: webmaster@example.com\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "Le courriel a été envoyé avec succès.";
} else {
    echo "L'envoi du courriel a échoué.";
}
?>
