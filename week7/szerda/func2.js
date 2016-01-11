function greet(name) {
	console.log('Csaaa ' + name + '!')
}

greet('bela')

var koszontes = greet;

koszontes('gyiru');

print = console.log;

print('adam');

function greeter(name, log) {
	log('csovi ' + name);
}

greeter('lajoskam', console.log);

greeter('Csabi', function(text) {
	console.log(text, 'logged by my function')
});