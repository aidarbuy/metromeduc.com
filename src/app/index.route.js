export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main',
			resolve: {
				// Constant title
				$title: function() { return 'Home'; }
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/about/about.html',
			controller: 'AboutController',
			controllerAs: 'about',
			resolve: {
				// Constant title
				$title: function() { return 'About'; }
			}
		})
		.state('services', {
			url: '/services',
			templateUrl: 'app/services/services.html',
			controller: 'ServicesController',
			controllerAs: 'srv',
			resolve: {
				// Constant title
				$title: function() { return 'Services'; }
			}
		})
		.state('services2', {
			url: '/services2',
			templateUrl: 'app/services2/services.html',
			controller: 'Services2Controller',
			controllerAs: 'srv2',
			resolve: {
				// Constant title
				$title: function() { return 'Services 2'; }
			}
		})
		.state('doctors', {
			url: '/doctors',
			templateUrl: 'app/doctors/doctors.html',
			controller: 'DoctorsController',
			controllerAs: 'docs',
			resolve: {
				// Constant title
				$title: function() { return 'Doctors'; }
			}
		})
		.state('doctor', {
			url: '/doctor/{id:[0-9]{1,4}}',
			templateUrl: 'app/doctors/doctor.html',
			controller: 'DoctorController',
			controllerAs: 'doc',
			resolve: {
				// Constant title
				$title: function() { return 'Doctor'; }
			}
		})
		.state('primary', {
			url: '/primary',
			templateUrl: 'app/primary/care.html',
			controller: 'PrimaryController',
			controllerAs: 'pc',
			resolve: {
				// Constant title
				$title: function() { return 'Primary Care'; }
			}
		})
		.state('map', {
			url: '/map',
			templateUrl: 'app/map/map.html',
			controller: 'MapController',
			controllerAs: 'gmap',
			resolve: {
				// Constant title
				$title: function() { return 'Map'; }
			}
		})
		.state('virtual', {
			url: '/virtual',
			templateUrl: 'app/virtual/tour.html',
			controller: 'VirtualTourController',
			controllerAs: 'vt',
			resolve: {
				// Constant title
				$title: function() { return 'Virtual tour'; }
			}
		})
		.state('gallery', {
			url: '/gallery',
			templateUrl: 'app/gallery/gallery.html',
			controller: 'PhotogalleryController',
			controllerAs: 'pg',
			resolve: {
				// Constant title
				$title: function() { return 'Photo gallery'; }
			}
		})
		.state('articles', {
			// url: '/article/{id:[0-9]{1,4}}',
			url: '/articles',
			templateUrl: 'app/articles/articles.html',
			controller: 'ArticlesController',
			controllerAs: 'arts',
			resolve: {
				// Constant title
				$title: function() { return 'Articles'; }
			}
		})
		.state('article', {
			// url: '/article/{id:[0-9]{1,4}}',
			url: '/article/{id}',
			templateUrl: 'app/articles/article.html',
			controller: 'ArticleController',
			controllerAs: 'art',
			resolve: {
				// Constant title
				$title: function() { return 'Article'; }
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: 'app/auth/login/login.html',
			controller: 'LoginController',
			controllerAs: 'li',
			resolve: {
				// Constant title
				$title: function() { return 'Login'; }
			}
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'app/auth/signup/signup.html',
			controller: 'SignupController',
			controllerAs: 'su',
			resolve: {
				// Constant title
				$title: function() { return 'Sign-up'; }
			}
		})
		.state('profile', {
			url: '/profile',
			templateUrl: 'app/auth/profile/profile.html',
			controller: 'ProfileController',
			controllerAs: 'pr',
			resolve: {
				// Constant title
				$title: function() { return 'Profile'; }
			}
		})
		.state('calendar', {
			url: '/calendar',
			templateUrl: 'app/calendar/calendar.html',
			controller: 'CalendarController',
			controllerAs: 'ca',
			resolve: {
				// Constant title
				$title: function() { return 'Calendar'; }
			}
		})
		.state('pay', {
			url: '/pay',
			templateUrl: 'app/pay/pay.html',
			controller: 'PayController',
			controllerAs: 'pay',
			resolve: {
				// Constant title
				$title: function() { return 'Pay'; }
			}
		})
		.state('telemed', {
			url: '/telemed',
			templateUrl: 'app/telemed/telemed.html',
			controller: 'TelemedController',
			controllerAs: 'tm',
			resolve: {
				// Constant title
				$title: function() { return 'Telemedicine'; }
			}
		});

	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(true).hashPrefix('!');

	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false,
	// 	rewriteLinks: true
	// }).hashPrefix('!');
}