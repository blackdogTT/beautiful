App.controller('sortCtrl',['$scope',function ($scope) {
    $scope.currentCategory = $scope.data.filter(function (t) {
        return t.type === '上衣'
    });

    $scope.change = function (type) {
        var typeArr = [];
        $scope.data.forEach(function (t) {
            if (t['type'] === type){
                typeArr.push(t);
            }
        });
        $scope.currentCategory = typeArr;
    };

    $scope.post = function (item) {
        $scope.dispose.currentShow = item;
    }
}]);