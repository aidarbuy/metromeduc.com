import { doctors } from './doctors';


export function DoctorsFactory() {
	'ngInject';

	// $log.log(doctors[0]);

	return {
		query: function () {
			return doctors;
		},

		findOne: function (id) {
			return doctors[id-1];
		}
	};
}