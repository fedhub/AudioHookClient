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

app.service('filtering', function(){

    var downloads = false;
    var seeds = false;
    var all = false;
    var arts = false;
    var biography = false;
    var cooking = false;
    var history = false;
    var fiction = false;

    this.set_downloads = function(bool){
        downloads = bool;
    };

    this.get_downloads = function(){
        return downloads;
    };

    this.set_seeds = function(bool){
        seeds = bool;
    };

    this.get_seeds = function(){
        return seeds;
    };

    this.set_all = function(bool){
        all = bool;
    };

    this.get_all = function(){
        return all;
    };

    this.set_arts = function(bool){
        arts = bool;
    };

    this.get_arts = function(){
        return arts;
    };

    this.set_biography = function(bool){
        biography = bool;
    };

    this.get_biography = function(){
        return biography;
    };

    this.set_cooking = function(bool){
        cooking = bool;
    };

    this.get_cooking = function(){
        return cooking;
    };

    this.set_history= function(bool){
        history = bool;
    };

    this.get_history = function(){
        return history;
    };

    this.set_fiction = function(bool){
        fiction = bool;
    };

    this.get_fiction = function(){
        return fiction;
    };

    this.reset = function(){
        downloads = false;
        seeds = false;
        all = false;
        arts = false;
        biography = false;
        cooking = false;
        history = false;
        fiction = false;
    };

});














