var app = angular.module('myapp', [
    'myapp.splash-screen',
    'myapp.intro',
    'myapp.browse',
    'myapp.services',
    'myapp.search'
]);

//var base_url = 'http://audiohook.herokuapp.com';
var base_url = 'http://www.audiohook.herokuapp.com';

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl: 'partials/splash-screen.html',
            controller: 'splash-screen',
            resolve: { resolvedVal: function(){ return; }}}
        )
        .when('/intro1',{
            templateUrl: 'partials/intro1.html',
            controller: 'intro',
            resolve: { resolvedVal: function(){ return; }}}
        )
        .when('/intro2',{
            templateUrl: 'partials/intro2.html',
            controller: 'intro',
            resolve: { resolvedVal: function(){ return; }}}
        )
        .when('/intro3',{
            templateUrl: 'partials/intro3.html',
            controller: 'intro',
            resolve: { resolvedVal: function(){ return; }}}
        )
        .when('/browse',{
            templateUrl: 'partials/browse.html',
            controller: 'browse',
            resolve: { resolvedVal: function(){ return; }}}
        )
        .when('/search',{
            templateUrl: 'partials/search.html',
            controller: 'search',
            resolve: { resolvedVal: function(){ return; }}}
    ).otherwise({redirectTo: '/'});

}]);