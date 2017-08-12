$(document).ready(function() {
 
  $(".four-slide-carousel").owlCarousel({
 
      autoPlay: 4000,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
	  itemsTablet :	[768,1],
	  itemsMobile :	[479,1],
	  paginationSpeed:	2300,
	  slideSpeed:	400
 
  });
 
})