/**
 * main Modul;
 * 
 * Description
 */
var main = angular.module('main', [ 'DataServiceModule' ]);

main.filter('customFilter', [ '$filter', function (filters, inputData, limit) {
  return function (inputData, limit) {
    if (inputData && inputData.length > limit) {
      return filters('limitTo')(inputData, limit) + '...';
    }
    return inputData;

  }
} ]);
main.filter('genderFilter', [ function (inputData) {
  return function (inputData) {
    return inputData === 'M' ? 'Male' : 'Female';

  }
} ]);

main.controller('FormController', [ '$scope', "$rootScope", 'UserDataService', function (scope, root, userDataService) {
  /*
   * root.$on('newRecord', function (event, inputData) { scope.$broadcast('down', inputData);
   * 
   * }); scope.$on('down', function (event, ip) { scope.users.push(angular.copy(scope.user)); });
   */

  scope.header = [ 'Name', 'Lastname', 'Gender', 'Action' ];
  scope.user = {};
  scope.users = [];
  scope.table = [];
  scope.showPopup = false;
  scope.save = function () {
    /* scope.$emit('newRecord', angular.copy(scope.user)); */

    var promise = userDataService.save(angular.copy(scope.user));

    promise.success(function () {
      scope.users.push(angular.copy(scope.user));
    });
    promise.error(function () {
      console.log("error");
    });
  };
  scope.reset = function () {
    scope.user = {};
  };
  scope.deleteIndex = function (selectedItem) {
    scope.users.splice(selectedItem, 1);
  };
  scope.deleteAll = function (selectedItem) {
    scope.selectedItem = selectedItem;
    scope.showPopup = true;
    scope.users.splice(0);
  };
  scope.getGender = function (selectedGender) {
    return selectedGender === 'M' ? 'Male' : 'Female';
  };

} ]);
