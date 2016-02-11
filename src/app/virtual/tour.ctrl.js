export class VirtualTourController {
	constructor ($sce, $window) {
		'ngInject';

		this.vtSrc = $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435317827152!6m8!1m7!1sDV3R4lZfUPwAAAQqg2kDFw!2m2!1d39.116755!2d-77.539826!3f328!4f0!5f0.7820865974627469');

		this.iframeHeight = $window.screen.height - 300;

	}
}