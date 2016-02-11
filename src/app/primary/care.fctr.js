import primary from './care';

export function PrimaryFactory() {
	'ngInject';

	// console.log(primary);

	let factory = {
		query: function queryPrimary() {
			return primary;
		}
	};

	return factory;
}