(function ($) {
	
	$.fn.liquidizer = function(options) 
	{
		// defining the defaults values
		var defaults = 
		{ 
		color: "#000000", 
		backgroundColor: "gold",
		fontFamily: "sans-serif",
		fontStyle: "none",
		fontWeight: "none"
		};
		
		// $.extend() - Merge the contents of two or more objects together into the first object
		var settings = $.extend(
		{}, 
		defaults, 
		options);
		
		// making the plug-in chain-able
		return this.css(
						{
						color: settings.color,
						backgroundColor: settings.backgroundColor,
						fontFamily: settings.fontFamily,
						fontStyle: settings.fontStyle,
						fontWeight: settings.fontWeight
						}
						); 
		};
}(jQuery));
	