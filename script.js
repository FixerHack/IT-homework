function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const button = document.querySelector('.theme-toggle');
  button.textContent = document.body.classList.contains('dark-theme') ? 'Світла тема' : 'Темна тема';
}