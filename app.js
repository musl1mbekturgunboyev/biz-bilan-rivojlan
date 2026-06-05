// =============================================
// RIVOJLAN — app.js
// Supabase backend bilan ishlaydi
// =============================================

const API = 'https://your-backend.railway.app'; // Backend URL ni shu yerga yozing

// ---- SO'ZLAR VA TARJIMALAR ----
const TRANS = {
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
  ground:"yer",introduce:"tanishtirmoq",marry:"uylashoq",prepare:"tayyorlamoq",sail:"suzmoq",
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
  scene:"sahna",sheet:"varaq",silly:"ahmoq",store:"do'kon",suffer:"azob chekmoq",
  technology:"texnologiya",across:"qarama-qarshi",breathe:"nafas olmoq",
  characteristic:"xususiyat",consume:"iste'mol qilmoq",excite:"hayajonlantirmoq",
  extreme:"haddan tashqari",fear:"qo'rquv",fortunate:"baxtli",happen:"ro'y bermoq",
  length:"uzunlik",mistake:"xato",observe:"kuzatmoq",opportunity:"imkoniyat",prize:"mukofot",
  race:"poyga",realize:"anglamoq",respond:"javob bermoq",risk:"xavf",wonder:"hayrat",yet:"hali",
  aroma:"xushbo'y",beverage:"ichimlik",cluster:"to'plam",combine:"birlashtirmoq",
  condensed:"zichlashtirilgan",contemporary:"zamonaviy",cultivate:"o'stirmoq",divine:"ilohiy",
  humid:"nam",odor:"hid",palate:"ta'b",paradise:"jannat",plantation:"plantatsiya",
  rapid:"tez",rate:"tezlik",soothing:"tinchlantiruvchi",subtle:"nozik",texture:"to'qima",
  toxic:"zaharli",vary:"turlicha bo'lmoq",allot:"ajratmoq",appall:"dahshatga solmoq",
  cache:"zaxira",convenience:"qulaylik",dearth:"tanqislik",deliberate:"qasddan",
  dire:"og'ir",elapse:"o'tmoq",empathy:"hamdardlik",fanciful:"xayoliy",gripe:"shikoyat",
  grueling:"charchatuvchi",mundane:"oddiy",opt:"tanlash",outrage:"g'azab",paltry:"arzimaydigan",
  rectify:"tuzatmoq",resourceful:"tadbirkor",sustenance:"oziq-ovqat",tedious:"zerikarli",
  arise:"paydo bo'lmoq",benefactor:"homiy",blacksmith:"temirchi",charitable:"xayrli",
  chimney:"mo'ri",compensate:"tovon to'lamoq",encounter:"uchrashuv",exceed:"oshib ketmoq",
  forge:"temirchilik qilmoq",humble:"kamtar",iron:"temir",ladder:"narvon",modest:"kamtarona",
  occupy:"egallash",penny:"tanga",preach:"va'z bermoq",prosper:"farovonlashmoq",
  province:"viloyat",satisfaction:"qoniqish",sustain:"qo'llab-quvvatlamoq",
  assert:"da'vo qilmoq",bachelor:"bakalavr",calculus:"hisob",celestial:"samoviy",
  cognitive:"kognitiv",collision:"to'qnashuv",competent:"malakali",diploma:"diplom",
  excel:"yaxshi natija ko'rsatmoq",geology:"geologiya",harness:"bog'lamoq",intellect:"aql",
  keen:"keskin",mythology:"mifologiya",physiology:"fiziologiya",radioactive:"radioaktiv",
  relativity:"nisbiylik",sociology:"sotsiologiya",theoretical:"nazariy"
};

// ---- KITOBLAR ----
const BOOKS = [
  {
    nameUz:"1-bo'lim", color:"#5B4FCF", bg:"#EEF0FF",
    units:[
      {n:1,words:["afraid","agree","angry","arrive","attack","bottom","clever","cruel","finally","hide","hunt","lot","middle","moment","pleased","promise","reply","safe","trick","well"]},
      {n:2,words:["adventure","approach","carefully","chemical","create","evil","experiment","kill","laboratory","laugh","loud","nervous","noise","project","scare","secret","shout","smell","terrible","worse"]},
      {n:3,words:["alien","among","chart","cloud","comprehend","describe","ever","fail","friendly","grade","instead","library","planet","report","several","solve","suddenly","suppose","universe","view"]},
      {n:4,words:["appropriate","avoid","behave","calm","concern","content","expect","frequently","habit","instruct","issue","none","patient","positive","punish","represent","shake","spread","stroll","village"]},
      {n:5,words:["aware","badly","belong","continue","error","experience","field","hurt","judgment","likely","normal","rare","relax","request","reside","result","roll","since","visible","wild"]},
      {n:6,words:["advantage","cause","choice","community","dead","distance","escape","face","follow","fright","ghost","individual","pet","reach","return","survive","upset","voice","weather","wise"]},
      {n:7,words:["allow","announce","beside","challenge","claim","condition","contribute","difference","divide","expert","famous","force","harm","lay","peace","prince","protect","sense","sudden","therefore"]},
      {n:8,words:["accept","arrange","attend","balance","contrast","encourage","familiar","grab","hang","huge","necessary","pattern","propose","purpose","release","require","single","success","tear","theory"]},
      {n:9,words:["against","beach","damage","discover","emotion","fix","frank","identify","island","ocean","perhaps","pleasant","prevent","rock","save","step","still","taste","throw","wave"]},
      {n:10,words:["benefit","certain","chance","effect","essential","far","focus","function","grass","guard","image","immediate","primary","proud","remain","rest","separate","site","tail","trouble"]},
      {n:11,words:["anymore","asleep","berry","collect","compete","conversation","creature","decision","either","forest","ground","introduce","marry","prepare","sail","serious","spend","strange","truth","wake"]},
      {n:12,words:["alone","apartment","article","artist","attitude","compare","judge","magazine","material","meal","method","neighbor","professional","profit","quality","shape","space","stair","symbol","thin"]},
    ]
  },
  {
    nameUz:"2-bo'lim", color:"#10B981", bg:"#E3F9F0",
    units:[
      {n:1,words:["blood","burn","cell","contain","correct","crop","demand","equal","feed","hole","increase","lord","owe","position","raise","responsible","sight","spot","structure","whole"]},
      {n:2,words:["coach","control","description","direct","exam","example","limit","local","magical","mail","novel","outline","poet","print","scene","sheet","silly","store","suffer","technology"]},
      {n:3,words:["across","breathe","characteristic","consume","excite","extreme","fear","fortunate","happen","length","mistake","observe","opportunity","prize","race","realize","respond","risk","wonder","yet"]},
      {n:4,words:["accept","arrange","attend","balance","contrast","encourage","familiar","grab","hang","huge","necessary","pattern","propose","purpose","release","require","single","success","tear","theory"]},
      {n:5,words:["against","beach","damage","discover","emotion","fix","frank","identify","island","ocean","perhaps","pleasant","prevent","rock","save","step","still","taste","throw","wave"]},
      {n:6,words:["benefit","certain","chance","effect","essential","far","focus","function","grass","guard","image","immediate","primary","proud","remain","rest","separate","site","tail","trouble"]},
      {n:7,words:["anymore","asleep","berry","collect","compete","conversation","creature","decision","either","forest","ground","introduce","marry","prepare","sail","serious","spend","strange","truth","wake"]},
      {n:8,words:["alone","apartment","article","artist","attitude","compare","judge","magazine","material","meal","method","neighbor","professional","profit","quality","shape","space","stair","symbol","thin"]},
    ]
  },
  {
    nameUz:"3-bo'lim", color:"#E8A020", bg:"#FFF3D6",
    units:[
      {n:1,words:["arise","benefactor","blacksmith","charitable","chimney","compensate","encounter","exceed","forge","humble","iron","ladder","modest","occupy","penny","preach","prosper","province","satisfaction","sustain"]},
      {n:2,words:["aroma","beverage","cluster","combine","condensed","contemporary","cultivate","divine","humid","odor","palate","paradise","plantation","rapid","rate","soothing","subtle","texture","toxic","vary"]},
      {n:3,words:["allot","appall","cache","convenience","dearth","deliberate","dire","elapse","empathy","fanciful","gripe","grueling","mundane","opt","outrage","paltry","rectify","resourceful","sustenance","tedious"]},
      {n:4,words:["assert","bachelor","calculus","celestial","cognitive","collision","competent","diploma","excel","geology","harness","intellect","keen","mythology","physiology","radioactive","relativity","sociology","theoretical","advantage"]},
    ]
  },
  {
    nameUz:"4-bo'lim", color:"#E8453C", bg:"#FFEEED",
    units:[
      {n:1,words:["afraid","agree","angry","arrive","attack","bottom","clever","cruel","finally","hide","hunt","lot","middle","moment","pleased","promise","reply","safe","trick","well"]},
      {n:2,words:["adventure","approach","carefully","chemical","create","evil","experiment","kill","laboratory","laugh","loud","nervous","noise","project","scare","secret","shout","smell","terrible","worse"]},
      {n:3,words:["alien","among","chart","cloud","comprehend","describe","ever","fail","friendly","grade","instead","library","planet","report","several","solve","suddenly","suppose","universe","view"]},
      {n:4,words:["appropriate","avoid","behave","calm","concern","content","expect","frequently","habit","instruct","issue","none","patient","positive","punish","represent","shake","spread","stroll","village"]},
    ]
  },
  {
    nameUz:"5-bo'lim", color:"#8B5CF6", bg:"#F5F3FF",
    units:[
      {n:1,words:["aware","badly","belong","continue","error","experience","field","hurt","judgment","likely","normal","rare","relax","request","reside","result","roll","since","visible","wild"]},
      {n:2,words:["advantage","cause","choice","community","dead","distance","escape","face","follow","fright","ghost","individual","pet","reach","return","survive","upset","voice","weather","wise"]},
      {n:3,words:["allow","announce","beside","challenge","claim","condition","contribute","difference","divide","expert","famous","force","harm","lay","peace","prince","protect","sense","sudden","therefore"]},
      {n:4,words:["accept","arrange","attend","balance","contrast","encourage","familiar","grab","hang","huge","necessary","pattern","propose","purpose","release","require","single","success","tear","theory"]},
    ]
  }
];

// ---- TILLAR ----
const TXT = [
  {ls:"Biz bilan rivojlan",ah:"Xush kelibsiz!",ap:"Ingliz tilini o'rganishni boshlang",le:"Email",lp:"Parol",bi:"Kirish",s1:"Hali ro'yxatdan o'tmaganmisiz?",s1l:"Ro'yxatdan o'tish",fn:"Ism",ln:"Familya",re:"Email",rp:"Parol",br:"Ro'yxatdan o'tish",s2:"Akkauntingiz bormi?",s2l:"Kirish",bo:"Chiqish",hh:"Salom",hp:"Bugungi darsni boshlang!",hpts:"Ball",hrk:"Reyting",hw:"So'z",hst:"Kun",tb:"Bo'limlar",tr:"Reyting",tp:"Profil",ta:"Tahlil",stb:"5 ta o'quv bo'limi",bk:"Orqaga",testLock:"Barcha darslarni tugating",testOpen:"Bo'lim imtihoni (80% kerak)",testDone:"Bo'lim imtihoni topshirildi ✓",unitDone:"Tugatildi",unitLocked:"Qulflangan",unitOpen:"Kirish",rU:"Foydalanuvchi",rP:"Ball",al1:"Bu oy ball",al2:"So'zlar",al3:"Testlar",cht:"Oylik progress",rph:"Oylik hisobot",rpp:"Har oy Telegramga yuboriladi",rpbt:"Yuborish",tgh:"Telegram botga ulash",tgp:"Testlarni bot orqali topshiring",tgbt:"Botga o'tish",spts:"Ball",sw:"So'zlar",srk:"Reyting",sst:"Streak",fc:"Ushbu sayt Muslimbek Turg'unboyev tomonidan tayyorlandi",e1:"Barcha maydonlarni to'ldiring!",e2:"Bu email allaqachon ro'yxatdan o'tgan!",e3:"Email yoki parol noto'g'ri!",wLearn:"so'z o'rganing",wTest:"Testni boshlash",qPass:"Tabriklaymiz! Test o'tdi ✓",qFail:"Test o'tmadi. Qayta urinib ko'ring",qNext:"Keyingi dars ochildi!",qUnlock:"Keyingi bo'lim ochildi! 🎉",qRetry:"Qayta urinish",qCont:"Davom etish",months:["Yan","Fev","Mar","Apr","May","Iyn"]},
  {ls:"Развивайся с нами",ah:"Добро пожаловать!",ap:"Начните изучать английский язык",le:"Email",lp:"Пароль",bi:"Войти",s1:"Нет аккаунта?",s1l:"Регистрация",fn:"Имя",ln:"Фамилия",re:"Email",rp:"Пароль",br:"Зарегистрироваться",s2:"Есть аккаунт?",s2l:"Войти",bo:"Выйти",hh:"Привет",hp:"Начните урок сегодня!",hpts:"Баллы",hrk:"Рейтинг",hw:"Слова",hst:"Дни",tb:"Разделы",tr:"Рейтинг",tp:"Профиль",ta:"Анализ",stb:"5 учебных разделов",bk:"Назад",testLock:"Завершите все уроки",testOpen:"Тест раздела (нужно 80%)",testDone:"Тест раздела сдан ✓",unitDone:"Завершён",unitLocked:"Заблокировано",unitOpen:"Войти",rU:"Пользователь",rP:"Баллы",al1:"Баллов за месяц",al2:"Слова",al3:"Тестов",cht:"Прогресс",rph:"Ежемесячный отчёт",rpp:"Каждый месяц в Telegram",rpbt:"Отправить",tgh:"Telegram бот",tgp:"Сдавайте тесты через бот",tgbt:"Перейти в бот",spts:"Баллы",sw:"Слова",srk:"Место",sst:"Streak",fc:"Подготовлено Muslimbek Turg'unboyev",e1:"Заполните все поля!",e2:"Email уже зарегистрирован!",e3:"Неверный email или пароль!",wLearn:"слов для изучения",wTest:"Начать тест",qPass:"Поздравляем! Тест пройден ✓",qFail:"Тест не пройден. Попробуйте ещё раз",qNext:"Следующий урок открыт!",qUnlock:"Следующий раздел открыт! 🎉",qRetry:"Повторить",qCont:"Продолжить",months:["Янв","Фев","Мар","Апр","Май","Июн"]},
  {ls:"Grow with us",ah:"Welcome!",ap:"Start learning English today",le:"Email",lp:"Password",bi:"Sign In",s1:"Don't have an account?",s1l:"Register",fn:"First Name",ln:"Last Name",re:"Email",rp:"Password",br:"Create Account",s2:"Already have an account?",s2l:"Sign In",bo:"Sign Out",hh:"Hello",hp:"Start today's lesson!",hpts:"Points",hrk:"Rank",hw:"Words",hst:"Days",tb:"Levels",tr:"Leaderboard",tp:"Profile",ta:"Analysis",stb:"5 learning levels",bk:"Back",testLock:"Complete all units first",testOpen:"Level exam (80% needed)",testDone:"Level exam passed ✓",unitDone:"Done",unitLocked:"Locked",unitOpen:"Enter",rU:"User",rP:"Points",al1:"Points this month",al2:"Words",al3:"Tests",cht:"Monthly progress",rph:"Monthly Report",rpp:"Auto-sent to Telegram monthly",rpbt:"Send Now",tgh:"Connect Telegram Bot",tgp:"Submit tests via bot",tgbt:"Open Bot",spts:"Points",sw:"Words",srk:"Rank",sst:"Streak",fc:"Prepared by Muslimbek Turg'unboyev",e1:"Please fill all fields!",e2:"Email already registered!",e3:"Incorrect email or password!",wLearn:"words to learn",wTest:"Start Test",qPass:"Congratulations! Test passed ✓",qFail:"Test failed. Please try again",qNext:"Next unit unlocked!",qUnlock:"Next level unlocked! 🎉",qRetry:"Retry",qCont:"Continue",months:["Jan","Feb","Mar","Apr","May","Jun"]}
];

// ---- STATE ----
let li = 0, me = null, users = {};
let curBk = -1, curUnit = -1;
let quizMode = 'unit', quizQs = [], quizIdx = 0, quizRight = 0, quizSel = false;
const SK = 'rivojlan_v4';

function save() { try { localStorage.setItem(SK, JSON.stringify(users)); } catch(e){} }
function load() { try { const d = localStorage.getItem(SK); if(d) users = JSON.parse(d); } catch(e){} }
load();

function t() { return TXT[li]; }

// ---- TOAST ----
function toast(msg, dur=3000) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), dur);
}

// ---- TIL ----
function setLang(i) {
  li = i;
  document.querySelectorAll('.lb').forEach((b, j) => b.classList.toggle('on', j === i));
  applyLang();
  if(me) renderMain();
}

function applyLang() {
  const tx = t();
  const map = {
    'ls':tx.ls,'ah2':tx.ah,'ap':tx.ap,'ll-e':tx.le,'ll-p':tx.lp,'b-in':tx.bi,
    'sw1':tx.s1,'sw1l':tx.s1l,'ll-fn':tx.fn,'ll-ln':tx.ln,'ll-re':tx.re,'ll-rp':tx.rp,
    'b-reg':tx.br,'sw2':tx.s2,'sw2l':tx.s2l,'btn-out':tx.bo,
    'hl-pts':tx.hpts,'hl-rk':tx.hrk,'hl-w':tx.hw,'hl-s':tx.hst,
    'tl-b':tx.tb,'tl-r':tx.tr,'tl-p':tx.tp,'tl-a':tx.ta,'st-b':tx.stb,
    'rh-u':tx.rU,'rh-p':tx.rP,'al1':tx.al1,'al2':tx.al2,'al3':tx.al3,
    'ch-t':tx.cht,'rp-h':tx.rph,'rp-p':tx.rpp,'rp-bt':tx.rpbt,
    'tg-h':tx.tgh,'tg-p':tx.tgp,'tg-bt':tx.tgbt,
    'sl-pts':tx.spts,'sl-w':tx.sw,'sl-r':tx.srk,'sl-s':tx.sst,'ft-c':tx.fc
  };
  Object.entries(map).forEach(([id, val]) => { const el = document.getElementById(id); if(el) el.textContent = val; });
}

// ---- AUTH ----
function showReg() {
  document.getElementById('f-in').classList.add('hidden');
  document.getElementById('f-reg').classList.remove('hidden');
  hideErr();
}
function showLogin() {
  document.getElementById('f-reg').classList.add('hidden');
  document.getElementById('f-in').classList.remove('hidden');
  hideErr();
}
function showErr(msg) {
  const e = document.getElementById('err-b');
  e.textContent = msg; e.style.display = 'block';
}
function hideErr() { document.getElementById('err-b').style.display = 'none'; }

function doReg() {
  const fn = document.getElementById('r-fn').value.trim();
  const ln = document.getElementById('r-ln').value.trim();
  const em = document.getElementById('r-e').value.trim().toLowerCase();
  const ps = document.getElementById('r-p').value;
  if(!fn || !ln || !em || !ps) { showErr(t().e1); return; }
  if(users[em]) { showErr(t().e2); return; }
  users[em] = {fn, ln, em, ps, pts: 0, streak: 1, year: new Date().getFullYear(), monthly: [0,0,0,0,0,0], prog: {}};
  save();
  me = users[em];
  // Backend ga yuborish
  fetch(`${API}/api/register`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({firstName: fn, lastName: ln, email: em, password: ps})
  }).catch(() => {});
  startMain();
}

function doLogin() {
  const em = document.getElementById('l-e').value.trim().toLowerCase();
  const ps = document.getElementById('l-p').value;
  if(!em || !ps) { showErr(t().e1); return; }
  if(!users[em] || users[em].ps !== ps) { showErr(t().e3); return; }
  me = users[em];
  startMain();
}

function logout() {
  me = null; curBk = -1; curUnit = -1;
  document.getElementById('view-main').classList.add('hidden');
  document.getElementById('view-auth').classList.remove('hidden');
  document.getElementById('nav-u').classList.add('hidden');
  showLogin();
}

function startMain() {
  document.getElementById('view-auth').classList.add('hidden');
  document.getElementById('view-main').classList.remove('hidden');
  document.getElementById('nav-u').classList.remove('hidden');
  if(!me.prog) me.prog = {};
  const ini = (me.fn[0] + (me.ln[0] || '')).toUpperCase();
  document.getElementById('nav-av').textContent = ini;
  document.getElementById('nav-nm').textContent = me.fn;
  renderMain();
}

// ---- HELPERS ----
function getRank() {
  const all = Object.values(users).sort((a,b) => b.pts - a.pts);
  return all.findIndex(u => u.em === me.em) + 1;
}
function getWords() {
  let w = 0;
  BOOKS.forEach((b, bi) => b.units.forEach((u, ui) => { if(me.prog[`b${bi}u${ui}t`] === 'done') w += u.words.length; }));
  return w;
}
function isBookUnlocked(bi) {
  if(bi === 0) return true;
  return me.prog && me.prog[`b${bi-1}exam`] === 'done';
}
function allUnitsDone(bi) {
  return BOOKS[bi].units.every((_, ui) => me.prog && me.prog[`b${bi}u${ui}t`] === 'done');
}
function prevUnitOk(bi, ui) {
  return ui === 0 || (me.prog && me.prog[`b${bi}u${ui-1}t`] === 'done');
}

// ---- RENDER MAIN ----
function renderMain() {
  const tx = t();
  document.getElementById('hero-h').textContent = tx.hh + ', ' + me.fn + '!';
  document.getElementById('hero-p').textContent = tx.hp;
  document.getElementById('h-pts').textContent = me.pts;
  document.getElementById('h-rank').textContent = '#' + getRank();
  document.getElementById('h-words').textContent = getWords();
  document.getElementById('h-str').textContent = me.streak;
  renderBolimlar();
}

// ---- BOLIMLAR ----
function renderBolimlar() {
  const el = document.getElementById('bolim-list');
  el.innerHTML = '';
  BOOKS.forEach((b, bi) => {
    const ul = isBookUnlocked(bi);
    const done = b.units.filter((_, ui) => me.prog && me.prog[`b${bi}u${ui}t`] === 'done').length;
    const pct = Math.round((done / b.units.length) * 100);
    const exam = me.prog && me.prog[`b${bi}exam`] === 'done';
    el.innerHTML += `
    <div class="bk${ul ? '' : ' locked'}" onclick="${ul ? `openBolim(${bi})` : ''}">
      <div class="bk-h">
        <div class="bk-ic" style="background:${b.bg};color:${b.color}">${bi+1}</div>
        <div>
          <div class="bk-nm">${b.nameUz} ${exam ? '✓' : ''}</div>
          <div class="bk-d">4000 Essential Words</div>
        </div>
      </div>
      <div class="bk-pb">
        <div class="pb-bar"><div class="pb-fill" style="width:${pct}%;background:${b.color}"></div></div>
        <div class="bk-st"><span>${done}/${b.units.length} dars</span><span>${pct}%</span></div>
      </div>
      ${!ul ? `<div class="bk-lk">🔒 ${t().unitLocked}</div>` : ''}
    </div>`;
  });
}

function openBolim(bi) {
  curBk = bi; curUnit = -1;
  const b = BOOKS[bi];
  document.getElementById('bk-back').textContent = t().bk;
  document.getElementById('bk-ti').textContent = b.nameUz;
  document.getElementById('bk-su').textContent = `4000 Essential English Words — Kitob ${bi+1}`;
  renderTestBanner(bi);
  renderDarslar(bi);
  showSubPage('pg-darslar');
}

function renderTestBanner(bi) {
  const el = document.getElementById('test-ban-area');
  const all = allUnitsDone(bi);
  const exam = me.prog && me.prog[`b${bi}exam`] === 'done';
  const done = BOOKS[bi].units.filter((_, ui) => me.prog && me.prog[`b${bi}u${ui}t`] === 'done').length;
  if(exam) {
    el.innerHTML = `<div class="test-ban done"><div class="tb-inf"><h3 style="color:#065F46">${t().testDone}</h3><p style="color:#10B981">Keyingi bo'lim ochildi!</p></div><button class="tb-btn g">✓ Topshirildi</button></div>`;
  } else if(all) {
    el.innerHTML = `<div class="test-ban open"><div class="tb-inf"><h3 style="color:#3C3489">${t().testOpen}</h3><p style="color:#534AB7">80% dan yuqori javob bering</p></div><button class="tb-btn p" onclick="startExam(${bi})">📝 ${t().testOpen}</button></div>`;
  } else {
    el.innerHTML = `<div class="test-ban locked"><div class="tb-inf"><h3 style="color:var(--text2)">${t().testLock}</h3><p style="color:var(--text2)">${done}/${BOOKS[bi].units.length} dars tugallandi</p></div><button class="tb-btn gr">🔒 ${t().testOpen}</button></div>`;
  }
}

function renderDarslar(bi) {
  const el = document.getElementById('dars-grid');
  el.innerHTML = '';
  BOOKS[bi].units.forEach((u, ui) => {
    const done = me.prog && me.prog[`b${bi}u${ui}t`] === 'done';
    const prev = prevUnitOk(bi, ui);
    const lk = !prev;
    el.innerHTML += `
    <div class="dc${lk ? ' dc-lk' : done ? ' dc-done' : ''}" onclick="${!lk ? `openDars(${bi},${ui})` : ''}">
      <div class="dc-top">
        <div class="dc-num">
          ${t().unitLocked.replace('Qulflangan','').replace('Заблокировано','').replace('Locked','')}Dars ${u.n}
          ${done ? '<span class="dc-ck">✓</span>' : ''}
        </div>
        <div class="dc-ws">${u.words.slice(0,5).map(w => `<span class="wp">${w}</span>`).join('')}<span class="wp">+${u.words.length-5}</span></div>
        <div class="dc-cnt">${u.words.length} so'z</div>
      </div>
      <div class="dc-foot ${done ? 'green' : lk ? 'gray' : 'blue'}">
        ${done ? '✓ ' + t().unitDone : lk ? '🔒 ' + t().unitLocked : '→ ' + t().unitOpen}
      </div>
    </div>`;
  });
}

function openDars(bi, ui) {
  curBk = bi; curUnit = ui;
  const u = BOOKS[bi].units[ui];
  document.getElementById('wd-back').textContent = t().bk;
  document.getElementById('wd-ti').textContent = `Dars ${u.n}`;
  document.getElementById('wd-su').textContent = `${BOOKS[bi].nameUz} · ${u.words.length} so'z`;
  document.getElementById('wd-info').textContent = `${u.words.length} ${t().wLearn}`;
  document.getElementById('wd-ql').textContent = t().wTest;
  const grid = document.getElementById('wd-grid');
  grid.innerHTML = '';
  u.words.forEach(w => {
    const uz = TRANS[w] || w;
    grid.innerHTML += `<div class="wc"><div class="wc-en">${w}</div><div class="wc-uz">${uz}</div></div>`;
  });
  showSubPage('pg-word');
}

// ---- QUIZ ----
function startUnitQuiz() {
  const u = BOOKS[curBk].units[curUnit];
  quizMode = 'unit';
  buildQuiz(u.words, 10, 70);
}

function startExam(bi) {
  curBk = bi;
  quizMode = 'exam';
  const allWords = [];
  BOOKS[bi].units.forEach(u => allWords.push(...u.words));
  buildQuiz(allWords, 20, 80);
}

function buildQuiz(words, count, pass) {
  const pool = [...words].sort(() => Math.random() - 0.5).slice(0, Math.min(count, words.length));
  quizQs = pool.map(w => {
    const correct = TRANS[w] || w;
    const others = Object.entries(TRANS)
      .filter(([k]) => k !== w && TRANS[k] !== correct)
      .sort(() => Math.random() - 0.5).slice(0, 3).map(([,v]) => v);
    return { word: w, correct, opts: [correct, ...others].sort(() => Math.random() - 0.5), pass };
  });
  quizIdx = 0; quizRight = 0; quizSel = false;
  document.getElementById('qz-bk').textContent = t().bk;
  document.getElementById('qz-ti').textContent = quizMode === 'unit' ? `Dars ${BOOKS[curBk].units[curUnit].n} — Test` : `${BOOKS[curBk].nameUz} — Imtihon`;
  document.getElementById('qz-su').textContent = quizMode === 'unit' ? '70% to\'g\'ri javob bering' : '80% to\'g\'ri javob bering';
  showSubPage('pg-quiz');
  renderQ();
}

function renderQ() {
  if(quizIdx >= quizQs.length) { showResult(); return; }
  const q = quizQs[quizIdx];
  const pct = Math.round((quizIdx / quizQs.length) * 100);
  quizSel = false;
  document.getElementById('quiz-body').innerHTML = `
  <div class="quiz-pg">
    <div class="qz-prog-bar"><div class="qz-prog-fill" style="width:${pct}%"></div></div>
    <div class="qz-card">
      <div class="qz-word">${q.word}</div>
      <div class="qz-sub">Savol ${quizIdx+1} / ${quizQs.length}</div>
    </div>
    <div class="qz-q">O'zbekcha tarjimasi qaysi?</div>
    <div class="opts" id="opts">
      ${q.opts.map((op, i) => `<button class="opt" id="op${i}" onclick="pick(${i},'${op.replace(/'/g,"\\'")}','${q.correct.replace(/'/g,"\\'")}')">  ${op}</button>`).join('')}
    </div>
    <div class="qz-nav">
      <span class="qz-stat">${quizRight} to'g'ri</span>
      <button class="btn-nxt hidden" id="nxt" onclick="nextQ()">Keyingisi →</button>
    </div>
  </div>`;
}

function pick(i, chosen, correct) {
  if(quizSel) return;
  quizSel = true;
  const ok = chosen === correct;
  if(ok) quizRight++;
  document.querySelectorAll('.opt').forEach((b, j) => {
    b.disabled = true;
    if(j === i) b.classList.add(ok ? 'correct' : 'wrong');
    if(!ok && b.textContent.trim() === correct) b.classList.add('show-c');
  });
  document.getElementById('nxt').classList.remove('hidden');
}

function nextQ() { quizIdx++; renderQ(); }

function showResult() {
  const pass = quizQs[0].pass;
  const pct = Math.round((quizRight / quizQs.length) * 100);
  const passed = pct >= pass;
  if(passed) {
    if(quizMode === 'unit') {
      me.prog[`b${curBk}u${curUnit}t`] = 'done';
      me.pts += quizRight * 5;
      if(me.monthly) me.monthly[me.monthly.length-1] += quizRight * 5;
      toast(t().qNext);
    } else {
      me.prog[`b${curBk}exam`] = 'done';
      me.pts += 100;
      if(me.monthly) me.monthly[me.monthly.length-1] += 100;
      toast(t().qUnlock);
    }
    save();
    // Backend ga yuborish
    fetch(`${API}/api/progress`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email: me.em, score: pct, mode: quizMode, book: curBk, unit: curUnit})
    }).catch(() => {});
  }
  document.getElementById('quiz-body').innerHTML = `
  <div class="res-pg">
    <div class="res-emoji">${passed ? '🏆' : '😔'}</div>
    <div class="res-pct" style="color:${passed ? 'var(--g)' : 'var(--r)'}">${pct}%</div>
    <div class="res-lbl">${quizRight}/${quizQs.length} to'g'ri javob</div>
    <div class="res-bar-w"><div class="res-bar-f" style="width:${pct}%;background:${passed ? 'var(--g)' : 'var(--r)'}"></div></div>
    <div class="res-msg ${passed ? 'pass' : 'fail'}">${passed ? t().qPass : t().qFail}</div>
    <div class="res-btns">
      ${!passed ? `<button class="btn-r" onclick="retryQ()">${t().qRetry}</button>` : ''}
      <button class="btn-r p" onclick="afterRes(${passed})">${t().qCont}</button>
    </div>
  </div>`;
}

function retryQ() { quizIdx = 0; quizRight = 0; quizSel = false; quizQs = [...quizQs].sort(() => Math.random()-0.5); renderQ(); }

function afterRes(passed) {
  if(quizMode === 'unit') {
    backDarslar();
    renderDarslar(curBk);
    renderTestBanner(curBk);
  } else {
    backHome();
    renderBolimlar();
  }
}

function backFromQuiz() {
  if(quizMode === 'unit') { backDarslar(); }
  else { backHome(); }
}

// ---- NAVIGATION ----
function showSubPage(id) {
  ['pg-home','pg-darslar','pg-word','pg-quiz'].forEach(p => document.getElementById(p).classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo(0, 0);
}
function backHome() { curBk = -1; curUnit = -1; showSubPage('pg-home'); renderBolimlar(); }
function backDarslar() { curUnit = -1; showSubPage('pg-darslar'); renderDarslar(curBk); renderTestBanner(curBk); }

function goTab(n) {
  ['b','r','p','a'].forEach(x => {
    document.getElementById('pg-'+x).classList.add('hidden');
    document.getElementById('tab-'+x).classList.remove('on');
  });
  document.getElementById('pg-'+n).classList.remove('hidden');
  document.getElementById('tab-'+n).classList.add('on');
  if(n === 'r') renderLB();
  if(n === 'p') renderProf();
  if(n === 'a') renderAnal();
  window.scrollTo(0, 0);
}

// ---- REYTING ----
function renderLB() {
  const all = Object.values(users).sort((a,b) => b.pts - a.pts);
  const max = all[0] ? all[0].pts : 1;
  let html = '';
  all.slice(0, 20).forEach((u, i) => {
    const isMe = u.em === me.em;
    const ini = (u.fn[0] + (u.ln[0] || '')).toUpperCase();
    const pct = Math.round((u.pts / (max || 1)) * 100);
    const rc = ['','r1','r2','r3'][i+1] || 'rn';
    html += `<div class="lb-row${isMe ? ' mine' : ''}">
      <div><div class="rnk ${rc}">${i+1}</div></div>
      <div class="lb-u"><div class="sm-av">${ini}</div>
        <div style="overflow:hidden"><div class="lb-nm">${u.fn} ${u.ln}${isMe ? ' 👈' : ''}</div>
          <div class="lb-bar"><div class="lb-bf" style="width:${pct}%"></div></div></div></div>
      <div class="lb-pt">${u.pts}</div>
      <div class="lb-str">${u.streak}🔥</div>
    </div>`;
  });
  document.getElementById('lb-body').innerHTML = html || '<div style="padding:20px;text-align:center;color:var(--text2)">Hali foydalanuvchilar yo\'q</div>';
}

// ---- PROFIL ----
function renderProf() {
  const ini = (me.fn[0] + (me.ln[0] || '')).toUpperCase();
  document.getElementById('p-av').textContent = ini;
  document.getElementById('p-nm').textContent = me.fn + ' ' + me.ln;
  document.getElementById('p-em').textContent = me.em;
  document.getElementById('p-lv').textContent = '⭐ Beginner';
  document.getElementById('p-jn').textContent = '📅 ' + (me.year || 2024);
  document.getElementById('p-st').textContent = '🔥 ' + me.streak + ' kun';
  document.getElementById('sp-pts').textContent = me.pts;
  document.getElementById('sp-w').textContent = getWords();
  document.getElementById('sp-r').textContent = '#' + getRank();
  document.getElementById('sp-s').textContent = me.streak;
}

// ---- TAHLIL ----
function renderAnal() {
  const m = me.monthly || [0,0,0,0,0,0];
  const tests = Object.keys(me.prog || {}).filter(k => k.endsWith('t')).length;
  document.getElementById('av1').textContent = m[m.length-1] || me.pts;
  document.getElementById('av2').textContent = getWords();
  document.getElementById('av3').textContent = tests;
  const max = Math.max(...m) || 1;
  let html = '';
  t().months.forEach((mn, i) => {
    const h = Math.max(Math.round((m[i] / max) * 80), 4);
    html += `<div class="ch-it"><span class="ch-vl">${m[i]}</span><div class="ch-b${i === m.length-1 ? '' : ' dm'}" style="height:${h}px"></div><span class="ch-lb">${mn}</span></div>`;
  });
  document.getElementById('ch-bs').innerHTML = html;
}

function openTg() {
  window.open('https://t.me/BizBilan_Rivojlan_bot', '_blank');
}

// ---- INIT ----
applyLang();