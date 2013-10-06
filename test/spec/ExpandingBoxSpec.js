describe("Expanding box jQuery plugin test", function() {

	beforeEach(function() {
		$('<div id="container" class="mybox"></div>').appendTo('body');
		$('<h2 id="header">Sample Header</h2>').appendTo('#container');
		$('<p>Lorem Ipsum</p>').appendTo('#container');
		$('.mybox h2').expanding_box();
	});

	it("Adding Class expanding button and more class to header", function() { 
		expect($('h2.expanding_buttons.more').length).toEqual(1);
	});
  
	it("Hide box content on start", function() { 
		expect($('h2.expanding_buttons').nextAll(":visible").length).toEqual(0);
	});
  
	it("clicking on header reveal box content", function() { 
		$('#header').click();
		expect($('h2.expanding_buttons').nextAll(":hidden").length).toEqual(0);
	});
  
	it("clicking twice on header hide box content", function() { 
		$('#header').click(); //first click
		setTimeout(function(){
			$('#header').click(); //second click
			expect($('h2.expanding_buttons').nextAll(":visible").length).toEqual(0);
		}, 1);
	});

	afterEach(function () {
		$("#container").remove();
	});

});