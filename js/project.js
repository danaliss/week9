$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
});

$(".touchevents .thumbnail").hammer().bind("press", function() {
	var query = Modernizr.mq('(max-width: 800px)');
 	if (query) {
 		$(".thumbnail").addClass(".open")
	}
});

// Only for devices with touch events, when the user swipes on a thumbnail, hide the caption by removing the class "open" on the thumbnail that fired the event. Optionally, add an animation to the left position to animate the "swipe" effect.

$(".touchevents .thumbnail").hammer().bind("swipe", function() {
	var query = Modernizr.mq('(max-width: 800px)');
 	if (query) {
 		$(".thumbnail").removeClass(".open")
	}
});
 
 // lost caption in lightbox 
$(".lb").simpleLightbox();
