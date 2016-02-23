export function TabbarDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/navigation/tabbar/tabbar.html',
    controller: TabbarController,
    controllerAs: 'tab'
  };

  return directive;
}

class TabbarController {
  constructor (Navigation, $location, $scope) {
    'ngInject';

    // console.log($location.$$path);
    // console.log($location.absUrl());
    // console.log($location.path());
    
    this.menu = Navigation;
    this.currentPath = $location.path();

    this.isSelected = function(path) {
      return this.currentPath === path;
    };

    this.setCurrent = function(path) {
      this.currentPath = path;
      // NavigationService.currentPath = path;
    };

    switch(this.currentPath) {
      case '/'         :  $scope.selectedIndex = 0; break;
      case '/about'    :  $scope.selectedIndex = 1; break;
      case '/services' :  $scope.selectedIndex = 2; break;
      case '/doctors'  :  $scope.selectedIndex = 3; break;
      case '/doctor/1' :  $scope.selectedIndex = 3; break;
      case '/doctor/2' :  $scope.selectedIndex = 3; break;
      case '/doctor/3' :  $scope.selectedIndex = 3; break;
      case '/doctor/4' :  $scope.selectedIndex = 3; break;
      case '/primary'  :  $scope.selectedIndex = 4; break;
      case '/map'      :  $scope.selectedIndex = 5; break;
      case '/virtual'  :  $scope.selectedIndex = 6; break;
      case '/gallery'  :  $scope.selectedIndex = -1; break;
      case '/articles' :  $scope.selectedIndex = -1; break;
      case '/article/'  :  $scope.selectedIndex = -1; break;
    }
  }
}