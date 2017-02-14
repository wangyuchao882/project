/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp")
    .controller("talkCtrl",function($scope,$http,$ionicScrollDelegate){
        $scope.products=[
            {"title":"海贼王各人物小时候的样子，你认识几个？","content":"这个估计比较烧脑，好好回忆下","imgsrc":"lufei.jpg"},
            {"title":"鹰眼黑刀级别的刀一共12把，索隆是不是要打败12个人才行？？？","content":"12工，世界最强的12把刀，拥有者绝对都是强者！ 鹰眼排名12之首","imgsrc":"namei.jpg"},
            {"title":"黄猿是不是海贼王里最全面的人？堪称全才 ","content":"虽然不是最强的人，但战斗技能最全面的的非黄猿莫属 ","imgsrc":"suolo.jpg"},
        ];
        $scope.loadMore=function(){
            $http.get("data/talk.json")
                .success(function(data){
                    Array.prototype.push.apply($scope.products,data);
                })
                .finally(function(){
                    $scope.$broadcast("scroll.infiniteScrollComplete")
                })
        };
        $scope.doRefresh=function(){
            $http.get("data/talk.json")
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
        //---------------------------
        /*$scope.arr=[];
        $http.get("data/talk.json").success(function(data){
            $scope.arr=data;
        })
        $scope.timer={
            nowTime:new Date()
        };*/

    });