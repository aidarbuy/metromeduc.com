export class PayController {
    constructor($log, $resource) {
        'ngInject';

        this.doCheckout = function(token) {
          $log.log("Got Stripe token: " + token.id);
          var Charge = $resource('https://metromeduc.herokuapp.com/pay');
          var charge = Charge.save({stripeToken:token}, function() {
              $log.log("Stripe token posted.");
              $log.log(charge);
          });
        };

        // $scope.checkout = function(e) {
            // var handler = StripeCheckout.configure({
            //  key: 'pk_test_qj7EuqutFInexh32vAGo41V8',
            //  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            //  locale: 'auto',
            //  token: function(token) {
            //      $log.log("token.id: ", token.id);
            //      // Use the token to create the charge with a server-side script.
            //      // You can access the token ID with `token.id`
            //  }
            // });
            // Open Checkout with further options
            // handler.open({
            //  name: 'Demo Site',
            //  description: '2 widgets',
            //  amount: 2000
            // });
            // e.preventDefault();
            // // Close Checkout on page navigation
            // angular.element(window).on('popstate', function() {
            //  handler.close();
            // });
        // };


        // Stripe Response Handler
        // $scope.stripeCallback = function (code, result) {
        //  if (result.error) {
        //      $window.alert('it failed! error: ' + result.error.message);
        //  } else {
        //      $window.alert('success! token: ' + result.id);
        //  }
        // };
    }
}