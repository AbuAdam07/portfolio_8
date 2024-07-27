const toggleButton = document.querySelector('.navbar-toggler');
let isCollapsed = false; // переменная для хранения состояния кнопки

toggleButton.addEventListener('click', () => {
  const img = toggleButton.querySelector('img');
  if (!isCollapsed) {
    img.src = 'images/krest.png';
    isCollapsed = true;
  } else {
    img.src = 'images/burger.png';
    isCollapsed = false;
  }
});