var app = angular.module('dictionaries', ['ionic']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
	  .state('tab', {
	  	url: '/tab',
	  	abstract: true,
	  	templateUrl: 'templates/tabs.html'
	  })

	// Each tab has its own nav history stack:

	.state('tab.search', {
		url: '/search',
		views: {
			'tab-search': {
				templateUrl: 'templates/tab-search.html',
				controller: 'SearchController'
			}
		}
	})

	.state('tab.history', {
		url: '/history',
		views: {
			'tab-history': {
				templateUrl: 'templates/tab-history.html',
				controller: 'HistoryController'
			}
		}
	})
	  .state('tab.chat-detail', {
	  	url: '/chats/:chatId',
	  	views: {
	  		'tab-chats': {
	  			templateUrl: 'templates/chat-detail.html',
	  			controller: 'ChatDetailCtrl'
	  		}
	  	}
	  })

	.state('tab.setting', {
		url: '/setting',
		views: {
			'tab-setting': {
				templateUrl: 'templates/tab-setting.html',
				controller: 'SettingController'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/search');

});