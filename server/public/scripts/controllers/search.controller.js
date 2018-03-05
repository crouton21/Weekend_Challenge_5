app.controller('SearchController', ['StarwarsService', function(StarwarsService) {
    console.log('SearchController created.');
    let self = this;

    self.starwars = StarwarsService.starwars;
    self.searchFor = StarwarsService.searchFor;
    self.addFavoritePerson = StarwarsService.addFavoritePerson;
    self.addFavoritePlanet = StarwarsService.addFavoritePlanet;
    self.addFavoriteFilm = StarwarsService.addFavoriteFilm;
    self.addFavoriteStarship = StarwarsService.addFavoriteStarship;
    self.addFavoriteVehicle = StarwarsService.addFavoriteVehicle;
    self.addFavoriteSpecies = StarwarsService.addFavoriteSpecies;



  }]);