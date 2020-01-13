'use strict';

(function ($) {
  $.fn.MySearch = function (options) {
    this.settings = $.extend({
      'pokemon': [{
        'id': 'default',
        'name':'',
        'basetatk':'',
        'basevit':'',
        'basedef':'',
        'basespe':'',

      }]}, options);


    var priv = {};

    // Public Methods - External methods
    Object.assign(this, {
      'generate-lvl-option': function(){
        for(i=1;i<=100;i++){
          $('select').append('<option value="' + i + '"> ' + i + '</option>');
        };
      },


  });

    // Private Methods - Internal methods
    Object.assign(priv, {

      //form generation
      'generator': function(form) {
          $('.body').append('<form class = "search"><input type= "text" placeholder= "pokemon"><select id="lvl"></select></form>');
          $('.body').append('<input type="search" id="pokemon-search">');
        }.bind(this)
      });

    // Initialise the plugin
    priv.generator();
    return this;
  };
}(jQuery));

