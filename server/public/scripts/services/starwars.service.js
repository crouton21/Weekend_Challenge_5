app.service('StarwarsService', ['$http', function($http) {
    console.log('starwars service created');
    let self = this;

    self.starwars = {newSeach:{}, searchResults:[]};

    self.searchFor = function(inputSearch){
        console.log('in searchFor function', inputSearch.type, inputSearch.keyword);
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${inputSearch.type}/?search=${inputSearch.keyword}`,
        }).then(function(response){
            console.log('Search results:', response.data.results);
            self.starwars.searchResults = response.data.results;
            console.log('searchResults array:', self.starwars.searchResults);
            
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }
}]);