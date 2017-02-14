/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp", ["ionic"]);
angular.module("myapp")
    .controller("myCtrl",function($scope,$state){
        $scope.showtab=false;
        $scope.$on("$ionicView.beforeEnter",function(){
            if($state.current.name=="home"){
                $scope.showtab=true
            }
        })
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("guide", {
                url: "/guide",
                templateUrl: "templates/guide/guide.html"
            })
            .state("home", {
                    url: "/home",
                    templateUrl: "templates/home/home.html",
                controller: "homeCtrl"
                })
            .state("login", {
                url: "/login",
                templateUrl: "templates/login/login.html"
            })
            .state("person", {
                url: "/person",
                templateUrl: "templates/person/person.html"
            })
            .state("shop", {
                url: "/shop",
                templateUrl: "templates/shop/shop.html"
            })
            .state("cartoon", {
                url: "/cartoon",
                templateUrl: "templates/cartoon/cartoon.html",
                controller: "cartoonCtrl"
            })
            .state("find", {
                url: "/find",
                templateUrl: "templates/find/find.html",
                controller: "findCtrl"
            })
            .state("talk", {
                url: "/talk",
                templateUrl: "templates/talk/talk.html",
                controller: "talkCtrl"
            })
            .state("rim", {
                url: "/rim",
                templateUrl: "templates/rim/rim.html",
                controller: "rimCtrl"
            })
        $urlRouterProvider.otherwise("/guide")

    });
