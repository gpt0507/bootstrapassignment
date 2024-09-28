const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 2500,
    }

  });


  // Header Scroll
  let nav = document.querySelector(".navbar");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
      nav.classList.add("header-scrolled");
    } else {
      nav.classList.remove("header-scrolled");
    }
  }

  // nav hide 
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");
  navBar.forEach(function (a) {
    a.addEventListener("click", function () {
      navCollapse.classList.remove("show");
    })
  });
