/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var ngcmsapp = angular.module('ngcms', ['ngRoute', 'ngAnimate', 'toaster']);

/**
 * Configure the Routes
 */
ngcmsapp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    // Home
        .when("/", {
            templateUrl: "views/home.html",
            controller: "PageCtrl"
        })
        // Pages
        .when("/about", {
            templateUrl: "views/about.html",
            controller: "PageCtrl"
        })
        .when("/faq", {
            templateUrl: "views/faq.html",
            controller: "PageCtrl"
        })
        .when("/pricing", {
            templateUrl: "views/pricing.html",
            controller: "PageCtrl"
        })
        .when("/services", {
            templateUrl: "views/services.html",
            controller: "PageCtrl"
        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            controller: "PageCtrl"
        })
        // Blog
        .when("/blog", {
            templateUrl: "views/blog.html",
            controller: "BlogCtrl"
        })
        .when("/blog/post", {
            templateUrl: "views/blog_item.html",
            controller: "BlogCtrl"
        })
        .when('/login', {
            title: 'Login',
            templateUrl: 'views/login.html',
            controller: 'authCtrl'
        })
        .when('/logout', {
            title: 'Logout',
            templateUrl: 'views/login.html',
            controller: 'logoutCtrl'
        })
        .when('/signup', {
            title: 'Signup',
            templateUrl: 'views/signup.html',
            controller: 'authCtrl'
        })
        .when('/dashboard', {
            title: 'Dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'authCtrl'
        })
        // .when('/', {
        //     title: 'Login',
        //     templateUrl: 'views/login.html',
        //     controller: 'authCtrl',
        //     role: '0'
        // })
        .when('/admin', {
            title: 'Admin Dashboard',
            templateUrl: 'views/admin/dashboard.html',
        })
        // else 404
        .otherwise("/404", {
            templateUrl: "views/404.html",
            controller: "PageCtrl"
        });
    // if you don't wish to set base URL then use this
    //$locationProvider.html5Mode(true);
}]);

/* ngcmsapp.run(function($rootScope, $location, Data) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        $rootScope.authenticated = false;
        Data.get('session').then(function(results) {
            if (results.uid) {
                $rootScope.authenticated = true;
                $rootScope.uid = results.uid;
                $rootScope.name = results.name;
                $rootScope.email = results.email;
            } else {
                var nextUrl = next.$$route.originalPath;
                if (nextUrl == '/signup' || nextUrl == '/login') {

                } else {
                    $location.path("/login");
                }
            }
        });
    });
}); */

/**
 * Controls the Blog
 */
ngcmsapp.controller('BlogCtrl', function( /* $scope, $location, $http */ ) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
ngcmsapp.controller('PageCtrl', function( /* $scope, $location, $http */ ) {
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
