<?php

class Email
{
    public string $name;
    public string $surname;
    public string $phone;
    public string $email;
    public string $subject;
    public string $message;
    public string $feed;


    public function __construct($name = '', $surname = '', $phone = '', $email = '', $subject = '', $message = '', $feed = '')
    {
        $this->name = trim($name);
        $this->surname = trim($surname);
        $this->phone = trim($phone);
        $this->email = trim($email);
        $this->subject = trim($subject);
        $this->message = trim($message);
        $this->feed = trim($feed);
    }

    public function stringFormation()
    {
        $this->message =
            "Пользователь:{$this->surname} {$this->name}
            Номер телефона: {$this->phone}
            Почта отправителя: {$this->email}
            Сообщение:
            {$this->message}
        ";
    }

    public function out()
    {
        return serialize($this);
    }

    public function submit()
    {
        $this->stringFormation();
        mail("{$this->email}", "{$this->subject}", "{$this->message}");

    }
}

?>