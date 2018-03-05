const app = angular.module('starwarsApp', ['ngRoute','ngMaterial', 'ngAria', 'ngMessages']); 

app.config(function($routeProvider, $mdThemingProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'SearchController as sc'
  }).when('/favorites', {
    templateUrl: 'views/favorites.html',
    controller: 'FavoriteController as fc'
  }).when('/home', {
    redirectTo: '/'
  }).otherwise({ template: '<h1>404 Page Not Found</h1>' });

})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('light-blue')
  .accentPalette('cyan')
  .warnPalette('teal')
  .backgroundPalette('light-blue');
});