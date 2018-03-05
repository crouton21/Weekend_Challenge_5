app.controller('SearchController', ['StarwarsService', function(StarwarsService) {
    console.log('SearchController created.');
    let self = this;

    self.starwars = StarwarsService.starwars;
    self.searchFor = StarwarsService.searchFor;
    
  }]);