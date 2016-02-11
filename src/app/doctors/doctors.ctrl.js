export class DoctorsController {
	constructor (DoctorsFactory) {
		'ngInject';

		this.list = DoctorsFactory.query();
	}
}