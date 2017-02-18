var SolarSystem = (function(oldSolarSystem){ //write what you're trying to augment

var spaceships = [];

		oldSolarSystem.getSpaceships = function(){
			return spaceships;
		};
		oldSolarSystem.setSpaceships = function(newSpaceship){
			spaceships.push(newSpaceship);
		};
		oldSolarSystem.wreckSpaceships = function(){
			spaceships.pop();
		};


	return oldSolarSystem;
})(SolarSystem || {}); 
// v1- -})(SolarSystem); -you have to write what you're augmenting 
//v2- -})(SolarSystem || {}); -means augment this iife, but if it doesn't exist, augment an empty array