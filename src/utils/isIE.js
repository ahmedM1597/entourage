export default function IEdetection() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0) {
    // IE 10 or older, return version number
    // return ('IE ' + parseInt(ua.substring(
    //   msie + 5, ua.indexOf('.', msie)), 10));
    return true;
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11, return version number
    //var rv = ua.indexOf("rv:");
    // return ('IE ' + parseInt(ua.substring(
    //   rv + 3, ua.indexOf('.', rv)), 10));
    return true;
  }
  
  // var edge = ua.indexOf('Edge/');
  // if (edge > 0) {
  //     //Edge (IE 12+), return version number
  //     return ('IE ' + parseInt(ua.substring(
  //       edge + 5, ua.indexOf('.', edge)), 10));
  // }

  // User uses other browser
  return false;
}
