document.addEventListener('DOMContentLoaded',()=>{
  const map={
    'v1.5 Sign-off':'https://github.com/CryptoJym/utah-bgc-mesh/blob/main/docs/PRD_v1.5.md',
    'OCR Stub Complete':'https://github.com/CryptoJym/utah-bgc-mesh/tree/main/backend/cmd/ocr-stub',
    'InformData Leaf + OAuth':'https://github.com/CryptoJym/utah-bgc-mesh/tree/main/backend/internal/informdata',
    'Sandbox Perf Test':'https://github.com/CryptoJym/utah-bgc-mesh/tree/main/backend/tests/perf',
    'Beta (10 UT clients)':'https://github.com/CryptoJym/utah-bgc-mesh/blob/main/docs/project-status.md',
    'GA Utah':'https://github.com/CryptoJym/utah-bgc-mesh/blob/main/docs/project-status.md',
    'RecordSynth v2 + state policy':'https://github.com/CryptoJym/utah-bgc-mesh/tree/main/backend/recordsynth',
    'Review UI Alpha':'https://github.com/CryptoJym/utah-bgc-mesh',
    '§ 613 Notice Service':'https://github.com/CryptoJym/utah-bgc-mesh/tree/main/backend/cmd/notice-service',
    'SOC 2 Evidence 30-day':'https://github.com/CryptoJym/utah-bgc-mesh',
  };
  document.querySelectorAll('article.milestone').forEach(art=>{
    const title=art.querySelector('h3')?.textContent.trim();
    const href=map[title];
    if(href){
      const a=document.createElement('a');
      a.href=href;
      a.target='_blank';
      a.rel='noopener';
      a.className='milestone-link';
      // clone node to preserve layout
      a.appendChild(art.cloneNode(true));
      art.replaceWith(a);
    }
  });
});
