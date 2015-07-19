var app = angular.module('myapp.browse', [
    'myapp.services'
]);

app.controller('browse', ['$scope', 'books', function($scope, books){

    $('html').css('background-color', '#4098A4');
    get_all_books($scope, books);

    if(books.get_filters_flag()) {
        get_by_filters($scope, books);
    }

    $scope.step_to = function(dest){
        window.location = '#/'+dest;
    };

    $scope.book_info = function(book){
        books.set_book_info(book);
        window.location = '#/book-info';
    };

    $scope.search = function(){
        window.location = '#/search/arrived_from=browse';
    }

}]);

function get_all_books($scope, books){
    var url = base_url + '/get-all-books';
    $.ajax({
        url: url,
        type: 'POST'
    }).done(function(res){
        books.set_books(JSON.parse(res));
        //render_books($scope, books, true);
        var _books = books.get_books();
        $scope.books = _books;
        $scope.$apply();
        $.each( $('.book-cont .image'), function(i) {
            $(this).css({
                "background": "#FCFCFC url('includes/images/"+_books[i].image+"') no-repeat",
                "background-size": "contain",
                "background-position": "left center"
            });
        });
    });
}

function get_by_filters($scope, books){

}