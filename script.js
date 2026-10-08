const GH='https://github.com/Nannaphat31108/';
const SF_SHOTS=[['welcome','Welcome'],['home','Home dashboard'],['devices','Devices'],['light','Grow lights'],['pump','Water pump'],['auto','Automation rules'],['camera','ESP32-CAM camera'],['data','Sensor history']].map(([f,t])=>({src:'images/smartfarm/'+f+'.webp',title:t}));
const HE_SHOTS=[['login','Login'],['admin_home','Admin home'],['shop','Customer shop'],['cart','Cart & checkout'],['tables','Database tables'],['product_form','Product form'],['salary_query','Salary query'],['stock_query','Stock query'],['salary_report','Salary report'],['stock_report','Stock report'],['register','Sign up']].map(([f,t])=>({src:'images/4her/'+f+'.webp',title:t}));
const PROJECTS=[
{id:'4her',title:'4Her Electric',tag:'ANDROID APP • DATABASE',cat:['mobile','software'],featured:true,
 images:HE_SHOTS,
 summary:'Native Android app (Java, Android Studio) for an electrical-appliance shop: an SQLite database of employees, products, categories and sales, plus a customer shop with cart and orders.',
 chips:['Java','Android Studio','SQLite','Material Design'],
 stats:[['16','activities'],['32','layouts'],['6.4k','lines of Java']],
 overview:'One app with two sides. Staff and admins work with the shop database: data-entry forms, queries, Make Table, and printable reports. Customers sign up, browse products by category, check out a cart and follow their orders. Every customer order is also written to the sales table, so the stock and sales reports stay up to date.',
 features:['Login with PBKDF2-hashed passwords, "remember me", and a 30-second lock after 5 failed attempts','Three roles (admin, staff, customer); admins manage user accounts','Record forms for employees, products, categories and sales, with first / prev / next / last navigation, add, save, edit, delete and search','Database tables viewer with Datasheet and Design views','Salary query that works out social security (5%, capped at ฿750) and net pay, with a Make Table option','Stock query that works out remaining stock from sales and flags low-stock items','Salary report by department and stock report by category, which can be printed or saved as PDF','Customer shop with category filters, product photos, cart, shipping details and order status (pending, shipped, done, cancelled)','Seed data: 20 employees, 32 products, 4 categories'],
 role:'Designed the database and wrote the whole app in Java: the SQLite helper and repositories, 16 activities, 32 XML layouts, a navy-and-gold Material theme, and the report printer.',
 links:[]},
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

const TH={
'4her':{summary:'แอป Android ที่เขียนด้วย Java ใน Android Studio ให้ร้านเครื่องใช้ไฟฟ้าใช้เก็บข้อมูลพนักงาน สินค้า และยอดขายลง SQLite แถมมีหน้าร้านให้ลูกค้าสั่งของได้ในแอปเดียวกัน',
 stats:['หน้าจอ (Activity)','ไฟล์ layout','บรรทัด Java'],
 overview:'แอปนี้ใช้ได้สองฝั่ง พนักงานกับแอดมินใช้จัดการฐานข้อมูลของร้าน มีฟอร์มกรอกข้อมูล Query, Make Table และรายงานที่สั่งพิมพ์ได้ ส่วนลูกค้าเข้ามาสมัครสมาชิก เลือกของตามหมวด กดสั่งจากตะกร้า แล้วตามดูสถานะออเดอร์ ทุกออเดอร์ของลูกค้าจะถูกบันทึกเป็นยอดขายไปด้วย รายงานสต็อกกับยอดขายเลยตรงกับของจริงตลอด',
 features:['รหัสผ่านเก็บแบบเข้ารหัส PBKDF2 มีปุ่มจำการเข้าสู่ระบบ ใส่รหัสผิด 5 ครั้งจะโดนล็อก 30 วินาที','ผู้ใช้มี 3 แบบ คือ แอดมิน พนักงาน และลูกค้า แอดมินเพิ่มหรือแก้บัญชีคนอื่นได้','ฟอร์มข้อมูลพนักงาน สินค้า หมวดสินค้า และการขาย กดเลื่อนไปรายการแรก ก่อนหน้า ถัดไป สุดท้ายได้ พร้อมเพิ่ม บันทึก แก้ ลบ และค้นหา','เปิดดูตารางในฐานข้อมูลได้ทั้งแบบ Datasheet View และ Design View','Query เงินเดือน คิดประกันสังคม 5% (ไม่เกิน ฿750) กับเงินเดือนสุทธิให้ แล้วกด Make Table เก็บเป็นตารางใหม่ได้','Query Stock คิดของคงเหลือจากยอดขาย และบอกว่าตัวไหนใกล้หมด','รายงานเงินเดือนแยกแผนก กับรายงานสต็อกแยกหมวด สั่งพิมพ์หรือเซฟเป็น PDF ได้','หน้าร้านของลูกค้ามีรูปสินค้า กรองตามหมวด ใส่ตะกร้า กรอกที่อยู่ส่ง และดูสถานะ (รอดำเนินการ ส่งแล้ว สำเร็จ ยกเลิก)','มีข้อมูลตัวอย่างใส่ไว้ให้ลองเล่น พนักงาน 20 คน สินค้า 32 รายการ 4 หมวด'],
 role:'ออกแบบฐานข้อมูลและเขียนแอปเองทั้งหมดด้วย Java ตั้งแต่ส่วนที่คุยกับ SQLite, 16 หน้าจอ, 32 ไฟล์ layout, ธีมสีกรมท่าตัดทอง ไปจนถึงตัวพิมพ์รายงาน'},
lifeplus:{summary:'ระบบ ERP ของบริษัทผลิตยาและอาหารเสริม ใช้ร่วมกันหลายแผนก ตั้งแต่สูตร R&D การจัดซื้อ บรรจุภัณฑ์ สต็อก ไปจนถึงใบสั่งผลิต ข้อมูลเก็บใน PostgreSQL',
 stats:['บรรทัดโค้ด','โมดูล API','เวอร์ชัน'],
 overview:'ก่อนหน้านี้บริษัทใช้ฟอร์ม Excel หลายสิบไฟล์ (F-RD-001 ถึง F-RD-004, QP, Job Master) ส่งกันไปมา เลยย้ายทั้งหมดมาอยู่ในเว็บเดียว ทุกแผนกเห็นข้อมูลชุดเดียวกัน แต่ตอนพิมพ์ออกมายังได้เอกสารหน้าตาเหมือนฟอร์มเดิมเป๊ะ คนทำงานไม่ต้องปรับตัวเยอะ',
 features:['ฟอร์มสูตร R&D (F-RD-002 / 002.1) กรอกแล้วเห็นต้นทุน กำไร และเรทราคาทันที','สารที่ขึ้นทะเบียนเป็นหลายตัว ระบบแตกออกเป็นส่วนผสมย่อยให้เอง','ค้นรหัสวัตถุดิบ อย. และรหัสอาหารเสริมได้ในระบบ','เอกสารจัดซื้อ PR / PO ใบเสนอราคา และตารางราคาที่แอดมินตั้งไว้','ตัวเลือกบรรจุภัณฑ์ การเตรียมบรรจุภัณฑ์ และสต็อกการ์ดของสินค้าสำเร็จรูป','ใบสั่งผลิต คำนวณวัตถุดิบ (MRP) และส่งงานต่อกันระหว่างแผนก','แก้อะไรไปย้อนดูประวัติได้ และทุกฟอร์มส่งออกเป็น Excel ได้','ล็อกอินแยกสิทธิ์ตามแผนก รันบน Render ด้วยโดเมนของบริษัทเอง'],
 role:'ออกแบบโครงสร้างข้อมูล เขียนหลังบ้านด้วย FastAPI และหน้าบ้านเป็น JavaScript ล้วนราว 6,000 บรรทัด แล้วไล่จับคู่ทุกช่องใน Excel ต้นฉบับกับฐานข้อมูล จดไว้ใน FORM_MAPPING.md'},
dsis:{summary:'เว็บสำหรับตรวจเรือ ประเมินความเสียหายของโครงสร้าง และลองจำลองการทรงตัวของเรือ คำนวณตามสูตรวิศวกรรม วาดกราฟเองด้วย SVG และมี test ครอบสูตรทั้งหมด',
 stats:['โมดูล','test ที่ผ่าน','ไลบรารีภายนอก'],
 overview:'เปิดไฟล์ index.html ก็ใช้ได้เลย ไม่ต้องต่อเน็ต ผู้ตรวจกดบนรูปตัวเรือเพื่อบันทึกจุดที่เจอปัญหา ระบบให้คะแนนความเสียหาย และคำนวณการทรงตัวด้วยสูตรสถาปัตยกรรมเรือแบบง่าย ทำไว้เพื่อการเรียนรู้ ไม่ได้ใช้แทนวิศวกรตัวจริง',
 features:['โมดูล 1 กรอกข้อมูลเรือ ระบบเช็กว่ากรอกถูกไหม รวมถึงเช็กเลข IMO ด้วย','กดบนรูปเรือเพื่อปักจุด ระบบบอกให้ว่าอยู่ช่วงท้าย กลางลำ (0.4L) หรือหัวเรือ และอยู่เหนือหรือใต้แนวน้ำ','ตารางจุดที่พบ ค้นหา กรอง เรียงได้ 6 แบบ เปิดดูรายละเอียด และถามก่อนลบ','โมดูล 2 คิดว่าแผ่นเหล็กบางลงเท่าไร (Δt, Δt%, t_min) ให้คะแนน ระดับความรุนแรง และคำแนะนำ','โมดูล 3 คิดปริมาตร ระวางขับน้ำ KB, BM, GM และกราฟ GZ แล้วเทียบกับเกณฑ์ IMO','หน้าแดชบอร์ดมีกราฟโดนัท แท่ง และเส้น ที่เขียนเองทั้งหมดด้วย SVG','กดสร้างรายงานการตรวจ แล้วพิมพ์หรือเซฟเป็น PDF ได้','ส่วนคำนวณทดสอบด้วย Node.js ผ่านครบ 28 ข้อ'],
 role:'อ่านหาสูตรเอง แยกโค้ดคำนวณออกจากหน้าจอจะได้เขียน test ได้ และวาดกราฟกับไดอะแกรมทุกอันเอง'},
hospital:{summary:'ระบบจัดซื้อของโรงพยาบาล เก็บข้อมูลบริษัท เวชภัณฑ์ หน่วยนับ และใบสั่งซื้อ ค้นหาหรือแก้ย้อนหลังได้ แล้วออกเอกสาร Word ตามแบบราชการ',
 stats:['ฟอร์ม Word','เวอร์ชัน','บรรทัดโค้ด'],
 overview:'ทำให้เจ้าหน้าที่พัสดุที่เคยต้องกรอกฟอร์มจัดซื้อเองทุกใบ ตอนนี้แค่เลือกเวชภัณฑ์ ระบบดึงราคา หน่วย และ Spec มาให้ รวมยอดให้ แล้วออกเป็นไฟล์ Word พร้อมพิมพ์ทุกฟอร์ม',
 features:['เพิ่ม แก้ ค้นหา เปิดหรือปิดใช้งาน บริษัท เวชภัณฑ์ และหน่วยนับได้','ใบสั่งซื้อใส่ได้ตั้งแต่ 1 ถึง 6 รายการขึ้นไป ราคา หน่วย Spec ขึ้นมาเอง','ฟอร์ม Word ราชการ 8 แบบ ฟอนต์ TH Sarabun New 16 pt เช่น ใบสั่งซื้อรายการเดียว หลายรายการ แบบกำหนด Spec และใบตรวจรับ','ย้อนกลับไปสร้างหรือแก้ใบสั่งซื้อเก่าได้','สั่งพิมพ์ทุกฟอร์มทีเดียวได้','deploy ใหม่บน Render แล้วข้อมูลใน PostgreSQL ไม่หาย','ถ้าไม่มีเน็ตก็รันบน Windows ด้วย SQLite ได้'],
 role:'แก้ไปทั้งหมด 4 เวอร์ชันตามที่คนใช้จริงบอก และจัดหน้า Word ให้ตรงกับแบบฟอร์มราชการทีละบรรทัด'},
laundry:{summary:'โปรแกรมขายหน้าร้านสำหรับร้านซักรีด คิดเงินตามชิ้นหรือตามกิโล มีแพ็คเกจเติมเงิน ทำบัญชีรายรับรายจ่าย และพิมพ์ใบเสร็จภาษาไทยออกเครื่องพิมพ์ความร้อนได้เลย',
 stats:['หน้าจอ','ใบเสร็จความร้อน','ใช้ออฟไลน์ได้'],
 overview:'ใช้ได้ทั้งบนแท็บเล็ต มือถือ และคอม ไม่ต้องมีเซิร์ฟเวอร์ ติดตั้งเป็นแอปได้และใช้ตอนเน็ตหลุดก็ยังได้ ปัญหาใหญ่คือเครื่องพิมพ์ใบเสร็จมักพิมพ์ภาษาไทยเพี้ยน เลยวาดใบเสร็จเป็นรูปกว้าง 576 จุด แล้วส่งเป็นคำสั่ง ESC/POS แบบรูปภาพแทน ภาษาไทยออกมาถูกต้องบน Xprinter',
 features:['หน้าแรกเห็นรายรับวันนี้เทียบเมื่อวาน กราฟ 7 วัน และลูกค้าที่แพ็คเกจใกล้หมด','หน้ารับผ้า แตะการ์ดเพื่อคิดตามชิ้น หรือใส่น้ำหนักเป็นกิโล ถ้าลูกค้ามีแพ็คเกจระบบหักให้เอง','ค้นหาลูกค้าจากชื่อ เบอร์ หรือ LINE ID และกรองตามสถานะแพ็คเกจ','ตั้งแพ็คเกจได้เอง เห็นราคาเฉลี่ยต่อชิ้นและจำนวนลูกค้าที่ใช้อยู่','ใบเสร็จย้อนหลัง กรองตามวัน พิมพ์ซ้ำ (80 / 58 มม.) ยกเลิก หรือลบ','บัญชีรายรับรายจ่าย กราฟรายเดือน แยกหมวด ส่งออก CSV และพิมพ์สรุปขนาด A4','งานที่ต้องระวังต้องใส่ PIN แอดมินก่อน และล็อกเองเมื่อไม่มีคนใช้','พิมพ์ได้หลายทาง ทั้งผ่านเบราว์เซอร์ USB Bluetooth LE หรือแอป RawBT ตัดกระดาษเอง เปิดลิ้นชักเงิน และพิมพ์หลายสำเนา','ใช้หลายเครื่องพร้อมกันได้ ข้อมูลซิงก์ผ่าน Firebase Realtime Database'],
 role:'ออกแบบหน้าตาและการใช้งานใหม่ทั้งหมดจากระบบเดิม และเขียนตัววาดใบเสร็จกับส่วนสั่งเครื่องพิมพ์เองด้วย JavaScript'},
smartfarm:{summary:'คุมฟาร์มจากมือถือ เปิดไฟปลูกต้นไม้ สั่งปั๊มน้ำ ดูค่าเซนเซอร์ ตั้งกฎอัตโนมัติ และดูภาพสดจากกล้อง ESP32-CAM ใช้ได้ทั้งบนเว็บ ติดตั้งแบบ PWA หรือลงเป็นแอป Android',
 stats:['หน้าจอ','build เอง','ประวัติเซนเซอร์'],
 overview:'ตัวแอปเป็นเว็บธรรมดาที่คุยกับบอร์ด ESP32 ใน Wi-Fi บ้านตรง ๆ พอ push โค้ดขึ้น main แล้ว GitHub Actions จะ build แอป Android ตัวใหม่ให้ และมีขั้นตอนเตรียมไว้สำหรับลง Google Play ด้วย',
 features:['ดูอุณหภูมิ ความชื้นในอากาศ และความชื้นในดินแบบสด','รายการอุปกรณ์ ค้นหาและกรองได้ มีสวิตช์เปิดปิดรีเลย์','ไฟปลูกต้นไม้ตั้งให้เปิดตามเวลา ตามแสง หรือกดเองก็ได้','ปั๊มน้ำมีเกจความชื้นดิน และปรับได้ว่าแห้งแค่ไหนถึงจะรดน้ำ','ตั้งกฎอัตโนมัติจากเวลา ความชื้นดิน แสงน้อย หรืออากาศร้อน','กล้อง ESP32-CAM ดูภาพสด ถ่ายรูป เปิดแฟลช ปรับความละเอียด ถ่ายไทม์แลปส์ และมีแกลเลอรี','กราฟย้อนหลัง 24 ชั่วโมงและ 7 วัน','build APK ด้วย Capacitor ใน CI มีคู่มือเซ็นไฟล์ AAB ลง Google Play และหน้านโยบายความเป็นส่วนตัว'],
 role:'เขียนแอป เฟิร์มแวร์ของ ESP32-CAM และตั้ง CI ให้ build กับปล่อยแอป Android เอง'},
smartwater:{summary:'ระบบรดน้ำต้นไม้ด้วย ESP32 วัดความชื้นในดิน ดินแห้งเกินที่ตั้งไว้ก็รดน้ำเอง จะกดสั่งปั๊มเองก็ได้ และดูทุกอย่างผ่านเว็บ',
 stats:['บอร์ด ↔ คลาวด์','โหมดตามเกณฑ์'],
 overview:'บอร์ด ESP32 ส่งค่าความชื้นขึ้นไปที่ FastAPI แล้วคอยถามว่ามีคำสั่งใหม่ไหม ทำแบบนี้เลยสั่งปั๊มจากที่ไหนก็ได้ โดยไม่ต้องไปเปิดพอร์ตที่เราเตอร์บ้าน',
 features:['ความชื้นดินเป็นเปอร์เซ็นต์ พร้อมค่าดิบและสถานะว่าเซนเซอร์ยังปกติไหม','โหมดอัตโนมัติ ความชื้นต่ำกว่าเกณฑ์เมื่อไรก็รดน้ำ ปรับเกณฑ์ได้','กดเปิดปิดปั๊มเองได้ ทุกคำสั่งมีเลขกำกับกันบอร์ดทำซ้ำ','บอร์ดต้องส่งคีย์ใน header X-Device-Key ถึงจะคุยกับเซิร์ฟเวอร์ได้','เก็บเวลาที่บอร์ดติดต่อมาล่าสุด จะได้รู้ว่าบอร์ดหลุดไปหรือยัง','หน้าเว็บสำหรับดูและสั่งงานอยู่ใน API ตัวเดียวกัน'],
 role:'คิดวิธีให้บอร์ดกับเซิร์ฟเวอร์คุยกัน แล้วเขียนเองทั้งสองฝั่ง'},
plantcloud:{summary:'หลังบ้านบนคลาวด์สำหรับดูแลต้นไม้ บอร์ดส่งค่าความชื้นดิน รูปต้นไม้ และประวัติการเปิดปั๊มขึ้นมาเก็บใน PostgreSQL',
 stats:['API endpoint','ชนิดข้อมูล'],
 overview:'เป็น REST API ที่รับข้อมูลจากบอร์ดหลายตัว ทุกค่าที่ส่งมาจะเก็บพร้อมเวลา เลยย้อนดูประวัติหรือเอาไปทำกราฟได้ว่าต้นไม้เป็นยังไงบ้าง',
 features:['POST /api/soil รับความชื้นดินทั้งค่าดิบและเปอร์เซ็นต์ แยกตามบอร์ด','POST /api/image รับรูปต้นไม้ได้ถึง 6 MB แล้วประมวลผลด้วย NumPy กับ Pillow','เก็บประวัติว่าปั๊มเปิดเมื่อไร นานเท่าไร','มี endpoint ดึงค่าล่าสุดและค่าย้อนหลังไปทำแดชบอร์ด','มี endpoint ไว้เช็กว่าระบบยังทำงานปกติ','ในเครื่องใช้ SQLite บนคลาวด์ใช้ PostgreSQL'],
 role:'วางโครงข้อมูลและเขียน API ชุดนี้ ซึ่งงาน IoT ตัวหลัง ๆ ก็เอาไปใช้ต่อ'},
powerbox:{summary:'ส่งสัญญาณขอความช่วยเหลือโดยไม่ต้องใช้เน็ต ตัวส่ง ESP32 ส่ง SOS พร้อมพิกัด GPS ผ่าน LoRa ตัวรับโชว์บนจอ OLED แล้วส่งต่อขึ้นแผนที่บนเว็บ',
 stats:['วิทยุ LoRa','ชิ้นส่วนหลัก'],
 overview:'ทำไว้ใช้ในที่ที่ไม่มีสัญญาณมือถือ ตัวส่งไม่ต้องใช้เน็ตเลย มีแค่สถานีรับที่ต่อ Wi-Fi เพื่อเอาตำแหน่งไปปักบนแผนที่',
 features:['ตัวส่งใช้ ESP32 + RA-01 SX1278 + GPS NEO-6M','ตัวรับใช้ ESP32 + RA-01 + จอ OLED SSD1306 + Wi-Fi','ตัวรับส่งข้อความต่อผ่าน HTTPS ไปที่ /api/sos','หน้าเว็บทำด้วย Flask + SQLAlchemy ปักหมุดบนแผนที่ OpenStreetMap','จดวิธีต่อสายไว้ครบทุกขา','รันบน Render คู่กับ PostgreSQL ได้'],
 role:'ต่อวงจรและเขียนโค้ดวิทยุทั้งตัวส่งและตัวรับ แล้วทำหน้าเว็บแดชบอร์ดเอง'},
charger:{summary:'เครื่องชาร์จแบตตะกั่วกรด 12 V ใช้ Arduino Nano คุม มีผังวงจร ลาย PCB 2 ชั้น โมเดล 3D รายการอุปกรณ์ ตารางบัดกรี และวิธีประกอบให้ครบ',
 stats:['PCB','หน้าเอกสาร'],
 overview:'งานฮาร์ดแวร์ที่ทำเอกสารออกมาเป็นเว็บ ตำแหน่งอุปกรณ์และลายทองแดงบน PCB เขียนเป็นโค้ด Python (design.py) แล้วเอาไปสร้างหน้าผังวงจร หน้า layout และหน้า 3D ต่ออีกที',
 features:['เฟิร์มแวร์ Arduino ที่คุมการชาร์จ (SmartCharger.ino)','หน้าผังวงจรกับหน้า layout ของ PCB 2 ชั้น','หมุนดูบอร์ดแบบ 3D ได้','รายการอุปกรณ์และตารางบัดกรี','วิธีประกอบทีละขั้น','วิธีลองจำลองวงจรใน Proteus','แก้แบบ PCB ในโค้ดแล้วรัน python design.py หน้าเว็บก็อัปเดตตาม'],
 role:'ออกแบบวงจรและบอร์ดเอง และเขียนสคริปต์ที่ทำให้โค้ดกับเอกสารตรงกันอยู่เสมอ'},
schoolroom:{summary:'ระบบจองห้องเรียน เปิดมาก็เห็นว่าห้องไหนว่าง จองของวันนี้ได้เลย มีประวัติการจอง บัญชีผู้ใช้ และกันคนจองมั่ว',
 stats:['เวอร์ชัน','CDN ภายนอก'],
 overview:'เวอร์ชัน 2 รื้อเขียนใหม่จากตัวแรกเพื่อเอาไปใช้ในโรงเรียนจริง คิวจะเริ่มใหม่ทุกวันเอง ยกเลิกแล้วข้อมูลไม่หาย มีระบบล็อกอิน และไม่ต้องโหลดไฟล์จากเว็บข้างนอก',
 features:['จองได้เฉพาะวันนี้ ขึ้นวันใหม่คิวก็เริ่มใหม่เอง','ประวัติการจองทั้งหมดยังเก็บอยู่ใน SQLite','ยกเลิกได้แค่การจองของตัวเอง และแค่เปลี่ยนสถานะเป็นยกเลิก ไม่ได้ลบทิ้ง','ฐานข้อมูลมี unique index กันการจองห้องเดียวกันซ้ำ','กัน CSRF และเช็กห้อง เวลา กับข้อมูลที่กรอกก่อนบันทึก','สมัครสมาชิกและล็อกอินได้ ใช้เวลาไทย (Asia/Bangkok)','หน้าตาโทนขาว ใช้ได้ทุกขนาดจอ ไอคอน SVG อยู่ในโปรเจกต์เอง ไม่ใช้ Bootstrap หรือ CDN','ย้ายข้อมูลจากเวอร์ชันแรกมาให้อัตโนมัติ'],
 role:'เขียนเวอร์ชัน 2 ใหม่จากตัวแรก โดยเน้นเรื่องความปลอดภัยและไม่ให้ข้อมูลผิดเพี้ยน'},
stonecraft:{summary:'เว็บคาเฟ่สองภาษา มีเมนู แกลเลอรี จองโต๊ะ รีวิว ข้อมูลเวิร์กช็อป และหลังบ้านให้แอดมินจัดการเอง',
 stats:['ภาษา','หน้าแอดมิน'],
 overview:'ทำให้คาเฟ่ที่เปิดเวิร์กช็อปด้วย พนักงานแก้ทุกอย่างได้จากหลังบ้าน ส่วนลูกค้าสลับดูภาษาไทยหรืออังกฤษก็ได้',
 features:['มีหน้าแรก เกี่ยวกับร้าน เมนู แกลเลอรี จองโต๊ะ รีวิว และหน้าติดต่อพร้อมแผนที่','สลับไทย/อังกฤษได้ ข้อความแยกอยู่ในไฟล์แปล','ลูกค้าจองโต๊ะผ่านเว็บได้','หลังบ้านมีแดชบอร์ด จัดการเมนู อัปโหลดรูป ดูการจอง ดูรีวิว และล็อกอินแอดมิน','ข้อมูลเก็บถาวร มีสคริปต์ย้ายจาก SQLite ไป PostgreSQL','มีแอนิเมชัน และดูดีทั้งบนมือถือและคอม','รันอยู่บน Render'],
 role:'ทำเองทั้งหน้าบ้านและหลังบ้าน เจ้าของร้านจะได้แก้เว็บเองได้โดยไม่ต้องเขียนโค้ด'}
};
const UI={en:{details:'Details →',screens:'Screens',features:'Key features',role:'My role',tech:'Tech',onreq:'Source code available on request.',close:'Close',aria:'Details: '},
 th:{details:'ดูรายละเอียด →',screens:'หน้าจอ',features:'ฟีเจอร์หลัก',role:'ส่วนที่ลงมือทำ',tech:'เทคโนโลยี',onreq:'โค้ดยังไม่ได้เปิดสาธารณะ ถ้าอยากดูติดต่อมาได้',close:'ปิด',aria:'รายละเอียด: '}};
const LINK_TH={'Repository':'ซอร์สโค้ด','Earlier v2':'เวอร์ชัน 2 (เดิม)','Version 1':'เวอร์ชัน 1','Download APK':'ดาวน์โหลด APK'};
const SHOT_TH={'Welcome':'หน้าแรก','Home dashboard':'หน้าหลัก','Devices':'อุปกรณ์','Grow lights':'ไฟปลูกต้นไม้','Water pump':'ปั๊มน้ำ','Automation rules':'กฎอัตโนมัติ','ESP32-CAM camera':'กล้อง ESP32-CAM','Sensor history':'ข้อมูลเซนเซอร์','Login':'เข้าสู่ระบบ','Admin home':'หน้าแอดมิน','Customer shop':'หน้าร้านลูกค้า','Cart & checkout':'ตะกร้าสินค้า','Database tables':'ตารางฐานข้อมูล','Product form':'ฟอร์มสินค้า','Salary query':'Query เงินเดือน','Stock query':'Query Stock','Salary report':'รายงานเงินเดือน','Stock report':'รายงานสต็อก','Sign up':'สมัครสมาชิก'};
let lang='en';
const tr=(p,k)=>lang==='th'&&TH[p.id]&&TH[p.id][k]?TH[p.id][k]:p[k];
const sTitle=t=>lang==='th'&&SHOT_TH[t]?SHOT_TH[t]:t;

const shotsHTML=imgs=>imgs.map(m=>{const t=sTitle(m.title);return `<figure class="phone"><button data-src="${m.src}" data-title="${t}"><img src="${m.src}" alt="${t}" loading="lazy" width="540" height="1169"></button><figcaption>${t}</figcaption></figure>`}).join('');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const list=document.getElementById('project-list');
function renderList(){list.innerHTML=PROJECTS.map((p,i)=>`<article class="project${p.featured?' featured':''}" data-cat="${p.cat.join(' ')}" data-id="${p.id}" tabindex="0" role="button" aria-label="${UI[lang].aria}${esc(p.title)}"><div class="num">${String(i+1).padStart(2,'0')}</div><div>${p.images?`<div class="thumbs">${p.images.slice(1,5).map(m=>`<img src="${m.src}" alt="${esc(sTitle(m.title))}" loading="lazy" width="54" height="117">`).join('')}</div>`:''}<p class="tag">${p.tag}</p><h3>${esc(p.title)}</h3><p>${esc(tr(p,'summary'))}</p><div class="chips">${p.chips.map(c=>`<span>${esc(c)}</span>`).join('')}</div></div><span class="more">${UI[lang].details}</span></article>`).join('');}
renderList();

const dlg=document.getElementById('detail'),body=document.getElementById('detail-body');
let openId=null;
function openProject(id){const p=PROJECTS.find(x=>x.id===id);if(!p)return;openId=id;const u=UI[lang],sl=tr(p,'stats'),stats=p.stats.map(([n,l],i)=>[n,lang==='th'&&TH[p.id]?sl[i]:l]);
 body.innerHTML=`<p class="tag">${p.tag}</p><h2 id="d-title">${esc(p.title)}</h2><div class="d-stats">${stats.map(([n,l])=>`<div><strong>${esc(n)}</strong><span>${esc(l)}</span></div>`).join('')}</div><p class="d-lead">${esc(tr(p,'overview'))}</p>${p.images?`<h4>${u.screens}</h4><div class="phones small">${shotsHTML(p.images)}</div>`:''}<h4>${u.features}</h4><ul>${tr(p,'features').map(f=>`<li>${esc(f)}</li>`).join('')}</ul><h4>${u.role}</h4><p>${esc(tr(p,'role'))}</p><h4>${u.tech}</h4><div class="chips">${p.chips.map(c=>`<span>${esc(c)}</span>`).join('')}</div>${p.links.length?'':`<p class="muted-note">${u.onreq}</p>`}<div class="actions d-links">${p.links.map(([t,u],i)=>`<a class="btn${i?'':' primary'}" href="${u}" target="_blank" rel="noreferrer">${esc(lang==='th'&&LINK_TH[t]?LINK_TH[t]:t)} ↗</a>`).join('')}</div>`;
 if(!dlg.open){dlg.showModal();dlg.scrollTop=0;}}
list.addEventListener('click',e=>{const a=e.target.closest('.project');if(a)openProject(a.dataset.id)});
list.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.project')){e.preventDefault();openProject(e.target.dataset.id)}});
dlg.querySelector('.close').addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});

function renderShots(){document.getElementById('phones').innerHTML=shotsHTML(SF_SHOTS);document.getElementById('phones-4her').innerHTML=shotsHTML(HE_SHOTS);}
renderShots();
document.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openProject(a.dataset.open)}));
const viewer=document.getElementById('viewer');
document.addEventListener('click',e=>{const b=e.target.closest('.phone button');if(!b)return;viewer.querySelector('img').src=b.dataset.src;viewer.querySelector('img').alt=b.dataset.title;viewer.querySelector('p').textContent=b.dataset.title;viewer.showModal();});
viewer.querySelector('.close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});
document.getElementById('year').textContent=new Date().getFullYear();
const buttons=document.querySelectorAll('[data-filter]');let filter='all';
function applyFilter(){document.querySelectorAll('.project').forEach(p=>p.classList.toggle('hidden',filter!=='all'&&!p.dataset.cat.split(' ').includes(filter)));}
buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;applyFilter();}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,easing:'ease-out',fill:'both'});observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.project,.skill-grid article,.stat-grid>div,.timeline li').forEach(el=>observer.observe(el));

// Language switch (TH / EN)
const META={en:{title:'Nannaphat Chalom | Portfolio',desc:document.querySelector('meta[name=description]').content},
 th:{title:'นันท์นภัส ฉลอม | ผลงาน',desc:'รวมผลงานของนันท์นภัส ฉลอม ทั้งระบบ ERP ระบบจัดซื้อโรงพยาบาล โปรแกรมร้านค้า แอป Android งาน IoT วิทยุ LoRa และบอร์ด PCB'}};
const i18nEls=[...document.querySelectorAll('[data-th]')];
i18nEls.forEach(el=>el.dataset.en=el.innerHTML);
function setLang(l){
 lang=l;
 document.documentElement.lang=l;
 i18nEls.forEach(el=>el.innerHTML=el.dataset[l]);
 document.title=META[l].title;document.querySelector('meta[name=description]').content=META[l].desc;
 document.getElementById('lang').dataset.active=l;
 renderList();applyFilter();renderShots();
 document.querySelectorAll('.project').forEach(el=>el.style.opacity='');
 if(dlg.open&&openId)openProject(openId);
 try{localStorage.setItem('lang',l)}catch(e){}
}
let saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
setLang(saved||(/^th\b/i.test(navigator.language||'')?'th':'en'));
document.getElementById('lang').addEventListener('click',()=>setLang(lang==='th'?'en':'th'));
