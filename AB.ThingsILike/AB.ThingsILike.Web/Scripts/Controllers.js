

myApp.controller('ListsController', function ($scope, $http, $location, $window) {

    $http.get('/api/Lists').success(function (dataReturned) {
        $scope.lists = dataReturned;
    });

    // Google analytics:

    $scope.$on('$viewContentLoaded', function (event) {
        $window.ga('send', 'pageview', { page: $location.path() });
    });

});