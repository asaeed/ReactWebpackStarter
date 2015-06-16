
// dependencies
var React = require('react');
window.jQuery = window.$ = require('jquery');
var BootstrapJs = require('bootstrap-js');
var BootstrapCss = require('../scss/bootstrap/bootstrap.scss');
var BaseCss = require('../scss/base.scss');

// components
var Main = require('./components/main');


React.render(<Main />, document.getElementsByTagName('body')[0]);