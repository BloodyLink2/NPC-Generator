<?php 
    require("../config/db.config.php");

    $tableName = $_REQUEST["tableName"];

    $sql = "select * from ". $tableName;
    $data = [];
    if($result = mysqli_query($conn, $sql)){
        $i = 0;
        while($row = mysqli_fetch_assoc($result)){
            array_push($data, $row);
        }
        echo json_encode($data);
    }else{
        http_response_code(404);
    }
    
?>
