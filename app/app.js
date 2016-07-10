var app1 = angular.module("MindApp", ["ngRoute"]);
app1.controller("MindController", function($scope) {
});

var app2 = angular.module("MindApp2", ["xeditable"]);
app2.controller("ContentEditableController", function($scope) {
});


var app = angular.module("CombineModule", ["MindApp", "MindApp2"])


.constant("firebaseURL","https://mindapp-mindmap.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		console.log("user is authenticated, resolve route promise");
		resolve();
	} else {
		console.log("user is not authenticated, reject route promise");
		reject();
	}
});

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl',
		resolve: {isAuth}
	}).
	when('/userNotes/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'formViewCtrl',
		resolve: {isAuth}
	}).
	when('/userNotes/:itemId/edit', {
		templateUrl: 'partials/home.html',
		controller: 'formViewCtrl',
		resolve: {isAuth}
	}).
	when('/tool/new', {
		templateUrl: 'partials/tools-new.html',
		controller: 'HomeCtrl',
		resolve: {isAuth}
	}).
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	}).
	when('/logout', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	}).
	otherwise('/');

});
app.run(($location) => {
	let mindAppRef = new Firebase("https://mindapp-mindmap.firebaseio.com/");
	mindAppRef.unauth();
	mindAppRef.onAuth(authData => {
		if(!authData){
			$location.path("/login");
	}
});
});