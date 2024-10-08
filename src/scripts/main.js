// import Swiper JS
import Swiper from 'swiper';

// import Swiper styles
import 'swiper/swiper-bundle.min.css';

import Swiper from 'swiper';
ximport { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation.min.css';
import 'swiper/modules/pagination.min.css';

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });