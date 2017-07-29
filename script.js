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

        return $http.get('https://api.darksky.net/forecast/0ea0dba452734effd416b885f0adbc3a/42.3601,-71.0589,409467600?exclude=currently,flags');
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
       console.log($scope.data);

   })


    $scope.customers=[
        {name:'jerry',city:'chicago'},
        {name:'tom',city:'houston'},
        {name:'enslo',city:'taipei'}
    ];


}

demo.controller(controllers);