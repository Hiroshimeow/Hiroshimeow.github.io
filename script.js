(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-switch');
  let preferred = 'dark';
  try { preferred = localStorage.getItem('h-lab-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'); } catch {}
  function theme(value) {
    root.dataset.theme = value;
    button.setAttribute('aria-pressed', String(value === 'light'));
    button.setAttribute('aria-label', value === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    document.querySelector('meta[name="theme-color"]').content = value === 'light' ? '#f5f5ef' : '#0c1820';
  }
  theme(preferred === 'light' ? 'light' : 'dark');
  button.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    theme(next);
    try { localStorage.setItem('h-lab-theme', next); } catch {}
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();