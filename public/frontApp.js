angular
	.module('social-burst', ["ui.router", 'firebase'])
	.config(MainRouter)
	.constant('API', '/api')
	.run(AuthCatcher)

function AuthCatcher ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParamas, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") $state.go("authRequired")
  })
}

function MainRouter ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  var authRequired = {
    currentAuth: function(Auth) {
      return Auth.$requireSignIn()
    }
  }

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'states/page1.html',
			
		})
		.state('page2', {
			url: '/page2',
			templateUrl: 'states/page2.html',
			resolve: authRequired,
		})
		.state('my-blogs', {
			url: '/my-blogs',
			templateUrl: 'states/my-blogs.html',
			resolve: authRequired,
		})
		.state('blog-form', {
			url: '/blog-form',
			templateUrl: 'states/blog-form.html',
			resolve: authRequired,
		})
		.state('twitter', {
			url: '/twitter',
			templateUrl: 'states/twitter.html',
			resolve: authRequired,
		})
		.state('signup', {
				url: '/signup',
				templateUrl: 'states/signup.html',
		})
	    .state('login', {
		    url: '/login',
		    templateUrl: 'states/login.html',
	    })
	    .state('authRequired', {
			url: '/authRequired',
			templateUrl: 'states/authRequired.html',
		})
}   
