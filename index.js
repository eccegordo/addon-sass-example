/* jshint node: true */
'use strict';

module.exports = {
  name: 'addon-sass-example',
  // allows scss processing
  // source ember cli sass readme https://github.com/aexmachina/ember-cli-sass
  included: function(app) {
    this._super.included(app);
  }
};
