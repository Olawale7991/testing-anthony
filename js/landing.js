document.getElementById('menuToggle').addEventListener('click', function() {
    var container = document.querySelector('.menu-container');
    var hamburgerIcon = document.querySelector('.menu-toggle .hamburger');
    var cancelIcon = document.querySelector('.menu-toggle .cancel');
  
    if (!container || !hamburgerIcon || !cancelIcon) {
      console.error("One or more elements were not found:", { container, hamburgerIcon, cancelIcon });
      return;
    }
  
    container.classList.toggle('menu-visible');
  
    if (container.classList.contains('menu-visible')) {
      hamburgerIcon.style.display = 'none';
      cancelIcon.style.display = 'block';
    } else {
      hamburgerIcon.style.display = 'block';
      cancelIcon.style.display = 'none';
    }
  });
  