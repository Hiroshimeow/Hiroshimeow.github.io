(() => {
const menu = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  menu.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label','Open menu');
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Open menu');
    menu.focus();
  }
});
const sketches = {
  agents: ['Request','Agent','Tools','Result','An agent is only as capable as its tools, permissions, and recovery paths.'],
  automation: ['Trigger','Observe','Control','Stable','Reliable automation can tell you what happened — and what happens next.'],
  products: ['Need','Design','Build','Useful','Working software starts with a real problem and ends with a usable product.']
};
const labels = ['diagram-in','diagram-think','diagram-act','diagram-out'].map(id => document.getElementById(id));
document.querySelectorAll('.stage-tab').forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.stage-tab').forEach(other => {
      const active = other === button;
      other.classList.toggle('is-active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    const sketch = sketches[button.dataset.system];
    labels.forEach((label,i) => { label.textContent = sketch[i]; });
    document.getElementById('system-description').textContent = sketch[4];
    document.querySelector('.stage-heading>span:last-child').textContent = String(index+1).padStart(2,'0') + ' / 03';
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
})();
