------------------------------------------------------- BEGIN ----------------------------------------------------------------

LIQUIDIZER.JS
==============
Liquidizer.js is a responsive layout jQuery plug-in with dynamic attributes. 
It enables users to change the attributes on the fly, such as: color, backgroundColor, fontFamily, fontStyle and fontWeight. 
How? Well, by simply specifying the values of the dynamic attributes and Liquidizer.js will do the rest for the user. 
Also, the user can even combine the 'selectors' and simultaneously apply the attributes at once!
-------------------------------------------------------------------------------------------------------------------------------

AUTHOR
--------

*** ABDULREHMAN A. MOHAMED ***
*** almutwafy@gmail.com ****

------------------------------------------------------------------------------------------------------------------------------

HOW IT WORKS
-------------
Liquidizer.js will dynamically change the selected elements using CSS name attributes property, when provided values by users. 
It has the capability to implement a responsive layout and to dynamically change the attributes for an element based on various values, such as:

	{
	color: "red",
	backgroundColor: "green",
	fontFamily: "impact",
	fontStyle: "italic",
	fontWeight: "bold"
	}
------------------------------------------------------------------------------------------------------------------------------

HOW TO USE IT
--------------

1.) First, include jQuery and Liquidizer.js script files inside <head> tag as shown.

	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript" src="liquidizer.js"></script>


2.) Next, call the Liquidizer() function on jQuery object. It supports  few settings, under the Configuration section.
 
	$(document).ready(function() {
	$('selector').liquidizer();
	});
------------------------------------------------------------------------------------------------------------------------------

CONFIGURATION
--------------

/***
.BlocksIt( [Options] )
Options

 numOfCol - The number of columns to be created. (Default:5)
offsetX - Margin left and right for each block. (Default:5)
offsetY - Margin top and bottom for each block. (Default:5)
blockElement - Targeted child element, which will converted into blocks. (Default:div)
***/
------------------------------------------------------------------------------------------------------------------------------

EXAMPLE OF CONFIGURATION
-------------------------

The HTML markup for blocks should look like below. data-size attribute specific the size of block (combined blocks).

<div id="container">
<div class="grid class">...</div>
<div class="grid class2" data-size="2">...</div>
<div class="grid">...</div>
<div class="grid class" data-size="3">...</div>
<div class="grid">...</div>
</div>
And the script will be something like this.

$(document).ready(function() {
   $('#container').BlocksIt({
      numOfCol: 5,
      offsetX: 8,
      offsetY: 8,
      blockElement: '.grid'
   });
});
---------------------------------------------------------------------------------------------------------------------------

LICENSE
---------

Liquidizer.js is licensed under the GNU General Public License version 1. 
One can manipulate and improve the source code in any manner whatsoever seems fit.

----------------------------------------------------- END ------------------------------------------------------------------