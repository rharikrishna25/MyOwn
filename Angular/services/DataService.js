//DAL
/**
 * DataService Module
 * 
 * Description
 */
angular.module('DataServiceModule', []).service('UserDataService', [ '$http', function ($http) {
  console.log('Initialize UserDataService');
  return {
    save : function (user) {
      $http({
        method : 'PUT',
        data : user,
        url : '../data/' + user.fname + '.json',
      });
      console.log(user);
    }
  }
} ]);
