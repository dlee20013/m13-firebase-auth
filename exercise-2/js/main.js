$(function() {
	// Set the config object with the values for your application
	var config = {
	    apiKey: "",
	    authDomain: "",
	    databaseURL: "",
	    storageBucket: "",
	    messagingSenderId: ""
	};
	firebase.initializeApp(config);

	// Initialize your 'users' firebase reference

	// Checks to see if a user is already signed in and if so redirects
	// to users.html
	var user = firebase.auth().currentUser;
	if (user) {
		window.location = "./views/user.html"
	}

	var authFunc = function(service) {
		if (service === "google") {
			provider = new firebase.auth.GoogleAuthProvider();
		} else if (service === "github") {
			provider = new firebase.auth.GithubAuthProvider();
		}

		// Sign into firebase using the correct provider
		firebase.auth().signInWithPopup(provider).then(function(result) {
			// Log the user result to the console to see what a user object

	}

	$("#google-signin").on("click", function() {
		authFunc("google");
	});

	$("#github-signin").on("click", function() {
		authFunc("github");
	});
});