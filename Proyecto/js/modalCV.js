// Funcionalidad del modal de CV
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modalCV');
  const btnAbrir = document.getElementById('btnAbrirModal');
  const btnCerrar = document.getElementById('cerrarModal');
  const formulario = document.getElementById('formularioCV');

  // Abrir modal
  btnAbrir.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Cerrar modal
  btnCerrar.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Cerrar modal al hacer clic fuera
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Manejar envío del formulario
  formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    formulario.reset();
  });
}); 