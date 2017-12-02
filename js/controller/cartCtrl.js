App.controller('cartCtrl',['$scope',function ($scope) {
    // 商品数量增减
    $scope.addOrReduce = function (operate,item) {
        if (operate === '+'){
            if (item.count<= 99 ){
                item.count+=1;
            }
        }
        else if(operate === '-'){
            if (item.count>0){
                item.count-=1;
            }
        }
    };

    //选中项
    $scope.selectItem = function (item) {
        var condition = $scope.dispose.selectedArr.every(function (t) {
            return t.id !== item.id
        });
        if (condition){
            $scope.dispose.selectedArr.push(item);
        }
        else {
            $scope.dispose.selectedArr = $scope.dispose.selectedArr.filter(function (t) {
                return t.id !== item.id
            })
        }
        console.log($scope.dispose.selectedArr);
    };
    //选中类
    $scope.selectCategory = function (type) {
        //找到选中组中所有的该类项
        var selected_thisType = $scope.dispose.selectedArr.filter(function (t) {
            return t.type === type;
        });
        //找到购物车组中所有的该类项
        var amount_thisType = $scope.dispose.cartArr.filter(function (t) {
            return t.type === type;
        });
       // 判断是否已经全部选中
       if ( selected_thisType.length !== amount_thisType.length){
           //先删除已存在的
           $scope.dispose.selectedArr = $scope.dispose.selectedArr.filter(function (t) {
               return t.type !== type
           });
           //再把所有重新添加
           $scope.dispose.cartArr.forEach(function (t) {
               if (t.type === type ){
                   $scope.dispose.selectedArr.push(t);
               }
           });
       }
        else {
           //从选中组中移除该类所有的项
           $scope.dispose.selectedArr = $scope.dispose.selectedArr.filter(function (t) {
               return t.type !== type
           });
       }
    };
    // 全选
    $scope.selectAll = function () {
        if ($scope.dispose.selectedArr.length === $scope.dispose.cartArr.length){
            $scope.dispose.selectedArr = [];
        }
        else{
            $scope.dispose.selectedArr = [];
            $scope.dispose.cartArr.forEach(function (t) {
                $scope.dispose.selectedArr.push(t);
            });
        }
    };
//    价格计算
    $scope.priceAmount = 0;
    $scope.$watch('dispose.selectedArr',function () {
        var price = 0;
        $scope.dispose.selectedArr.forEach(function (t) {
            price+=(t.count*t.price);
        });
        $scope.priceAmount = price;
    },true);
//    删除一项
    $scope.deleteItem = function (item) {
        $scope.dispose.cartArr = $scope.dispose.cartArr.filter(function (t) {
            return t.id !== item.id;
        });
        //如果类都没有了，删除类
        var adjuge = $scope.dispose.cartArr.filter(function (t) {
            return t.type === item.type;
        }).length;
        if (adjuge===0){
            $scope.dispose.categoryArr = $scope.dispose.categoryArr.filter(function (t) {
                return t !== item.type;
            })
        }
    };
//    删除全部
    $scope.deleteAll = function () {
        $scope.dispose.cartArr = [];
        $scope.dispose.categoryArr = [];
        $scope.dispose.selectedArr = [];
    }
}]);