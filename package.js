Package.describe({
	summary: "angular-utils-meteor"
});

Package.on_use(function (api) {
	api.use('ngMeteor', 'client');
	
	// Files to load in Client only.
	api.add_files([
		// Lib Files
		'angular-utils.js',
		'ui-utils-ieshiv.js',
		'angular-utils-meteor.js'
	], 'client');
});
