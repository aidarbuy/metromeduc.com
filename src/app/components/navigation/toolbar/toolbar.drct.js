export function ToolbarDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/navigation/toolbar/toolbar.html',
    replace: true,
    controller: ToolbarController,
    controllerAs: 'tb',
    bindToController: true
  };

  return directive;
}

class ToolbarController {
  constructor ($mdSidenav, $timeout) {
    'ngInject';

    // var self = this;

    // Auth.$onAuth(function(authData) {
      // self.authData = authData;
      // $window.console.log(self.authData);
    // });

    // this.toggleSidenav = function (navID) {
    //   $mdSidenav(navID).toggle();
    // };

    this.toggleLeft = buildDelayedToggler('left');

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        context = this;
        var args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            // $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
  }
}
