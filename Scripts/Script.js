/// <reference path="angular.js" />

var myApp = angular
                .module("myModule",[])
                .controller("myController",function($scope){
                    var employees = [
                        {    name: "Dolores", gender: 2, salary: 60000, city: "London"},
                        {    name: "Maeve", gender: 2, salary: 65000, city: "New York"},
                        {    name: "William",gender: 1, salary: 49000, city: "Miami"},
                        {    name: "Teddy", gender: 1, salary: 55000, city: "Washington"},  
                        {    name: "Charlotte", gender: 3, salary: 35000, city: "Austin"}
                    ];

                   $scope.employees = employees;
                   
                });