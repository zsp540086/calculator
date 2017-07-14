<?php

namespace core;
class db
{
    public $pdo;
    public $table;
    public $condition;

    public function __construct($table = '')
    {
        $options = array(
            \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
        );
        $this->pdo = new \PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8', 'root', '',$options);
        $this->table = $table;
    }

    function where($where)
    {
        $this->condition = $where;
        return $this;
    }

    function selectAll()
    {
        if ($this->condition) {
            foreach ($this->condition as $k => $v) {
                $sql = "select * from {$this->table} where {$k} = '{$v}' ";
            }
        } else {
            $sql = "select * from {$this->table}";
        }

        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    function select()
    {
        if ($this->condition) {
            foreach ($this->condition as $k => $v) {
                $sql = "select * from {$this->table} where {$k} = '{$v}' ";
            }
        } else {
            $sql = "select * from {$this->table}";
        }

        $stmt = $this->pdo->query($sql);
        return $stmt->fetch();
    }

    function query($sql)
    {
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }
}