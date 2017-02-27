angular
	.module('social-burst', ["ui.router"])
	
	.config(MainRouter)


function MainRouter ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/states/page1.html'
		})
		.state('new', {
			url: '/page2',
			templateUrl: '/states/page2.html'
		})

		$urlRouterProvider.otherwise('/')

}