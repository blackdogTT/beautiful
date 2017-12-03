App.controller('AppCtrl', ['$scope',"$window",'$http', function ($scope,$window,$http) {
    // 设置本地储存
    $scope.$watch('dispose.cartArr',function (newValue,oldValue,scope) {
        $window.localStorage.setItem('cartArr',JSON.stringify($scope.dispose.cartArr));
        $window.localStorage.setItem('categoryArr',JSON.stringify($scope.dispose.categoryArr));
        $window.localStorage.setItem('selectedArr',JSON.stringify($scope.dispose.selectedArr));
    },true);

    //用以与子控制器通信的对象
    $scope.dispose = {
        //购物车中的物品
        cartArr: JSON.parse($window.localStorage.getItem('cartArr')) || [],
        //商品的类
        categoryArr: JSON.parse($window.localStorage.getItem('categoryArr')) || [],
        // 选中的商品
        selectedArr:JSON.parse($window.localStorage.getItem('selectedArr')) || [],
        // 展示的商品
        currentShow:{
            "id": 1,
            "type": "上衣",
            "price": 199,
            "imageSrc": "images/clothes/01.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        }
    };

    //请求数据
    $scope.data = [];
    $http({
        method:'GET',
        url:'category.json'
    }).then(function (response) {
        $scope.data=response.data;
        console.log(response);
    },function (response) {
        console.log('请求失败:'+response);
    });

}]);