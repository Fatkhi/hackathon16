angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ToursCtrl', function ($scope, Tours) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.searchChanged = function () {
      console.log(this.searchInput);
    };
    $scope.tours = Tours.all();
    $scope.remove = function (tour) {
      Tours.remove(tour);
    };
  })

  .controller('TourDetailCtrl', function ($scope, $stateParams, Tours) {
    $scope.chat = Tours.get($stateParams.id);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
