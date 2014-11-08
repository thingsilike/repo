
myApp.factory('Data', function ($http) {

    $http.get('/api/Lists').success(function (dataReturned) {

        alert(dataReturned.length + ' lists loaded.');

    });

    return {
        message: "Hello from angular service",
        sometext: "Hello"
    };
});