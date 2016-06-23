var app1 = angular.module("MindApp", ["ngRoute"]);
app1.controller("MindController", function($scope) {
});

var app2 = angular.module("MindApp2", ["ngDragDrop"]);
app2.controller("DragDropController", function($scope) {
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
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	}).
	when('/logout', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	}).
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl',
		resolve: {isAuth}
	}).
	otherwise('/home');

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