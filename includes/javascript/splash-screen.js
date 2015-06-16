var app = angular.module('myapp.splash-screen', []);

app.controller('splash-screen', function($scope){

    setTimeout(function(){
        window.location = '#/intro1';
    }, 3000);

});