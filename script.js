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
'4her':{summary:'แอป Android แบบ native (Java, Android Studio) สำหรับร้านเครื่องใช้ไฟฟ้า มีฐานข้อมูล SQLite ของพนักงาน สินค้า ประเภทสินค้า และการขาย พร้อมหน้าร้านให้ลูกค้าสั่งซื้อผ่านตะกร้า',
 stats:['หน้าจอ (Activity)','ไฟล์ layout','บรรทัด Java'],
 overview:'แอปเดียวที่ใช้ได้สองฝั่ง ฝั่งพนักงานและแอดมินทำงานกับฐานข้อมูลร้าน มีฟอร์มบันทึกข้อมูล Query, Make Table และรายงานที่พิมพ์ได้ ส่วนลูกค้าสมัครสมาชิก เลือกสินค้าตามประเภท ชำระเงินจากตะกร้า และติดตามคำสั่งซื้อได้ ทุกคำสั่งซื้อจะถูกบันทึกลงตารางการขายด้วย รายงานสต็อกและยอดขายจึงเป็นปัจจุบันเสมอ',
 features:['ล็อกอินด้วยรหัสผ่านที่เข้ารหัสแบบ PBKDF2 มีปุ่มจดจำการเข้าสู่ระบบ และล็อก 30 วินาทีเมื่อใส่รหัสผิด 5 ครั้ง','ผู้ใช้ 3 บทบาท (แอดมิน พนักงาน ลูกค้า) แอดมินจัดการบัญชีผู้ใช้ได้','ฟอร์มข้อมูลพนักงาน สินค้า ประเภทสินค้า และการขาย เลื่อนดูระเบียนแรก/ก่อนหน้า/ถัดไป/สุดท้าย พร้อมเพิ่ม บันทึก แก้ไข ลบ และค้นหา','ดูตารางฐานข้อมูลแบบ Datasheet View และ Design View','Query เงินเดือน คำนวณประกันสังคม (5% สูงสุด ฿750) และเงินเดือนสุทธิ พร้อมปุ่ม Make Table','Query Stock คำนวณสินค้าคงเหลือจากยอดขาย และแจ้งสินค้าที่ใกล้หมด','รายงานเงินเดือนแยกตามแผนก และรายงานสต็อกแยกตามประเภท พิมพ์หรือบันทึกเป็น PDF ได้','หน้าร้านสำหรับลูกค้า กรองตามประเภท มีรูปสินค้า ตะกร้า ที่อยู่จัดส่ง และสถานะคำสั่งซื้อ (รอดำเนินการ จัดส่งแล้ว สำเร็จ ยกเลิก)','ข้อมูลตั้งต้น: พนักงาน 20 คน สินค้า 32 รายการ 4 ประเภท'],
 role:'ออกแบบฐานข้อมูลและเขียนแอปทั้งหมดด้วย Java ทั้งตัวจัดการ SQLite และ repository, 16 Activity, 32 XML layout, ธีม Material สีกรมท่า-ทอง และระบบพิมพ์รายงาน'},
lifeplus:{summary:'ระบบ ERP หลายแผนกสำหรับบริษัทผลิตยาและอาหารเสริม ครอบคลุมสูตร R&D การจัดซื้อ บรรจุภัณฑ์ สต็อก ใบสั่งผลิต และการส่งออกเอกสาร ใช้ฐานข้อมูล PostgreSQL',
 stats:['บรรทัดโค้ด','โมดูล API','เวอร์ชัน'],
 overview:'เดิมบริษัททำงานด้วยฟอร์ม Excel หลายสิบไฟล์ (F-RD-001 … F-RD-004, QP, Job Master) Life Plus ERP รวมฟอร์มเหล่านั้นเป็นเว็บระบบเดียว ทุกแผนกใช้ข้อมูลชุดเดียวกัน และยังส่งออกเอกสารหน้าตาเหมือนต้นฉบับทุกอย่าง',
 features:['ฟอร์มสูตร R&D (F-RD-002 / 002.1) คำนวณต้นทุน กำไร และเรทราคาแบบทันที','แตกส่วนผสมของสารที่ขึ้นทะเบียนเป็นหลายองค์ประกอบ','ค้นหารหัสวัตถุดิบ อย. และรหัสอาหารเสริมสำหรับข้อมูลทะเบียน','เอกสารจัดซื้อ (PR / PO) ใบเสนอราคา และการตั้งราคาโดยแอดมิน','ตัวเลือกบรรจุภัณฑ์ การเตรียมบรรจุภัณฑ์ และสต็อกการ์ดสินค้าสำเร็จรูป','ใบสั่งผลิต ระบบ MRP และการส่งต่องานระหว่างแผนก','บันทึกการแก้ไขและประวัติเวอร์ชันของข้อมูล ส่งออก Excel ได้ทุกฟอร์ม','ล็อกอินแยกสิทธิ์ deploy บน Render พร้อมโดเมนของตัวเอง'],
 role:'ออกแบบโครงสร้างข้อมูล เขียน backend ด้วย FastAPI และหน้าบ้าน JavaScript ล้วน 6,000 บรรทัด และจับคู่ทุกช่องของ Excel ต้นฉบับกับฐานข้อมูล (บันทึกไว้ใน FORM_MAPPING.md)'},
dsis:{summary:'ระบบตรวจสอบเรือ ประเมินความเสียหายของโครงสร้าง และจำลองการทรงตัวเบื้องต้น พร้อมการคำนวณทางวิศวกรรม กราฟ SVG ที่วาดเอง และการทดสอบอัตโนมัติ',
 stats:['โมดูล','test ที่ผ่าน','ไลบรารีภายนอก'],
 overview:'เว็บแอปหน้าเดียวที่ใช้งานออฟไลน์ได้ทั้งหมด แค่เปิด index.html ก็ตรวจเรือได้ บันทึกจุดที่พบบนภาพตัวเรือแบบโต้ตอบ ให้คะแนนความเสียหายของโครงสร้าง และจำลองการทรงตัวด้วยสูตรสถาปัตยกรรมเรืออย่างง่าย (เพื่อการศึกษา)',
 features:['โมดูล 1: ข้อมูลเรือ พร้อมตรวจสอบข้อมูลที่กรอกและตรวจเลข IMO','คลิกบนภาพตัวเรือ SVG เพื่อบันทึกจุดที่พบ ระบบบอกโซน (ท้าย / กลางลำ 0.4L / หัว) และบอกว่าอยู่เหนือหรือใต้แนวน้ำ','ตารางจุดที่พบ ค้นหา กรอง เรียงได้ 6 แบบ ดูรายละเอียด และยืนยันก่อนลบ','โมดูล 2: ความหนาแผ่นเหล็กที่ลดลง (Δt, Δt%, t_min) คะแนนความเสียหาย ระดับความรุนแรง และคำแนะนำ','โมดูล 3: ปริมาตร ระวางขับน้ำ KB, BM, GM และกราฟ GZ ตรวจกับเกณฑ์ IMO','แดชบอร์ด KPI กราฟโดนัท แท่ง และเส้น ที่เขียนเองด้วย SVG','สร้างรายงานการตรวจอัตโนมัติ พิมพ์หรือบันทึกเป็น PDF ได้','โมดูลคำนวณทดสอบด้วย Node.js: ผ่าน 28 ข้อ ไม่ผ่าน 0'],
 role:'ค้นคว้าสูตร แยกส่วนคำนวณออกจากหน้าจอเพื่อให้เขียน unit test ได้ และสร้างกราฟกับไดอะแกรมทุกชิ้นเอง'},
hospital:{summary:'ระบบจัดซื้อโรงพยาบาล จัดการบริษัท เวชภัณฑ์ หน่วยนับ ใบสั่งซื้อ ค้นหา แก้ไขย้อนหลัง และส่งออกเอกสาร Word ตามแบบราชการ',
 stats:['ฟอร์ม Word','เวอร์ชัน','บรรทัดโค้ด'],
 overview:'สร้างให้เจ้าหน้าที่พัสดุที่เคยต้องกรอกแบบฟอร์มจัดซื้อราชการด้วยมือ เมื่อเลือกเวชภัณฑ์ ระบบจะดึงราคา หน่วย และ Spec มาให้ คำนวณยอดรวม และสร้างทุกฟอร์มเป็นไฟล์ Word พร้อมพิมพ์',
 features:['จัดการบริษัท เวชภัณฑ์ และหน่วยนับ (เพิ่ม แก้ไข ค้นหา เปิด/ปิดใช้งาน)','ใบสั่งซื้อ 1–6 รายการขึ้นไป ดึงราคา หน่วย และ Spec อัตโนมัติ','ฟอร์ม Word ราชการ 8 แบบ ฟอนต์ TH Sarabun New 16 pt เช่น ใบสั่งซื้อรายการเดียว/หลายรายการ แบบกำหนด Spec ใบตรวจรับ','สร้างและแก้ไขใบสั่งซื้อย้อนหลังได้','พิมพ์ทุกฟอร์มพร้อมกันได้','ข้อมูลไม่หายเมื่อ deploy ใหม่บน Render PostgreSQL','ใช้ SQLite ในเครื่องได้เมื่อใช้งานออฟไลน์บน Windows'],
 role:'พัฒนา 4 เวอร์ชันร่วมกับผู้ใช้จริง และจัดหน้าเอกสาร Word ให้ตรงกับแบบราชการทีละบรรทัด'},
laundry:{summary:'ระบบ POS และจัดการร้านซักรีดแบบ PWA คิดเงินตามชิ้นหรือน้ำหนัก มีแพ็คเกจเติมเงิน บัญชีรายรับรายจ่าย และพิมพ์ใบเสร็จภาษาไทยออกเครื่องพิมพ์ความร้อนได้โดยตรง',
 stats:['หน้าจอ','ใบเสร็จความร้อน','ใช้ออฟไลน์ได้'],
 overview:'ใช้บนแท็บเล็ต มือถือ หรือคอมพิวเตอร์ได้โดยไม่ต้องมีเซิร์ฟเวอร์ ติดตั้งเป็นแอปและใช้ออฟไลน์ได้ ใบเสร็จถูกวาดเป็นภาพกว้าง 576 จุดแล้วส่งเป็นคำสั่ง ESC/POS raster จึงพิมพ์ภาษาไทยได้ถูกต้องบนเครื่อง Xprinter ทุกรุ่น',
 features:['หน้าหลัก: รายรับวันนี้เทียบเมื่อวาน กราฟ 7 วัน และลูกค้าที่แพ็คเกจใกล้หมด','หน้ารับผ้า: คิดเงินตามชิ้น (แตะการ์ด) หรือตามกิโลกรัม หักจากแพ็คเกจอัตโนมัติ','จัดการลูกค้า ค้นหาด้วยชื่อ เบอร์ หรือ LINE ID กรองตามสถานะแพ็คเกจ','แพ็คเกจ แสดงราคาเฉลี่ยต่อชิ้นและจำนวนลูกค้าที่ใช้อยู่','ใบเสร็จ: กรองตามวันที่ พิมพ์ซ้ำ (80 / 58 มม.) ยกเลิก และลบ','บัญชี: รายรับรายจ่าย กราฟรายเดือน แยกหมวดหมู่ ส่งออก CSV รายงานสรุป A4','รหัส PIN แอดมิน (เข้ารหัส) ป้องกันการแก้ไขสำคัญ และล็อกอัตโนมัติเมื่อไม่ได้ใช้','พิมพ์ผ่านเบราว์เซอร์ USB Bluetooth LE หรือ RawBT ตัดกระดาษอัตโนมัติ เปิดลิ้นชักเงิน พิมพ์หลายสำเนา','ซิงก์ข้อมูลหลายเครื่องผ่าน Firebase Realtime Database'],
 role:'ออกแบบ UX/UI ใหม่ทั้งหมดจากระบบเดิม และเขียนตัววาดใบเสร็จกับไดรเวอร์เครื่องพิมพ์ด้วย JavaScript ล้วน'},
smartfarm:{summary:'ควบคุมฟาร์มอัจฉริยะจากมือถือ ทั้งไฟปลูกต้นไม้ ปั๊มน้ำ เซนเซอร์ กฎอัตโนมัติ และกล้อง ESP32-CAM แบบสด ใช้ได้ทั้งเว็บแอป PWA และแอป Android (APK)',
 stats:['หน้าจอ','build อัตโนมัติ','ประวัติเซนเซอร์'],
 overview:'เว็บแอปแบบ static ที่คุยกับบอร์ด ESP32 ใน Wi-Fi บ้านโดยตรง ทุกครั้งที่ push ขึ้น main GitHub Actions จะ build แอป Android ใหม่ และมีขั้นตอนสำหรับปล่อยแอปบน Google Play',
 features:['อุณหภูมิ ความชื้นอากาศ และความชื้นดินแบบสด','รายการอุปกรณ์ ค้นหาและกรองได้ สวิตช์เปิด-ปิดรีเลย์','ไฟปลูกต้นไม้ ตั้งตามเวลา ตามแสง หรือสั่งเอง','ปั๊มน้ำพร้อมเกจความชื้นดิน ปรับเกณฑ์รดน้ำอัตโนมัติได้','กฎอัตโนมัติ: ตามเวลา ความชื้นดิน แสงน้อย อุณหภูมิสูง','ESP32-CAM: ภาพสด ถ่ายภาพ แฟลช ปรับความละเอียด ไทม์แลปส์ และแกลเลอรี','กราฟย้อนหลัง 24 ชั่วโมงและ 7 วัน','APK ผ่าน Capacitor + CI คู่มือเซ็นไฟล์ AAB สำหรับ Google Play และหน้านโยบายความเป็นส่วนตัว'],
 role:'เขียนแอป เฟิร์มแวร์ ESP32-CAM และ CI ที่ build และเผยแพร่แอป Android'},
smartwater:{summary:'ระบบรดน้ำอัจฉริยะด้วย ESP32 วัดความชื้นดิน รดน้ำอัตโนมัติตามเกณฑ์ สั่งปั๊มเองได้ และมีแดชบอร์ดบนคลาวด์',
 stats:['อุปกรณ์ ↔ คลาวด์','โหมดตามเกณฑ์'],
 overview:'ESP32 ส่งค่าความชื้นไปยังเซอร์วิส FastAPI และคอยถามคำสั่งจากเซิร์ฟเวอร์ จึงสั่งปั๊มได้จากทุกที่โดยไม่ต้องเปิดพอร์ตในเครือข่ายบ้าน',
 features:['ความชื้นดินเป็น % พร้อมค่าดิบและสถานะเซนเซอร์','โหมดอัตโนมัติรดน้ำเมื่อความชื้นต่ำกว่าเกณฑ์ที่ปรับได้','สั่งเปิด/ปิดปั๊มเอง มีหมายเลขคำสั่งกันการทำซ้ำ','ยืนยันตัวตนอุปกรณ์ด้วย header X-Device-Key','เวลาที่ติดต่อล่าสุด ใช้ตรวจว่าอุปกรณ์ออฟไลน์','แดชบอร์ดเว็บจาก API ตัวเดียวกัน'],
 role:'ออกแบบโปรโตคอลการสื่อสารระหว่างบอร์ดกับเซิร์ฟเวอร์ และเขียนทั้งสองฝั่ง'},
plantcloud:{summary:'ระบบหลังบ้านบนคลาวด์สำหรับดูแลต้นไม้ อุปกรณ์อัปโหลดค่าความชื้นดิน รูปต้นไม้ และเหตุการณ์ปั๊มน้ำ เก็บและวิเคราะห์ใน PostgreSQL',
 stats:['API endpoint','ชนิดข้อมูล'],
 overview:'REST API สำหรับโหนดเซนเซอร์หลายตัว เก็บค่าความชื้นดิน ภาพจากกล้อง และเหตุการณ์ปั๊มพร้อมเวลา เพื่อดูประวัติและทำกราฟของต้นไม้ได้',
 features:['POST /api/soil: ความชื้นดินค่าดิบและเปอร์เซ็นต์ แยกตามรหัสอุปกรณ์','POST /api/image: รูปต้นไม้ (สูงสุด 6 MB) ประมวลผลด้วย NumPy / Pillow','บันทึกและประวัติการทำงานของปั๊ม','endpoint ค่าล่าสุดและประวัติสำหรับแดชบอร์ด','endpoint ตรวจสุขภาพและสถานะระบบ','ใช้ SQLite ในเครื่องหรือ PostgreSQL บนคลาวด์ได้'],
 role:'สร้างโครงสร้างข้อมูลและ API ที่โปรเจกต์ IoT ถัดมานำไปใช้ต่อ'},
powerbox:{summary:'ระบบสื่อสารฉุกเฉินแบบไม่ใช้อินเทอร์เน็ต ตัวส่ง ESP32 ส่ง SOS พร้อมพิกัด GPS ผ่าน LoRa ตัวรับแสดงบนจอ OLED และส่งต่อขึ้นแผนที่บนแดชบอร์ด',
 stats:['วิทยุ LoRa','ส่วนประกอบ'],
 overview:'ออกแบบสำหรับพื้นที่ที่ไม่มีสัญญาณมือถือ ตัวส่งไม่ต้องใช้อินเทอร์เน็ตเลย มีเพียงสถานีรับที่ใช้ Wi-Fi เพื่อปักหมุด SOS บนแผนที่',
 features:['ตัวส่ง: ESP32 + RA-01 SX1278 + GPS NEO-6M','ตัวรับ: ESP32 + RA-01 + จอ OLED SSD1306 + Wi-Fi','ตัวรับส่งข้อความผ่าน HTTPS ไปที่ /api/sos','แดชบอร์ด Flask + SQLAlchemy พร้อมหมุดบน OpenStreetMap','เอกสารการต่อสายครบทุกขา','deploy บน Render พร้อม PostgreSQL ได้'],
 role:'ต่อวงจรและเขียนโปรแกรมวิทยุทั้งสองฝั่ง และสร้างแดชบอร์ดเว็บ'},
charger:{summary:'เครื่องชาร์จแบตเตอรี่ตะกั่วกรด 12 V แบบสแตนด์อโลนด้วย Arduino Nano พร้อมผังวงจร PCB 2 ชั้น มุมมอง 3D รายการอุปกรณ์ ตารางบัดกรี และคู่มือประกอบ',
 stats:['PCB','หน้าเอกสาร'],
 overview:'โปรเจกต์ฮาร์ดแวร์ที่ทำเอกสารเป็นเว็บไซต์ ตำแหน่งอุปกรณ์และลายวงจรบน PCB กำหนดด้วย Python (design.py) ซึ่งสร้างข้อมูลให้หน้าผังวงจร layout และ 3D แบบโต้ตอบ',
 features:['เฟิร์มแวร์ Arduino ควบคุมการชาร์จ (SmartCharger.ino)','หน้าผังวงจรและ layout PCB 2 ชั้น','มุมมองบอร์ด 3D แบบโต้ตอบ','รายการอุปกรณ์และตารางบัดกรี','คู่มือประกอบทีละขั้น','คู่มือจำลองใน Proteus','สร้าง PCB จากโค้ด: python design.py → pcb.json → ข้อมูลเว็บ'],
 role:'ออกแบบวงจรและบอร์ด และเขียนตัวสร้างข้อมูลที่ทำให้โค้ดกับเอกสารตรงกันเสมอ'},
schoolroom:{summary:'ระบบจองและดูสถานะห้องเรียน นักเรียนดูได้ว่าห้องไหนว่างและจองสำหรับวันนี้ มีประวัติ บัญชีผู้ใช้ และระบบป้องกันการใช้งานผิด',
 stats:['เวอร์ชัน','CDN ภายนอก'],
 overview:'เวอร์ชัน 2 เขียนใหม่จากเวอร์ชันแรกเพื่อใช้ในโรงเรียนจริง คิวรายวันเริ่มใหม่อัตโนมัติ ยกเลิกแบบไม่ลบข้อมูล มีล็อกอิน และหน้าจอที่ไม่พึ่งไฟล์ภายนอก',
 features:['จองห้องได้เฉพาะวันปัจจุบัน คิวเริ่มใหม่อัตโนมัติทุกวัน','เก็บประวัติการจองทั้งหมดใน SQLite','ยกเลิกได้เฉพาะการจองของตัวเอง เป็น soft cancel ไม่ลบข้อมูล','unique index ในฐานข้อมูลป้องกันการจองห้องซ้ำ','ป้องกัน CSRF และตรวจสอบห้อง เวลา และข้อมูลที่กรอก','สมัครสมาชิก / ล็อกอิน ใช้เวลา Asia/Bangkok','หน้าจอสีขาวรองรับทุกขนาดจอ ไอคอน SVG ในโปรเจกต์ ไม่ใช้ Bootstrap หรือ CDN','ย้ายข้อมูลจากฐานข้อมูล v1 อัตโนมัติ'],
 role:'เขียน v1 ใหม่เป็น v2 โดยเน้นความปลอดภัยและความถูกต้องของข้อมูล'},
stonecraft:{summary:'เว็บไซต์คาเฟ่สองภาษา มีเมนู แกลเลอรี จองโต๊ะ รีวิว ข้อมูลเวิร์กช็อป และระบบแอดมินเต็มรูปแบบ',
 stats:['ภาษา','หน้าแอดมิน'],
 overview:'เว็บไซต์ครบวงจรสำหรับคาเฟ่ที่มีเวิร์กช็อปด้วย พนักงานจัดการทุกอย่างจากแดชบอร์ดแอดมิน และลูกค้าสลับภาษาไทย/อังกฤษได้',
 features:['หน้า: หน้าแรก เกี่ยวกับ เมนู แกลเลอรี จองโต๊ะ รีวิว ติดต่อพร้อมแผนที่','สลับภาษาไทย/อังกฤษจากไฟล์แปล','จองโต๊ะออนไลน์','แอดมิน: แดชบอร์ด เมนู อัปโหลดแกลเลอรี การจอง รีวิว ล็อกอิน','เก็บข้อมูลถาวร พร้อมสคริปต์ย้ายจาก SQLite ไป PostgreSQL','แอนิเมชันและรองรับทุกขนาดจอ','deploy บน Render'],
 role:'สร้างทั้งระบบหน้าบ้านหลังบ้านและเครื่องมือแอดมิน ให้เจ้าของแก้ไขเว็บได้เองโดยไม่ต้องเขียนโค้ด'}
};
const UI={en:{details:'Details →',screens:'Screens',features:'Key features',role:'My role',tech:'Tech',onreq:'Source code available on request.',close:'Close',aria:'Details: '},
 th:{details:'ดูรายละเอียด →',screens:'หน้าจอ',features:'ฟีเจอร์หลัก',role:'สิ่งที่ทำ',tech:'เทคโนโลยี',onreq:'ขอดูซอร์สโค้ดได้',close:'ปิด',aria:'รายละเอียด: '}};
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
 th:{title:'Nannaphat Chalom | พอร์ตโฟลิโอ',desc:'พอร์ตโฟลิโอ Nannaphat Chalom — นักพัฒนาซอฟต์แวร์ AI/IoT และวิศวกรรม: ERP ระบบโรงพยาบาล POS แอป Android IoT LoRa และ PCB'}};
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
