
const button = document.querySelector('.learn-more_container');
const descrSection = document.querySelector('.description_section');

// При клике на кнопку
button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  descrSection.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});