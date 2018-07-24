/// <reference path="angular.js" />

var myApp = angular
                .module("myModule",[])
                .controller("myController",function($scope){
                    var employees = [
                        {   name: "Dolores", gender: "Female", salary: 60000, city: "London"},
                        {    name: "Maeve", gender: "Female", salary: 65000, city: "New York"},
                        {    name: "William",gender: "Male", salary: 49000, city: "Miami"},
                        {    name: "Teddy", gender: "Male", salary: 55000, city: "Washington"},  
                    ];

                   $scope.employees = employees;
                });