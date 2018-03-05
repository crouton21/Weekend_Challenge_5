app.controller('SearchController', ['StarwarsService', function(StarwarsService) {
    console.log('SearchController created.');
    let self = this;

    self.newSearch = StarwarsService.newSearch;
    self.searchFor = StarwarsService.searchFor;
    
  }]);