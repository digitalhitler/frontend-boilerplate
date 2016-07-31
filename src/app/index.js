'use strict';

// Load stylesheets
const stylesheetRoot = require('../sass/style.scss');

const globalScope = (window ? window : global);

const jQuery = require('jquery');
globalScope.$ = jQuery;



