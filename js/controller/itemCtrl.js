App.controller('itemCtrl',['$scope',function ($scope) {
    $scope.add = function (item) {
        if ($scope.dispose.cartArr.every(function (t) {
                return t['id'] !== item['id'];
            })){
            $scope.dispose.cartArr.push(item);
        }

        if (
            $scope.dispose.categoryArr.every(function (t) {
                return t !== item.type;
            })
        ){
            $scope.dispose.categoryArr.push(item.type);
        }

    };
}]);