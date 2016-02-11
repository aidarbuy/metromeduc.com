import { prices } from './prices';

export function ServicesFactory() {
	'ngInject';

	// $log.log("Fctr: " + ServicesFactory.prices);

	return	{ 
		prices: prices
	};
}
