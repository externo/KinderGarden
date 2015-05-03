'use strict';

var demoApp = angular.module('App', ['ngRoute']);
demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: '',
            templateUrl: 'templates/home.html'})
        .when('/about', {
            controller: '',
            templateUrl: 'templates/about.html'})
        .otherwise({
            redirectTo : '/home'});
});