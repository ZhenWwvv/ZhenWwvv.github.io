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
        // PUBLICATION format: Author + italic title + venue
        const author = entry.authors || '';
        const title = entry.title || 'Untitled';
        const venue = entry.venue || '';
        
        // Author (standard font)
        if (author){
          const authorDiv = el('div', {class:'pub-author', text: author});
          entryDiv.appendChild(authorDiv);
        }
        
        // Title (italic)
        const titleRow = el('div', {class:'pub-title-row'});
        const titleLeft = el('div', {class:'pub-title-left'});
        const titleItalic = el('i', {text: title});
        if (entry.link && entry.link !== '#'){
          const titleLink = el('a', {href: entry.link, class:'pub-title-link'});
          titleLink.appendChild(titleItalic);
          titleLeft.appendChild(titleLink);
        } else {
          titleLeft.appendChild(titleItalic);
        }
        titleRow.appendChild(titleLeft);
        entryDiv.appendChild(titleRow);
        
        // Venue (standard font)
        if (venue){
          const venueDiv = el('div', {class:'pub-venue', text: venue});
          entryDiv.appendChild(venueDiv);
        }
      }

      return entryDiv;
    }

    // Render sections with uppercase titles and horizontal lines
    function renderSection(title, items, type){
      if (!items.length) return null;
      const section = el('section', {class:'pub-section'});
      const sectionTitle = el('h2', {class:'pub-section-title', text: title.toUpperCase()});
      section.appendChild(sectionTitle);
      section.appendChild(el('hr', {class:'pub-section-divider'}));
      
      items.forEach(function(item){
        section.appendChild(createEntry(item, type));
      });
      return section;
    }

    // Render Publications first, then Research
    if (pubItems.length){
      const pubSection = renderSection('PUBLICATION', pubItems, 'publication');
      if (pubSection) container.appendChild(pubSection);
    }
    if (researchItems.length){
      const researchSection = renderSection('RESEARCH', researchItems, 'research');
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
})();


