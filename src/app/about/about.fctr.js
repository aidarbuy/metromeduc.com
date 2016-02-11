import About from './about.js';

export function AboutFactory() {
	'ngInject';

	var factory = {
		imagePath: About.imagePath,
		welcome: About.welcome,
		whyMetroMed: About.whyMetroMed
	};

	return factory;
}