(function() {
  'use strict';

  Dropzone.options.dropzone = {
    accept: function(file, done) {
      done();
    },
  };
})();
