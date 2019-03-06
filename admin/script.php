<?php
shell_exec("./mess_update.sh");
header('Location: /admin/?success=true');
?>