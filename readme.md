Expanding box - jQuery plugin for expanding content boxes
=========

Expanding box is simple jQuery plugin that allow header of box to be clickable and extend or collapse the content below it.<br/>


How to use
--------------
1. Include the expanding_box.js & expanding_box.css in your HTML file, please do not forget to include the JS file AFTER the jQuery file.
2. Activate the plugin by using:
	$('some-selector').expanding_box();
	some-selector is a valid jQuery selectors.
3. You can use this option:
	<br />* more
		<br /><code>$('some-selector').expanding_box({'more' : false});</code>
			<br />- if set to false, the content after 'some-selector' will not be collapse at start.
	
@See more at the demo directory attached to the plugin
