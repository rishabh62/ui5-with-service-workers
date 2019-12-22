sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ui5.service.worker.controller.Home", {
		onInit: function () {
			//we are registering the SW here and not in index.html because FLP doesn't launch application using index.html :)
			fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
				.then(response => response.json())
				.then(commits => console.log(commits[0].author.login));
		}
	});
});