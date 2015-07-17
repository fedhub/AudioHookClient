var app = angular.module('myapp.filters', [
    'myapp.services'
]);

app.controller('filters', ['$scope', 'books', function($scope, books){

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
        window.location = '#/browse';
    };

}]);