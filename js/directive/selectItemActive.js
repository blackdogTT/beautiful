App.directive('selectItemActive',function () {
   return {
       link:function (scope,element,attrs) {
           //判断是否在选中组中，如果在则变为选中状态
           var identifier = false;
           scope.$watch('dispose.selectedArr',function () {
               scope.dispose.selectedArr.forEach(function (t) {
                   if (t.id == attrs.selectItemActive){
                       identifier = true;
                   }
               });
               if (identifier){
                   $(element).prop('checked',true);
               }
               else {
                   $(element).prop('checked',false);
               }
               identifier = false;
           },true);
       }
   } 
});