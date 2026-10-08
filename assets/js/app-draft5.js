const PRODUCTS = [{"id": "pure-landfill", "series": "pure", "seriesName": "AGROZYME PURE", "name": "Landfill", "thai": "สำหรับบ่อฝังกลบขยะ", "meta": "500 กรัม • ผลิตภัณฑ์ทำความสะอาด / ขจัดกลิ่น • ทนความร้อน", "desc": "พัฒนาสูตรโดยเน้นสารอินทรีย์ น้ำมัน และสารประกอบที่ย่อยสลายได้ยากกว่า เพื่อเป็นทางเลือกสำหรับลดแอมโมเนียและจัดการกลิ่นจากบ่อฝังกลบขยะ", "benefits": ["ลดค่า BOD และ COD ในน้ำเสีย", "ลดกลิ่นจากน้ำเสีย", "ลดไขมัน น้ำมัน และไขมันข้น (FOG)", "ลดปริมาณตะกอนน้ำเสีย", "ลดแอมโมเนียในน้ำเสีย", "ช่วยการเริ่มเดินระบบและการฟื้นตัวจาก shock loading"]}, {"id": "pure-compost", "series": "pure", "seriesName": "AGROZYME PURE", "name": "Compost", "thai": "สำหรับกระบวนการทำปุ๋ยหมัก", "meta": "500 กรัม • ผลิตภัณฑ์ทำความสะอาด / ขจัดกลิ่น • ทนความร้อน", "desc": "สูตรสำหรับกระบวนการทำปุ๋ยหมัก โดยเน้นการลดแอมโมเนียและจัดการกลิ่นจากสารอินทรีย์ที่ย่อยสลายได้ยาก", "benefits": ["กำจัดแอมโมเนียในปุ๋ยหมักและอากาศ", "ส่งเสริมกระบวนการทำปุ๋ยหมักที่ถูกสุขลักษณะ", "ลดกลิ่น", "ป้องกันมลพิษต่อสิ่งแวดล้อมรอบฟาร์ม"]}, {"id": "pure-prawn", "series": "pure", "seriesName": "AGROZYME PURE", "name": "Prawn Farm", "thai": "สำหรับฟาร์มกุ้ง", "meta": "500 กรัม • ผลิตภัณฑ์ทำความสะอาดน้ำ • ทนความร้อน", "desc": "ส่วนผสมสารชีวภาพความเข้มข้นสูงสำหรับย่อยสลายสารอินทรีย์ แอมโมเนีย และสารประกอบอื่นในน้ำฟาร์มกุ้ง", "benefits": ["กำจัดแอมโมเนียในน้ำฟาร์มกุ้ง", "กำจัดไนไตรต์ในน้ำฟาร์มกุ้ง", "ไม่เป็นอันตรายต่อกุ้งที่เลี้ยง", "ส่งเสริมคุณภาพน้ำที่เหมาะสมต่อการเจริญเติบโตของกุ้ง", "ลดกลิ่นจากน้ำเสีย", "ลดปริมาณตะกอนน้ำเสีย", "ไม่ก่อให้เกิดสารตกค้าง"]}, {"id": "pure-wastewater", "series": "pure", "seriesName": "AGROZYME PURE", "name": "Wastewater", "thai": "สำหรับการบำบัดน้ำเสีย", "meta": "500 กรัม • ผลิตภัณฑ์ทำความสะอาดน้ำ • ทนความร้อน", "desc": "สูตรจากธรรมชาติ 100% ที่ไม่เป็นพิษ ช่วยให้น้ำเสียใสขึ้น ลด FOG ควบคุมตะกอน และจัดการกลิ่น พร้อมย่อยสลายสารอินทรีย์และแอมโมเนียในน้ำเสียผสม", "benefits": ["ลดค่า BOD และ COD ในน้ำเสีย", "ลดกลิ่นจากน้ำเสีย", "ลดไขมัน น้ำมัน และไขมันข้น (FOG)", "ลดปริมาณตะกอนน้ำเสีย", "ลดแอมโมเนียในน้ำเสีย", "ช่วยการเริ่มเดินระบบและการฟื้นตัวจาก shock loading", "ไม่ก่อให้เกิดสารตกค้าง"]}, {"id": "pure-farm-waste", "series": "pure", "seriesName": "AGROZYME PURE", "name": "Farm Waste", "thai": "สำหรับของเสียจากฟาร์ม", "meta": "500 กรัม • ผลิตภัณฑ์ทำความสะอาดฟาร์มอเนกประสงค์ • ทนความร้อน", "desc": "ผลิตภัณฑ์ทางเลือกสำหรับลดแอมโมเนียและจัดการกลิ่นในฟาร์ม โดยเน้นการย่อยสารอินทรีย์และของเสียที่ย่อยสลายได้ยาก", "benefits": ["กำจัดแอมโมเนียในอากาศและน้ำ", "ไม่เป็นอันตรายต่อสัตว์ที่เลี้ยง", "ส่งเสริมสภาพแวดล้อมฟาร์มที่ถูกสุขลักษณะ", "ลดกลิ่นจากน้ำเสีย", "ลดปริมาณตะกอนน้ำเสีย", "ป้องกันการแพร่กระจายของโรค", "ป้องกันมลพิษต่อสิ่งแวดล้อมรอบฟาร์ม", "ไม่ก่อให้เกิดสารตกค้าง"]}, {"id": "test-strip", "series": "test", "seriesName": "AGROZYME TEST STRIP", "name": "Multi-Test 5-in-1", "thai": "แถบทดสอบน้ำแบบ 5-in-1", "meta": "ตรวจแอมโมเนีย • ไนไตรต์ • ความเค็ม • pH • แบคทีเรีย", "desc": "แถบทดสอบแบบจุ่มสำหรับน้ำในฟาร์มกุ้งหรือฟาร์มปลา ตรวจตัวชี้วัดหลัก 5 รายการในแถบเดียว", "benefits": ["ตรวจน้ำในฟาร์ม 5 รายการในแถบเดียว", "แม่นยำและใช้งานง่าย", "แสดงผลการทดสอบอย่างรวดเร็ว", "ประหยัดค่าใช้จ่าย แรงงาน และเวลา"]}, {"id": "harvest-paddy", "series": "harvest", "seriesName": "AGROZYME HARVEST", "name": "Paddy", "thai": "สำหรับข้าว", "meta": "500 กรัม • สารปรับปรุงดิน • ทนความร้อน", "desc": "สูตรจากธรรมชาติ 100% ที่ไม่เป็นพิษ ออกแบบเพื่อยกระดับคุณภาพดิน เพิ่มความอุดมสมบูรณ์ของพื้นที่เพาะปลูก และลดการพึ่งพาปุ๋ยสังเคราะห์", "benefits": ["เพิ่มผลผลิตข้าว", "เติบโตและเก็บเกี่ยวได้เร็วขึ้น", "ฟื้นฟู ปรับปรุง และเพิ่มความอุดมสมบูรณ์ของพื้นที่เพาะปลูก", "ป้องกันโรคพืช", "ทดแทนและลดการใช้ปุ๋ยสังเคราะห์", "ปรับปรุงการยึดเกาะของรากและการคงสภาพของดิน", "ปลดปล่อยโพแทสเซียม (K) และไนโตรเจน (N) ที่ตกค้างในดิน", "ย่อยสลายอินทรียวัตถุให้เป็นฮิวมัส", "ลดการปลดปล่อย H+ ลงสู่ดิน", "ไม่จำเป็นต้องพักแปลงหลังการใช้"]}, {"id": "harvest-fruits-veg", "series": "harvest", "seriesName": "AGROZYME HARVEST", "name": "Fruits / Veg", "thai": "สำหรับไม้ผลและผัก", "meta": "500 กรัม • สารปรับปรุงดิน • ทนความร้อน", "desc": "สูตรจากธรรมชาติ 100% ที่ไม่เป็นพิษ สำหรับเพิ่มผลผลิตพืช ยกระดับคุณภาพดิน และเพิ่มความอุดมสมบูรณ์ของพื้นที่เพาะปลูก", "benefits": ["เพิ่มผลผลิตผลไม้และผักทุกชนิด", "เติบโตและเก็บเกี่ยวได้เร็วขึ้น", "ฟื้นฟู ปรับปรุง และเพิ่มความอุดมสมบูรณ์ของพื้นที่เพาะปลูก", "ป้องกันโรคพืช", "ทดแทนและลดการใช้ปุ๋ยสังเคราะห์", "ปรับปรุงการยึดเกาะของรากและการคงสภาพของดิน", "ปลดปล่อยโพแทสเซียม (K) และไนโตรเจน (N) ที่ตกค้างในดิน", "ย่อยสลายอินทรียวัตถุให้เป็นฮิวมัส", "ลดการปลดปล่อย H+ ลงสู่ดิน", "เหมาะสำหรับไม้ผลทุกชนิด"]}, {"id": "harvest-seed", "series": "harvest", "seriesName": "AGROZYME HARVEST", "name": "Seed Inoculation", "thai": "สำหรับการใส่เชื้อให้เมล็ดพันธุ์", "meta": "500 กรัม • สารปรับปรุงดิน • ทนความร้อน", "desc": "สูตรจากธรรมชาติ 100% ที่ไม่เป็นพิษ สำหรับเพิ่มความสมบูรณ์ของเมล็ด ส่งเสริมการเติบโต และช่วยให้เมล็ดต้านทานโรคพืชได้ดีขึ้น เหมาะกับถาดเพาะเมล็ดและต้นกล้า", "benefits": ["ป้องกันโรคพืช", "เพิ่มผลผลิตผลไม้และผักทุกชนิด", "เติบโตและเก็บเกี่ยวได้เร็วขึ้น", "เพิ่มอัตราการออกดอก", "เพิ่มศักยภาพการเจริญเติบโตสูงสุด", "เหมาะสำหรับเมล็ดพันธุ์ทุกชนิด"]}, {"id": "harvest-soil", "series": "harvest", "seriesName": "AGROZYME HARVEST", "name": "Soil Conditioner", "thai": "สำหรับปรับปรุงดิน", "meta": "500 กรัม • สารปรับปรุงดิน • ทนความร้อน", "desc": "สูตรจากธรรมชาติ 100% ที่ไม่เป็นพิษ ใช้กับปุ๋ยหมักและหน้าดินเพื่อเพิ่มศักยภาพของดิน และสามารถใช้ร่วมกับกระบวนการทำปุ๋ยหมัก", "benefits": ["เพิ่มผลผลิตพืช", "เติบโตและเก็บเกี่ยวได้เร็วขึ้น", "ฟื้นฟู ปรับปรุง และเพิ่มความอุดมสมบูรณ์ของพื้นที่เพาะปลูก", "ป้องกันโรคพืช", "ทดแทนและลดการใช้ปุ๋ยสังเคราะห์", "ปรับปรุงการยึดเกาะของรากและการคงสภาพของดิน", "ปลดปล่อยโพแทสเซียม (K) และไนโตรเจน (N) ที่ตกค้างในดิน", "ย่อยสลายอินทรียวัตถุให้เป็นฮิวมัส", "ลดการปลดปล่อย H+ ลงสู่ดิน"]}, {"id": "harvest-crops", "series": "harvest", "seriesName": "AGROZYME HARVEST", "name": "Plant / Crops", "thai": "สำหรับพืชและพืชผล", "meta": "500 กรัม • สารปรับปรุงดิน • ทนความร้อน", "desc": "สูตรจากธรรมชาติ 100% ที่ไม่เป็นพิษ สำหรับยกระดับคุณภาพดิน เพิ่มความอุดมสมบูรณ์ของพื้นที่เพาะปลูก และลดการพึ่งพาปุ๋ยสังเคราะห์", "benefits": ["เพิ่มผลผลิตพืช", "ฟื้นฟู ปรับปรุง และเพิ่มความอุดมสมบูรณ์ของพื้นที่เพาะปลูก", "ป้องกันโรคพืช", "ทดแทนและลดการใช้ปุ๋ยสังเคราะห์", "ปรับปรุงการยึดเกาะของรากและการคงสภาพของดิน", "ปลดปล่อยโพแทสเซียม (K) และไนโตรเจน (N) ที่ตกค้างในดิน", "ย่อยสลายอินทรียวัตถุให้เป็นฮิวมัส", "ลดการปลดปล่อย H+ ลงสู่ดิน", "เหมาะสำหรับพืชผลทุกชนิด", "ปรับปรุงคุณภาพผลไม้และพืชผล"]}, {"id": "harvest-liquid", "series": "harvest", "seriesName": "AGROZYME HARVEST", "name": "Liquid System", "thai": "สำหรับระบบไฮโดรโปนิกส์", "meta": "500 กรัม • เอนไซม์สำหรับพืช (ชนิดเหลว) • ทนความร้อน", "desc": "สูตรจากธรรมชาติ 100% ที่ไม่เป็นพิษ พัฒนาสูตรเฉพาะสำหรับการปลูกแบบไฮโดรโปนิกส์ และเหมาะสำหรับพืชที่มีมูลค่าสูง", "benefits": ["ป้องกันโรคพืช", "เพิ่มผลผลิตผลไม้และผักทุกชนิด", "เติบโตและเก็บเกี่ยวได้เร็วขึ้น", "เพิ่มอัตราการออกดอก", "ปรับปรุงคุณภาพผลไม้และพืชผล", "เหมาะสำหรับพืชทุกชนิด", "พัฒนาสูตรเฉพาะสำหรับไฮโดรโปนิกส์", "ไม่ก่อให้เกิดสารตกค้างหรือมลพิษในน้ำ"]}, {"id": "feed-poultry", "series": "feed", "seriesName": "AGROZYME FEED", "name": "Poultry", "thai": "สำหรับสัตว์ปีก / ไก่เนื้อ / ไก่ไข่", "meta": "1 กิโลกรัม • วัตถุเจือปนอาหารสัตว์ • ทนความร้อน • สำหรับสัตว์เท่านั้น", "desc": "ช่วยเพิ่มความสามารถในการย่อยสารอาหารและประสิทธิภาพการใช้ประโยชน์จากอาหาร เพื่อลดต้นทุนการดำเนินงานและใช้ทรัพยากรอย่างมีประสิทธิภาพขึ้น", "benefits": ["ส่งเสริมการผลิตเนื้อสัตว์ให้มีประสิทธิภาพมากขึ้น", "ประหยัดต้นทุนอาหารสัตว์ (ลดค่า FCR)", "สนับสนุนระบบย่อยอาหารที่แข็งแรง", "เติบโตเร็วขึ้นและมีคุณภาพดีขึ้น", "ลดอัตราการตายและอัตราการเจ็บป่วย", "เหมาะสำหรับไก่ไข่", "ใช้โดยผสมในอาหารและน้ำ"]}, {"id": "feed-swine", "series": "feed", "seriesName": "AGROZYME FEED", "name": "Pig / Swine", "thai": "สำหรับสุกร", "meta": "1 กิโลกรัม • วัตถุเจือปนอาหารสัตว์ • ทนความร้อน • สำหรับสัตว์เท่านั้น", "desc": "ช่วยเพิ่มความสามารถในการย่อยสารอาหารและประสิทธิภาพของอาหาร พร้อมสนับสนุนการใช้ทรัพยากรธรรมชาติได้ดีขึ้น", "benefits": ["ส่งเสริมการผลิตเนื้อสัตว์ให้มีประสิทธิภาพมากขึ้น", "ประหยัดต้นทุนอาหารสัตว์ (ลดค่า FCR)", "สนับสนุนระบบย่อยอาหารที่แข็งแรง", "เติบโตเร็วขึ้นและมีคุณภาพดีขึ้น", "ลดอัตราการตายและอัตราการเจ็บป่วย", "ใช้โดยผสมในอาหารและน้ำ"]}, {"id": "feed-fish", "series": "feed", "seriesName": "AGROZYME FEED", "name": "Fish", "thai": "สำหรับปลา", "meta": "1 กิโลกรัม • วัตถุเจือปนอาหารสัตว์ • ทนความร้อน • สำหรับสัตว์เท่านั้น", "desc": "ช่วยเพิ่มประสิทธิภาพของอาหารและการใช้ประโยชน์จากสารอาหาร พร้อมสนับสนุนระบบย่อยอาหารและลดความเสี่ยงของโรค", "benefits": ["เติบโตเร็วขึ้นและมีคุณภาพดีขึ้น", "ประหยัดต้นทุนอาหารสัตว์ (ลดค่า FCR)", "สนับสนุนระบบย่อยอาหารที่แข็งแรง", "เหมาะสำหรับลูกปลาวัยอ่อน (Fry) ขึ้นไป", "ลดอัตราการตายและอัตราการเจ็บป่วย", "ลดความเสี่ยงของโรค"]}, {"id": "feed-shrimp", "series": "feed", "seriesName": "AGROZYME FEED", "name": "Shrimp / Prawn", "thai": "สำหรับกุ้ง", "meta": "1 กิโลกรัม • วัตถุเจือปนอาหารสัตว์ • ทนความร้อน • สำหรับสัตว์เท่านั้น", "desc": "วัตถุเจือปนอาหารสัตว์สำหรับกุ้ง ช่วยเพิ่มประสิทธิภาพการใช้สารอาหาร สนับสนุนระบบย่อยอาหาร และใช้ทรัพยากรอาหารได้ดีขึ้น", "benefits": ["เติบโตเร็วขึ้นและมีคุณภาพดีขึ้น", "ประหยัดต้นทุนอาหารสัตว์ (ลดค่า FCR)", "สนับสนุนระบบย่อยอาหารที่แข็งแรง", "เหมาะสำหรับกุ้งระยะหลังตัวอ่อน (Post-Larvae) ขึ้นไป", "ลดอัตราการตายและอัตราการเจ็บป่วย", "ลดความเสี่ยงของโรค", "ใช้ได้กับโปรแกรม 90 วัน"]}, {"id": "feed-sheep", "series": "feed", "seriesName": "AGROZYME FEED", "name": "Sheep", "thai": "สำหรับแกะ / ลูกแกะ / แพะ", "meta": "1 กิโลกรัม • วัตถุเจือปนอาหารสัตว์ • ทนความร้อน • สำหรับสัตว์เท่านั้น", "desc": "ช่วยเพิ่มความสามารถในการย่อยสารอาหาร เพิ่มประสิทธิภาพของอาหาร และสนับสนุนการเติบโตของแกะ ลูกแกะ และแพะ", "benefits": ["ส่งเสริมการผลิตเนื้อสัตว์ให้มีประสิทธิภาพมากขึ้น", "ประหยัดต้นทุนอาหารสัตว์ (ลดค่า FCR)", "สนับสนุนระบบย่อยอาหารที่แข็งแรง", "เติบโตเร็วขึ้นและมีคุณภาพดีขึ้น", "ลดอัตราการตายและอัตราการเจ็บป่วย", "ลดความเสี่ยงของโรค", "ใช้โดยผสมในอาหารและน้ำ"]}, {"id": "feed-liquid", "series": "feed", "seriesName": "AGROZYME FEED", "name": "Liquid System", "thai": "สำหรับระบบอาหารสัตว์ชนิดเหลว", "meta": "1 กิโลกรัม • วัตถุเจือปนอาหารสัตว์ (ชนิดเหลว) • ทนความร้อน", "desc": "สูตรสำหรับระบบอาหารสัตว์ชนิดเหลว ช่วยเพิ่มประสิทธิภาพการย่อยและการใช้ประโยชน์จากอาหาร พร้อมลดต้นทุนการดำเนินงาน", "benefits": ["ส่งเสริมการผลิตเนื้อสัตว์ให้มีประสิทธิภาพมากขึ้น", "ประหยัดต้นทุนอาหารสัตว์ (ลดค่า FCR)", "สนับสนุนระบบย่อยอาหารที่แข็งแรง", "เติบโตเร็วขึ้นและมีคุณภาพดีขึ้น", "ลดอัตราการตายและอัตราการเจ็บป่วย", "ลดความเสี่ยงของโรค", "ใช้ผ่านอาหารสัตว์ชนิดเหลว"]}];

const grid = document.getElementById('productGrid');
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const filters = [...document.querySelectorAll('.filter-btn')];
const moreBtn = document.getElementById('productMore');
let activeSeries = 'all';
let mobileProductLimit = 999;

function cardTemplate(p){
  return `<article class="product-card reveal" data-series="${p.series}" data-id="${p.id}" tabindex="0" role="button" aria-label="ดูรายละเอียด ${p.seriesName} ${p.name}">
    <span class="product-arrow ui-arrow" aria-hidden="true"></span>
    <div class="product-visual"><img src="assets/images/products/${p.id}.webp" alt="แพ็กเกจ ${p.seriesName} ${p.name}" loading="lazy"></div>
    <div class="product-body"><span class="series-tag">${p.seriesName}</span><h3>${p.name}</h3><p>${p.thai}</p><span class="product-cta">ดูรายละเอียด <b class="ui-arrow" aria-hidden="true"></b></span></div>
  </article>`
}

function isMobileCatalog(){ return matchMedia('(max-width: 820px)').matches; }
function renderProducts(series=activeSeries){
  activeSeries = series;
  const data = series === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.series === series);
  const visible = (series === 'all' && isMobileCatalog()) ? data.slice(0, mobileProductLimit) : data;
  grid.innerHTML = visible.map(cardTemplate).join('');
  if(moreBtn){
    const canExpand = series === 'all' && isMobileCatalog() && visible.length < data.length;
    moreBtn.hidden = !canExpand;
    moreBtn.querySelector('span').textContent = canExpand ? `ดูสินค้าเพิ่มเติม (${data.length-visible.length})` : 'ดูสินค้าเพิ่มเติม';
  }
  bindProductCards();
  observeReveals();
}
function setFilter(series){
  activeSeries = series;
  mobileProductLimit = 999;
  filters.forEach(b => b.classList.toggle('active', b.dataset.series === series));
  renderProducts(series);
  if(location.hash === '#products') document.getElementById('products').scrollIntoView({behavior:'smooth',block:'start'});
}
filters.forEach(b => b.addEventListener('click', () => { setFilter(b.dataset.series); if(isMobileCatalog()) b.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'}); }));
if(moreBtn) moreBtn.addEventListener('click',()=>{mobileProductLimit += 6; renderProducts(activeSeries);});
let resizeTimer;
addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>renderProducts(activeSeries),180)},{passive:true});

function bindProductCards(){
  document.querySelectorAll('.product-card').forEach(card => {
    const open = () => openProduct(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if(e.key==='Enter' || e.key===' '){e.preventDefault();open();} });
  });
}
function openProduct(id){
  const p = PRODUCTS.find(x => x.id === id); if(!p) return;
  modalContent.innerHTML = `<div class="modal-product">
    <div class="modal-media"><img src="assets/images/products/${p.id}.webp" alt="แพ็กเกจ ${p.seriesName} ${p.name}"></div>
    <div class="modal-info"><span class="series-tag">${p.seriesName}</span><h2>${p.name}</h2><p class="thai-name">${p.thai}</p><div class="modal-meta">${p.meta}</div><p class="modal-desc">${p.desc}</p><h4>คุณสมบัติตามเอกสารต้นฉบับ</h4><ul class="benefit-list">${p.benefits.map(x=>`<li>${x}</li>`).join('')}</ul><p class="modal-disclaimer">ข้อมูลนี้ถอดและเรียบเรียงจากเอกสารผลิตภัณฑ์ที่ผู้ใช้ให้มา ควรตรวจสอบฉลาก คำแนะนำการใช้ และเอกสารล่าสุดก่อนนำไปใช้งานจริง</p></div>
  </div>`;
  modal.showModal(); document.body.classList.add('modal-open');
}
function closeDialog(d){ if(d.open)d.close(); document.body.classList.remove('modal-open'); }
document.querySelector('[data-close-modal]').addEventListener('click',()=>closeDialog(modal));
modal.addEventListener('click',e=>{ if(e.target===modal) closeDialog(modal); });

// solution cards jump to matching product group
document.querySelectorAll('.solution-card').forEach(card=>card.addEventListener('click',()=>{ setFilter(card.dataset.filter); document.getElementById('products').scrollIntoView({behavior:'smooth'}); }));
document.querySelectorAll('[data-problem-series]').forEach(btn=>btn.addEventListener('click',()=>{ setFilter(btn.dataset.problemSeries); document.getElementById('products').scrollIntoView({behavior:'smooth'}); }));
document.querySelectorAll('[data-footer-filter]').forEach(a=>a.addEventListener('click',()=>setFilter(a.dataset.footerFilter)));

// header and mobile nav
const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const progressBar = document.querySelector('.page-progress span');
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const observedSections = navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const onScroll = () => {
  header.classList.toggle('scrolled', scrollY > 20);
  const max = document.documentElement.scrollHeight - innerHeight;
  if(progressBar) progressBar.style.width = `${max > 0 ? Math.min(100,(scrollY/max)*100) : 0}%`;
  const y = scrollY + 180;
  let current = observedSections[0]?.id;
  observedSections.forEach(sec=>{ if(sec.offsetTop <= y) current = sec.id; });
  navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
}; onScroll(); addEventListener('scroll',onScroll,{passive:true});
menuBtn.addEventListener('click',()=>{ const open=menuBtn.getAttribute('aria-expanded')==='true'; menuBtn.setAttribute('aria-expanded',String(!open)); mobileMenu.hidden=open; document.body.classList.toggle('menu-open',!open); });
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.hidden=true;menuBtn.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape' && !mobileMenu.hidden){mobileMenu.hidden=true;menuBtn.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}});

// consultation helper
const consultModal = document.getElementById('consultModal');
document.querySelectorAll('[data-open-consult]').forEach(btn=>btn.addEventListener('click',()=>{consultModal.showModal();document.body.classList.add('modal-open')}));
document.querySelector('[data-close-consult]').addEventListener('click',()=>closeDialog(consultModal));
consultModal.addEventListener('click',e=>{if(e.target===consultModal)closeDialog(consultModal)});
document.getElementById('consultForm').addEventListener('submit',async e=>{
  e.preventDefault(); const f=new FormData(e.currentTarget);
  const text=`ขอคำปรึกษา THAI AGROZYME
ชื่อ/บริษัท: ${f.get('name')||'-'}
พื้นที่ใช้งาน: ${f.get('industry')}
ปัญหา/เป้าหมาย: ${f.get('problem')||'-'}`;
  try{await navigator.clipboard.writeText(text);document.getElementById('formStatus').textContent='คัดลอกข้อความแล้ว — นำไปวางใน LINE / อีเมล / ช่องทางติดต่อของบริษัทได้ทันที';}
  catch{document.getElementById('formStatus').textContent=text;}
});

function observeReveals(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));return;}
  const obs=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}

document.querySelectorAll('.solution-card,.process-grid article,.fact-strip,.intro-grid,.section-head,.problem-shell,.sustainability-layout,.family-nav').forEach(el=>el.classList.add('reveal'));
renderProducts(); observeReveals();
