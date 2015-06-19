var app = angular.module('myapp.browse', [
    'myapp.services'
]);

app.controller('browse', ['$scope', 'books', function($scope, books){

    get_all_books($scope, books);

    $scope.step_to = function(dest){
        window.location = '#/'+dest;
    };

    $scope.search = function(){
        window.location = '#/search';
    }

}]);

function get_all_books($scope, books){
    var url = base_url + '/get-all-books';
    $.ajax({
       url: url,
        type: 'POST'
    }).done(function(res){
        books.set_books(JSON.parse(res));
        var _books = books.get_books();
        $scope.books = _books;
        $scope.$apply();
        $.each( $('.book-cont .image'), function(i) {
            console.log(_books[i].image);
            $(this).css({
                "background": "#FCFCFC url('includes/images/"+_books[i].image+"') no-repeat",
                "background-size": "contain",
                "background-position": "left center"
            });
        });
    });
}