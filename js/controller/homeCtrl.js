App.controller('homeCtrl',['$scope',function ($scope) {

    //初始化每页显示项目和页数
    $scope.itemPerPage = 20;
    $scope.pages = Math.round($scope.data.length/$scope.itemPerPage);
    
    //初始化当前显示的项目
    $scope.currentItems = (function () {
        var arr=[];
        for (var i = 0; i < 20; i++){
            arr.push($scope.data[i]);
        }
        return arr;
    })();

    //初始化页面数量数组
    $scope.pagesItem = (function () {
        var arr=[];
        for (var j = 1; j < $scope.pages+1; j++){
            arr.push(j);
        }
        return arr;
    })();
    
    // 点击翻页
    $scope.pageChange = function (index) {
        var arr = [];
        for (var i = (index-1) * $scope.itemPerPage; i < index*20; i++){
            arr.push($scope.data[i]);
        }
        $scope.currentItems = arr;
    };

    // 点击给详情界面传送数据
    $scope.post = function (item) {
        $scope.dispose.currentShow = item;
    }
}]);
