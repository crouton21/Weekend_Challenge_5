const app = angular.module('starwarsApp', ['ngRoute']); 

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'SearchController as sc'
  }).when('/favorites', {
    templateUrl: 'views/favorites.html',
    controller: 'FavoriteController as fc'
  }).when('/home', {
    redirectTo: '/'
  }).otherwise({ template: '<h1>404 Page Not Found</h1>' });
});

