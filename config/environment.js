/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fitstrong',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://samewave.dev:49152/livereload.js?snipver=1 https://*.firebase.com https://*.firebaseio.com",
      'font-src': "'self' data: http://fonts.gstatic.com",
      'frame-src': "https://*.firebase.com https://*.firebaseio.com",
      'connect-src': "'self' ws://samewave.dev:49152/livereload https://api.cloudinary.com res.cloudinary.com https://*.firebase.com https://*.firebaseio.com wss://*.firebaseio.com samewave-client-staging.herokuapp.com samewave-client-demo.herokuapp.com samewave-engine-production.herokuapp.com data:",
      'img-src': "'self' res.cloudinary.com api.cloudinary.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'media-src': "'self'",

    },

    firebase: 'https://fitstrong.firebaseIO.com',

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};