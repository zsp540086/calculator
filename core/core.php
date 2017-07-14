<?php

namespace core;
class core
{
    public $assigns = Array();

    public static function run()
    {
        if (!isset($_SERVER['PATH_INFO']) || $_SERVER['PATH_INFO'] == '/' || $_SERVER['PATH_INFO'] == '') {
            $class_name = "\\app\\home";
            $fn = 'index';
        } else {
            $path_info = explode('/', substr($_SERVER['PATH_INFO'], 1));
            $class_name = "\\app\\".$path_info[0];
            $fn = $path_info[1] ? $path_info[1] : 'index';
        }
        $page = new $class_name();
        $page->$fn();
    }

    public static function autoload($path)
    {
        include str_replace("\\", '/', $path) . '.php';
    }

    function assign($k,$v){
        $this->assigns[$k] = $v;
    }

    function display($file)
    {
        if(count($this->assigns)){
            extract($this->assigns);
        }
        include VIEW_PATH.$file.'.html';
    }

    function redirect($url){
        header('Location:'.$url);
    }

    function json($data){
        header('contentType:text/json');
        echo json_encode($data);
    }
}