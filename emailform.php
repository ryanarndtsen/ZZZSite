<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "email@zzz-collection.com";
    $headers = "From: ".$mailFrom;
    $txt = "Message from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsent");
}
?>