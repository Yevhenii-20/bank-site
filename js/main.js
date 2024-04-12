$( document ).ready(function() {
    $(".drop-categories__btn").on("click", function() {   
        $(".header-categories__dropmenu").slideToggle();
    }); 

    $(".header-burger-menu").on("click", function() {
        $(".header-navigations").addClass('active');
        $('body').addClass('hidden');
    }); 
    
    $(".header-navigations__close").on("click", function() {
        $(".header-navigations").removeClass('active');
        $('body').removeClass('hidden');
    }); 
});