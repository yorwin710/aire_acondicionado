<?php 

    $codigo = $_POST['codigo'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $telefono = $_POST['tlf'];
    $cabecera = "Enviado desde la pagina de MultiServiciosAfriotec";
    
    $mensajeCompleto = $mensaje . "/nSe pueden comunicar conmigo a traves del siguiente correo: " . $email . ", o numero telefonico: " . $telefono . "/nAtentamente " . $nombre;

	echo $codigo . " " . $nombre . " " . $mensajeCompleto;

  /*  switch ($codigo) {
        case 1:
            mail("caracas@gmail.com", $asunto, $mensajeCompleto, $cabecera);
			header("location:../../../html/index.html");
        break;

        case 2:
            mail("elTuy@gmail.com", $asunto, $mensajeCompleto, $cabecera);
			header("location:../../../html/index.html");
        break;

        case 3:
            mail("maracai@gmail.com", $asunto, $mensajeCompleto, $cabecera);
			header("location:../../../html/index.html");
        break;

        case 4:
            mail("barinas@gmail.com", $asunto, $mensajeCompleto, $cabecera);
			header("location:../../../html/index.html");
        break;

        case 5:
            mail("zulia@gmail.com", $asunto, $mensajeCompleto, $cabecera);
			header("location:../../../html/index.html");
        break;

        case 6:
            mail("puertoLaCruz@gmail.com", $asunto, $mensajeCompleto, $cabecera);
			header("location:../../../html/index.html");
        break;
        
        default:
            mail("caracas@gmail.com", $asunto, $mensajeCompleto, $cabecera);
            header("location:../../../html/index.html");
        break;
    } */
        
?>
