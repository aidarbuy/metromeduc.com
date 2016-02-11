export class ServicesController {
	constructor (ServicesFactory) {
		'ngInject';

		// $log.log("Srvs: " + ServicesFactory.prices);

		this.prices = ServicesFactory.prices;

	}
}