(() => {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const openMenuBtn = document.querySelector('.burger-menu');
  const closeMenuBtn = document.querySelector('[data-mobile-menu-close]');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Функція відкриття/закриття меню
  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');

    // Блокування/розблокування скролу body
    if (isMenuOpen) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  // Відкриття меню при кліку на бургер
  openMenuBtn.addEventListener('click', toggleMenu);

  // Закриття меню при кліку на хрестик
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закриття меню при кліку на посилання навігації
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Закриття меню при кліку на backdrop
  mobileMenu.addEventListener('click', event => {
    if (event.target === mobileMenu) {
      toggleMenu();
    }
  });

  // Закриття меню при натисканні Escape
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggleMenu();
    }
  });
})();
