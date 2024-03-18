<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

include "conn.php";
include "ClassBackLog.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['acao'])) {
        $ClassBackLog = new BackLog();
        switch ($data['acao']) {
            case 'RegisterBackLog':
                $perfil = $data['perfil'];
                $quero = $data['quero'];
                $para = $data['para'];
                $result = $ClassBackLog->RegisterBackLog($conn, $perfil, $quero, $para);
                if ($result) {
                    echo json_encode("Cadastrado com sucesso!");
                } else {
                    echo json_encode(array("status" => 0, "message" => "Erro!"));
                }
                break;
            case 'SearchBackLog':
                $result = $ClassBackLog->SearchBackLog($conn);
                if ($result) {
                    echo json_encode($result);
                }
                break;
            case 'UpdateList':
                $id = $data['id'];
                $niv = $data['niv'];
                $result = $ClassBackLog->UpdateList($conn, $id, $niv);
                if ($result) {
                    echo json_encode("Mudado com sucesso!");
                } else {
                    echo json_encode(array("status" => 0, "message" => "Erro!"));
                }
                break;
        }
    }
}
