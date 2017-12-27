if ($(window).scrollTop() < $(".first").offset().top - 1) {
		$(".icon").hide();
}
$(document).ready(function() {
  $(".contactUsHeight").css("height", $(window).height() - $(".footer").outerHeight() + "px");
  $(window).resize(function() {
    $(".contactUsHeight").css("height", $(window).height() - $(".footer").outerHeight() + "px");
  });
  updateSlide();
  $(window).scroll(function () {
    updateSlide();
    if ($(window).scrollTop() > $(".first").offset().top - 1) {
			$(".icon").fadeIn();
		} else {
			$(".icon").fadeOut();
		}
	});
	$(".smoothScroll").click(function(event){
	  event.preventDefault();
	  var name = $(this).attr("href").substring(1);
	  $('html,body').animate({
	  	scrollTop: $("a[name="+name+"]").offset().top
	  }, 500);
	});
	function updateSlide(){
	  if ($(window).width() > 768) {
		  if ($(window).scrollTop() < $(".first").offset().top - 1) {
		    $(".one").attr("class","one");
	      $(".two").attr("class","two");
  	    $(".three").attr("class","three");
		    $(".four").attr("class","four");
		    $("hr").css("display", "none")
		    $("hr").attr("class","slide");
	    } else if ($(window).scrollTop() < $(".second").offset().top - 1) {
		    aboutActive();
		    $("hr").css("display", "block")
		    $("hr").attr("class","slide about");
	    } else if ($(window).scrollTop() < $(".third").offset().top - 1) {
			  registerActive();
			  $("hr").css("display", "block")
		    $("hr").attr("class","slide register");
		  } else if ($(window).scrollTop() < $(".fourth").offset().top - 1) {
	  	  FAQActive();
	  	  $("hr").css("display", "block")
		    $("hr").attr("class","slide FAQ");
  	  } else {
		    contactUsActive();
		    $("hr").css("display", "block")
		    $("hr").attr("class","slide contactUs");
		  }
    } else {
      $("hr").css("display", "none")
		  if ($(window).scrollTop() < $(".first").offset().top - 1) {
		    $(".one").attr("class","one");
	  	  $(".two").attr("class","two");
  		  $(".three").attr("class","three");
		    $(".four").attr("class","four");
	    } else if ($(window).scrollTop() < $(".second").offset().top - 1) {
		    aboutActive();
	    } else if ($(window).scrollTop() < $(".third").offset().top - 1) {
			  registerActive();
		  } else if ($(window).scrollTop() < $(".fourth").offset().top - 1) {
	  	  FAQActive();
      } else {
		    contactUsActive();
	    }
    }
	}
  function aboutActive(){
    $(".one").attr("class","one active");
		$(".two").attr("class","two");
		$(".three").attr("class","three");
		$(".four").attr("class","four");
  }
	function registerActive(){
		$(".one").attr("class","one");
		$(".two").attr("class","two active");
    $(".three").attr("class","three");
    $(".four").attr("class","four");
  }
  function FAQActive(){
		$(".one").attr("class","one");
		$(".two").attr("class","two");
    $(".three").attr("class","three active");
    $(".four").attr("class","four");
  }
	function contactUsActive(){
		$(".one").attr("class","one");
		$(".two").attr("class","two");
    $(".three").attr("class","three");
    $(".four").attr("class","four active");
  }
});
