// Funcionalidad del modo oscuro
document.addEventListener('DOMContentLoaded', function() {
  console.log('Script darkMode.js cargado');

  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (!darkModeToggle) {
    console.error('No se encontró el botón de modo oscuro');
    return;
  }

  const icon = darkModeToggle.querySelector('i');
  if (!icon) {
    console.error('No se encontró el ícono en el botón de modo oscuro');
    return;
  }

  // Función para actualizar el ícono según el modo
  function updateIcon(isDarkMode) {
    if (isDarkMode) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  // Función para cambiar el modo
  function toggleDarkMode() {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateIcon(isDarkMode);
    console.log('Modo oscuro:', isDarkMode ? 'activado' : 'desactivado');
  }

  // Verificar el modo guardado al cargar la página
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    updateIcon(true);
  } else {
    body.classList.remove('dark-mode');
    updateIcon(false);
  }

  // Agregar el evento click al botón
  darkModeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    toggleDarkMode();
  });
}); 