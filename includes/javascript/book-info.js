var app = angular.module('myapp.book_info', [
    'myapp.services'
]);

app.controller('book_info', ['$scope', 'books', function($scope, books){

    var book = books.get_book_info();
    console.log(book);
    //$(document).css('background-color', '#FFF');

    $('.book-info-cont .image').css({
        "background": "#FFF url('includes/images/"+book.image+"') no-repeat",
        "background-size": "contain",
        "background-position": "left center"
    });

    $scope.title = book.name;
    $scope.author = book.author;
    $scope.downloads = book.downloads;
    $scope.desc_pars = book.description;
    $scope.revs = book.reviews;

    $scope.step_to = function(dest){
        window.location = '#/'+dest;
    };

}]);