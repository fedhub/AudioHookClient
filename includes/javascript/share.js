var app = angular.module('myapp.share', [
    'myapp.services'
]);

app.controller('share', ['$scope', 'books', function($scope, books){

    $scope.step_to = function(dest){
        window.location = '#/'+dest;
    };

}]);