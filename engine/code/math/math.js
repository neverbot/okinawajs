
Engine.MATH = {};

// Object to store mathematical and graphical auxiliar 
// functions that have no other place to be ;)

Engine.MATH.Math = function()
{
}

Engine.MATH.Math.prototype.initialize = function()
{
}

Engine.MATH.Math.prototype.activate = function()
{
}

// Distance between two Engine.MATH.Point objects
Engine.MATH.Math.prototype.pointDistance = function(origin, destination)
{
  if ((destination.x == undefined) || (destination.y == undefined) || 
      (origin.x == undefined) || (origin.y == undefined))
    return -1;

  return Math.sqrt(Math.pow(destination.x - origin.x, 2) + Math.pow(destination.y - origin.y, 2));
}