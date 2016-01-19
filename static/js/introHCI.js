'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});
	$("#testjs").text("Please wait...");
	$(".jumbotron p").toggleClass("active");

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject); 
	$(".description").hide()
}

function projectClick(e) { 
 // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("h5").text();
    var jumbotronHeader = $('.jumbotron h1');
    console.log("Number matches " + jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = (containingProject).find(".description");//(containingProject).find(".project-description");
    if (description.length == 0 || !description.is(':visible')) {
       //$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    	description.fadeIn();
    } else {
       description.fadeOut();
    }
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .description").text(newText);
}