app.service('StarwarsService', ['$http', function($http) {
    console.log('starwars service created');
    let self = this;

    self.starwars = {newSearch:{}, searchResults:[], favorites:[], type:''};

    self.searchFor = function(inputSearch){
        console.log('in searchFor function', inputSearch.type, inputSearch.keyword);
        self.starwars.type = inputSearch.type;
        console.log('Type of search:', self.starwars.type);
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

    self.addFavoritePerson = function(url, name, birthYear, gender){
        console.log('In addFavoritePerson function', url);
        $http({
            method: 'POST',
            url: '/starwars/person',
            data:{
                url: url,
                name: name,
                birth_year: birthYear,
                gender: gender,
                type: self.starwars.type
            }
        }).then(function(response){
            console.log(response);
            self.getFavorites(); 
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

    self.addFavoritePlanet = function(url, name, climate, population){
        console.log('In addFavoritePlanet function', url);
        $http({
            method: 'POST',
            url: '/starwars/planet',
            data:{
                url: url,
                name: name,
                climate: climate,
                population: population,
                type: self.starwars.type
            }
        }).then(function(response){
            console.log(response);
            self.getFavorites(); 
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

    self.addFavoriteFilm = function(url, title, releaseDate, director){
        console.log('In addFavoriteFilm function', url);
        $http({
            method: 'POST',
            url: '/starwars/film',
            data:{
                url: url,
                title: title,
                release_date: releaseDate,
                director: director,
                type: self.starwars.type
            }
        }).then(function(response){
            console.log(response);
            self.getFavorites(); 
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

    self.addFavoriteStarship = function(url, name, model, passengers){
        console.log('In addFavoriteStarship function', url);
        $http({
            method: 'POST',
            url: '/starwars/starship',
            data:{
                url: url,
                name: name,
                model: model,
                passengers: passengers,
                type: self.starwars.type
            }
        }).then(function(response){
            console.log(response);
            self.getFavorites(); 
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

    self.addFavoriteVehicle = function(url, name, manufacturer, model){
        console.log('In addFavoriteVehicle function', url);
        $http({
            method: 'POST',
            url: '/starwars/vehicle',
            data:{
                url: url,
                name: name,
                manufacturer: manufacturer,
                model: model,
                type: self.starwars.type
            }
        }).then(function(response){
            console.log(response);
            self.getFavorites(); 
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

    self.addFavoriteSpecies = function(url, name, language, classification){
        console.log('In addFavoriteSpecies function', url);
        $http({
            method: 'POST',
            url: '/starwars/species',
            data:{
                url: url,
                name: name,
                language: language,
                classification: classification,
                type: self.starwars.type
            }
        }).then(function(response){
            console.log(response);
            self.getFavorites(); 
        }).catch(function(error){
            console.error('Error finding search', error)
        })
    }

    self.getFavorites = function(){
        console.log('In getFavorites function');
        $http({
            method: 'GET',
            url: '/starwars'
        }).then(function(response){
            console.log('Got favorites:', response.data);
            self.starwars.favorites = response.data;
            console.log('favorites array:', self.starwars.favorites);
            
        }).catch(function(error){
            console.error('Error getting favorites', error)
        })

    }

    self.removeFavorite = function(id){
        console.log('In removeFavorite function', id);
        $http({
            method: 'DELETE',
            url: `/starwars/${id}`
        }).then(function(response){
            console.log('Favorite deleted:', response);
            self.getFavorites();
        }).catch(function(error){
            console.error('Error deleting favorite', error)
        })
    }

    self.getFavorites();

}]);