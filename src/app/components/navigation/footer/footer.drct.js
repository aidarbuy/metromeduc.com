export function FooterDirective() {
	'ngInject';

	let directive = {
		restrict: 'EA',
		templateUrl: 'app/components/navigation/footer/footer.html',
		controller: FooterController,
		controllerAs: 'ft',
		bindToController: true
	};

	return directive;
}

class FooterController {
	constructor ($mdBottomSheet) {
		'ngInject';

		this.openBottomSheet = function() {
			$mdBottomSheet.show({
				templateUrl: 'app/components/navigation/footer/bottom-sheet.html',
				controller: 'GridBottomSheetController',
				controllerAs: 'bs'
				// targetEvent: $event
			});
		};

		// this.getDate = new Date();
		// console.log(this.getDate.getDay());
	}
}
