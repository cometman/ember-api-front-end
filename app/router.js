import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('video_fragments', function(){
    this.$resource('contact', {path: '/:contact_id'});
  });
  this.route('playlists', function() {});
});

export default Router;
