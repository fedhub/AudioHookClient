var app = angular.module('myapp.services', []);

app.service('books', function(){

    var books = [];
    var filter_by = [];
    var filters_flag = false;
    var book_info;

    this.set_books = function(all_books){
        books = all_books;
    };

    this.get_books = function(){
        return books;
    };

    this.set_filters = function(filters){
        filter_by = filters;
    };

    this.get_filters = function(){
        return filter_by;
    };

    this.set_filters_flag = function(bool){
        filters_flag = bool;
    };

    this.get_filters_flag = function(){
        return filters_flag;
    };

    this.set_book_info = function(book){
        book_info = book;
    };

    this.get_book_info = function(){
        return book_info;
    };

});