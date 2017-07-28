
	// var contact = document.getElementsByClassName('contact')[0];
	// var navigation = document.getElementsByClassName('navigation')[0];
	// var breakPoint = contact.getBoundingClientRect().bottom;
	// if(window.scrollY == breakPoint){
	// 	navigation.style.position = fixed;
	// }
        var navigation = document.getElementById("navigation");
        var origOffsetY = navigation.offsetTop;
    function onScroll(e) {
        if(window.scrollY >= origOffsetY){
        	navigation.style.position = "fixed";
        	navigation.style.top = 0;
        }  
        else{
        	navigation.style.position="absolute";
        	navigation.style.top = origOffsetY + 'px';
        }
    }
    document.addEventListener('scroll', onScroll);

    $(document).ready(function(){

    $("a").on('click', function(event) {

    if (this.hash !== "") {
     
      event.preventDefault();


      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top + 50
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});
