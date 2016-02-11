export class MapController {
	constructor (uiGmapGoogleMapApi) {
		'ngInject';

		var scopeObject = this;

		// uiGmapGoogleMapApi is a promise.
		// The "then" callback function provides the google.maps object.
		uiGmapGoogleMapApi.then(function() {
			// console.log("uiGmapGoogleMapApi is ready!");
			// console.log(maps);

			var latitude = 39.116852;
			var longitude = -77.539673;

			scopeObject.map = {
				center: { latitude: latitude, longitude: longitude }, 
				zoom: 17
			};

			scopeObject.marker = {
				id: 0,
				coords: { latitude: latitude, longitude: longitude },
				options: { draggable: false }
			};
		});
	}
}