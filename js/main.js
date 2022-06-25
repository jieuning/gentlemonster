/* 탭 메뉴 */ 
document.addEventListener("DOMContentLoaded", function(){

var link = document.querySelectorAll(".tab_menu a");
var tabContent = document.querySelectorAll("#tab_content > div");

for(var i = 0; i < link.length; i++){
    link[i].addEventListener("click", function(e){
        e.preventDefault();
        var tabs = e.target.getAttribute("href");
        var tabSelect = tabs.replace("#","");

        for(var x = 0; x < tabContent.length; x++ ){
            tabContent[x].style.display = "none";
        }

        document.getElementById(tabSelect).style.display = "block";

        /* 탭 버튼 작동 */ 
        for(var j = 0; j < link.length; j++){
            link[j].classList.remove("active");
            e.target.classList.add("active");
        }

        /* 탭시 애니메이션 작동 */ 
        for(var z = 0; z < tabContent.length; z++){
            tabContent[j].classList.add("animate");
        }
    });
}
document.getElementById("tab_1").style.display = "block"; /* 첫번째 탭 활성화 */

/* 이미지 슬라이드 */ 
var slideWrap = document.querySelector(".container3"),
    slideContainer = document.querySelector(".slider_container"),
    slides = document.querySelectorAll(".slide"),
    slideHeight = 0,
    currentIndex = 0,
    slideCount = slides.length,
    $prev = document.getElementById("prev"),
    $next = document.getElementById("next");

    /* 슬라이드 높이, 위치 설정 */
    for(var i = 0; i < slideCount; i++){
        if(slideHeight < slides[i].offsetHeight){
            slideHeight = slides[i].offsetHeight;
        }
    }
 
    slideWrap.style.height = slideHeight + "px";
    slideContainer.style.height = slideHeight + "px";
    console.log(slideWrap);

    for(var a = 0; a < slideCount; a++){
        slides[a].style.left = a * 100 + "%";
    }

    /* 슬라이드 이동 */ 
    function slideMove(idx){ 
        slideContainer.style.left = -100 * idx + "%";
        slideContainer.classList.add("animate");
        currentIndex = idx;
    } 

    /* 처음, 끝으로 이동 */ 
    $prev.addEventListener("click", function(){
        if(currentIndex == 0){
            slideMove(slideCount - 1);
        }else{
            slideMove(currentIndex - 1);
        }
    });
    $next.addEventListener("click", function(){
        if(currentIndex == slideCount - 1){
            slideMove(0);
        }else{
            slideMove(currentIndex + 1);
        }
    });

});