/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

// Constants
import Credentials from '../app/components/navigation/credentials';
import Navigation from '../app/components/navigation/navigation';

// Filters
import { UnsafeFilter } from '../app/components/filters/unsafe.fltr';

// Navigation
import { ToolbarDirective } from '../app/components/navigation/toolbar/toolbar.drct';
import { TabbarDirective } from '../app/components/navigation/tabbar/tabbar.drct';
import { SidenavDirective } from '../app/components/navigation/sidenav/sidenav.drct';

// Main
import { LayersliderDirective } from '../app/components/layerslider/layerslider.drct';
import { TopSidebarDirective } from '../app/components/top-sidebar/top-sidebar.drct';
import { QuoteDirective } from '../app/components/quote/quote.drct';
import { CustomServicesDirective } from '../app/components/custom-services/custom-services.drct';
import { MedicalSchoolDirective } from '../app/components/medical-school/articles.drct';
import { TestimonialsDirective } from '../app/components/testimonials/testimonials.drct';

// About 
import { AboutController } from './about/about.ctrl';
import { AboutFactory } from './about/about.fctr';

// Services
import { ServicesController } from './services/services.ctrl';
import { ServicesFactory } from './services/services.fctr';

// Doctors
import { DoctorsController } from './doctors/doctors.ctrl';
import { DoctorController } from './doctors/doctor.ctrl';
import { DoctorsFactory } from './doctors/doctors.fctr';

// Primary
import { PrimaryController } from './primary/care.ctrl';
import { PrimaryFactory } from './primary/care.fctr';

// Map
import { MapController } from './map/map.ctrl';

// Virtual Tour
import { VirtualTourController } from './virtual/tour.ctrl';

// Photo Gallery
import { PhotogalleryController } from './gallery/gallery.ctrl';

// Articles
import { ArticlesController } from './articles/articles.ctrl';
import { ArticleController } from './articles/article.ctrl';
import { ArticlesFactory } from './articles/articles.fctr';

// Scheduling
import { CalendarController } from './calendar/calendar.ctrl';

// Pay
import { PayController } from './pay/pay.ctrl';

// Footer
import { FooterDirective } from '../app/components/navigation/footer/footer.drct';
import { GridBottomSheetCtrl } from '../app/components/navigation/footer/bottom-sheet.ctrl';


angular.module('metromed', [
    'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 
    'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 
    'updateMeta', 'toastr', 'uiGmapgoogle-maps', 
    'djds4rce.angular-socialshare', 'firebase',
    'ui.calendar', 'angularLoad', 'angularPayments', 'angularSpinner'
  ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)

  // Constants
  .constant('Credentials', Credentials)
  .constant('Navigation', Navigation)
  
  // Filters
  .filter('unsafe', UnsafeFilter)

  // Navigation
  .directive('toolbar', ToolbarDirective)
  .directive('tabbar', TabbarDirective)
  .directive('sidenav', SidenavDirective)

  // Main
  .controller('MainController', MainController)
  .directive('layerslider', LayersliderDirective)
  .directive('topSidebar', TopSidebarDirective)
  .directive('quote', QuoteDirective)
  .directive('customServices', CustomServicesDirective)
  .directive('medicalSchool', MedicalSchoolDirective)
  .directive('testimonials', TestimonialsDirective)

  // About  
  .controller('AboutController', AboutController)
  .factory('AboutFactory', AboutFactory)

  // Services
  .controller('ServicesController', ServicesController)
  .factory('ServicesFactory', ServicesFactory)

  // Doctors
  .controller('DoctorsController', DoctorsController)
  .controller('DoctorController', DoctorController)
  .factory('DoctorsFactory', DoctorsFactory)

  // Primary
  .controller('PrimaryController', PrimaryController)
  .factory('PrimaryFactory', PrimaryFactory)

  // Map
  .controller('MapController', MapController)

  // Virtual Tour
  .controller('VirtualTourController', VirtualTourController)

  // Photo Gallery
  .controller('PhotogalleryController', PhotogalleryController)

  // Articles
  .controller('ArticlesController', ArticlesController)
  .controller('ArticleController', ArticleController)
  .factory('ArticlesFactory', ArticlesFactory)

  // Calendar
  .controller('CalendarController', CalendarController)

  // Pay
  .controller('PayController', PayController)

  // Footer
  .controller('GridBottomSheetController', GridBottomSheetCtrl)
  .directive('metromedFooter', FooterDirective);