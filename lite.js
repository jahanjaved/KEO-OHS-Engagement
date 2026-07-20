(() => {
  const $lite = (s, r=document) => r.querySelector(s);
  const $$lite = (s, r=document) => [...r.querySelectorAll(s)];
  const marker = 'CONTRACTOR SUPERVISORY TEAM ENGAGED AND THE FOLLOWING ACTIONS WERE COMMUNICATED FOR IMPLEMENTATION';
  const timers = new WeakMap();

  function compose(card){
    const desc=$lite('.observationDescription',card)?.value.trim()||'';
    const act=$lite('.preventiveAction',card)?.value.trim()||'';
    const out=$lite('.combinedOutput',card);
    if(!out) return;
    out.value=[desc, act ? `${marker}\n${act}` : ''].filter(Boolean).join('\n\n');
  }

  function splitBack(card){
    const out=$lite('.combinedOutput',card);
    if(!out) return;
    const value=out.value||'';
    const idx=value.toUpperCase().indexOf(marker);
    const desc=$lite('.observationDescription',card);
    const act=$lite('.preventiveAction',card);
    if(!desc || !act) return;
    if(idx>=0){
      desc.value=value.slice(0,idx).trim();
      act.value=value.slice(idx+marker.length).trim();
    }else{
      desc.value=value.trim();
      act.value='';
    }
  }

  function updateAutoStatus(card,text,working=false){
    const el=$lite('.autoStatus',card);
    if(!el) return;
    el.textContent=text;
    el.dataset.working=working?'1':'0';
  }

  function runEngine(card){
    const manual=$lite('.manualComments',card);
    const btn=$lite('.smartImprove',card);
    if(!manual?.value.trim() || !btn) {
      compose(card);
      updateAutoStatus(card,'Automatic smart generation enabled');
      return;
    }
    updateAutoStatus(card,'Generating specific observation and action…',true);
    btn.click();
    setTimeout(()=>{
      compose(card);
      updateAutoStatus(card,'Observation and action generated');
    },40);
  }

  function scheduleEngine(card,delay=450){
    const old=timers.get(card);
    if(old) clearTimeout(old);
    timers.set(card,setTimeout(()=>runEngine(card),delay));
  }

  async function copyCombined(card){
    const out=$lite('.combinedOutput',card);
    const status=$lite('.copyStatus',card);
    const button=$lite('.copyBtn',card);
    if(!out || !out.value.trim()){
      if(status) status.textContent='No text available to copy.';
      return;
    }
    try{ await navigator.clipboard.writeText(out.value); }
    catch(e){
      out.focus(); out.select(); document.execCommand('copy');
      out.setSelectionRange(out.value.length,out.value.length);
    }
    if(status) status.textContent='Text copied successfully.';
    if(button){
      const original=button.textContent;
      button.textContent='Copied ✓';
      setTimeout(()=>button.textContent=original,1400);
    }
    setTimeout(()=>{if(status) status.textContent='';},2500);
  }

  function wire(card){
    if(!card || card.dataset.liteWired) return;
    card.dataset.liteWired='1';
    const manual=$lite('.manualComments',card);
    if(manual){
      manual.addEventListener('input',()=>scheduleEngine(card));
      manual.addEventListener('blur',()=>scheduleEngine(card,0));
    }
    ['.package','.cluster','.villaNo','.actionOwner'].forEach(sel=>{
      const el=$lite(sel,card);
      if(el) ['change','input'].forEach(ev=>el.addEventListener(ev,()=>scheduleEngine(card,80)));
    });
    const out=$lite('.combinedOutput',card);
    if(out) out.addEventListener('input',()=>splitBack(card));
    const copyBtn=$lite('.copyBtn',card);
    if(copyBtn) copyBtn.addEventListener('click',()=>copyCombined(card));
    ['change','input'].forEach(ev=>{
      $lite('.observationDescription',card)?.addEventListener(ev,()=>compose(card));
      $lite('.preventiveAction',card)?.addEventListener(ev,()=>compose(card));
    });
    compose(card);
  }

  function init(){
    $$lite('.obsCard').forEach(wire);
    const target=$lite('#observationsContainer');
    if(target) new MutationObserver(()=>$$lite('.obsCard').forEach(wire)).observe(target,{childList:true,subtree:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0));
  else setTimeout(init,0);
})();
