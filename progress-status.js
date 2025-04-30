(async function(){
  const url = 'https://raw.githubusercontent.com/CryptoJym/utah-bgc-mesh/main/README.md';
  try {
    const md = await fetch(url).then(r=>r.text());
    const lines = md.split(/\r?\n/);
    const start = lines.findIndex(l => l.startsWith('## Components'));
    if(start === -1) return;
    const tableLines = [];
    for(let i=start+2; i<lines.length; i++){
      const line = lines[i].trim();
      if(!line || !line.startsWith('|')) break;
      tableLines.push(line);
    }
    const rows = tableLines.map(l => l.split('|').slice(1,-1).map(c=>c.trim()));
    const tbody = rows.map(([leaf,tool,status])=>`<tr><td>${leaf}</td><td>${tool}</td><td>${status}</td></tr>`).join('');
    const tableHTML = `<table class="status-table"><thead><tr><th>Leaf</th><th>Tools</th><th>Status</th></tr></thead><tbody>${tbody}</tbody></table>`;
    document.getElementById('leaf-table').innerHTML = tableHTML;
  } catch(e){
    console.error('Failed to load component status',e);
  }
})();
