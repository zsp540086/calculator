<?php

namespace app;

use core\core;
use core\db;

class home extends core
{
    function index()
    {
        $this->display('index');
    }

    function calculator()
    {
        $this->display('calculator');
    }

    function demo()
    {
        $this->display('demo');
    }
    function ref(){
        $this->display('ref');
    }
}