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
      'generateImage': function() {
        this.settings.img.forEach(img => {
          $('slider').append('<img src="' + this.settings.img[count]['src'] + '" alt="' + this.settings.img[count]['alt'] + '" id="' + this.settings.img[count]['id'] + '" class="' + this.settings.img[count]['class'] + '"style= "width:100%">');
          count++;
        })
      },

      'showSlide': function(n) {
        var i;
        var x = document.getElementsByClassName("slides");
        if (n > x.length) {
          slide = 1;
        };
        if (n < 1) {
          slide = x.length;
        }
        for (i = 0; i < x.length; i++) {
          x[i].getElementsByClassName.display = "none";
        }
        x[slide-1].getElementsByClassName.display = "block";
      },

      'moveSlide': function (n) {
        showSlide(slide += n);
      }
    });

    // Private Methods - Internal methods
    Object.assign(priv, {

      //slider generation
      'generator': function() {
          $('body').append('<div class="slider"></div>');
          $('.slider').append('<button class="button-left" onclick="moveSlide(-1)"></button>');
          $('.slider').append('<button class="button-right" onclick="moveSlide(1)"></button>');
          (this).generateImage();
          (this).showSlide(slide)
        }.bind(this)
      });

    // Initialise the plugin
    priv.generator();
    return this;
  };
}(jQuery));

