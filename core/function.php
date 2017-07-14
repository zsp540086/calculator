<?php
use \core\db;
function M($table = ''){
    return new db($table);
}