export default function smoothScroll() {
  // Найти все якорные ссылки на странице
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  // Обработчик события клика для каждой якорной ссылки
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Отменить стандартное действие перехода по ссылке

      // Получить целевой элемент, на который указывает якорная ссылка
      const target = document.querySelector(link.getAttribute('href'));

      if (target) {
        // Вычислить расстояние до целевого элемента от верхней части страницы
        const offsetTop = target.offsetTop;

        // Плавно прокрутить страницу к целевому элементу
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

}