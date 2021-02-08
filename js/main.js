//hide main box on load
$(".main-box").hide();

//listen for click on entrance
$(".knock").click(function() {
	$(".landing-box").fadeOut();
	$(".main-box").fadeIn();
});
//hide the landing page and show my portfolios