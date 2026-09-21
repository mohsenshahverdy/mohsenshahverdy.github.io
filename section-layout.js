(() => {
  const root=document.documentElement;
  function sizePage(){root.style.setProperty('--page-width',root.clientWidth+'px')}
  sizePage();
  window.addEventListener('resize',sizePage,{passive:true});
  const sections=[
    ['research','Research & experiments.','Questions explored through models, experiments, and evidence.'],
    ['education','A foundation for asking better questions.','Computer engineering, machine learning, and the mathematics behind them.']
  ];
  for(const [id,title,description] of sections){
    const list=document.querySelector(`#${id} .academic-list`);
    const heading=document.createElement('h2');heading.className='academic-heading';heading.textContent=title;
    const paragraph=document.createElement('p');paragraph.className='academic-description';paragraph.textContent=description;
    list.prepend(heading,paragraph);
  }
  // Hash links to a project should expose its content, including on first load.
  function revealHash(){
    let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
    const target=document.getElementById(id);
    if(target instanceof HTMLDetailsElement){target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}))}
  }
  window.addEventListener('hashchange',revealHash);
  revealHash();
  const cv=document.querySelector('.socials a[href$=".pdf"]');
  if(cv){cv.download='Mohsen-Shahverdi-Senior-AI-Engineer-CV.pdf';cv.setAttribute('aria-label','Download Senior AI Engineer CV as PDF')}
})();
