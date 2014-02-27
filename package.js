Package.describe({
	summary: "jsPDF packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('dist/jspdf.source.js', 'client');

	api.export && api.export('jsPDF');
});
