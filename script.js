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
