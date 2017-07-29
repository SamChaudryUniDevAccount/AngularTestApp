// Code goes here

var demo = angular.module('demo', ['ngRoute']);
demo.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'testController',
    templateUrl: 'test.html'
  })
})

demo.factory('testFactory',function ($http) {

    var _getData = function() {

        return $http.get('https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&format=json&api_key=6f93d9bd5fef5831ec592f0b527fdeff&user_id=9395899@N08');
    };

    return{

        getBooks: _getData
    };

})



var controllers = {};
controllers.testController = function($scope,testFactory){

   $scope.first = "Info";
   $scope.data = [];

   testFactory.getBooks().success(function (data) {


       $scope.data  = data;

       //Console data
       console.log($scope.data['photo']);

   })


    $scope.customers=[
        {name:'jerry',city:'chicago'},
        {name:'tom',city:'houston'},
        {name:'enslo',city:'taipei'}
    ];


}

demo.controller(controllers);