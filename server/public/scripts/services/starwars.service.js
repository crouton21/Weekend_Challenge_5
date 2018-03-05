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
            self.starwars.newSearch = {};
            console.log('searchResults array:', self.starwars.searchResults);
            
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

    self.addFavorite = function(url, name){
        console.log('In addFavorite function', url);
        
        $http({
            method: 'POST',
            url: '/starwars',
            data:{
                url: url,
                name: name
            }
        }).then(function(response){

            
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

}]);