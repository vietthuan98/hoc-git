function Cat(){
	console.log('My is a cat');
	this.stomach = [];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}

module.exports = Cat;