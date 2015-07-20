var app = angular.module('myapp.browse', [
    'myapp.services'
]);

app.controller('browse', ['$scope', 'books', 'filtering', function($scope, books, filtering){

    $('html').css('background-color', '#4098A4');
    get_all_books($scope, books, filtering);

    $scope.step_to = function(dest){
        window.location = '#/'+dest;
    };

    $scope.book_info = function(book){
        books.set_book_info(book);
        window.location = '#/book-info';
    };

    $scope.search = function(){
        window.location = '#/search/arrived_from=browse';
    };

    $scope.clear_filters = function(){
        location.reload();
    };

}]);

function get_all_books($scope, books, filtering){
    var url = base_url + '/get-all-books';
    $.ajax({
        url: url,
        type: 'POST'
    }).done(function(res){
        books.set_books(JSON.parse(res));
        if(books.get_filters_flag()) get_by_filters($scope, books, filtering);
        else {
            var _books = books.get_books();
            $scope.books = _books;
            $scope.$apply();
            $.each($('.book-cont .image'), function (i) {
                $(this).css({
                    "background": "#FCFCFC url('includes/images/" + _books[i].image + "') no-repeat",
                    "background-size": "contain",
                    "background-position": "left center"
                });
            });
        }
    });
}

function get_by_filters($scope, books, filtering){
    var _books = books.get_books();
    var filtered_books = [];
    var flags_count = 0;
    if(filtering.get_all()){ flags_count++; render_books($scope, _books, filtering)}
    else{
        if(filtering.get_downloads()){
            flags_count++;
            filtered_books = [];
            var downloads = [];
            for(var i = 0; i < _books.length; i++){
                downloads.push(parseInt(_books[i].downloads.split('K')[0]));
            }
            var max = downloads[0];
            var maxIndex = 0;
            for (var i = 1; i < downloads.length; i++) {
                if (downloads[i] > max) {
                    maxIndex = i;
                    max = downloads[i];
                }
            }
            filtered_books.push(_books[maxIndex]);
            render_books($scope, filtered_books, filtering);
        }
        else{
            if(filtering.get_arts()){ flags_count++; filtered_books.push.apply(filtered_books, check_genre('Arts & Entertainment', _books))}
            if(filtering.get_biography()){ flags_count++; filtered_books.push.apply(filtered_books, check_genre('Biographie & Memoir', _books))}
            if(filtering.get_cooking()){ flags_count++; filtered_books.push.apply(filtered_books, check_genre('cooking', _books))}
            if(filtering.get_history()){ flags_count++; filtered_books.push.apply(filtered_books, check_genre('History', _books))}
            if(filtering.get_fiction()){ flags_count++; filtered_books.push.apply(filtered_books, check_genre('Fiction', _books))}
            render_books($scope, filtered_books, filtering);
        }
    }
    if(flags_count == 0) render_books($scope, _books, filtering);
}

function render_books($scope, _books, filtering){
    $scope.books = _books;
    $scope.$apply();
    $.each( $('.book-cont .image'), function(i) {
        $(this).css({
            "background": "#FCFCFC url('includes/images/"+_books[i].image+"') no-repeat",
            "background-size": "contain",
            "background-position": "left center"
        });
    });
    filtering.reset();
}

function check_genre(genre, books){
    var matched_books = [];
    for(var i = 0; i < books.length; i++){
        if(books[i].genre == genre){
            matched_books.push(books[i]);
        }
    }
    return matched_books;
}














