var SolarSystem = (function(){

	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	var dwarfPlanets = ["Pluto"];
	var numPlanetsPeopleLandedOn = 0;

	return {
		getPlanets: function(){
			return planets;
		},
		getPlanetsLandedPeopleOn: function(){
			return numPlanetsPeopleLandedOn;
		},
		setPlanetsLandedPeopleOn: function(){
			numPlanetsPeopleLandedOn++;
		},
		getDwarfPlanets : function(){
			return "they are rejects";
		},
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
	}

})();

// console.log("Planets: ",SolarSystem.getPlanets());

// console.log("Plants with people: ", SolarSystem.getPlanetsLandedPeopleOn());
// SolarSystem.setSpaceships("Voyager 1");
// SolarSystem.setSpaceships("Voyager 2");
// SolarSystem.setSpaceships("Gemini");
// SolarSystem.setSpaceships("Apollo");
// console.log("Spaceships: ", SolarSystem.getSpaceships());




// SolarSystem.getPlanetsLandedPeopleOn()			<--GET
// 0
// SolarSystem.setPlanetsLandedPeopleOn()			
// undefined
// SolarSystem.setPlanetsLandedPeopleOn()
// undefined
// SolarSystem.setPlanetsLandedPeopleOn()
// undefined
// SolarSystem.setPlanetsLandedPeopleOn()
// undefined
// SolarSystem.setPlanetsLandedPeopleOn()
// undefined
// SolarSystem.getPlanetsLandedPeopleOn()			<--GET
// 5




























