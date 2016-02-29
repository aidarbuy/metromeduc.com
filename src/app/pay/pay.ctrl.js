export class PayController {
    constructor($log, $scope, stripe, $resource) {
        'ngInject';

        var Charge = $resource('http://metromeduc.herokuapp.com/charge');
        // var Charge = $resource('http://localhost:8000/charge');

        this.doCheckoutTest = function() {
            $log.log("Creating a charge:");
            stripe.card.createToken({
                number: 4242424242424242,
                cvc: 123,
                exp_month: 9,
                exp_year: 16
            }, function(status, response) {
                $log.log(response);
                createCharge(response);
            })
        };

        this.doCheckout = function(token) {
            // var charge.stripeToken = token.id;
            $log.log("Got Stripe token: ", token.id);
            createCharge(token);
            // return $http.post('http://localhost:8000/pay', token);
        };

        // function stripeResponseHandler(status, response) {
        //     var $form = angular.element('#payment-form');

        //     if (response.error) {
        //         // Show the errors
        //         $scope.errorMessage = response.error.message;
        //         $scope.buttonDisabled = false;
        //     } else {
        //         // response contains id and card, which contains additional card details
        //         var token = response.id;
        //         // Insert the token into the form so it gets submitted to the server
        //         $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        //         // and submit
        //         $form.get(0).submit();
        //     }
        // };

        function createCharge(token) {
            var charge = new Charge();
            charge.stripeToken = token.id;
            charge.$save().then(function() {
                $log.log("test");
            })
        }

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