// Shims that only old browsers need
if (/MSIE 8.0/.test(navigator.userAgent)) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  require('./shims/event_listener');
  require('./shims/slice_nodelist');
  require('./shims/text_content');
}
