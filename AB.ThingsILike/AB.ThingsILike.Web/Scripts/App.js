var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvider) {

    $routeProvider.when('/Lists', {
        templateUrl: 'Scripts/AngularViews/Lists.html',
        controller: 'ListsController'
    }).when('/About', {
        templateUrl: 'Scripts/AngularViews/About.html'
    }).otherwise({
        templateUrl: 'Scripts/AngularViews/Home.html'
    });
});