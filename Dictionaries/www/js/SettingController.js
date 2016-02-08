app.controller(
	'SettingController',
	[
		'$scope',
		SettingController
	]
);

function SettingController($scope) {
	$scope.settings = {
		enableFriends: true
	};

}
