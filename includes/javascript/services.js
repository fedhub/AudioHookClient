var app = angular.module('myapp.services', []);

app.service('books', function(){

    var books;

    this.set_books = function(all_books){
        books = all_books;
    };
    this.get_books = function(){
        return books;
    };

});