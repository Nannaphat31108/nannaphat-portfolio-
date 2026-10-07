const GH='https://github.com/Nannaphat31108/';
const SF_SHOTS=[['welcome','Welcome'],['home','Home dashboard'],['devices','Devices'],['light','Grow lights'],['pump','Water pump'],['auto','Automation rules'],['camera','ESP32-CAM camera'],['data','Sensor history']].map(([f,t])=>({src:'images/smartfarm/'+f+'.webp',title:t}));
const PROJECTS=[
{id:'lifeplus',title:'Life Plus ERP',tag:'ERP • BUSINESS SYSTEM',cat:['software'],featured:true,
 summary:'Multi-department ERP for a pharmaceutical / supplement manufacturer — R&D formulas, purchasing, packaging, stock, production work orders and document exports, backed by PostgreSQL.',
 chips:['FastAPI','PostgreSQL','JavaScript','Excel','Render'],
 stats:[['15k+','lines of code'],['23','API modules'],['v31','releases']],
 overview:'The company ran on dozens of Excel forms (F-RD-001 … F-RD-004, QP, job masters). Life Plus ERP turns those forms into one web system where each department works on the same data, while still exporting documents that look exactly like the originals.',
 features:['R&D formula forms (F-RD-002 / 002.1) with live cost, profit and price-rate calculation','Composite-ingredient expansion for substances registered as multiple components','FDA material & supplement code lookup for regulatory data','Purchasing documents (PR / PO), quotations and admin pricing','Packaging options, packaging preparation and finished-goods stock cards','Production work orders, MRP service and work hand-off between departments','Audit log & version history on records; Excel export of every form','Login with roles; deployable to Render with a custom domain'],
 role:'Designed the data model, wrote the FastAPI backend and the 6,000-line vanilla-JS front end, and mapped every original Excel field to the database (documented in FORM_MAPPING.md).',
 links:[['Repository',GH+'lifeplusrepo']]},
{id:'dsis',title:'Digital Ship Inspection System',tag:'ENGINEERING • WEB APP',cat:['engineering','software'],
 summary:'Ship inspection, structural damage assessment and preliminary stability simulation — with engineering calculations, hand-drawn SVG visualizations and automated tests.',
 chips:['JavaScript','SVG','Naval Engineering','Unit Tests'],
 stats:[['3','modules'],['28','passing tests'],['0','dependencies']],
 overview:'A single-page app that works fully offline: open index.html and inspect a ship. It records findings on an interactive hull diagram, scores structural damage and simulates stability using simplified naval-architecture formulas (for education).',
 features:['Module 1 — Ship particulars with input validation and IMO check-digit verification','Click on the SVG hull to place findings; system detects zone (Aft / Midship 0.4L / Forward) and above/below waterline','Findings table with search, filters, 6 sort modes, detail view and delete confirmation','Module 2 — Plate-thickness loss (Δt, Δt%, t_min), damage score, severity and recommendations','Module 3 — Volume, displacement, KB, BM, GM and GZ curve checked against IMO criteria','Dashboard with KPI, donut / bar / line charts written from scratch in SVG','Auto-generated inspection report → Print / Save as PDF','Pure calculation modules tested with Node.js: 28 passed, 0 failed'],
 role:'Researched the formulas, separated pure calculation logic from the UI so it can be unit-tested, and built every chart and diagram by hand.',
 links:[['Repository',GH+'DIGITAL-SHIP-INSPECTION-SYSTEM']]},
{id:'hospital',title:'Hospital Purchase System',tag:'HEALTHCARE • DATABASE',cat:['software'],
 summary:'Hospital procurement workflow — companies, medical supplies, units, purchase orders, search, back-dated editing and official government-format Word exports.',
 chips:['Flask','PostgreSQL','SQLAlchemy','python-docx'],
 stats:[['8','Word forms'],['4','versions'],['6k+','lines of code']],
 overview:'Built for real procurement staff who had to fill government purchase forms by hand. Selecting a supply automatically pulls its price, unit and specification, totals are calculated, and every form is generated as a ready-to-print Word document.',
 features:['Manage companies, medical supplies and units (add / edit / search / enable / disable)','Purchase orders with 1–6+ items; prices, units and specs filled in automatically','8 official Word forms in TH Sarabun New 16 pt — single / multi-item PO, specification, inspection receipt and more','Back-dated creation and editing of historical purchases','Print every form at once','Data persists across redeploys on Render PostgreSQL (no drop_all, safe create_all)','Falls back to local SQLite for offline use on Windows'],
 role:'Iterated through four versions with the users, matching the Word layouts line-by-line to the official templates.',
 links:[['Repository',GH+'hospital-purchase-system-final'],['Earlier v2',GH+'hospital-purchase-system-v2']]},
{id:'laundry',title:'Laundry Management System',tag:'PWA • POS',cat:['software','hardware'],
 summary:'Laundry-shop POS and management PWA — orders by piece or weight, prepaid packages, accounting, and Thai receipts printed directly to a thermal printer.',
 chips:['PWA','JavaScript','Firebase','ESC/POS','Web Bluetooth'],
 stats:[['8','app screens'],['80mm','thermal receipts'],['100%','offline']],
 overview:'Runs on a tablet, phone or computer with no server — installable and fully usable offline. Receipts are rendered as a 576-dot image and sent as ESC/POS raster commands, so Thai text prints correctly on any Xprinter.',
 features:['Home dashboard: today vs. yesterday revenue, 7-day chart, customers whose packages are running out','Order screen: charge per piece (tap cards) or per kg, auto-deduct from prepaid packages','Customer management with search by name / phone / LINE ID and package status filters','Packages with price-per-piece and active-customer counts','Receipts: date filter, reprint (80 / 58 mm), void and delete','Accounts: income & expenses, monthly charts, categories, CSV export, A4 summary report','Admin PIN (hashed) protects sensitive actions; auto-locks when idle','Print via browser, USB, Bluetooth LE or RawBT; auto-cut, cash-drawer kick, multi-copy','Multi-device sync through Firebase Realtime Database'],
 role:'Rebuilt the whole UX/UI of an older system and wrote the receipt renderer and printer drivers in plain JavaScript.',
 links:[['Repository',GH+'Laundry']]},
{id:'smartfarm',title:'Smart Farm',tag:'ANDROID APP • IOT',cat:['mobile','iot','hardware','software'],featured:true,
 images:SF_SHOTS,icon:'images/smartfarm/icon.png',
 summary:'Control a smart farm from your phone — grow lights, water pump, sensors, automation rules and a live ESP32-CAM camera. Ships as a web app, PWA and Android APK.',
 chips:['ESP32','ESP32-CAM','Capacitor','Android','GitHub Actions'],
 stats:[['8','screens'],['APK','auto-built'],['24h / 7d','sensor history']],
 overview:'A static web app that talks directly to ESP32 boards on the home Wi-Fi. Every push to main triggers GitHub Actions to build a new Android APK, and the project includes a Google Play release pipeline.',
 features:['Live temperature, air humidity and soil moisture','Device list with search and filters; relay on/off switches','Grow lights by schedule, by light level, or manual','Water pump with soil-moisture gauge and adjustable auto-watering threshold','Automation rules: time, soil moisture, low light, high temperature','ESP32-CAM: live view, snapshot, flash, resolution, time-lapse and gallery','History charts for 24 hours and 7 days','Android APK via Capacitor + CI; Google Play AAB signing guide; privacy policy page'],
 role:'Wrote the app, the ESP32-CAM firmware and the CI pipeline that builds and publishes the Android app.',
 links:[['Repository',GH+'Smartfarm'],['Download APK',GH+'Smartfarm/releases/tag/android-latest']]},
{id:'smartwater',title:'Smart Water',tag:'IOT • AUTOMATION',cat:['iot','hardware'],
 summary:'ESP32 smart irrigation — soil-moisture sensing, automatic watering by threshold, manual pump control and a cloud dashboard.',
 chips:['ESP32','FastAPI','Sensors','Render'],
 stats:[['2-way','device ↔ cloud'],['Auto','threshold mode']],
 overview:'The ESP32 posts moisture readings to a FastAPI service and polls for commands, so the pump can be controlled from anywhere without opening ports on the home network.',
 features:['Soil moisture in % plus raw sensor value and sensor-health flag','Automatic mode waters when moisture drops below an adjustable threshold','Manual pump on/off commands with command IDs to avoid repeats','Device authentication with an X-Device-Key header','Last-seen timestamp to detect an offline device','Web dashboard served by the same API'],
 role:'Designed the polling protocol between the board and the server and wrote both sides.',
 links:[['Repository',GH+'smartwater']]},
{id:'plantcloud',title:'Smart Plant Cloud',tag:'IOT • CLOUD • IMAGE',cat:['iot','software'],
 summary:'Cloud backend for plant monitoring — devices upload soil readings, plant photos and pump events, which are stored and analysed in PostgreSQL.',
 chips:['Flask','PostgreSQL','NumPy','Pillow'],
 stats:[['10','API endpoints'],['3','data types']],
 overview:'A REST API for multiple sensor nodes. Soil readings, camera images and pump events are stored with timestamps so the plant\'s history can be reviewed and charted.',
 features:['POST /api/soil — raw and percent soil moisture per device ID','POST /api/image — plant photos (up to 6 MB) processed with NumPy / Pillow','Pump event log and history','Latest-value and history endpoints for dashboards','Health and status endpoints for monitoring','Works with SQLite locally or PostgreSQL in the cloud'],
 role:'Built the data model and API that later IoT projects reuse.',
 links:[['Repository',GH+'smart-plant-cloud']]},
{id:'powerbox',title:'PowerBox SOS',tag:'LORA • EMBEDDED',cat:['iot','hardware'],
 summary:'Offline emergency communication — an ESP32 transmitter sends SOS + GPS over LoRa; a receiver shows it on an OLED and forwards it to a live map dashboard.',
 chips:['ESP32','LoRa SX1278','GPS NEO-6M','Flask','OpenStreetMap'],
 stats:[['433 MHz','LoRa radio'],['3','components']],
 overview:'Designed for places without mobile signal. The transmitter needs no internet at all; only the receiver station needs Wi-Fi to put the SOS on a map.',
 features:['Transmitter: ESP32 + RA-01 SX1278 + NEO-6M GPS','Receiver: ESP32 + RA-01 + SSD1306 OLED + Wi-Fi','Receiver forwards messages over HTTPS to /api/sos','Flask + SQLAlchemy dashboard with OpenStreetMap markers','Full wiring documentation for every pin','Deployable to Render with PostgreSQL'],
 role:'Wired and programmed both radios and built the web dashboard.',
 links:[['Repository',GH+'powerbox']]},
{id:'charger',title:'Smart Battery Charger',tag:'PCB • HARDWARE',cat:['hardware','engineering'],
 summary:'Stand-alone 12 V lead-acid battery charger on Arduino Nano — with schematic, 2-layer PCB layout, 3D view, BOM, soldering table and build guide.',
 chips:['Arduino Nano','PCB Design','Proteus','Python'],
 stats:[['2-layer','PCB'],['9','doc pages']],
 overview:'A hardware project documented as a website. The PCB placement and traces are defined in Python (design.py), which generates the data for the interactive schematic, layout and 3D pages.',
 features:['Arduino firmware for charge control (SmartCharger.ino)','Schematic and 2-layer PCB layout pages','Interactive 3D board view','Bill of materials and soldering table','Step-by-step assembly guide','Proteus simulation guide','PCB generated from code: python design.py → pcb.json → site data'],
 role:'Designed the circuit and board, and wrote the generator that keeps code and documentation in sync.',
 links:[['Repository',GH+'powerbox/tree/main/hardware/charger']]},
{id:'schoolroom',title:'School Room Status',tag:'WEB • SCHOOL',cat:['software'],
 summary:'Classroom booking & status system — students see which rooms are free and book them for today, with history, accounts and abuse protection.',
 chips:['Flask','SQLite','CSRF','Responsive'],
 stats:[['2','versions'],['0','external CDNs']],
 overview:'Version 2 rebuilt the original app for real school use: same-day queues that reset automatically, soft cancellation, login, and a fully self-hosted UI.',
 features:['Book rooms for the current day; queue resets automatically each day','Full booking history kept in SQLite','Cancel only your own booking; soft cancel (status=cancelled) instead of DELETE','Unique database index prevents double-booking the same room','CSRF protection and validation of room, time and inputs','Login / register; Asia/Bangkok time zone','Responsive white UI with in-project SVG icons — no Bootstrap or CDN','Automatic migration from the v1 database'],
 role:'Rewrote v1 into v2 with security and data-integrity in mind.',
 links:[['Repository',GH+'schoolroom'],['Version 1',GH+'school-room-status']]},
{id:'stonecraft',title:'StoneCraft Cafe',tag:'WEB • HOSPITALITY',cat:['software'],
 summary:'Bilingual cafe website with menu, gallery, table reservations, reviews, workshop info and a full admin panel.',
 chips:['Flask','PostgreSQL','TH / EN','Admin CMS'],
 stats:[['2','languages'],['6','admin pages']],
 overview:'A complete website for a cafe that also runs workshops. Staff manage everything from an admin dashboard, and customers can switch between Thai and English.',
 features:['Pages: home, about, menu, gallery, reservation, reviews, contact with map','Thai / English language switch from translation files','Online table reservations','Admin: dashboard, menu, gallery uploads, reservations, reviews, login','Persistent storage with SQLite → PostgreSQL migration script','Animations and responsive layouts','Deployed on Render'],
 role:'Built the full stack and admin tools so the owner can update the site without code.',
 links:[['Repository',GH+'StoneCraftCafe']]}
];

const shotsHTML=imgs=>imgs.map(m=>`<figure class="phone"><button data-src="${m.src}" data-title="${m.title}"><img src="${m.src}" alt="${m.title}" loading="lazy" width="540" height="1169"></button><figcaption>${m.title}</figcaption></figure>`).join('');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const list=document.getElementById('project-list');
list.innerHTML=PROJECTS.map((p,i)=>`<article class="project${p.featured?' featured':''}" data-cat="${p.cat.join(' ')}" data-id="${p.id}" tabindex="0" role="button" aria-label="Details: ${esc(p.title)}"><div class="num">${String(i+1).padStart(2,'0')}</div><div>${p.images?`<div class="thumbs">${p.images.slice(1,5).map(m=>`<img src="${m.src}" alt="${esc(m.title)}" loading="lazy" width="54" height="117">`).join('')}</div>`:''}<p class="tag">${p.tag}</p><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="chips">${p.chips.map(c=>`<span>${esc(c)}</span>`).join('')}</div></div><span class="more">Details →</span></article>`).join('');

const dlg=document.getElementById('detail'),body=document.getElementById('detail-body');
function openProject(id){const p=PROJECTS.find(x=>x.id===id);if(!p)return;
 body.innerHTML=`<p class="tag">${p.tag}</p><h2 id="d-title">${esc(p.title)}</h2><div class="d-stats">${p.stats.map(([n,l])=>`<div><strong>${esc(n)}</strong><span>${esc(l)}</span></div>`).join('')}</div><p class="d-lead">${esc(p.overview)}</p>${p.images?`<h4>Screens</h4><div class="phones small">${shotsHTML(p.images)}</div>`:''}<h4>Key features</h4><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul><h4>My role</h4><p>${esc(p.role)}</p><h4>Tech</h4><div class="chips">${p.chips.map(c=>`<span>${esc(c)}</span>`).join('')}</div><div class="actions d-links">${p.links.map(([t,u],i)=>`<a class="btn${i?'':' primary'}" href="${u}" target="_blank" rel="noreferrer">${esc(t)} ↗</a>`).join('')}</div>`;
 dlg.showModal();dlg.scrollTop=0;}
list.addEventListener('click',e=>{const a=e.target.closest('.project');if(a)openProject(a.dataset.id)});
list.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.project')){e.preventDefault();openProject(e.target.dataset.id)}});
dlg.querySelector('.close').addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});

document.getElementById('phones').innerHTML=shotsHTML(SF_SHOTS);
const viewer=document.getElementById('viewer');
document.addEventListener('click',e=>{const b=e.target.closest('.phone button');if(!b)return;viewer.querySelector('img').src=b.dataset.src;viewer.querySelector('img').alt=b.dataset.title;viewer.querySelector('p').textContent=b.dataset.title;viewer.showModal();});
viewer.querySelector('.close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});
document.getElementById('year').textContent=new Date().getFullYear();
const buttons=document.querySelectorAll('[data-filter]'),projects=document.querySelectorAll('.project');
buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;projects.forEach(p=>p.classList.toggle('hidden',f!=='all'&&!p.dataset.cat.split(' ').includes(f)));}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,easing:'ease-out',fill:'both'});observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.project,.skill-grid article,.stat-grid>div,.timeline li').forEach(el=>observer.observe(el));
