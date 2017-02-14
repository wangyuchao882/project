/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp")
    .controller("rimCtrl",function($scope,$http,$ionicScrollDelegate){
        /*$scope.arr=[];
        $http.get("data/shop.json").success(function(data){
            $scope.arr=data;
        })*/
        $scope.products=[
            {"name":"全套onepiece周边摆件玩偶 ","per":"蒙奇·D·路飞","imgsrc":"lufei.jpg"},
            {"name":"路飞LED小夜灯 ","per":"巴基","imgsrc":"luobing.jpg"},
            {"name":"海贼王卫衣服路飞外套动漫周边","per":"Mr.5","imgsrc":"qiaoba.jpg"},
            {"name":"正版onepiece动漫生日礼物 ","per":"妮可·罗宾","imgsrc":"flq.jpg"},
            {"name":"ONEPIECE 海贼/航海王手办 公仔 ","per":"布鲁诺","imgsrc":"suolo.jpg"},
            {"name":"ONEPIECE路飞索隆乔巴全套 ","per":"布鲁克","imgsrc":"blk.jpg"},
            {"name":"特价海贼王PVC人偶动漫周边礼物 ","per":"月光·莫利亚","imgsrc":"namei.jpg"}
        ];
        $scope.loadMore=function(){
            $http.get("data/rim.json")
                .success(function(data){
                    Array.prototype.push.apply($scope.products,data);
                })
                .finally(function(){
                    $scope.$broadcast("scroll.infiniteScrollComplete")
                })
        };
        $scope.doRefresh=function(){
            $http.get("data/rim.json")
                .success(function(data){
                    $scope.products=data;
                })
                .finally(function(){
                    $scope.$broadcast("scroll.refreshComplete");
                });
        };
        $scope.timer={
            nowTime:new Date()
        };
        $scope.top=function(){
            $ionicScrollDelegate.scrollTop(true)
        }
    })