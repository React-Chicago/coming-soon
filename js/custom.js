$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";

	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("body").backstretch("images/background.jpg");
});