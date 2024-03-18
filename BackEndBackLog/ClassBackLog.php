<?php

class BackLog
{
    public static function RegisterBackLog($conn, $perfil, $quero, $para)
    {
        $padraoNiv = 0;
        $sql = "insert into infoBackLog values (DEFAULT, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssi", $perfil, $quero, $para, $padraoNiv);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public static function SearchBackLog($conn)
    {
        $sql = "SELECT * FROM infoBackLog";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = array();

        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }

        if (!empty($rows)) {
            echo json_encode($rows);
        } else {
            echo json_encode(false);
        }
    }

    public static function UpdateList($conn, $id, $niv)
    {
        $sql = "UPDATE infoBackLog set nivInfo = ? where idInfo = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $niv, $id);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
