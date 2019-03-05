function Dog(){
	this.name = name;
	this.alive = true;
}

Dog.prototype.die = function(){
	this.alive = false;
}

module.exports = Dog;