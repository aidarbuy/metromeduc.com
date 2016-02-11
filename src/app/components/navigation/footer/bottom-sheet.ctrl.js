export class GridBottomSheetCtrl {
	constructor () {
		'ngInject';

		this.items = [{ 
				name: 'Facebook', 
				icon: 'facebook',
				href: 'https://www.facebook.com/windingcrossofleesburg/'
			},{ 
				name: 'Instagram', 
				icon: 'instagram',
				href: 'https://instagram.com/metromeduc/'
			},{ 
				name: 'Google+', 
				icon: 'google-plus',
				href: 'https://plus.google.com/114492782868727824098/'
			},{ 
				name: 'LinkedIn', 
				icon: 'linkedin',
				href: 'https://www.linkedin.com/'
			},{ 
				name: 'Twitter', 
				icon: 'twitter',
				href: 'https://twitter.com/metromeduc'
			},{ 
				name: 'Youtube', 
				icon: 'youtube',
				href: 'https://www.youtube.com/MetroMedUrgentCare'
		}];

		this.listItemClick = function() {
			// var clickedItem = this.items[$index];
			// $mdBottomSheet.hide(clickedItem);
		};
	}
}
