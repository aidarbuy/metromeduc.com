export function config ($logProvider, toastrConfig, $mdThemingProvider, uiGmapGoogleMapApiProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

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
}
