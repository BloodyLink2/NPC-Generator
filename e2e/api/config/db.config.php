<?php efine("SERVER", "localhost");
define("USER", "root");
define("PASS", "");
define("DB", "npc");

function connect(){
    $connect = mysqli_connect(SERVER, USER, PASS, DB);

    if(mysqli_connect_errno($connect)){
        die("Failed to Connect: " . mysqli_connect_error());
    }    
    mysqli_set_charset($connect, "utf8");
    return $connect;
}

$conn = connect();
?>