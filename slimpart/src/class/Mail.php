<?php
define('__ROOT__', dirname(dirname(__FILE__))); 
require_once __ROOT__.'/../vendor/autoload.php'; 

// This used to be a Mandril email client to send transactional emails, 
// now this is using the normal php email 
// 

class Mail{
	private $transport;
	public $message;

	// Amazon ses SMTP settings
	private $USR_NAME = 'AKIAIJWLBHSOOXGEQL7A';
	private $PASSWORD = 'AocaUsNVOWkI8kWvr8kn2tNrtzh48tPk24cNJ0Nv9Tu5';
	private $SERVER = 'email-smtp.us-east-1.amazonaws.com';

	// Swift mailer to mail using SMTP credentials
	private $mailer;
	/**
	 * Mail constructor.
	 */
	public function __construct()
	{
		$this->transport = Swift_SmtpTransport::newInstance($this->SERVER,587,"tls");
		$this->transport->setUsername($this->USR_NAME);
		$this->transport->setPassword($this->PASSWORD);
	}

	/*
     * Builds a new message ready to send
     * Takes to_email, subject, and body to build an email
     */
	public function newMessage($to,$subject="",$body=""){
		$this->message = Swift_Message::newInstance();
		$this->message->setFrom("hi@ambitionbox.com","AmbitionBox");
		$this->message->setContentType("text/html");
		$this->mailer = Swift_Mailer::newInstance($this->transport);
		$this->message->setSubject($subject);
		$this->message->setBody($body);
		$this->message->setTo($to);
	}

	/*
     * This just sends an email which is framed
     * Acts as a trigger
     */

	public function send($email,$subject,$body,$tags=null,$name='Unknown')
	{
		$this->newMessage($email,$subject,$body);
		$this->mailer->send($this->message);

	}
}


?>