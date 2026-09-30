import './style.css';

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const themeToggle = document.querySelector('#theme-toggle');
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

themeToggle?.addEventListener('click', () => {
  const dark = document.documentElement.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.textContent = dark ? 'Modo claro' : 'Modo escuro';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  themeToggle?.setAttribute('aria-pressed', 'true');
  if (themeToggle) themeToggle.textContent = 'Modo claro';
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Mensagem enviada com sucesso! Este formulário é demonstrativo.';
  form.reset();
});
