export class TelemedController {
  constructor($log, $window, $document) {
    'ngInject';

    var promisifiedOldGUM = function(constraints, successCallback, errorCallback) {

      // First get ahold of getUserMedia, if present
      var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if(!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(successCallback, errorCallback) {
        getUserMedia.call(navigator, constraints, successCallback, errorCallback);
      });
        
    }

    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if(angular.isUndefined(navigator.mediaDevices)) {
      navigator.mediaDevices = {};
    }

    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if(angular.isUndefined(navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia = promisifiedOldGUM;
    }


    // Prefer camera resolution nearest to 1280x720.
    var constraints = { audio: false, video: { width: 1280, height: 720 } };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      var video = angular.element(document).find('video');
      video.src = $window.URL.createObjectURL(stream);
      video.onloadedmetadata = function(e) {
        $log.info(e);
        video.play();
      };
    })
    .catch(function(err) {
      $log.log(err.name + ": " + err.message);
    });
 }
}