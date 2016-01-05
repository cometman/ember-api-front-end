import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('playlists', function(){
    this.route('show', {path: '/:playlist_id'});
  });
  this.route('videoFragment');
});

// export default Router;
