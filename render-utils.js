// Lightweight rendering helpers for static HTML pages

(function(){
  function ensureContent(){ return window.SITE_CONTENT || {}; }

  function fmtPeriod(p){
    if (!p) return "";
    const s = p.start || ""; const e = p.end || "Present";
    return [s, e].filter(Boolean).join(" — ");
  }

  function el(tag, attrs, children){
    const node = document.createElement(tag);
    if (attrs){
      Object.keys(attrs).forEach(function(k){
        if (k === 'class') node.className = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    if (children){
      children.forEach(function(c){ if (c) node.appendChild(c); });
    }
    return node;
  }

  function renderResume(container){
    const data = ensureContent();
    if (!container) return;
    container.innerHTML = '';

    // Profile
    if (data.profile){
      const p = data.profile;
      const links = [];
      if (p.links?.homepage) links.push(el('a', {href:p.links.homepage}, [document.createTextNode('Homepage')]));
      if (p.links?.linkedin) links.push(el('a', {href:p.links.linkedin}, [document.createTextNode('LinkedIn')]));
      if (p.links?.github) links.push(el('a', {href:p.links.github}, [document.createTextNode('GitHub')]));
      const metaParts = [];
      if (p.location) metaParts.push(p.location);
      if (p.phone) metaParts.push('Tel: ' + p.phone);
      if (p.email) metaParts.push(p.email);
      const meta = metaParts.join(' · ');
      const header = el('div', {class:'resume-header'}, [
        el('h2', {class:'resume-name', text: p.name || ''}),
        el('div', {class:'resume-meta', text: meta}),
        el('div', {class:'resume-links'}, links.map(function(a,i){ if(i>0) a.insertAdjacentText('beforebegin',' · '); return a; }))
      ]);
      container.appendChild(header);
    }

    // Education
    if (Array.isArray(data.education) && data.education.length){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Education'}));
      data.education.forEach(function(ed){
        const item = el('div', {class:'resume-item'}, [
          el('div', {class:'resume-line'}, [
            el('strong', {text: ed.school || ''}),
            el('span', {class:'muted'}, [document.createTextNode(' ' + (fmtPeriod(ed.period) || ''))])
          ]),
          el('div', {class:'muted', text: [ed.degree, ed.major].filter(Boolean).join(', ')})
        ]);
        if (Array.isArray(ed.highlights) && ed.highlights.length){
          const ul = el('ul');
          ed.highlights.forEach(function(h){ ul.appendChild(el('li', {text:h})); });
          item.appendChild(ul);
        }
        sec.appendChild(item);
      });
      container.appendChild(sec);
    }

    // Experience
    if (Array.isArray(data.experience) && data.experience.length){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Experience'}));
      data.experience.forEach(function(ex){
        const title = [ex.organization, ex.role].filter(Boolean).join(' — ');
        const item = el('div', {class:'resume-item'}, [
          el('div', {class:'resume-line'}, [
            el('strong', {text: title}),
            el('span', {class:'muted'}, [document.createTextNode(' ' + (fmtPeriod(ex.period) || ''))])
          ]),
          el('div', {class:'muted', text: [ex.location, ex.sector].filter(Boolean).join(' · ')})
        ]);
        if (Array.isArray(ex.bullets) && ex.bullets.length){
          const ul = el('ul');
          ex.bullets.forEach(function(b){ ul.appendChild(el('li', {text:b})); });
          item.appendChild(ul);
        }
        sec.appendChild(item);
      });
      container.appendChild(sec);
    }

    // Research
    if (Array.isArray(data.research) && data.research.length){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Research & Publications'}));
      const ul = el('ul');
      data.research.forEach(function(r){
        const pieces = [r.title, r.venue, r.year, r.authors].filter(Boolean).join(' — ');
        const li = el('li');
        if (r.link){
          li.appendChild(el('a', {href:r.link, text: pieces}));
        } else { li.textContent = pieces; }
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      container.appendChild(sec);
    }

    // Honors
    if (Array.isArray(data.honors) && data.honors.length){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Honors & Awards'}));
      const ul = el('ul');
      data.honors.forEach(function(h){
        ul.appendChild(el('li', {text: [h.title, h.issuer, h.year].filter(Boolean).join(' — ')}));
      });
      sec.appendChild(ul);
      container.appendChild(sec);
    }

    // Projects (if present)
    if (Array.isArray(data.projects) && data.projects.length){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Projects'}));
      data.projects.forEach(function(pj){
        const title = [pj.title, (pj.tags||[]).join(', ')].filter(Boolean).join(' — ');
        const item = el('div', {class:'resume-item'}, [
          el('div', {class:'resume-line'}, [
            el('strong', {text: title}),
            el('span', {class:'muted'}, [document.createTextNode(' ' + (fmtPeriod(pj.period) || ''))])
          ])
        ]);
        if (Array.isArray(pj.bullets) && pj.bullets.length){
          const ul = el('ul'); pj.bullets.forEach(function(b){ ul.appendChild(el('li', {text:b})); });
          item.appendChild(ul);
        }
        sec.appendChild(item);
      });
      container.appendChild(sec);
    }

    // Skills
    if (data.skills){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Skills'}));
      const parts = [];
      if (data.skills.languages?.length) parts.push('Languages: ' + data.skills.languages.join(', '));
      if (data.skills.tools?.length) parts.push('Tools: ' + data.skills.tools.join(', '));
      if (data.skills.frameworks?.length) parts.push('Frameworks: ' + data.skills.frameworks.join(', '));
      if (data.skills.data?.length) parts.push('Data: ' + data.skills.data.join(', '));
      if (data.skills.visualization?.length) parts.push('Visualization: ' + data.skills.visualization.join(', '));
      sec.appendChild(el('p', {text: parts.join(' | ')}));
      container.appendChild(sec);
    }

    // Community
    if (Array.isArray(data.community) && data.community.length){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Community & Leadership'}));
      data.community.forEach(function(c){
        const item = el('div', {class:'resume-item'}, [
          el('div', {class:'resume-line'}, [
            el('strong', {text: [c.org, c.role].filter(Boolean).join(' — ')}),
            el('span', {class:'muted'}, [document.createTextNode(' ' + (fmtPeriod(c.period) || ''))])
          ])
        ]);
        if (Array.isArray(c.bullets) && c.bullets.length){
          const ul = el('ul');
          c.bullets.forEach(function(b){ ul.appendChild(el('li', {text:b})); });
          item.appendChild(ul);
        }
        sec.appendChild(item);
      });
      container.appendChild(sec);
    }

    // Media
    if (Array.isArray(data.media) && data.media.length){
      const sec = el('section', {class:'resume-sec'});
      sec.appendChild(el('h3', {text:'Media & Talks'}));
      const ul = el('ul');
      data.media.forEach(function(m){
        const text = [m.title, m.outlet, m.year].filter(Boolean).join(' — ');
        const li = el('li');
        if (m.link){ li.appendChild(el('a', {href:m.link, text})); }
        else { li.textContent = text; }
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      container.appendChild(sec);
    }
  }

  function renderSectorList(container, sector){
    const data = ensureContent();
    if (!container) return;
    container.innerHTML = '';
    const items = (data.experience || []).filter(function(x){ return x.sector === sector; });
    if (!items.length){ container.appendChild(el('p', {class:'muted', text:'No entries yet.'})); return; }
    items.forEach(function(ex){
      const title = [ex.organization, ex.role].filter(Boolean).join(' — ');
      const card = el('div', {class:'card', style:'margin-bottom:12px;'}, [
        el('div', {class:'resume-line'}, [
          el('strong', {text: title}),
          el('span', {class:'muted'}, [document.createTextNode(' ' + (fmtPeriod(ex.period) || ''))])
        ]),
        el('div', {class:'muted', text: [ex.location].filter(Boolean).join(' · ')})
      ]);
      if (Array.isArray(ex.bullets) && ex.bullets.length){
        const ul = el('ul'); ex.bullets.forEach(function(b){ ul.appendChild(el('li', {text:b})); });
        card.appendChild(ul);
      }
      container.appendChild(card);
    });
  }

  function renderResearchList(container){
    const data = ensureContent();
    if (!container) return; container.innerHTML = '';

    function renderBlock(titleText, arr){
      const block = el('section', {class:'resume-sec'});
      block.appendChild(el('h3', {text: titleText}));
      const items = Array.isArray(arr) ? arr : [];
      if (!items.length){
        block.appendChild(el('p', {class:'muted', text:'No entries yet.'}));
        return block;
      }
      const list = el('div');
      items.forEach(function(r){
        const header = [r.title].filter(Boolean).join('');
        const meta = [r.venue, r.year, r.authors].filter(Boolean).join(' — ');
        const card = el('div', {class:'card', style:'margin-bottom:12px;'});
        const h = el('div', {class:'resume-line'});
        if (r.link) h.appendChild(el('a', {href:r.link, text: header}));
        else h.appendChild(el('strong', {text: header}));
        if (meta) h.appendChild(el('div', {class:'muted', style:'margin-top:6px;', text: meta}));
        card.appendChild(h);
        list.appendChild(card);
      });
      block.appendChild(list);
      return block;
    }

    container.appendChild(renderBlock('Research', data.research));
    container.appendChild(renderBlock('Publications', data.publications));
  }

  function renderResearchOnly(container){
    const data = ensureContent();
    if (!container) return; container.innerHTML = '';
    const sec = el('section', {class:'resume-sec'});
    sec.appendChild(el('h3', {text:'Research'}));
    const items = Array.isArray(data.research) ? data.research : [];
    if (!items.length){ sec.appendChild(el('p', {class:'muted', text:'No research entries yet.'})); container.appendChild(sec); return; }
    const list = el('div');
    items.forEach(function(r){
      const header = [r.title].filter(Boolean).join('');
      const meta = [r.venue, r.year, r.authors].filter(Boolean).join(' — ');
      const card = el('div', {class:'card', style:'margin-bottom:12px;'});
      const h = el('div', {class:'resume-line'});
      if (r.link) h.appendChild(el('a', {href:r.link, text: header})); else h.appendChild(el('strong', {text: header}));
      if (meta) h.appendChild(el('div', {class:'muted', style:'margin-top:6px;', text: meta}));
      card.appendChild(h); list.appendChild(card);
    });
    sec.appendChild(list); container.appendChild(sec);
  }

  function renderPublicationsOnly(container){
    const data = ensureContent();
    if (!container) return; container.innerHTML = '';
    const sec = el('section', {class:'resume-sec'});
    sec.appendChild(el('h3', {text:'Publications'}));
    const items = Array.isArray(data.publications) ? data.publications : [];
    if (!items.length){ sec.appendChild(el('p', {class:'muted', text:'No publications yet.'})); container.appendChild(sec); return; }
    const list = el('div');
    items.forEach(function(r){
      const header = [r.title].filter(Boolean).join('');
      const meta = [r.venue, r.year, r.authors].filter(Boolean).join(' — ');
      const card = el('div', {class:'card', style:'margin-bottom:12px;'});
      const h = el('div', {class:'resume-line'});
      if (r.link) h.appendChild(el('a', {href:r.link, text: header})); else h.appendChild(el('strong', {text: header}));
      if (meta) h.appendChild(el('div', {class:'muted', style:'margin-top:6px;', text: meta}));
      card.appendChild(h); list.appendChild(card);
    });
    sec.appendChild(list); container.appendChild(sec);
  }

  function renderResearchPublications(container){
    const data = ensureContent();
    if (!container) return;
    container.innerHTML = '';
    const researchItems = Array.isArray(data.research) ? data.research : [];
    const pubItems = Array.isArray(data.publications) ? data.publications : [];
    if (!researchItems.length && !pubItems.length){
      container.appendChild(el('p', {class:'muted', text:'No research or publications yet.'}));
      return;
    }

    function createEntry(entry, type){
      const isResearch = type === 'research';
      const entryDiv = el('div', {class:'pub-entry', 'data-type': type});
      
      if (isResearch){
        // RESEARCH format: Bold title + right-aligned date + Supervisor (italic) + description
        const titleRow = el('div', {class:'pub-title-row'});
        const titleLeft = el('div', {class:'pub-title-left'});
        const titleStrong = el('strong', {text: entry.title || 'Untitled'});
        titleLeft.appendChild(titleStrong);
        titleRow.appendChild(titleLeft);
        
        // Right-aligned date
        let dateStr = '';
        if (entry.period && entry.period.start && entry.period.end){
          // Format: 09/2022-12/2022 from YYYY-MM format
          const startParts = entry.period.start.split('-');
          const endParts = entry.period.end.split('-');
          if (startParts.length >= 2 && endParts.length >= 2){
            const start = startParts[1] + '/' + startParts[0]; // MM/YYYY
            const end = endParts[1] + '/' + endParts[0]; // MM/YYYY
            dateStr = start + '-' + end;
          } else {
            dateStr = entry.period.start + '-' + entry.period.end;
          }
        } else if (entry.year){
          dateStr = entry.year;
        }
        if (dateStr){
          const titleRight = el('div', {class:'pub-title-right', text: dateStr});
          titleRow.appendChild(titleRight);
        }
        entryDiv.appendChild(titleRow);
        
        // Supervisor and description
        const bullets = el('ul', {class:'pub-bullets'});
        if (entry.supervisor){
          const li = el('li');
          const supervisorText = entry.supervisor;
          // Check if "Supervisor:" is already in the text
          if (supervisorText.match(/^Supervisor:/i)){
            const parts = supervisorText.split(/^Supervisor:\s*/i);
            const italicSupervisor = el('i', {text: 'Supervisor: '});
            li.appendChild(italicSupervisor);
            li.appendChild(document.createTextNode(parts[1] || parts[0]));
          } else {
            const italicSupervisor = el('i', {text: 'Supervisor: '});
            li.appendChild(italicSupervisor);
            li.appendChild(document.createTextNode(supervisorText));
          }
          bullets.appendChild(li);
        }
        if (entry.description){
          const li = el('li', {text: entry.description});
          bullets.appendChild(li);
        }
        if (bullets.children.length > 0){
          entryDiv.appendChild(bullets);
        }
      } else {
        // PUBLICATION format: Title with year on right + venue
        const author = entry.authors || '';
        const title = entry.title || 'Untitled';
        const venue = entry.venue || '';
        const year = entry.year || '';
        
        // Title row with year on the right
        const titleRow = el('div', {class:'pub-title-row'});
        const titleLeft = el('div', {class:'pub-title-left'});
        const titleText = el('span', {text: title});
        if (entry.link && entry.link !== '#'){
          const titleLink = el('a', {href: entry.link, class:'pub-title-link'});
          titleLink.appendChild(titleText);
          titleLeft.appendChild(titleLink);
        } else {
          titleLeft.appendChild(titleText);
        }
        titleRow.appendChild(titleLeft);
        
        // Year on the right
        if (year){
          const titleRight = el('div', {class:'pub-title-right', text: year});
          titleRow.appendChild(titleRight);
        }
        entryDiv.appendChild(titleRow);
        
        // Venue (standard font)
        if (venue){
          const venueDiv = el('div', {class:'pub-venue', text: venue});
          entryDiv.appendChild(venueDiv);
        }
      }

      return entryDiv;
    }

    // Render sections WITHOUT titles (hero banner already provides the title)
    function renderSection(title, items, type){
      if (!items.length) return null;
      const section = el('section', {class:'card pub-section', 'data-type': type});
      // Section title
      const titleEl = el('h2', {class:'pub-section-title', text: title});
      section.appendChild(titleEl);
      items.forEach(function(item){
        section.appendChild(createEntry(item, type));
      });
      return section;
    }

    // Render Publications first, then Research
    if (pubItems.length){
      const pubSection = renderSection('Publication', pubItems, 'publication');
      if (pubSection) container.appendChild(pubSection);
    }
    if (researchItems.length){
      const researchSection = renderSection('Research', researchItems, 'research');
      if (researchSection) container.appendChild(researchSection);
    }
  }

  function renderHonorsList(container){
    const data = ensureContent();
    if (!container) return; container.innerHTML = '';
    const items = Array.isArray(data.honors) ? data.honors : [];
    if (!items.length){ container.appendChild(el('p', {class:'muted', text:'No honors yet.'})); return; }
    const ul = el('ul');
    items.forEach(function(h){
      ul.appendChild(el('li', {text: [h.title, h.issuer, h.year, h.notes].filter(Boolean).join(' — ')}));
    });
    container.appendChild(ul);
  }

  function renderCommunityList(container){
    const data = ensureContent();
    if (!container) return; container.innerHTML = '';
    const items = Array.isArray(data.community) ? data.community : [];
    if (!items.length){ container.appendChild(el('p', {class:'muted', text:'No community entries yet.'})); return; }
    items.forEach(function(c){
      const card = el('div', {class:'card', style:'margin-bottom:12px;'}, [
        el('div', {class:'resume-line'}, [
          el('strong', {text: [c.org, c.role].filter(Boolean).join(' — ')}),
          el('span', {class:'muted'}, [document.createTextNode(' ' + (fmtPeriod(c.period) || ''))])
        ])
      ]);
      if (Array.isArray(c.bullets) && c.bullets.length){
        const ul = el('ul'); c.bullets.forEach(function(b){ ul.appendChild(el('li', {text:b})); });
        card.appendChild(ul);
      }
      container.appendChild(card);
    });
  }

  function renderMediaList(container){
    const data = ensureContent();
    if (!container) return; container.innerHTML = '';
    const items = Array.isArray(data.media) ? data.media : [];
    if (!items.length){ container.appendChild(el('p', {class:'muted', text:'No media entries yet.'})); return; }
    const ul = el('ul');
    items.forEach(function(m){
      const text = [m.title, m.outlet, m.year].filter(Boolean).join(' — ');
      const li = el('li');
      if (m.link){ li.appendChild(el('a', {href:m.link, text})); } else { li.textContent = text; }
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  window.RenderUtils = { renderResume, renderSectorList, renderResearchList, renderResearchOnly, renderPublicationsOnly, renderResearchPublications, renderHonorsList, renderCommunityList, renderMediaList };
  function insertHeroBanner(opts){
    const main=document.querySelector('main.page');
    if(!main) return; const titleEl=main.querySelector('.page-title')||document.querySelector('title');
    const title=(titleEl?.textContent||document.title||'').trim(); if(!title) return;
    const hero=document.createElement('div'); hero.className='hero';
    const canvas=document.createElement('canvas'); const width=1600, height=240; canvas.width=width; canvas.height=height;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    const grad=ctx.createLinearGradient(0,0,width,height); grad.addColorStop(0,'#5e0c0e'); grad.addColorStop(1,'#8C3B1A');
    ctx.fillStyle=grad; ctx.fillRect(0,0,width,height);
    ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=2;
    for(let i=0;i<42;i++){ ctx.beginPath(); let x=Math.random()*width; let y=0; ctx.moveTo(x,y); for(let j=0;j<5;j++){ x+=(Math.random()-0.5)*120; y+=height/5; ctx.lineTo(x,y);} ctx.stroke(); }
    const fs = (opts&&opts.fontSize)||48;
    ctx.font='700 '+fs+'px Overpass, system-ui, Arial, sans-serif'; ctx.fillStyle='#ffffff'; ctx.textAlign='center'; ctx.textBaseline='middle';
    const tw=ctx.measureText(title).width; const bw=tw+80, bh=84; const bx=(width-bw)/2, by=(height-bh)/2;
    function roundRect(x,y,w,h,r){ r=Math.min(r,w/2,h/2); ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
    ctx.strokeStyle='rgba(255,255,255,0.9)'; ctx.lineWidth=6; roundRect(bx,by,bw,bh,16); ctx.stroke();
    ctx.fillText(title,width/2,height/2);
    const img=new Image(); img.src=canvas.toDataURL('image/png'); img.alt=title+' banner';
    hero.appendChild(img); main.insertBefore(hero, main.firstChild);
  }
  window.RenderUtils.insertHeroBanner = insertHeroBanner;

  function makeProjectPlaceholder(title){
    const c=document.createElement('canvas'); const w=960, h=720; c.width=w; c.height=h; const ctx=c.getContext('2d');
    const g=ctx.createLinearGradient(0,0,w,h); g.addColorStop(0,'#243b55'); g.addColorStop(1,'#141e30'); ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
    ctx.globalAlpha=0.15; ctx.strokeStyle='#fff';
    for(let i=0;i<28;i++){ ctx.beginPath(); let x=Math.random()*w; let y=0; ctx.moveTo(x,y); for(let j=0;j<5;j++){ x+=(Math.random()-0.5)*120; y+=h/5; ctx.lineTo(x,y);} ctx.stroke(); }
    ctx.globalAlpha=1; ctx.fillStyle='#ffffff'; ctx.font='700 54px Overpass, system-ui, Arial'; ctx.textAlign='left'; ctx.textBaseline='bottom';
    const lines=(title||'').split(/:\s*|\s\|\s/)[0]; ctx.fillText(lines||'Project', 40, h-40);
    return c;
  }
  window.RenderUtils.makeProjectPlaceholder = makeProjectPlaceholder;

  function renderProjects(container){
    const data = ensureContent();
    if (!container) return; container.innerHTML='';
    const items = Array.isArray(data.projects) ? data.projects : [];
    if (!items.length){ container.innerHTML = '<div class="card">No projects available.</div>'; return; }
    items.forEach(function(p){
      const row=document.createElement('section'); row.className='proj-row';
      const imgBox=document.createElement('div'); imgBox.className='proj-img';
      if (p.image){ const img=new Image(); img.src=p.image; img.alt=p.title||'Project image'; img.loading='lazy'; imgBox.appendChild(img); }
      else { imgBox.appendChild(makeProjectPlaceholder(p.title||'')); }
      const text=document.createElement('div');
      const h=document.createElement('h2'); h.className='proj-title'; h.textContent=p.title||''; text.appendChild(h);
      if (Array.isArray(p.bullets) && p.bullets.length){ const d=document.createElement('p'); d.className='proj-body'; d.innerHTML=p.bullets.join('<br><br>'); text.appendChild(d); }
      else if (p.desc){ const d=document.createElement('p'); d.className='proj-body'; d.textContent=p.desc; text.appendChild(d); }
      const links=document.createElement('div'); links.className='proj-links';
      const repo=p.link||p.repo||''; const site=p.site||'';
      if (site){ const a=document.createElement('a'); a.href=site; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent='Project site'; links.appendChild(a); }
      if (repo){ if (links.childNodes.length) links.appendChild(document.createTextNode(' · ')); const a=document.createElement('a'); a.href=repo; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent='Repository'; links.appendChild(a); }
      if (links.childNodes.length){ text.appendChild(links); }
      row.appendChild(imgBox); row.appendChild(text); container.appendChild(row);
    });
  }
  window.RenderUtils.renderProjects = renderProjects;
})();


