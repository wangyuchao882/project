/**
 * Created by hxsd on 2017/1/19.
 */
/*function MainCtrl($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}*/
angular.module("myapp")
    .controller("homeCtrl",function($scope,$http, $ionicSideMenuDelegate){
        $scope.toggleLeftSideMenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
        var url="http://wthrcdn.etouch.cn/weather_mini?city=上海";
        $http.get(url).success(function(data){
            $scope.weather=data;
        })
    })