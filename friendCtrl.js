var app = angular.module('ngApp');
// Create a FriendController in the FriendController.js file
app.controller('friendCtrl', function($scope) {
	$scope.totes = 'Totes Mcgoats!';

	// * In the FriendController copy the data from friend-data.json into a scope variable called "friends" in your FriendController
	$scope.searchTerm = '';

	// $scope.friends = friendService.getfriends();
});




