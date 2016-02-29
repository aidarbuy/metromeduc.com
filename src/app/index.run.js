// import injectTapEventPlugin from 'react-tap-event-plugin';

export function runBlock () {
  'ngInject';
  // $log.debug('runBlock end');

  // $FB.init('1518975501726591');

  // The angularLoad service provides two methods: loadScript() and loadCSS(). 
  // Call these methods to load a script or a CSS stylesheet asynchronously into the current page. 
  // Both methods return a promise that will be resolved once the resource (script or stylesheet) has been loaded. 
  // In case of an error (e.g. HTTP 404) the promise will be rejected.
  // angularLoad.loadScript('https://js.stripe.com/v2/').then(function() {
  //     // Script loaded succesfully.
  //     // We can now start using the functions from someplugin.js
  // }).catch(function() {
  //     // There was some error loading the script. Meh
  // });

  // Needed for onTouchTap
  // Can go away when react 1.0 release
  // Check this repo:
  // https://github.com/zilverline/react-tap-event-plugin
  // injectTapEventPlugin();
}