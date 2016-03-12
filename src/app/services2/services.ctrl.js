export class Services2Controller {
    constructor ($log, $scope, $document, ServicesFactory) {
        'ngInject';

        var myGen = function*() {
            var one = yield 1;
            var two = yield 2;
            var three = yield 3;
            $log.log(one, two, three);
        };

        // console.log("hi");
        var gen = myGen(); // get the generator ready to run
        $log.log("gen: ", gen);
        $log.info(gen.next());

        $scope.prices = ServicesFactory.prices;

        $scope.cart = [];
        $scope.addToCart = function(id) {
            $scope.cart.push(id);

            var disabledButtons = [];
            disabledButtons.push(angular.toJson(id), 'true');
            if(typeof(Storage) !== "undefined") {
                localStorage.setItem('disabledButtons', "true");

                angular.element("#result")
                    .append(angular.fromJson(localStorage.getItem('disabledButtons')));
                showLocalStorage();
            } else {
                // Sorry! No Web Storage support..
            }
        };

        function showLocalStorage() {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                $document.find("#result")
                    .append('<p>'+localStorage.key(i)+": "+localStorage.getItem(i)+'</p>');
            }
        }
    }
}