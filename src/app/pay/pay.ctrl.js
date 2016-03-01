export class PayController {
    constructor($log, $scope, $timeout, stripe, $resource) {
        'ngInject';

        var Charge = $resource('http://metromeduc.herokuapp.com/charge');
        // var Charge = $resource('http://localhost:8000/charge');
        $scope.notification = "Your payment was successful!"
        $scope.showNotification = false;
        $scope.showButtons = true;
        $scope.showProgress = false;

        $scope.doTestCheckout = function() {
            $log.debug("Creating testing charge");
            stripe.card.createToken({
                number: 4242424242424242,
                cvc: 123,
                exp_month: 9,
                exp_year: 16
            }, function(status, response) {
                createCharge(response);
            })
        };
        // $scope.doTestCheckout();

        this.doCheckout = function(token) {
            $log.log("Got Stripe token: ", token.id);
            createCharge(token);
        };

        function createCharge(token) {
            $scope.showProgress = true;
            var charge = new Charge();
            charge.stripeToken = token.id;
            charge.$save().then(function(charge) {
                changeTitle("Successful payment");
                prepareChargeItems(charge);
                $scope.showNotification = true;
                $scope.showButtons = false;
                $scope.showProgress = false;
            })
        }

        function changeTitle(text) {
            angular.element('h2').text(text);
        }

        function prepareChargeItems(charge) {
            var chargeItems = {
                description : "Test charge",
                currency    : charge.currency
            };
            chargeItems.amount = charge.amount/10;
            var dateNow = new Date();
            chargeItems.date = dateNow.toDateString();
            chargeItems.time = dateNow.toLocaleTimeString();
            $scope.chargeItems = chargeItems;            
        }
    }
}