var app = angular.module('myapp.intro', []);

app.controller('intro', function($scope){

    $scope.step_to = function(dest){
        window.location = '#/'+dest;
    };

});