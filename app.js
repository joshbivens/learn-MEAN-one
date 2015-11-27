var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
  '$scope',
  'posts',
  function ($scope, posts) {
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') {return;}
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
      console.log(posts.posts);
    };

    $scope.incrementUpvotes = function(post) {
      if(post.upvotes === 0) {
        post.upvotes += 1;
      }
    }

  }
]);
