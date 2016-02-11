import quote from './quote';

export function QuoteDirective() {
	'ngInject';

	let directive = {
		templateUrl: 'app/components/quote/quote.html',
		controller: QuoteController,
		controllerAs: 'qt'
	};

	return directive;
}


class QuoteController {
	constructor (Credentials) {
		'ngInject';

		this.quote = quote;

		this.phone = {
			link: Credentials[0].link,
			title: Credentials[0].title,
			icon: Credentials[0].icon
		};

	}
}