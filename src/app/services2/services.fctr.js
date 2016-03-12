import { prices } from '../services/prices';

export function ServicesFactory() {
	'ngInject';

	// $log.log("Fctr: " + ServicesFactory.prices);

	return	{ 
		prices: prices
	};
}
