export class DoctorController {
	constructor (DoctorsFactory, $stateParams) {
		'ngInject';

		this.doctor = DoctorsFactory.findOne($stateParams.id);
		// var name = this.doctor.firstname + " " + this.doctor.lastname;
		// this.img = "assets/" + this.doctor.img.href.src;
		// this.alt = "Photo of doctor " + name;
		// this.header = "Dr. " + name;
	}
}