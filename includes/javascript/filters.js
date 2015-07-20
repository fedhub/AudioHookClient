var app = angular.module('myapp.filters', [
    'myapp.services'
]);

app.controller('filters', ['$scope', 'books', 'filtering', function($scope, books, filtering){

    $('html').css('background-color', '#FFF');

    $scope.step_to = function(dest){
        window.location = '#/'+dest;
    };

    $scope.search = function(){
        window.location = '#/search/arrived_from=filters';
    };

    $('.row').click(function(){
        if(! $(this).find('.check').hasClass('v-bg')) $(this).find('.check').addClass('v-bg');
        else $(this).find('.check').removeClass('v-bg');
    });

    $scope.clear = function(type){
        $('.row.'+type).find('.check').removeClass('v-bg');
    };

    $scope.done = function(){
        var arr = [];
        $('.row').each(function(){
            if($(this).find('.check').hasClass('v-bg')){
                arr.push($(this).find('p').text());
            }
        });
        books.set_filters(arr);
        books.set_filters_flag(true);
        set_flags(arr, filtering);
        window.location = '#/browse';
    };

}]);

function set_flags(arr, filtering){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 'Most downloads') filtering.set_downloads(true);
        if(arr[i] == '20+ Seeds') filtering.set_seeds(true);
        if(arr[i] == 'All') filtering.set_all(true);
        if(arr[i] == 'Arts & Entertainment') filtering.set_arts(true);
        if(arr[i] == 'Biography & Memoir') filtering.set_biography(true);
        if(arr[i] == 'Cooking') filtering.set_cooking(true);
        if(arr[i] == 'History') filtering.set_history(true);
        if(arr[i] == 'Fiction') filtering.set_fiction(true);
    }
}