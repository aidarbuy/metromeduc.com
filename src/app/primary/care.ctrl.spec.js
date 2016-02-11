(function() {
	'use strict';

	describe('controllers', function(){

		beforeEach(module('metromed'));


		it('should return "Primary Care" as page title', inject(function($controller) {
			var vm = $controller('PrimaryCareController');
			expect(vm.pageTitle = "Primary Care").toBeTruthy();
		}));


		it('should return "What is a Primary Care Provider?" header', inject(function($controller) {
			var vm = $controller('PrimaryCareController');
			expect(vm.content.header = "What is a Primary Care Provider?").toBeTruthy();
		}));


		// it('should return "What is a Primary Care Provider?" header', inject(function($controller) {
		// 	var vm = $controller('PrimaryCareController');
		// 	expect(vm.content.header = "What is a Primary Care Provider?").toBeTruthy();
			// assets/images/primary/mattbeckwith_whitebg_closer.jpg
		// }));


		it('should define 7 content paragraphs', inject(function($controller) {
			var vm = $controller('PrimaryCareController');

			expect(angular.isArray(vm.content.text)).toBeTruthy();
			expect(vm.content.text.length == 7).toBeTruthy();
		}));


	});

})();
