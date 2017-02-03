'use strict';

// require webpack assets
require('./scss/main.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// app modules

// angular module
const demoApp = angular.module('demoApp', []);

// angular constructus
demoApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log){
  this.title = 'Mooooo';
  this.updateCow = function(input) {
    return '\n' + cowsay.say({text: input || 'gimme something to say'}); 
  };

  this.helloClick = function(input) {
    $log.log(input);
  };
}
