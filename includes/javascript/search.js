var app = angular.module('myapp.search', [
    'myapp.services'
]);

app.controller('search', ['$scope', '$routeParams', 'books', function($scope, $routeParams, books){

    var arrived_from = $routeParams.arrived_from;
    arrived_from = arrived_from.split('=');
    arrived_from = arrived_from[1];
    var _books;
    var url = base_url + '/get-all-books';
    $.ajax({
        url: url,
        type: 'POST'
    }).done(function(res){
        books.set_books(JSON.parse(res));
        _books = books.get_books();
    });

    $('input').on('keyup', function(){
        var str = $(this).val();
        var arr = [];
        if(str.length > 0){
            for(var i = 0; i < _books.length; i++){

                if(_books[i].name.toLowerCase().indexOf(str) >= 0){
                    arr = [];
                    arr.push(_books[i]);
                }
            }
            if(arr.length > 0){
                $scope.bookss = arr;
                $scope.$apply();
                $('.book-cont .image').css({
                    "background": "#FCFCFC url('includes/images/"+arr[0].image+"') no-repeat",
                    "background-size": "contain",
                    "background-position": "left center"
                });
            }
        }
        else{
            $scope.bookss = [];
            $scope.$apply();
        }
    });

    $scope.delete_text = function(){
        $('input').val('');
        $scope.bookss = [];
        window.location = '#/' + arrived_from;
    };

    //$('input').on('keyup', function(){
    //    var char = $(this).val()[0];
    //    console.log(char);
    //    var arr = [];
    //    if(_books[0].name[0] == char){
    //        arr = [];
    //        arr.push(_books[0]);
    //        $scope.bookss = arr;
    //        $scope.$apply();
    //        $('.book-cont .image').css({
    //            "background": "#FCFCFC url('includes/images/"+arr[0].image+"') no-repeat",
    //            "background-size": "contain",
    //            "background-position": "left center"
    //        });
    //    }
    //    else if(_books[1].name[0] == char){
    //        arr = [];
    //        arr.push(_books[1]);
    //        $scope.bookss = arr;
    //        $scope.$apply();
    //        $('.book-cont .image').css({
    //            "background": "#FCFCFC url('includes/images/"+arr[0].image+"') no-repeat",
    //            "background-size": "contain",
    //            "background-position": "left center"
    //        });
    //    }
    //    else{
    //        $scope.bookss = [];
    //        $scope.$apply();
    //    }
    //});
    //
    //$scope.delete_text = function(){
    //    $('input').val('');
    //    $scope.bookss = [];
    //}

}]);