'use strict';

(function ($) {
  $.fn.MySlider = function (options) {
    this.settings = $.extend({
      'img': [{
        'src': '',
        'alt': '',
        'id': '', 
        'class': 'slides',
      }]}, options);

      var priv = {};
      var slide = 1;
      var count = 0;


    // Public Methods - External methods
    Object.assign(this, {
      'generateSlider': function() {
        this.settings.img.forEach(img => {
          $('slider').append('<img src="' + this.settings.img[count]['src'] + '" alt="' + this.settings.img[count]['alt'] + '" id="' + this.settings.img[count]['id'] + '" class="' + this.settings.img[count]['class'] + '"');
          count++;
        })
      }

    });

    // Private Methods - Internal methods
    Object.assign(priv, {

      //slider generation
      'generator': function(form) {
          $('body').append('<div ="slider"></div>');
          (this).generateSlider();
        }.bind(this)
      });

    // Initialise the plugin
    priv.generator();
    return this;
  };
}(jQuery));

