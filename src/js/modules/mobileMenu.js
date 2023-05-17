export default function mobileMenu() {

  if(document.getElementById('menu__button')) {
    const hamburger = document.getElementById('menu__button');
    const mobileMenu = document.querySelector('.header__inner-wrap');
    const mobileMenuItems = document.querySelectorAll('nav ul li');
    const htmlElement = document.getElementsByTagName('html')[0];
    // const wrapper = document.querySelector('.wrapper');

    const body = document.body;
    let screenWidth = window.innerWidth;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('header__inner-wrap--active');
      body.classList.toggle('no-scroll');
      htmlElement.classList.toggle('no-scroll');

      // if (document.querySelector('.header__bg')) {
      //   wrapper.classList.toggle('overlay');
      // }

      // if(catalogBtn) {
      //   catalogBtn.style.zIndex = '0';
      // }
    });

    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth;

      if (screenWidth < 1200) {
          linksClick();
      }

      if (screenWidth >= 1200) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('header__inner-wrap--active');
        body.classList.remove('no-scroll');
        htmlElement.classList.remove('no-scroll');

        // if (document.querySelector('.header__bg')) {
        //   wrapper.classList.remove('overlay');
        // }

        // if (catalogBtn) {
        //   catalogBtn.style.zIndex = '500';
        // }
     
      } 
    });

    function linksClick() {
      mobileMenuItems.forEach(link => {
        link.addEventListener('click', (e) => {
            if (screenWidth < 1200) {
              hamburger.classList.remove('active');
              mobileMenu.classList.remove('header__inner-wrap--active');
              body.classList.remove('no-scroll');
              htmlElement.classList.remove('no-scroll');

              // if (document.querySelector('.header__bg')) {
              //   wrapper.classList.remove('overlay');
              // }
            }
        });
      });
    }
    linksClick();
  }

    // if(document.getElementById('menu__button')) {
    //     const hamburger = document.getElementById('menu__button');
    //     const mobileMenu = document.querySelector('.header__inner');
    //     const mobileMenuItems = document.querySelectorAll('.menu-item');
    //     const htmlElement = document.getElementsByTagName('html')[0];

    //     const body = document.body;
    //     let screenWidth = window.innerWidth;

    //     hamburger.addEventListener('click', () => {
    //         hamburger.classList.toggle('active');
    //         mobileMenu.classList.toggle('header__inner--active');
    //         body.classList.toggle('no-scroll');
    //         htmlElement.classList.toggle('no-scroll');
    //     });

    //     window.addEventListener('resize', () => {
    //         screenWidth = window.innerWidth;

    //         if (screenWidth < 1024) {
    //             linksClick();
    //         }
    
    //         if (screenWidth >= 1024) {
    //             hamburger.classList.remove('active');
    //             mobileMenu.classList.remove('header__inner--active');
    //             body.classList.remove('no-scroll');
    //             htmlElement.classList.remove('no-scroll');
    //         } 
    //     });

    //     function linksClick() {
    //         mobileMenuItems.forEach(link => {
    //             link.addEventListener('click', (e) => {
    //                 if (screenWidth < 1024) {
    //                     hamburger.classList.remove('active');
    //                     mobileMenu.classList.remove('header__inner--active');
    //                     body.classList.remove('no-scroll');
    //                     htmlElement.classList.remove('no-scroll');
    //                 }
    //             });
    //         });
    //     }
    //     linksClick();
    // }
}
