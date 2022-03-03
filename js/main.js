const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {  
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');               
  searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function (){
  console.log('scrool');
  if (window.scrollY > 500) {
 
    // 할 수 있는 것 : 배지 숨기기 
 //gsap.to(요소, 지속시간, 옵션)
 gsap.to(badgeEl, .6, {
 opacity: 0,
 display: 'none'
 });
 
} else {
   badgeEl.style.disply = 'block';
   sap.to(badgeEl, .6, {
    opacity: 1,
    display: 'block'
    });
  
   //배지 보이기 
 }
}, 300));
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
//  gsap.to(요소, 지속시간, 옵션);
  
gsap.to(fadeEl, 1, {
 delay: (index+1) * .7,
opacity: 1
});
});

// new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
 autoplay: true,
  loap : true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loap: true,
  autoplay: {
    delay: 3000
  },
  pagination : {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
   },
   navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
   }
   
});

 const promotionEl = document.querySelector('.promotion')
 const promotionToggleBtn = document.querySelector('.toggle-promotion')
 let isHidePrmotion = false;
 promotionToggleBtn.addEventListener('click', function () {
    isHidePrmotion= !isHidePrmotion
    if  (isHidePrmotion) {
      //숨긴처리
      promotionEl.classList.add('hide');
    }else {
      //보임 처리
      promotionEl.classList.remove('hide');
      
    }
 }); 
 