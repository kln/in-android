angular.module('inblog', ['ionic', 'inblog.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('posts', {
    url: '/posts',
    templateUrl: 'post.html',
    controller: 'PostController'
  })
  .state('post-detail', {
    url: '/post-detail/:post_id',
    templateUrl: 'post-detail.html',
    controller: 'PostDetailController'
  })
  
  $urlRouterProvider.otherwise("/posts");
});

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
