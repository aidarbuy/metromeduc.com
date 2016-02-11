export class AboutController {
	constructor (AboutFactory) {
		'ngInject';

		this.imagePath = AboutFactory.imagePath;

		this.welcome = AboutFactory.welcome;

		this.whyMetroMed = AboutFactory.whyMetroMed;
	}
}