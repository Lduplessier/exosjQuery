'use strict';

(function ($) {
  $.fn.MyForm = function (options) {
    this.settings = $.extend({
      'field': [{
        'id': 'default',
        'class': 'default',
        'type': 'text',
        'placeholder': 'default',
        'option': [],
        'required': 'false',
        'regex': 'default',
        'error': 'error'
      }]}, options);


    var priv = {};
    var count = 0;
    var optionCount = 0;
    var regex = [];

    // Public Methods - External methods
    Object.assign(this, {
      'generateInput': function(){
        this.settings.field.forEach(field => {
          if(this.settings.field[count]['type'] != 'select'){
            $('.field').append('<div><p class="' + this.settings.field[count]['class'] + '">' + this.settings.field[count]['class'] + ' </p><input type ="' + this.settings.field[count]['type'] + '" class ="'+ this.settings.field[count]['class'] +'" id="' + count + '" placeholder="' + this.settings.field[count]['placeholder'] + '"required="' + this.settings.field[count]['required'] + '"regex="' + this.settings.field[count]['regex'] + '"></div>');
            regex[count] = new RegExp (this.settings.field[count]['regex']);
            count++;
          }else if(this.settings.field[count]['type'] == 'select'){
            $('.field').append('<div><p class="' + this.settings.field[count]['class'] + '">' + this.settings.field[count]['class'] + ' </p><select id="' + count + '"></select>');
            this.settings.field.forEach(option => {
              $('select').append('<option value="' + this.settings.field[optionCount]['option'] + '" id= "' + optionCount + '"> ' + this.settings.field[optionCount]['option'] + '</option>');
              optionCount++;
            })
            count++;
          }
          });
        },
    
    'checkRegex': function(){
      this.settings.field.forEach(field => {
      if(!regex[this]){
          $(this).parent().children()('p').css({
            'color': 'red',
          });
          return false;
        }else{
          return true;
        }
      })
    },
    'checkForm': function(){
      if(checkRegex() == false){
        console.log('checkForm false');
      }else{
        console.log('checkForm true');
      }
    }
  });

    // Private Methods - Internal methods
    Object.assign(priv, {

      //form generation
      'generator': function(form) {
          $('body').append('<form class = "field"><div>Submit</div></form>');
          (this).generateInput();
        }.bind(this)
      });

    // Initialise the plugin
    priv.generator();
    return this;
  };
}(jQuery));

