export class PayController {
  constructor($scope, $window) {
    'ngInject';

    // Stripe Response Handler
    $scope.stripeCallback = function (code, result) {
      if (result.error) {
        $window.alert('it failed! error: ' + result.error.message);
      } else {
        $window.alert('success! token: ' + result.id);
      }
    };
  }
}