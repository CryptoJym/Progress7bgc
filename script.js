// simple horizontal scroll controls for the timeline
(function(){
  const wrapper = document.querySelector('.timeline-wrapper');
  if(!wrapper) return;
  const timeline = wrapper.querySelector('.timeline');
  const btns = wrapper.querySelectorAll('.scroll-btn');
  btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const dir = parseInt(btn.dataset.dir,10);
      timeline.scrollBy({left: dir * timeline.clientWidth * 0.8, behavior:'smooth'});
    });
  });
})();

// theme toggle
(() => {
  const btn = document.getElementById('theme-toggle');
  if(!btn) return;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('theme');
  if(stored){document.documentElement.dataset.theme = stored;updateIcon();}
  else if(prefersDark){document.documentElement.dataset.theme='dark';updateIcon();}
  btn.addEventListener('click',() => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = current;
    localStorage.setItem('theme', current);
    updateIcon();
  });
  function updateIcon(){btn.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙';}
})();
