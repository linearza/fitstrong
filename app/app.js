import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);


Ember.Router.reopen({

  applicationController: function() {
    return this.container.lookup('controller:application');
  },

  closeMenu: function() {
    this.applicationController().set('isMenuExpanded', false);
  }.on('willTransition'),

  scrollUp: function() {
    $('main').animate({
      scrollTop: 0
    }, 600);
    return false;
  }.on('willTransition')

});

export default App;