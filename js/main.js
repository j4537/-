// 검색창 요소 (.search) 찾기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// 검색창 요소 내부 실제 input 요소에서 포커스 해제(블러)되면 실행
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 500) {
    // 배지 요소 숨기기
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
  } else {
    // 배지 요소 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
  }
});

// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll(".visual .fade-in");

// 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// swiper
new Swiper(".notice .swiper", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생
  loop: true, // 반복 재생
});

new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  pagination: { //페이지 번호 사용
    el: ".promotion .swiper-pagination", //페이지 번호 요소
    clickable: true, //사용자의 페이지 번호 제어 여부
  },
});

const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }
});

gsap.to(".floating1", 1.5, {
  delay: 1, // 시작 지연 설정 시간
  y: 15, // 수직으로 얼마나 움직일지 설정
  repeat: -1, // 반복 횟수, -1은 무한 반복을 의미
  yoyo: true,  // 한번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut, // Easing(이징) 함수 
});

gsap.to(".floating2", 2, {
  delay: 3,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});

gsap.to(".floating3", 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});
