 // toggle
let toggle = document.getElementById("toggle");
let menu = document.getElementById("menu");

toggle.addEventListener("click", function () {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block"; 
  } else {
    menu.style.display = "none";  
  }
});

 // search
let search=document.getElementById("search-icon")
let searchbar=document.getElementById("search")
let close=document.getElementById("close")
search.addEventListener("click",function(){
  searchbar.style.display="block";
})
close.addEventListener("click",function(){
  searchbar.style.display="none";
})

  // benner
const announcementSwiper = new Swiper(".announcement", {
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
  
    navigation: {
      nextEl: ".announcement-next.swiper-button-next",
      prevEl: ".announcement-prev.swiper-button-prev"
    },
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true,
    },
  
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
    },
  });

  // tranding-slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".trending-swiper", {
        loop: true,
        navigation: {
            nextEl: ".trending-swiper-next.swiper-button-next",
            prevEl: ".trending-swiper-prev.swiper-button-prev",
        },
        slidesPerView: 5,
        pagination: {
            clickable: true,
        },
        spaceBetween: 16,
        breakpoints: {
                  320: { slidesPerView: 1.5 },
                  660: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }
    });
});
  
  // exclusives-slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".exclusives-swiper", {
        loop: true,
        navigation: {
            nextEl: ".exclusives-swiper-next.swiper-button-next",
            prevEl: ".exclusives-swiper-prev.swiper-button-prev",
        },
        slidesPerView: 5,
        pagination: {
            clickable: true,
        },
        spaceBetween: 16,
        breakpoints: {
                  320: { slidesPerView: 1.5 },
                  760: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }
    });
}); 

  // creaters-slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".creater-swiper", {
        loop: true,
        navigation: {
            nextEl: ".creater-swiper-next.swiper-button-next",
            prevEl: ".creater-swiper-prev.swiper-button-prev",
        },
        slidesPerView: 5,
        pagination: {
            clickable: true,
        },
        spaceBetween: 24,
        breakpoints: {
                  320: { slidesPerView: 1.5 },
                  760: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }
    });
});  