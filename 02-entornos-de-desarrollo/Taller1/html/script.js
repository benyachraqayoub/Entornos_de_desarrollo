function mostrarMensaje() {
    alert('¡Gracias por visitar mi portfolio!');
}

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '🌙';
    }
});