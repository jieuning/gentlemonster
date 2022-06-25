/* 이미지 슬라이드 */ 
jQuery(document).ready(function(){
    var sliderSwiper = new Swiper("#slider_section", {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
      });

    var collectionSwiper = new Swiper("#collection_swiper", {
        loop: true,
        loopedSlides: 1,
        loopAdditionalSlides: 6,
        spaceBetween : 20,
        width: 368,
        slidesPerview: "auto", 
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
    });
    
    /* 스크롤 애니메이션 */ 
    $(window).scroll(function(){
        var scrollP = $(".red_square");
        var $offset = 300;
        var scrollPOST = $("#collabo_section").offset().top - $offset;

        if($(this).scrollTop() > scrollPOST)
        scrollP.find(".colla1").addClass("animate");
    });

    $(window).scroll(function(){
        var scrollP = $(".gray_square");
        var $offset = -800;
        var scrollPOST = $("#collabo_section").offset().top - $offset;

        if($(this).scrollTop() > scrollPOST)
        scrollP.find(".colla2").addClass("animate");
    });

    $(window).scroll(function(){
        var scrollP = $(".gray_square");
        var $offset = -1200;
        var scrollPOST = $("#collabo_section").offset().top - $offset;

        if($(this).scrollTop() > scrollPOST)
        scrollP.find(".colla2_s").addClass("animate");
    });

    $(window).scroll(function(){
        var scrollP = $(".moncler");
        var $offset = -1700;
        var scrollPOST = $("#collabo_section").offset().top - $offset;

        if($(this).scrollTop() > scrollPOST)
        scrollP.find(".colla3").addClass("animate");
    });

    $(window).scroll(function(){
        var scrollP = $(".bear");
        var $offset = -2900;
        var scrollPOST = $("#collabo_section").offset().top - $offset;

        if($(this).scrollTop() > scrollPOST)
        scrollP.find(".colla4").addClass("animate");
    });

    /* 카트 아이콘 클릭 토글 */ 
    $(".wish").click(function(){
      $(this).toggleClass("active")
    });
});
