App.directive('selectAllActive',function () {
    return {
        link:function (scope,element,attrs) {
            scope.$watch('dispose.selectedArr',function () {
                if (scope.dispose.selectedArr.length === scope.dispose.cartArr.length){
                    $(element).prop('checked',true)
                }
                else{
                    $(element).prop('checked',false)
                }
            },true)
        }
    }
});