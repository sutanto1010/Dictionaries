app.controller(
	'HistoryController',
	[
		'$scope',
		'$stateParams',
		'Chats',
		HistoryController
	]
);

function HistoryController($scope, $stateParams, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	};
}
