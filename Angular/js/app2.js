
var main = angular.module('firstAngular',[]);

main.controller('myController', function ($scope) {
  
 
  $scope.users = [{no:'1',qn:'who is hari',ans:'Hari is a student'},{no:'2',qn:'who is sathish',ans:'hari is'},{no:'3',qn:'who is hari da',ans:'jjj'}];

  $scope.highlight = function(qn,search){
    return qn;
  };
});

main.filter('customFilter',function(){
  return function(users,search){
    var names = [];
    var ans = [];
    angular.forEach(users, function(user) {
      if(user.qn.indexOf(search)!==-1){
        names.push(user.qn);
      } else if (user.ans.indexOf(search)!==-1){
        ans.push(user.qn);
      }      
    });
    var item  = 'Most relevant results';
    if(names.length){
      
      names.splice(0,0,item);
    }
    var item2 = 'Other relevant results';
    if(ans.length){
      ans.splice(0,0,item2);
    }
    
    return names.concat(ans);
  };
  
});
