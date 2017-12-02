App.directive('selectTypeActive',function () {
    return {
        link:function (scope,element,attrs) {
            scope.$watch('dispose.selectedArr',function () {
                // 找到选中组中所有的该类项
                var selected_thisType = scope.dispose.selectedArr.filter(function (t) {
                    return t.type === attrs.selectTypeActive;
                });
                // 找到购物车组中所有的该类项
                var amount_thisType = scope.dispose.cartArr.filter(function (t) {
                    return t.type === attrs.selectTypeActive;
                });
               // 判断是否已经全部选中
                if (amount_thisType.length === selected_thisType.length){
                    $(element).prop('checked',true)
                }
                else {
                    $(element).prop('checked',false)
                }
            },true)
        }
    }
});