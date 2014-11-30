angular.module('inblog.controllers', [])

.controller('PostController', function($scope, $http) {
  $http.get("http://api.internerd.blog.br/posts", { cache: true}).
    success(function(data) {
    	$scope.posts = data.posts;
  });
})

.controller('PostDetailController', function($scope, $http, $stateParams) {
  $http.get("http://api.internerd.blog.br/posts/"+$stateParams.post_id, { cache: true}).
    success(function(data) {
      $scope.post = data;
  });
});