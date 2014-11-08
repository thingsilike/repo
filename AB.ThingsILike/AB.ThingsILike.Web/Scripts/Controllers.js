var myApp = angular.module('myApp', []);

myApp.controller('HomeController', function ($scope, $http) {

    $http.get('/api/Lists').success(function (dataReturned) {
        $scope.lists = dataReturned;
    });

    // Initial values:
    $scope.sometext = 'guest';

});

myApp.controller('ClockController', function ($scope) {

    var updateClock = function () {
        $scope.clock = new Date();
    };

    var timer = setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});