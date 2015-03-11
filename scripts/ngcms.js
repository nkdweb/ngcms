/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('ngcms', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "views/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "views/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "views/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "views/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "views/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "views/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "views/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "views/404.html", controller: "PageCtrl"});
    // if you don't wish to set base URL then use this
    //$locationProvider.html5Mode(true);
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});