/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp").controller("cartoonCtrl",function($scope,$http,$ionicScrollDelegate){

    $scope.products=[
        {"name":"“草帽”蒙其·D·路飞","job":"草帽海贼团船长","imgsrc":"lufei.jpg"},
        {"name":"“小贼猫”娜美","job":"阿龙海贼团测量员→草帽海贼团航海士","imgsrc":"namei.jpg"},
        {"name":"“海贼猎人”罗罗诺亚·索隆","job":"东海海贼赏金猎人→草帽海贼团战斗员","imgsrc":"suolo.jpg"},
        {"name":"“黑足”山治","job":"海上餐厅巴拉蒂副料理长→草帽海贼团厨师","imgsrc":"shanzhi.jpg"},
        {"name":"“GOD”▪乌索普","job":"乌索普海贼团船长→草帽海贼团狙击手","imgsrc":"wusuopu.jpg"},
        {"name":"“爱吃棉花糖的驯鹿”托尼托尼·乔巴","job":"磁鼓岛医生→草帽海贼团船医","imgsrc":"qiaoba.jpg"},
        {"name":"“改造人”弗兰奇","job":"汤姆工作室学徒→水之都“弗兰奇之家”老大→草帽海贼团船工","imgsrc":"flq.jpg"},
        {"name":"“鼻歌”&“灵魂之王”布鲁克","job":"原某国护卫战团团长→伦巴海贼团代理船长&剑士&音乐家→草帽海贼团音乐家","imgsrc":"blk.jpg"},
        {"name":"“恶魔之子”妮可·罗宾","job":"奥哈拉岛考古学家→……→巴洛克工作社副社长Miss.AllSunday→草帽海贼团考古学家","imgsrc":"luobing.jpg"}
    ];
    $scope.loadMore=function(){
        $http.get("data/cartoon.json")
            .success(function(data){
                Array.prototype.push.apply($scope.products,data);
            })
            .finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete")
            })
    };
    $scope.timer={
        nowTime:new Date()
    };
    $scope.top=function(){
        $ionicScrollDelegate.scrollTop(true)
    }
})