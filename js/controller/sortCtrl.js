App.controller('sortCtrl',['$scope',function ($scope) {
    $scope.currentCategory = $scope.data;

    $scope.change = function (type) {
        var typeArr = [];
        $scope.data.forEach(function (t) {
            if (t['type'] === type){
                typeArr.push(t);
            }
        });
        $scope.currentCategory = typeArr;
    };

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