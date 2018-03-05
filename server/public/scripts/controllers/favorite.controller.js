app.controller('FavoriteController', ['StarwarsService', function(StarwarsService) {
    console.log('FavoriteController created.');
    let self = this;

    self.starwars = StarwarsService.starwars;
    self.removeFavorite = StarwarsService.removeFavorite;
    
  }]);