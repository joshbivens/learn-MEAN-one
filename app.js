var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.posts = [];

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') {return;}
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      if(post.upvotes === 0) {
        post.upvotes += 1;
      }
    }

  }
]);
