var name = getQueryVariable('name');
var room = getQueryVariable('room');

var socket = io();

console.log(name + ' wants to join ' + room);

socket.on('connect', function () {
	console.log('Connected to Socket.io Server');
});

socket.on('message', function (message) {
	var momentTimeStamp = moment.utc(message.timestamp);
	var $message = jQuery('.messages');

	console.log('New message:');
	console.log(message.text);
    
	$message.append('<p><strong> '+message.name+' </strong>' +'<strong>'+momentTimeStamp.local().format('h:mm a')+'</strong></p>');
	$message.append('<p>'+message.text+'</p>');
});

// Handles submitting new message
var $form = jQuery('#message-form');

$form.on('submit',function (event) {
	event.preventDefault();
	var $message = $form.find('input[name=message]');
	socket.emit('message',{
		name:name,
		text:$message.val()
	});

	$message.val('');
});