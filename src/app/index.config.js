export function config($logProvider, 
                       $mdThemingProvider, 
                       uiGmapGoogleMapApiProvider, 
                       usSpinnerConfigProvider,
                       stripeProvider) {
  'ngInject';

  stripeProvider.setPublishableKey('pk_test_qj7EuqutFInexh32vAGo41V8');

  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  // toastrConfig.allowHtml = true;
  // toastrConfig.timeOut = 3000;
  // toastrConfig.positionClass = 'toast-top-right';
  // toastrConfig.preventDuplicates = true;
  // toastrConfig.progressBar = true;

  // Configuring default theme
  $mdThemingProvider.theme('default')
  .primaryPalette('cyan', {
      // 50, 100-900, A100, A200, A400, A700
      'hue-1': '600',
      'hue-2': '800',
      'hue-3': '600'
  })
  .accentPalette('pink')
  .warnPalette('red');

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.20', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
});

  // $windowProvider.Stripe.setPublishableKey('pk_test_qj7EuqutFInexh32vAGo41V8');

  usSpinnerConfigProvider.setDefaults({color: 'blue'});
  usSpinnerConfigProvider.setTheme('bigBlue', {color: 'blue', radius: 20});
  usSpinnerConfigProvider.setTheme('smallRed', {color: 'red', radius: 6});

  // angular.module('plunker', ['ui.bootstrap'])
  //   .config(['$provide', Decorate]);

  //   function Decorate($provide) {
  //     $provide.decorator('alertDirective', function($delegate) {
  //       var directive = $delegate[0];

  //       directive.templateUrl = "alertOverride.tpl.html";

  //       return $delegate;
  //     });
  //   }

  // var script = angular.element('script');
  // script.src = 'https://checkout.stripe.com/checkout.js';
  // var body = angular.element(document).find('body').eq(0);
  // body.append(script)
  // script.on('load', function() {
  //   window.console.log("StripeCheckout loaded");
  // });
}