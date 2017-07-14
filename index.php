<?php
define('CSS_PATH', '/react/public/css/');
define('JS_PATH', '/react/public/js/');
define('IMG_PATH', '/react/public/img/');
define('VIEW_PATH', 'app/views/');
define('DEBUG', 'true');
if (DEBUG) {
    include 'core/debug.php';
}
include 'core/core.php';
include 'core/function.php';
spl_autoload_register('\core\core::autoload');
\core\core::run();
