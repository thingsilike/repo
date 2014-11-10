var myApp = angular.module('myApp', []);

myApp.controller('HomeController', function ($scope, $http) {

    $http.get('/api/Lists').success(function (dataReturned) {
        $scope.lists = dataReturned;
    });

});