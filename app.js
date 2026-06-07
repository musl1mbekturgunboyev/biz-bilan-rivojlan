// RIVOJLAN — To'liq qayta yozilgan app.js
// Supabase: https://gdetkmyijagbkvddexhr.supabase.co

const SURL = 'https://gdetkmyijagbkvddexhr.supabase.co';
const SKEY = 'sb_publishable_Qz2JNG6qn27LRXtVe5_wMg_ncz6osEh';
let db;

// ---- TILLAR ----
const TXT = [
  { ls:"Biz bilan rivojlan", ah:"Xush kelibsiz!", ap:"Ingliz tilini o'rganishni boshlang",
    le:"Email", lp:"Parol", bi:"Kirish", s1:"Hali ro'yxatdan o'tmaganmisiz?", s1l:"Ro'yxatdan o'tish",
    fn:"Ism", ln:"Familya", re:"Email", rp:"Parol", br:"Ro'yxatdan o'tish",
    s2:"Akkauntingiz bormi?", s2l:"Kirish", bo:"Chiqish",
    hh:"Salom", hp:"Bugungi darsni boshlang!", hpts:"Ball", hrk:"Reyting", hw:"So'z", hst:"Kun",
    tb:"Bo'limlar", tr:"Reyting", tp:"Profil", ta:"Tahlil", tf:"Fikr",
    stb:"5 ta o'quv bo'limi", bk:"Orqaga",
    tlu:"Barcha darslarni tugating", tlo:"Bo'lim imtihoni (80%)", tld:"Imtihon topshirildi ✓",
    ud:"Tugatildi", ul:"Qulflangan", uo:"Kirish",
    rU:"Foydalanuvchi", rP:"Ball",
    al1:"Bu oy ball", al2:"So'zlar", al3:"Testlar", cht:"Oylik progress",
    rph:"Oylik hisobot", rpp:"Har oy Telegramga yuboriladi", rpbt:"Yuborish",
    tgh:"Telegram botga ulash", tgp:"Testlarni bot orqali topshiring", tgbt:"Botga o'tish",
    spts:"Ball", sw:"So'zlar", srk:"Reyting", sst:"Streak",
    fc:"Ushbu sayt Muslimbek Turg'unboyev tomonidan tayyorlandi",
    e1:"Barcha maydonlarni to'ldiring!", e2:"Bu email allaqachon ro'yxatdan o'tgan!", e3:"Email yoki parol noto'g'ri!",
    wl:"so'z", wt:"Testni boshlash",
    qp:"Tabriklaymiz! Test o'tdi ✓", qf:"Test o'tmadi. Qayta urinib ko'ring",
    qn:"Keyingi dars ochildi!", qu:"Keyingi bo'lim ochildi! 🎉",
    qr:"Qayta urinish", qc:"Davom etish",
    fbt:"Fikr bildiring", fbn:"Ismingiz", fbm:"Xabaringiz", fbs:"Yuborish",
    fbk:"Rahmat! Fikringiz qabul qilindi ✓", fbe:"Xabar yozing!",
    mn:["Yan","Fev","Mar","Apr","May","Iyn"] },
  { ls:"Развивайся с нами", ah:"Добро пожаловать!", ap:"Начните изучать английский",
    le:"Email", lp:"Пароль", bi:"Войти", s1:"Нет аккаунта?", s1l:"Регистрация",
    fn:"Имя", ln:"Фамилия", re:"Email", rp:"Пароль", br:"Зарегистрироваться",
    s2:"Есть аккаунт?", s2l:"Войти", bo:"Выйти",
    hh:"Привет", hp:"Начните урок!", hpts:"Баллы", hrk:"Рейтинг", hw:"Слова", hst:"Дни",
    tb:"Разделы", tr:"Рейтинг", tp:"Профиль", ta:"Анализ", tf:"Отзыв",
    stb:"5 учебных разделов", bk:"Назад",
    tlu:"Завершите все уроки", tlo:"Тест раздела (80%)", tld:"Тест сдан ✓",
    ud:"Завершён", ul:"Заблокировано", uo:"Войти",
    rU:"Пользователь", rP:"Баллы",
    al1:"Баллов за месяц", al2:"Слова", al3:"Тестов", cht:"Прогресс",
    rph:"Ежемесячный отчёт", rpp:"Каждый месяц в Telegram", rpbt:"Отправить",
    tgh:"Telegram бот", tgp:"Сдавайте тесты через бот", tgbt:"Перейти в бот",
    spts:"Баллы", sw:"Слова", srk:"Место", sst:"Streak",
    fc:"Подготовлено Muslimbek Turg'unboyev",
    e1:"Заполните все поля!", e2:"Email уже зарегистрирован!", e3:"Неверный email или пароль!",
    wl:"слов", wt:"Начать тест",
    qp:"Поздравляем! Тест пройден ✓", qf:"Тест не пройден. Попробуйте ещё раз",
    qn:"Следующий урок открыт!", qu:"Следующий раздел открыт! 🎉",
    qr:"Повторить", qc:"Продолжить",
    fbt:"Оставить отзыв", fbn:"Ваше имя", fbm:"Ваше сообщение", fbs:"Отправить",
    fbk:"Спасибо! Отзыв принят ✓", fbe:"Напишите сообщение!",
    mn:["Янв","Фев","Мар","Апр","Май","Июн"] },
  { ls:"Grow with us", ah:"Welcome!", ap:"Start learning English today",
    le:"Email", lp:"Password", bi:"Sign In", s1:"No account?", s1l:"Register",
    fn:"First Name", ln:"Last Name", re:"Email", rp:"Password", br:"Create Account",
    s2:"Have account?", s2l:"Sign In", bo:"Sign Out",
    hh:"Hello", hp:"Start today's lesson!", hpts:"Points", hrk:"Rank", hw:"Words", hst:"Days",
    tb:"Levels", tr:"Leaderboard", tp:"Profile", ta:"Analysis", tf:"Feedback",
    stb:"5 learning levels", bk:"Back",
    tlu:"Complete all units first", tlo:"Level exam (80%)", tld:"Exam passed ✓",
    ud:"Done", ul:"Locked", uo:"Enter",
    rU:"User", rP:"Points",
    al1:"Points this month", al2:"Words", al3:"Tests", cht:"Monthly progress",
    rph:"Monthly Report", rpp:"Auto-sent to Telegram", rpbt:"Send",
    tgh:"Connect Telegram", tgp:"Submit tests via bot", tgbt:"Open Bot",
    spts:"Points", sw:"Words", srk:"Rank", sst:"Streak",
    fc:"Prepared by Muslimbek Turg'unboyev",
    e1:"Fill all fields!", e2:"Email already registered!", e3:"Wrong email or password!",
    wl:"words", wt:"Start Test",
    qp:"Congratulations! Test passed ✓", qf:"Test failed. Try again",
    qn:"Next unit unlocked!", qu:"Next level unlocked! 🎉",
    qr:"Retry", qc:"Continue",
    fbt:"Leave Feedback", fbn:"Your name", fbm:"Your message", fbs:"Send",
    fbk:"Thank you! Feedback received ✓", fbe:"Please write a message!",
    mn:["Jan","Feb","Mar","Apr","May","Jun"] }
];

// ---- SO'ZLAR ----
const TR = {
  afraid:"qo'rqmoq",agree:"rozi bo'lmoq",angry:"g'azablangan",arrive:"kelmoq",attack:"hujum qilmoq",
  bottom:"pastki qism",clever:"aqlli",cruel:"shafqatsiz",finally:"nihoyat",hide:"yashirmoq",
  hunt:"ov qilmoq",lot:"ko'p",middle:"o'rta",moment:"lahza",pleased:"xursand",
  promise:"va'da",reply:"javob bermoq",safe:"xavfsiz",trick:"aldamchi",well:"yaxshi",
  adventure:"sarguzasht",approach:"yaqinlashmoq",carefully:"ehtiyotkorlik bilan",chemical:"kimyoviy",
  create:"yaratmoq",evil:"yovuz",experiment:"tajriba",kill:"o'ldirmoq",laboratory:"laboratoriya",
  laugh:"kulmoq",loud:"baland ovozda",nervous:"asabiy",noise:"shovqin",project:"loyiha",
  scare:"qo'rqitmoq",secret:"sir",shout:"baqirmoq",smell:"hid",terrible:"dahshatli",worse:"yomonroq",
  alien:"begona",among:"orasida",chart:"jadval",cloud:"bulut",comprehend:"tushunmoq",
  describe:"tasvirlamoq",ever:"hech qachon",fail:"muvaffaqiyatsiz",friendly:"do'stona",
  grade:"daraja",instead:"o'rniga",library:"kutubxona",planet:"sayyora",report:"hisobot",
  several:"bir nechta",solve:"yechmoq",suddenly:"to'satdan",suppose:"taxmin qilmoq",
  universe:"koinot",view:"ko'rinish",appropriate:"mos",avoid:"qochmoq",behave:"o'zini tutmoq",
  calm:"sokin",concern:"tashvish",content:"kontent",expect:"kutmoq",frequently:"tez-tez",
  habit:"odat",instruct:"o'rgatmoq",issue:"masala",none:"hech biri",patient:"sabr-toqatli",
  positive:"ijobiy",punish:"jazolamoq",represent:"vakil bo'lmoq",shake:"silkitmoq",
  spread:"tarqalmoq",stroll:"sayr qilmoq",village:"qishloq",aware:"xabardor",badly:"yomon",
  belong:"tegishli bo'lmoq",continue:"davom ettirmoq",error:"xato",experience:"tajriba",
  field:"maydon",hurt:"og'ritmoq",judgment:"hukm",likely:"ehtimol",normal:"oddiy",
  rare:"kamyob",relax:"dam olmoq",request:"so'rov",reside:"yashamoq",result:"natija",
  roll:"o'rash",since:"dan beri",visible:"ko'rinadigan",wild:"yovvoyi",advantage:"afzallik",
  cause:"sabab",choice:"tanlov",community:"jamoa",dead:"o'lik",distance:"masofa",
  escape:"qochmoq",face:"yuz",follow:"ergashmoq",fright:"qo'rquv",ghost:"arvoh",
  individual:"individual",pet:"uy hayvoni",reach:"yetib bormoq",return:"qaytmoq",
  survive:"omon qolmoq",upset:"xafa",voice:"ovoz",weather:"ob-havo",wise:"dono",
  allow:"ruxsat bermoq",announce:"e'lon qilmoq",beside:"yonida",challenge:"qiyinchilik",
  claim:"da'vo qilmoq",condition:"holat",contribute:"hissa qo'shmoq",difference:"farq",
  divide:"bo'lmoq",expert:"mutaxassis",famous:"mashhur",force:"kuch",harm:"zarar",
  lay:"yotqizmoq",peace:"tinchlik",prince:"shahzoda",protect:"himoya qilmoq",sense:"his",
  sudden:"to'satdan",therefore:"shuning uchun",accept:"qabul qilmoq",arrange:"tartiblamoq",
  attend:"qatnashmoq",balance:"muvozanat",contrast:"qarama-qarshi",encourage:"rag'batlantirmoq",
  familiar:"tanish",grab:"ushlamoq",hang:"osilib turmoq",huge:"ulkan",necessary:"zarur",
  pattern:"naqsh",propose:"taklif qilmoq",purpose:"maqsad",release:"ozod qilmoq",
  require:"talab qilmoq",single:"yagona",success:"muvaffaqiyat",tear:"yirtmoq",theory:"nazariya",
  against:"qarshi",beach:"plyaj",damage:"zarar",discover:"kashf etmoq",emotion:"his-tuyg'u",
  fix:"tuzatmoq",frank:"ochiq",identify:"aniqlash",island:"orol",ocean:"okean",
  perhaps:"ehtimol",pleasant:"yoqimli",prevent:"oldini olmoq",rock:"tosh",save:"saqlamoq",
  step:"qadam",still:"hali ham",taste:"ta'm",throw:"otmoq",wave:"to'lqin",
  benefit:"foyda",certain:"aniq",chance:"imkoniyat",effect:"ta'sir",essential:"muhim",
  far:"uzoq",focus:"e'tibor",function:"vazifa",grass:"o't",guard:"qorovul",
  image:"rasm",immediate:"darhol",primary:"asosiy",proud:"mag'rur",remain:"qolmoq",
  rest:"dam olmoq",separate:"ajratmoq",site:"joy",tail:"dum",trouble:"muammo",
  anymore:"endi",asleep:"uxlab",berry:"rezavor",collect:"yig'moq",compete:"raqobatlashmoq",
  conversation:"suhbat",creature:"jonzot",decision:"qaror",either:"ham",forest:"o'rmon",
  ground:"yer",introduce:"tanishtirmoq",marry:"uylashmoq",prepare:"tayyorlamoq",sail:"suzmoq",
  serious:"jiddiy",spend:"sarflamoq",strange:"g'alati",truth:"haqiqat",wake:"uyg'onmoq",
  alone:"yolg'iz",apartment:"kvartira",article:"maqola",artist:"rassom",attitude:"munosabat",
  compare:"solishtirmoq",judge:"hukm qilmoq",magazine:"jurnal",material:"material",meal:"ovqat",
  method:"usul",neighbor:"qo'shni",professional:"professional",profit:"foyda",quality:"sifat",
  shape:"shakl",space:"fazo",stair:"zinapoya",symbol:"ramz",thin:"ingichka",
  blood:"qon",burn:"yonmoq",cell:"hujayra",contain:"o'z ichiga olmoq",correct:"to'g'ri",
  crop:"hosil",demand:"talab",equal:"teng",feed:"oziqlanmoq",hole:"teshik",
  increase:"oshmoq",lord:"janob",owe:"qarzdor bo'lmoq",position:"lavozim",raise:"ko'tarmoq",
  responsible:"mas'ul",sight:"ko'rinish",spot:"joy",structure:"tuzilma",whole:"butun",
  coach:"murabbiy",control:"nazorat",description:"tavsif",direct:"to'g'ridan-to'g'ri",
  exam:"imtihon",example:"misol",limit:"cheklov",local:"mahalliy",magical:"sehrli",
  mail:"pochta",novel:"roman",outline:"reja",poet:"shoir",print:"chop etmoq",
  scene:"sahna",sheet:"varaq",silly:"ahmoq",store:"do'kon",suffer:"azob chekmoq",technology:"texnologiya",
  across:"qarama-qarshi",breathe:"nafas olmoq",characteristic:"xususiyat",consume:"iste'mol qilmoq",
  excite:"hayajonlantirmoq",extreme:"haddan tashqari",fear:"qo'rquv",fortunate:"baxtli",
  happen:"ro'y bermoq",length:"uzunlik",mistake:"xato",observe:"kuzatmoq",opportunity:"imkoniyat",
  prize:"mukofot",race:"poyga",realize:"anglamoq",respond:"javob bermoq",risk:"xavf",wonder:"hayrat",yet:"hali",
  arise:"paydo bo'lmoq",benefactor:"homiy",blacksmith:"temirchi",charitable:"xayrli",chimney:"mo'ri",
  compensate:"tovon to'lamoq",encounter:"uchrashuv",exceed:"oshib ketmoq",forge:"temirchilik qilmoq",
  humble:"kamtar",iron:"temir",ladder:"narvon",modest:"kamtarona",occupy:"egallash",
  penny:"tanga",preach:"va'z bermoq",prosper:"farovonlashmoq",province:"viloyat",
  satisfaction:"qoniqish",sustain:"qo'llab-quvvatlamoq",aroma:"xushbo'y",beverage:"ichimlik",
  cluster:"to'plam",combine:"birlashtirmoq",condensed:"zichlashtirilgan",contemporary:"zamonaviy",
  cultivate:"o'stirmoq",divine:"ilohiy",humid:"nam",odor:"hid",palate:"ta'b",paradise:"jannat",
  plantation:"plantatsiya",rapid:"tez",rate:"tezlik",soothing:"tinchlantiruvchi",subtle:"nozik",
  texture:"to'qima",toxic:"zaharli",vary:"turlicha bo'lmoq",allot:"ajratmoq",appall:"dahshatga solmoq",
  cache:"zaxira",convenience:"qulaylik",dearth:"tanqislik",deliberate:"qasddan",dire:"og'ir",
  elapse:"o'tmoq",empathy:"hamdardlik",fanciful:"xayoliy",gripe:"shikoyat",grueling:"charchatuvchi",
  mundane:"oddiy",opt:"tanlash",outrage:"g'azab",paltry:"arzimaydigan",rectify:"tuzatmoq",
  resourceful:"tadbirkor",sustenance:"oziq-ovqat",tedious:"zerikarli",assert:"da'vo qilmoq",
  bachelor:"bakalavr",calculus:"hisob",celestial:"samoviy",cognitive:"kognitiv",collision:"to'qnashuv",
  competent:"malakali",diploma:"diplom",excel:"yaxshi natija ko'rsatmoq",geology:"geologiya",
  harness:"bog'lamoq",intellect:"aql",keen:"keskin",mythology:"mifologiya",physiology:"fiziologiya",
  radioactive:"radioaktiv",relativity:"nisbiylik",sociology:"sotsiologiya",theoretical:"nazariy"
};

// ---- KITOBLAR ----
const BOOKS = [
  { nm:"1-bo'lim", cl:"#5B4FCF", bg:"#EEF0FF", units:[
    {n:1,w:["afraid","agree","angry","arrive","attack","bottom","clever","cruel","finally","hide","hunt","lot","middle","moment","pleased","promise","reply","safe","trick","well"]},
    {n:2,w:["adventure","approach","carefully","chemical","create","evil","experiment","kill","laboratory","laugh","loud","nervous","noise","project","scare","secret","shout","smell","terrible","worse"]},
    {n:3,w:["alien","among","chart","cloud","comprehend","describe","ever","fail","friendly","grade","instead","library","planet","report","several","solve","suddenly","suppose","universe","view"]},
    {n:4,w:["appropriate","avoid","behave","calm","concern","content","expect","frequently","habit","instruct","issue","none","patient","positive","punish","represent","shake","spread","stroll","village"]},
    {n:5,w:["aware","badly","belong","continue","error","experience","field","hurt","judgment","likely","normal","rare","relax","request","reside","result","roll","since","visible","wild"]},
    {n:6,w:["advantage","cause","choice","community","dead","distance","escape","face","follow","fright","ghost","individual","pet","reach","return","survive","upset","voice","weather","wise"]},
    {n:7,w:["allow","announce","beside","challenge","claim","condition","contribute","difference","divide","expert","famous","force","harm","lay","peace","prince","protect","sense","sudden","therefore"]},
    {n:8,w:["accept","arrange","attend","balance","contrast","encourage","familiar","grab","hang","huge","necessary","pattern","propose","purpose","release","require","single","success","tear","theory"]},
    {n:9,w:["against","beach","damage","discover","emotion","fix","frank","identify","island","ocean","perhaps","pleasant","prevent","rock","save","step","still","taste","throw","wave"]},
    {n:10,w:["benefit","certain","chance","effect","essential","far","focus","function","grass","guard","image","immediate","primary","proud","remain","rest","separate","site","tail","trouble"]},
    {n:11,w:["anymore","asleep","berry","collect","compete","conversation","creature","decision","either","forest","ground","introduce","marry","prepare","sail","serious","spend","strange","truth","wake"]},
    {n:12,w:["alone","apartment","article","artist","attitude","compare","judge","magazine","material","meal","method","neighbor","professional","profit","quality","shape","space","stair","symbol","thin"]},
  ]},
  { nm:"2-bo'lim", cl:"#10B981", bg:"#E3F9F0", units:[
    {n:1,w:["blood","burn","cell","contain","correct","crop","demand","equal","feed","hole","increase","lord","owe","position","raise","responsible","sight","spot","structure","whole"]},
    {n:2,w:["coach","control","description","direct","exam","example","limit","local","magical","mail","novel","outline","poet","print","scene","sheet","silly","store","suffer","technology"]},
    {n:3,w:["across","breathe","characteristic","consume","excite","extreme","fear","fortunate","happen","length","mistake","observe","opportunity","prize","race","realize","respond","risk","wonder","yet"]},
    {n:4,w:["accept","arrange","attend","balance","contrast","encourage","familiar","grab","hang","huge","necessary","pattern","propose","purpose","release","require","single","success","tear","theory"]},
    {n:5,w:["against","beach","damage","discover","emotion","fix","frank","identify","island","ocean","perhaps","pleasant","prevent","rock","save","step","still","taste","throw","wave"]},
    {n:6,w:["benefit","certain","chance","effect","essential","far","focus","function","grass","guard","image","immediate","primary","proud","remain","rest","separate","site","tail","trouble"]},
    {n:7,w:["anymore","asleep","berry","collect","compete","conversation","creature","decision","either","forest","ground","introduce","marry","prepare","sail","serious","spend","strange","truth","wake"]},
    {n:8,w:["alone","apartment","article","artist","attitude","compare","judge","magazine","material","meal","method","neighbor","professional","profit","quality","shape","space","stair","symbol","thin"]},
  ]},
  { nm:"3-bo'lim", cl:"#E8A020", bg:"#FFF3D6", units:[
    {n:1,w:["arise","benefactor","blacksmith","charitable","chimney","compensate","encounter","exceed","forge","humble","iron","ladder","modest","occupy","penny","preach","prosper","province","satisfaction","sustain"]},
    {n:2,w:["aroma","beverage","cluster","combine","condensed","contemporary","cultivate","divine","humid","odor","palate","paradise","plantation","rapid","rate","soothing","subtle","texture","toxic","vary"]},
    {n:3,w:["allot","appall","cache","convenience","dearth","deliberate","dire","elapse","empathy","fanciful","gripe","grueling","mundane","opt","outrage","paltry","rectify","resourceful","sustenance","tedious"]},
    {n:4,w:["assert","bachelor","calculus","celestial","cognitive","collision","competent","diploma","excel","geology","harness","intellect","keen","mythology","physiology","radioactive","relativity","sociology","theoretical","advantage"]},
  ]},
  { nm:"4-bo'lim", cl:"#E8453C", bg:"#FFEEED", units:[
    {n:1,w:["afraid","agree","angry","arrive","attack","bottom","clever","cruel","finally","hide","hunt","lot","middle","moment","pleased","promise","reply","safe","trick","well"]},
    {n:2,w:["adventure","approach","carefully","chemical","create","evil","experiment","kill","laboratory","laugh","loud","nervous","noise","project","scare","secret","shout","smell","terrible","worse"]},
    {n:3,w:["alien","among","chart","cloud","comprehend","describe","ever","fail","friendly","grade","instead","library","planet","report","several","solve","suddenly","suppose","universe","view"]},
    {n:4,w:["appropriate","avoid","behave","calm","concern","content","expect","frequently","habit","instruct","issue","none","patient","positive","punish","represent","shake","spread","stroll","village"]},
  ]},
  { nm:"5-bo'lim", cl:"#8B5CF6", bg:"#F5F3FF", units:[
    {n:1,w:["aware","badly","belong","continue","error","experience","field","hurt","judgment","likely","normal","rare","relax","request","reside","result","roll","since","visible","wild"]},
    {n:2,w:["advantage","cause","choice","community","dead","distance","escape","face","follow","fright","ghost","individual","pet","reach","return","survive","upset","voice","weather","wise"]},
    {n:3,w:["allow","announce","beside","challenge","claim","condition","contribute","difference","divide","expert","famous","force","harm","lay","peace","prince","protect","sense","sudden","therefore"]},
    {n:4,w:["accept","arrange","attend","balance","contrast","encourage","familiar","grab","hang","huge","necessary","pattern","propose","purpose","release","require","single","success","tear","theory"]},
  ]},
];

// ---- STATE ----
let li=0, me=null, curBk=-1, curUnit=-1;
let qMode='unit', qQs=[], qIdx=0, qRight=0, qSel=false;
let starSel=5;

function tx() { return TXT[li]; }

// ---- TOAST ----
function toast(msg) {
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}

// ---- TIL ----
function setLang(i) {
  li=i;
  document.querySelectorAll('.lb').forEach((b,j)=>b.classList.toggle('on',j===i));
  applyLang();
  if(me) refreshHero();
}

function applyLang() {
  const L=tx();
  const m={
    'ls':L.ls,'ah2':L.ah,'ap':L.ap,'ll-e':L.le,'ll-p':L.lp,'b-in':L.bi,
    'sw1':L.s1,'sw1l':L.s1l,'ll-fn':L.fn,'ll-ln':L.ln,'ll-re':L.re,'ll-rp':L.rp,
    'b-reg':L.br,'sw2':L.s2,'sw2l':L.s2l,'btn-out':L.bo,
    'hl-pts':L.hpts,'hl-rk':L.hrk,'hl-w':L.hw,'hl-s':L.hst,
    'tl-b':L.tb,'tl-r':L.tr,'tl-p':L.tp,'tl-a':L.ta,'tl-f':L.tf,
    'st-b':L.stb,'rh-u':L.rU,'rh-p':L.rP,
    'al1':L.al1,'al2':L.al2,'al3':L.al3,'ch-t':L.cht,
    'rp-h':L.rph,'rp-p':L.rpp,'rp-bt':L.rpbt,
    'tg-h':L.tgh,'tg-p':L.tgp,'tg-bt':L.tgbt,
    'sl-pts':L.spts,'sl-w':L.sw,'sl-r':L.srk,'sl-s':L.sst,'ft-c':L.fc
  };
  Object.entries(m).forEach(([id,val])=>{const el=document.getElementById(id);if(el)el.textContent=val;});
}

// ---- UUID ----
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{
    const r=Math.random()*16|0; return (c=='x'?r:(r&0x3|0x8)).toString(16);
  });
}

// ---- PAROL ENCODE ----
function enc(s) {
  try { return btoa(unescape(encodeURIComponent(s))); }
  catch(e) { return btoa(s); }
}

// ---- AUTH ----
function showReg(){document.getElementById('f-in').classList.add('hidden');document.getElementById('f-reg').classList.remove('hidden');hideErr();}
function showLogin(){document.getElementById('f-reg').classList.add('hidden');document.getElementById('f-in').classList.remove('hidden');hideErr();}
function showErr(msg){const e=document.getElementById('err-b');e.textContent=msg;e.style.display='block';}
function hideErr(){document.getElementById('err-b').style.display='none';}

async function doReg() {
  const fn=document.getElementById('r-fn').value.trim();
  const ln=document.getElementById('r-ln').value.trim();
  const em=document.getElementById('r-e').value.trim().toLowerCase();
  const ps=document.getElementById('r-p').value;
  if(!fn||!ln||!em||!ps){showErr(tx().e1);return;}
  const btn=document.getElementById('b-reg');
  btn.textContent='...';btn.disabled=true;
  try {
    // Email mavjudmi?
    const {data:ex}=await db.from('users').select('id').eq('email',em).maybeSingle();
    if(ex){showErr(tx().e2);return;}
    const id=uuid();
    const {error}=await db.from('users').insert({
      id,email:em,first_name:fn,last_name:ln,
      password:enc(ps),pts:0,streak:1,
      year:new Date().getFullYear(),
      monthly:[0,0,0,0,0,0],prog:{}
    });
    if(error){showErr('DB xato: '+error.message);console.error(error);return;}
    me={id,fn,ln,em,pts:0,streak:1,year:new Date().getFullYear(),monthly:[0,0,0,0,0,0],prog:{}};
    localStorage.setItem('rv_s',JSON.stringify({em,ps}));
    startMain();
  } catch(e){showErr('Xatolik: '+e.message);console.error(e);}
  finally{btn.textContent=tx().br;btn.disabled=false;}
}

async function doLogin() {
  const em=document.getElementById('l-e').value.trim().toLowerCase();
  const ps=document.getElementById('l-p').value;
  if(!em||!ps){showErr(tx().e1);return;}
  const btn=document.getElementById('b-in');
  btn.textContent='...';btn.disabled=true;
  try {
    const {data:u,error}=await db.from('users').select('*').eq('email',em).maybeSingle();
    if(error||!u){showErr(tx().e3);return;}
    if(u.password!==enc(ps)){showErr(tx().e3);return;}
    me=userToMe(u);
    localStorage.setItem('rv_s',JSON.stringify({em,ps}));
    startMain();
  } catch(e){showErr('Xatolik: '+e.message);console.error(e);}
  finally{btn.textContent=tx().bi;btn.disabled=false;}
}

async function autoLogin() {
  const s=localStorage.getItem('rv_s');
  if(!s) return false;
  try {
    const {em,ps}=JSON.parse(s);
    const {data:u}=await db.from('users').select('*').eq('email',em).maybeSingle();
    if(!u||u.password!==enc(ps)) return false;
    me=userToMe(u);
    return true;
  } catch(e){return false;}
}

function userToMe(u) {
  let prog={}, monthly=[0,0,0,0,0,0];
  try { prog=typeof u.prog==='string'?JSON.parse(u.prog):(u.prog||{}); } catch(e){}
  try { monthly=typeof u.monthly==='string'?JSON.parse(u.monthly):(u.monthly||[0,0,0,0,0,0]); } catch(e){}
  return {
    id:u.id, fn:u.first_name, ln:u.last_name, em:u.email,
    pts:u.pts||0, streak:u.streak||1,
    year:u.year||new Date().getFullYear(),
    monthly, prog
  };
}

function logout() {
  localStorage.removeItem('rv_s');
  me=null;curBk=-1;curUnit=-1;
  document.getElementById('view-main').classList.add('hidden');
  document.getElementById('view-auth').classList.remove('hidden');
  document.getElementById('nav-u').classList.add('hidden');
  showLogin();
}

async function saveProgress() {
  if(!me) return;
  try {
    await db.from('users').update({
      pts:me.pts, streak:me.streak,
      monthly:me.monthly, prog:me.prog
    }).eq('id',me.id);
  } catch(e){console.error('save:',e);}
}

// ---- MAIN ----
function startMain() {
  document.getElementById('view-auth').classList.add('hidden');
  document.getElementById('view-main').classList.remove('hidden');
  document.getElementById('nav-u').classList.remove('hidden');
  const ini=((me.fn||'?')[0]+((me.ln||'')[0]||'')).toUpperCase();
  document.getElementById('nav-av').textContent=ini;
  document.getElementById('nav-nm').textContent=me.fn||'';
  refreshHero();
  renderBolimlar();
}

function refreshHero() {
  document.getElementById('hero-h').textContent=tx().hh+', '+me.fn+'!';
  document.getElementById('hero-p').textContent=tx().hp;
  document.getElementById('h-pts').textContent=me.pts||0;
  document.getElementById('h-words').textContent=countWords();
  document.getElementById('h-str').textContent=me.streak||1;
  document.getElementById('h-rank').textContent='...';
  db.from('users').select('pts').order('pts',{ascending:false}).then(({data})=>{
    if(!data) return;
    const rank=data.findIndex(u=>u.pts<=me.pts);
    const r=rank<0?data.length:rank;
    document.getElementById('h-rank').textContent='#'+(r+1);
  }).catch(()=>{document.getElementById('h-rank').textContent='#1';});
}

function countWords() {
  let w=0;
  BOOKS.forEach((b,bi)=>b.units.forEach((u,ui)=>{if(me.prog['b'+bi+'u'+ui+'t']==='done')w+=u.w.length;}));
  return w;
}

function isUnlocked(bi){return bi===0||(me.prog['b'+(bi-1)+'exam']==='done');}
function allDone(bi){return BOOKS[bi].units.every((_,ui)=>me.prog['b'+bi+'u'+ui+'t']==='done');}
function prevOk(bi,ui){return ui===0||(me.prog['b'+bi+'u'+(ui-1)+'t']==='done');}

// ---- BO'LIMLAR ----
function renderBolimlar() {
  const el=document.getElementById('bolim-list');
  if(!el){console.error('bolim-list yo\'q');return;}
  el.innerHTML='';
  BOOKS.forEach((b,bi)=>{
    const ul=isUnlocked(bi);
    const done=b.units.filter((_,ui)=>me.prog['b'+bi+'u'+ui+'t']==='done').length;
    const pct=Math.round(done/b.units.length*100);
    const exam=me.prog['b'+bi+'exam']==='done';
    const d=document.createElement('div');
    d.className='bk'+(ul?'':' locked');
    if(ul) d.onclick=()=>openBolim(bi);
    d.innerHTML=
      '<div class="bk-h">'+
        '<div class="bk-ic" style="background:'+b.bg+';color:'+b.cl+'">'+(bi+1)+'</div>'+
        '<div><div class="bk-nm">'+b.nm+(exam?' ✓':'')+'</div><div class="bk-d">4000 Essential Words</div></div>'+
      '</div>'+
      '<div class="bk-pb">'+
        '<div class="pb-bar"><div class="pb-fill" style="width:'+pct+'%;background:'+b.cl+'"></div></div>'+
        '<div class="bk-st"><span>'+done+'/'+b.units.length+' dars</span><span>'+pct+'%</span></div>'+
      '</div>'+
      (!ul?'<div class="bk-lk">🔒 '+tx().ul+'</div>':'');
    el.appendChild(d);
  });
}

function openBolim(bi) {
  curBk=bi;curUnit=-1;
  document.getElementById('bk-ti').textContent=BOOKS[bi].nm;
  document.getElementById('bk-su').textContent='4000 Essential English Words — Kitob '+(bi+1);
  document.getElementById('bk-back').textContent=tx().bk;
  renderTestBan(bi);
  renderDarslar(bi);
  showSub('pg-darslar');
}

function renderTestBan(bi) {
  const el=document.getElementById('test-ban-area');
  const done=allDone(bi);
  const exam=me.prog['b'+bi+'exam']==='done';
  const cnt=BOOKS[bi].units.filter((_,ui)=>me.prog['b'+bi+'u'+ui+'t']==='done').length;
  if(exam){
    el.innerHTML='<div class="test-ban done"><div class="tb-inf"><h3 style="color:#065F46">'+tx().tld+'</h3><p style="color:#10B981">Keyingi bo\'lim ochildi!</p></div><button class="tb-btn g">✓</button></div>';
  } else if(done){
    el.innerHTML='<div class="test-ban open"><div class="tb-inf"><h3 style="color:#3C3489">'+tx().tlo+'</h3><p style="color:#534AB7">80% dan yuqori javob bering</p></div><button class="tb-btn p" onclick="startExam('+bi+')">📝 Imtihon</button></div>';
  } else {
    el.innerHTML='<div class="test-ban locked"><div class="tb-inf"><h3 style="color:var(--text2)">'+tx().tlu+'</h3><p style="color:var(--text2)">'+cnt+'/'+BOOKS[bi].units.length+' dars tugallandi</p></div><button class="tb-btn gr" disabled>🔒</button></div>';
  }
}

function renderDarslar(bi) {
  const el=document.getElementById('dars-grid');
  if(!el) return;
  el.innerHTML='';
  BOOKS[bi].units.forEach((u,ui)=>{
    const done=me.prog['b'+bi+'u'+ui+'t']==='done';
    const prev=prevOk(bi,ui);
    const lk=!prev;
    const d=document.createElement('div');
    d.className='dc'+(lk?' dc-lk':done?' dc-done':'');
    if(!lk) d.onclick=()=>openDars(bi,ui);
    d.innerHTML=
      '<div class="dc-top">'+
        '<div class="dc-num">Dars '+u.n+(done?' <span class="dc-ck">✓</span>':'')+'</div>'+
        '<div class="dc-ws">'+u.w.slice(0,5).map(w=>'<span class="wp">'+w+'</span>').join('')+'<span class="wp">+'+(u.w.length-5)+'</span></div>'+
        '<div class="dc-cnt">'+u.w.length+' '+tx().wl+'</div>'+
      '</div>'+
      '<div class="dc-foot '+(done?'green':lk?'gray':'blue')+'">'+
        (done?'✓ '+tx().ud:lk?'🔒 '+tx().ul:'→ '+tx().uo)+
      '</div>';
    el.appendChild(d);
  });
}

function openDars(bi,ui) {
  curBk=bi;curUnit=ui;
  const u=BOOKS[bi].units[ui];
  document.getElementById('wd-back').textContent=tx().bk;
  document.getElementById('wd-ti').textContent='Dars '+u.n;
  document.getElementById('wd-su').textContent=BOOKS[bi].nm+' · '+u.w.length+' '+tx().wl;
  document.getElementById('wd-info').textContent=u.w.length+' '+tx().wl;
  document.getElementById('wd-ql').textContent=tx().wt;
  const g=document.getElementById('wd-grid');
  g.innerHTML=u.w.map(w=>
    '<div class="wc"><div class="wc-en">'+w+'</div><div class="wc-uz">'+(TR[w]||w)+'</div></div>'
  ).join('');
  showSub('pg-word');
}

// ---- QUIZ ----
function startUnitQuiz(){qMode='unit';buildQuiz(BOOKS[curBk].units[curUnit].w,10,70);}

function startExam(bi){
  curBk=bi;qMode='exam';
  const all=[];BOOKS[bi].units.forEach(u=>all.push(...u.w));
  buildQuiz(all,20,80);
}

function buildQuiz(words,count,pass) {
  const pool=[...words].sort(()=>Math.random()-0.5).slice(0,Math.min(count,words.length));
  const allUz=Object.entries(TR);
  qQs=pool.map(w=>{
    const correct=TR[w]||w;
    const wrong=allUz.filter(([k])=>k!==w&&TR[k]!==correct).sort(()=>Math.random()-0.5).slice(0,3).map(([,v])=>v);
    return{word:w,correct,opts:[correct,...wrong].sort(()=>Math.random()-0.5),pass};
  });
  qIdx=0;qRight=0;qSel=false;
  document.getElementById('qz-bk').textContent=tx().bk;
  document.getElementById('qz-ti').textContent=qMode==='unit'?'Dars '+BOOKS[curBk].units[curUnit].n+' — Test':BOOKS[curBk].nm+' — Imtihon';
  document.getElementById('qz-su').textContent=qMode==='unit'?"70% to'g'ri javob bering":"80% to'g'ri javob bering";
  showSub('pg-quiz');
  renderQ();
}

function renderQ() {
  if(qIdx>=qQs.length){showRes();return;}
  const q=qQs[qIdx];
  qSel=false;
  document.getElementById('quiz-body').innerHTML=
    '<div class="quiz-pg">'+
    '<div class="qz-prog-bar"><div class="qz-prog-fill" style="width:'+Math.round(qIdx/qQs.length*100)+'%"></div></div>'+
    '<div class="qz-card"><div class="qz-word">'+q.word+'</div><div class="qz-sub">Savol '+(qIdx+1)+' / '+qQs.length+'</div></div>'+
    '<div class="qz-q">O\'zbekcha tarjimasi qaysi?</div>'+
    '<div class="opts">'+
    q.opts.map((op,i)=>'<button class="opt" id="op'+i+'" onclick="pick('+i+',this)">'+op+'</button>').join('')+
    '</div>'+
    '<div class="qz-nav"><span class="qz-stat">'+qRight+" to'g'ri</span>"+
    '<button class="btn-nxt hidden" id="nxt" onclick="nextQ()">Keyingisi →</button></div></div>';
}

function pick(i,btn) {
  if(qSel) return;
  qSel=true;
  const q=qQs[qIdx];
  const ok=btn.textContent===q.correct;
  if(ok) qRight++;
  document.querySelectorAll('.opt').forEach((b,j)=>{
    b.disabled=true;
    if(j===i) b.classList.add(ok?'correct':'wrong');
    if(!ok&&b.textContent===q.correct) b.classList.add('show-c');
  });
  document.getElementById('nxt').classList.remove('hidden');
}

function nextQ(){qIdx++;renderQ();}

async function showRes() {
  const pass=qQs[0].pass;
  const pct=Math.round(qRight/qQs.length*100);
  const passed=pct>=pass;
  if(passed){
    if(qMode==='unit'){
      me.prog['b'+curBk+'u'+curUnit+'t']='done';
      me.pts+=qRight*5;
      me.monthly[me.monthly.length-1]+=qRight*5;
      toast(tx().qn);
    } else {
      me.prog['b'+curBk+'exam']='done';
      me.pts+=100;
      me.monthly[me.monthly.length-1]+=100;
      toast(tx().qu);
    }
    await saveProgress();
    refreshHero();
  }
  document.getElementById('quiz-body').innerHTML=
    '<div class="res-pg">'+
    '<div class="res-emoji">'+(passed?'🏆':'😔')+'</div>'+
    '<div class="res-pct" style="color:'+(passed?'var(--g)':'var(--r)')+'">'+pct+'%</div>'+
    '<div class="res-lbl">'+qRight+'/'+qQs.length+" to'g'ri</div>"+
    '<div class="res-bar-w"><div class="res-bar-f" style="width:'+pct+'%;background:'+(passed?'var(--g)':'var(--r)')+'"></div></div>'+
    '<div class="res-msg '+(passed?'pass':'fail')+'">'+(passed?tx().qp:tx().qf)+'</div>'+
    '<div class="res-btns">'+
    (!passed?'<button class="btn-r" onclick="retryQ()">'+tx().qr+'</button>':'')+
    '<button class="btn-r p" onclick="afterRes('+passed+')">'+tx().qc+'</button>'+
    '</div></div>';
}

function retryQ(){qIdx=0;qRight=0;qSel=false;qQs=[...qQs].sort(()=>Math.random()-0.5);renderQ();}
function afterRes(p){if(qMode==='unit'){backDarslar();renderDarslar(curBk);renderTestBan(curBk);}else{backHome();renderBolimlar();}}
function backFromQuiz(){qMode==='unit'?backDarslar():backHome();}

// ---- NAVIGATION ----
function showSub(id){
  ['pg-home','pg-darslar','pg-word','pg-quiz'].forEach(p=>document.getElementById(p).classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo(0,0);
}
function backHome(){curBk=-1;curUnit=-1;showSub('pg-home');renderBolimlar();}
function backDarslar(){curUnit=-1;showSub('pg-darslar');renderDarslar(curBk);renderTestBan(curBk);}

function goTab(n){
  ['b','r','p','a','f'].forEach(x=>{
    const pg=document.getElementById('pg-'+x);
    const tb=document.getElementById('tab-'+x);
    if(pg) pg.classList.add('hidden');
    if(tb) tb.classList.remove('on');
  });
  const pgN=document.getElementById('pg-'+n);
  const tbN=document.getElementById('tab-'+n);
  if(pgN) pgN.classList.remove('hidden');
  if(tbN) tbN.classList.add('on');
  window.scrollTo(0,0);
  if(n==='r') renderLB();
  if(n==='p') renderProf();
  if(n==='a') renderAnal();
  if(n==='f') renderFb();
}

// ---- REYTING ----
async function renderLB(){
  document.getElementById('lb-body').innerHTML='<div class="loading"><div class="spin"></div> Yuklanmoqda...</div>';
  try {
    const {data,error}=await db.from('users').select('id,first_name,last_name,email,pts,streak').order('pts',{ascending:false});
    if(error){console.error('LB:',error);return;}
    const max=(data&&data[0])?data[0].pts:1;
    let html='';
    (data||[]).slice(0,20).forEach((u,i)=>{
      const isMe=u.email===me.em||u.id===me.id;
      const ini=((u.first_name||'?')[0]+((u.last_name||'')[0]||'')).toUpperCase();
      const pct=Math.round((u.pts||0)/(max||1)*100);
      const rc=['','r1','r2','r3'][i+1]||'rn';
      html+='<div class="lb-row'+(isMe?' mine':'')+'">'+
        '<div><div class="rnk '+rc+'">'+(i+1)+'</div></div>'+
        '<div class="lb-u"><div class="sm-av">'+ini+'</div>'+
          '<div style="overflow:hidden"><div class="lb-nm">'+(u.first_name||'')+' '+(u.last_name||'')+(isMe?' 👈':'')+'</div>'+
          '<div class="lb-bar"><div class="lb-bf" style="width:'+pct+'%"></div></div></div></div>'+
        '<div class="lb-pt">'+(u.pts||0)+'</div>'+
        '<div class="lb-str">'+(u.streak||0)+'🔥</div>'+
      '</div>';
    });
    document.getElementById('lb-body').innerHTML=html||'<div style="padding:20px;text-align:center">Hali foydalanuvchilar yo\'q</div>';
  } catch(e){console.error('LB err:',e);}
}

// ---- PROFIL ----
async function renderProf(){
  const ini=((me.fn||'?')[0]+((me.ln||'')[0]||'')).toUpperCase();
  document.getElementById('p-av').textContent=ini;
  document.getElementById('p-nm').textContent=(me.fn||'')+' '+(me.ln||'');
  document.getElementById('p-em').textContent=me.em||'';
  document.getElementById('p-lv').textContent='⭐ Beginner';
  document.getElementById('p-jn').textContent='📅 '+(me.year||2024);
  document.getElementById('p-st').textContent='🔥 '+(me.streak||1)+' kun';
  document.getElementById('sp-pts').textContent=me.pts||0;
  document.getElementById('sp-w').textContent=countWords();
  document.getElementById('sp-s').textContent=me.streak||1;
  document.getElementById('sp-r').textContent='...';
  try {
    const {data}=await db.from('users').select('pts').order('pts',{ascending:false});
    const rank=(data||[]).findIndex(u=>u.pts<=(me.pts||0));
    document.getElementById('sp-r').textContent='#'+(rank<0?(data||[]).length:rank+1);
  } catch(e){document.getElementById('sp-r').textContent='#1';}
}

// ---- TAHLIL ----
function renderAnal(){
  const m=me.monthly||[0,0,0,0,0,0];
  const tests=Object.keys(me.prog||{}).filter(k=>k.endsWith('t')).length;
  document.getElementById('av1').textContent=m[m.length-1]||0;
  document.getElementById('av2').textContent=countWords();
  document.getElementById('av3').textContent=tests;
  const max=Math.max(...m)||1;
  document.getElementById('ch-bs').innerHTML=tx().mn.map((mn,i)=>{
    const h=Math.max(Math.round(m[i]/max*80),4);
    return '<div class="ch-it"><span class="ch-vl">'+m[i]+'</span>'+
      '<div class="ch-b'+(i===m.length-1?'':' dm')+'" style="height:'+h+'px"></div>'+
      '<span class="ch-lb">'+mn+'</span></div>';
  }).join('');
}

// ---- FEEDBACK ----
function renderFb(){
  const L=tx();
  document.getElementById('fb-area').innerHTML=
    '<div style="background:#fff;border:1.5px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow)">'+
    '<h3 style="font-size:16px;font-weight:700;margin-bottom:6px">'+L.fbt+'</h3>'+
    '<p style="font-size:13px;color:var(--text2);margin-bottom:16px">Sayt haqida fikringizni yozing!</p>'+
    '<div class="fld"><label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:5px">'+L.fbn+'</label>'+
    '<input type="text" id="fb-name" value="'+me.fn+' '+me.ln+'" style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:9px;font-size:14px;outline:none"></div>'+
    '<div class="fld" style="margin-top:10px"><label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:5px">'+L.fbm+'</label>'+
    '<textarea id="fb-msg" rows="4" placeholder="Fikringizni yozing..." style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:9px;font-size:14px;outline:none;resize:vertical;font-family:inherit"></textarea></div>'+
    '<div style="margin-top:10px"><label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:8px">Baholang:</label>'+
    '<div id="stars" style="display:flex;gap:8px;font-size:28px;cursor:pointer">'+
    [1,2,3,4,5].map(n=>'<span onclick="setStar('+n+')" id="star-'+n+'" style="opacity:'+(n<=starSel?'1':'0.3')+';transition:opacity 0.15s">⭐</span>').join('')+
    '</div></div>'+
    '<button onclick="sendFb()" style="margin-top:16px;width:100%;padding:11px;background:var(--p);color:#fff;border:none;border-radius:9px;font-size:14px;font-weight:700;cursor:pointer">'+L.fbs+'</button>'+
    '<div id="fb-ok" class="hidden" style="margin-top:12px;background:var(--g2);color:#065F46;padding:10px;border-radius:8px;text-align:center;font-weight:600">'+L.fbk+'</div>'+
    '<div id="fb-er" class="hidden" style="margin-top:8px;background:var(--rb);color:#991B1B;padding:8px;border-radius:7px;font-size:13px;text-align:center">'+L.fbe+'</div>'+
    '</div>'+
    '<div id="fb-list" style="margin-top:16px"></div>';
  loadFbs();
}

function setStar(n){
  starSel=n;
  [1,2,3,4,5].forEach(i=>document.getElementById('star-'+i).style.opacity=i<=n?'1':'0.3');
}

async function sendFb(){
  const name=document.getElementById('fb-name').value.trim();
  const msg=document.getElementById('fb-msg').value.trim();
  document.getElementById('fb-er').classList.add('hidden');
  if(!msg){document.getElementById('fb-er').classList.remove('hidden');return;}
  try {
    await db.from('feedbacks').insert({user_id:me.id,name:name||me.fn,message:msg,stars:starSel});
    fetch('https://api.telegram.org/bot8812940526:AAFfS8PgwthWa10IhQv-HivXc_J9nxzITJo/sendMessage',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:'7133235171',text:'💬 *Yangi Feedback!*\n👤 '+name+'\n⭐ '+starSel+'/5\n📝 '+msg,parse_mode:'Markdown'})
    }).catch(()=>{});
    document.getElementById('fb-msg').value='';
    document.getElementById('fb-ok').classList.remove('hidden');
    setTimeout(()=>document.getElementById('fb-ok').classList.add('hidden'),3000);
    loadFbs();
  } catch(e){console.error('fb:',e);}
}

async function loadFbs(){
  try {
    const {data}=await db.from('feedbacks').select('*').order('created_at',{ascending:false}).limit(10);
    if(!data||!data.length){document.getElementById('fb-list').innerHTML='';return;}
    document.getElementById('fb-list').innerHTML=
      '<h3 style="font-size:14px;font-weight:700;margin-bottom:10px;color:var(--text2)">So\'nggi fikrlar:</h3>'+
      data.map(f=>'<div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:8px">'+
        '<div style="display:flex;justify-content:space-between;margin-bottom:6px">'+
        '<strong style="font-size:13px">'+f.name+'</strong>'+
        '<span>'+'⭐'.repeat(f.stars||5)+'</span></div>'+
        '<p style="font-size:13px;color:var(--text2)">'+f.message+'</p></div>'
      ).join('');
  } catch(e){}
}

function openTg(){window.open('https://t.me/BizBilan_Rivojlan_bot','_blank');}

// ---- INIT ----
async function init(){
  applyLang();
  try {
    db=supabase.createClient(SURL,SKEY);
    const btn=document.getElementById('b-in');
    if(btn){btn.textContent='...';btn.disabled=true;}
    const ok=await autoLogin();
    if(btn){btn.textContent=tx().bi;btn.disabled=false;}
    if(ok) startMain();
  } catch(e){
    console.error('init:',e);
    const btn=document.getElementById('b-in');
    if(btn){btn.textContent=tx().bi;btn.disabled=false;}
  }
}
init();