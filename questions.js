// Збережи це як questions.js
const db = [
    // === ЧАСТИНА 1: ЛЕКСИКА ===
    
    // --- 1. Collocations ---
    // Скопіюй це всередину масиву db у твоєму файлі questions.js

    // --- 1. Collocations (Питання 1-50) ---
    { 
        part: 1,
        topic: "Collocations",
        q: "The university board aims to ________ a compromise between budget cuts and academic quality.", 
        options: ["make", "reach", "do", "settle"], 
        a: 1, 
        hint: "Reach a compromise — досягти компромісу. Стале академічне словосполучення."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "Students are expected to ________ research independently during their final semester.", 
        options: ["conduct", "make", "lead", "foster"], 
        a: 0, 
        hint: "Conduct research — проводити дослідження. Замість conduct також може бути carry out."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The keynote speaker failed to ________ the audience's attention from the very beginning.", 
        options: ["hold", "keep", "capture", "preserve"], 
        a: 2, 
        hint: "Capture attention — захопити/привернути увагу (раптово та сильно)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The global energy crisis has ________ a heavy toll on developing economies.", 
        options: ["taken", "made", "given", "had"], 
        a: 0, 
        hint: "Take a heavy toll (on) — сильно вдарити по чомусь, мати негативні наслідки."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "You must ________ into account the historical context when analyzing this poem.", 
        options: ["bear", "take", "keep", "hold"], 
        a: 1, 
        hint: "Take into account — брати до уваги (syn. bear in mind)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The candidate's educational background gives her a distinct ________ over other applicants.", 
        options: ["edge", "profit", "benefit", "border"], 
        a: 0, 
        hint: "Give an edge over someone — надавати перевагу над кимось."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The professor asked us to ________ our opinions based on peer-reviewed articles.", 
        options: ["form", "build", "frame", "create"], 
        a: 0, 
        hint: "Form an opinion — сформувати думку."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The new environmental policy will ________ into effect starting next Monday.", 
        options: ["come", "go", "run", "step"], 
        a: 0, 
        hint: "Come into effect — набирати чинності (про закони, правила)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The technology company managed to ________ a profit despite the market stagnation.", 
        options: ["do", "gain", "make", "raise"], 
        a: 2, 
        hint: "Make a profit — отримувати прибуток."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The committee will ________ judgment until all evidence has been carefully reviewed.", 
        options: ["keep", "reserve", "hold", "save"], 
        a: 1, 
        hint: "Reserve judgment — утриматися від винесення вердикту/судження до з'ясування обставин."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "A good scientific hypothesis must be able to ________ the test of time.", 
        options: ["stand", "keep", "hold", "bear"], 
        a: 0, 
        hint: "Stand the test of time — витримати перевірку часом."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "Her extensive training in statistics ________ a vital role in the project's success.", 
        options: ["made", "took", "played", "did"], 
        a: 2, 
        hint: "Play a vital role — відігравати життєво важливу роль."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "He didn't mean to ________ offense; it was just a misunderstood joke.", 
        options: ["give", "take", "make", "cause"], 
        a: 3, 
        hint: "Cause offense — образити когось, стати причиною образи (але сама людина 'takes offense')."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The researchers need to ________ a balance between accuracy and speed.", 
        options: ["strike", "make", "do", "findout"], 
        a: 0, 
        hint: "Strike a balance — знайти баланс / компроміс між двома протилежностями."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The local community center runs entirely on volunteers who ________ their time.", 
        options: ["give", "donate", "spend", "lend"], 
        a: 1, 
        hint: "Donate time — присвячувати/віддавати свій час на благодійність."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "To prevent burnout, it is essential to ________ boundaries between work and life.", 
        options: ["set", "make", "put", "build"], 
        a: 0, 
        hint: "Set boundaries — встановлювати кордони / межі."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The recent archeological discovery has ________ a brand new light on the Bronze Age.", 
        options: ["thrown", "shed", "dropped", "poured"], 
        a: 1, 
        hint: "Shed light on something — пролити світло на щось."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The government must ________ immediate measures to stop unauthorized data leaks.", 
        options: ["do", "adopt", "make", "perform"], 
        a: 1, 
        hint: "Adopt / Take measures — вживати заходів."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The heavy morning fog ________ a serious threat to drivers on the highway.", 
        options: ["creates", "poses", "makes", "gives"], 
        a: 1, 
        hint: "Poses a threat — становить загрозу."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "I would like to ________ a formal complaint about the service we received.", 
        options: ["make", "do", "lodge", "place"], 
        a: 2, 
        hint: "Lodge a complaint — офіційно подати скаргу (хоча make скаргу теж можливо, lodge є більш формальним академічним варіантом)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The economic crisis caused several small businesses to ________ bankrupt.", 
        options: ["turn", "go", "become", "fall"], 
        a: 1, 
        hint: "Go bankrupt — збанкрутувати."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "He is trying to ________ a living as a freelance graphic designer.", 
        options: ["make", "earn", "gain", "win"], 
        a: 1, 
        hint: "Earn a living — заробляти на життя."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The scientist's brilliant presentation ________ the audience with awe.", 
        options: ["filled", "made", "left", "provided"], 
        a: 0, 
        hint: "Fill someone with awe — наповнити когось захватом/благоговінням."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "It is crucial to ________ your goals before you start planning the project stages.", 
        options: ["define", "make", "appoint", "design"], 
        a: 0, 
        hint: "Define goals — визначити / окреслити цілі."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The digital revolution has ________ about massive changes in communication.", 
        options: ["taken", "brought", "made", "carried"], 
        a: 1, 
        hint: "Bring about changes — викликати / спричинити зміни."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "Please ________ in mind that the library closes early on Fridays.", 
        options: ["keep", "bear", "hold", "save"], 
        a: 1, 
        hint: "Bear in mind — мати на увазі / пам'ятати."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The judge ruled that the company had ________ the terms of the contract.", 
        options: ["broken", "violated", "breached", "fractured"], 
        a: 2, 
        hint: "Breach a contract — порушити умови контракту (юридичний термін)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The young musician's performance ________ a standing ovation from the crowd.", 
        options: ["earned", "drew", "received", "won"], 
        a: 1, 
        hint: "Draw a standing ovation — викликати аплодисменти стоячи."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "Despite severe opposition, she managed to ________ her point across effectively.", 
        options: ["make", "get", "bring", "give"], 
        a: 1, 
        hint: "Get one's point across — чітко донести свою думку."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The marketing team needs to ________ up with a creative slogan for the campaign.", 
        options: ["come", "make", "think", "get"], 
        a: 0, 
        hint: "Come up with an idea/slogan — придумати, запропонувати ідею."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The city council decided to ________ a ban on single-use plastics.", 
        options: ["put", "force", "impose", "set"], 
        a: 2, 
        hint: "Impose a ban — запровадити/накласти заборону."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The sudden drop in temperature ________ a severe impact on the crops.", 
        options: ["had", "made", "gave", "did"], 
        a: 0, 
        hint: "Have an impact on — мати вплив на щось."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The suspect's alibi failed to ________ the police's suspicions.", 
        options: ["satisfy", "dispel", "clear", "remove"], 
        a: 1, 
        hint: "Dispel suspicions — розвіяти підозри."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The student was asked to ________ an apology for his disruptive behavior.", 
        options: ["make", "give", "tender", "offer"], 
        a: 2, 
        hint: "Tender / Offer an apology — офіційно принести вибачення. Tender є найбільш книжним та офіційним."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The international community must ________ immediate financial aid to the region.", 
        options: ["provide", "give", "present", "supply"], 
        a: 0, 
        hint: "Provide financial aid — надати фінансову допомогу."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The long-standing conflict has finally ________ to an end due to diplomacy.", 
        options: ["reached", "come", "moved", "settled"], 
        a: 1, 
        hint: "Come to an end — завершитися / підійти до кінця."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The primary school teacher knows how to ________ a child's imagination.", 
        options: ["spark", "fire", "ignite", "foster"], 
        a: 0, 
        hint: "Spark imagination — запалити / пробудити уяву."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The CEO was forced to ________ responsibility for the financial losses.", 
        options: ["take", "bear", "assume", "hold"], 
        a: 2, 
        hint: "Assume / Take responsibility — взяти на себе відповідальність. Assume часто вживається в офіційному контексті."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The witness was sworn to ________ the absolute truth in the courtroom.", 
        options: ["say", "speak", "tell", "voice"], 
        a: 2, 
        hint: "Tell the truth — говорити правду (усталений вираз з tell)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The expert panel will ________ an assessment of the current building safety.", 
        options: ["make", "do", "carry", "conduct"], 
        a: 3, 
        hint: "Conduct an assessment — провести оцінювання."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "You must ________ certain requirements to be eligible for the scholarship.", 
        options: ["fit", "meet", "fill", "match"], 
        a: 1, 
        hint: "Meet requirements — відповідати вимогам."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The heavy storm ________ extensive damage to the coastal infrastructure.", 
        options: ["made", "caused", "did", "brought"], 
        a: 1, 
        hint: "Cause damage — завдати шкоди / збитків."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The argument was based on facts that ________ no relevance to the actual case.", 
        options: ["hold", "keep", "bear", "carry"], 
        a: 2, 
        hint: "Bear relevance (to) — мати відношення до чогось / бути доречним."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The political party failed to ________ the voters' confidence during the elections.", 
        options: ["gain", "win", "achieve", "capture"], 
        a: 1, 
        hint: "Win confidence / trust — завоювати довіру."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The project team had to ________ a tight deadline to secure the funding.", 
        options: ["catch", "meet", "reach", "keep"], 
        a: 1, 
        hint: "Meet a deadline — вкластися в дедлайн / термін."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The country's economy is showing signs of ________ recovery after the recession.", 
        options: ["heavy", "strong", "robust", "hard"], 
        a: 2, 
        hint: "Robust recovery — стійке / міцне економічне відновлення."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The university decided to ________ a public debate on artificial intelligence.", 
        options: ["hold", "make", "do", "keep"], 
        a: 0, 
        hint: "Hold a debate / meeting — проводити дебати / збори."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "I can say with absolute ________ that the experiment was flawless.", 
        options: ["surety", "certainty", "conviction", "trust"], 
        a: 1, 
        hint: "With absolute certainty — з абсолютною впевненістю."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The newly appointed manager wants to ________ a good impression on the team.", 
        options: ["make", "do", "give", "leave"], 
        a: 0, 
        hint: "Make an impression — справити враження."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The continuous friction between colleagues could ________ serious problems in future.", 
        options: ["create", "raise", "pose", "foster"], 
        a: 0, 
        hint: "Create problems — створювати проблеми."
    },
	{ 
        part: 1,
        topic: "Collocations",
        q: "The marketing director made a ________ guess about the quarterly sales figures.", 
        options: ["calculated", "reasoned", "wild", "blind"], 
        a: 2, 
        hint: "A wild guess — здогадка пальцем у небо (навмання, без фактів)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The company had to pay ________ damages after the environmental scandal.", 
        options: ["heavy", "substantial", "high", "deep"], 
        a: 1, 
        hint: "Substantial damages — значна сума компенсації збитків у юридичному контексті."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The internal audit revealed that the accountant had ________ the books.", 
        options: ["cooked", "baked", "made", "faked"], 
        a: 0, 
        hint: "Cook the books — фальсифікувати фінансові звіти / «чорна» бухгалтерія (ідіоматична колокація)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "He didn't sleep well because he was ________ with anxiety about the upcoming exam.", 
        options: ["filled", "covered", "ridden", "fraught"], 
        a: 2, 
        hint: "Ridden with anxiety / guilt — переповнений, виснажений тривогою або провиною."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The local council is taking steps to cut ________ tape and speed up business applications.", 
        options: ["blue", "white", "red", "black"], 
        a: 2, 
        hint: "Red tape — бюрократія, паперова тяганина."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The project's success is a ________ possibility if we secure this investor.", 
        options: ["distinct", "clear", "sharp", "bright"], 
        a: 0, 
        hint: "A distinct possibility — виразна, цілком реальна можливість."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The sudden resignation of the prime minister came as a ________ blow to the party.", 
        options: ["heavy", "shattering", "crushing", "hard"], 
        a: 2, 
        hint: "A crushing blow — нищівний, важкий удар (емоційно або політично)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The young scientist is on the ________ of a major breakthrough in cancer research.", 
        options: ["edge", "verge", "brink", "border"], 
        a: 1, 
        hint: "On the verge of — на порозі чогось (зазвичай позитивного чи епохального, як breakthrough)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "She has a ________ memory and can recall dates from decades ago effortlessly.", 
        options: ["photographic", "sharp", "clear", "vivid"], 
        a: 0, 
        hint: "Photographic memory — фотографічна пам'ять."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The suspect gave a ________ account of his whereabouts on the night of the crime.", 
        options: ["highly", "deeply", "wholly", "flatly"], 
        a: 0, 
        hint: "Highly specific / highly unlikely — у поєднанні з прислівником highly."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The climate scientists issued a ________ warning about the rising sea levels.", 
        options: ["stark", "sharp", "grim", "heavy"], 
        a: 0, 
        hint: "A stark warning — суворе, жорстке, серйозне попередження."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The old building was in a ________ state of disrepair before the renovation.", 
        options: ["bad", "sorry", "sad", "poor"], 
        a: 1, 
        hint: "A sorry state — жалюгідний стан (усталена прикметникова колокація)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The two countries have reached a ________ agreement to stop military actions.", 
        options: ["tentative", "loose", "soft", "brief"], 
        a: 0, 
        hint: "Tentative agreement — попередня, неостаточна домовленість."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The minister was caught in a conflict of ________ regarding the new land policy.", 
        options: ["benefits", "profits", "interests", "rights"], 
        a: 2, 
        hint: "Conflict of interests — конфлікт інтересів."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The CEO gave his ________ approval to the proposed restructuring plan.", 
        options: ["tacit", "quiet", "silent", "underground"], 
        a: 0, 
        hint: "Tacit approval / tacit consent — мовчазна згода / схвалення без слів."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The student's explanation was ________ ridiculous, and the class burst out laughing.", 
        options: ["utterly", "highly", "deeply", "strongly"], 
        a: 0, 
        hint: "Utterly ridiculous / utterly impossible — прислівник utterly підсилює негативні або абсурдні прикметники."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The defense attorney managed to cast ________ doubt on the witness's testimony.", 
        options: ["reasonable", "fair", "logical", "just"], 
        a: 0, 
        hint: "Cast reasonable doubt — посіяти обґрунтовані сумніви (юридичний термін)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The small startup has experienced a ________ learning curve over its first year.", 
        options: ["sharp", "steep", "high", "hard"], 
        a: 1, 
        hint: "A steep learning curve — стрімка крива навчання (коли треба засвоїти багато важкого матеріалу за короткий час)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The medicine will provide ________ relief from the chronic back pain.", 
        options: ["fast", "prompt", "temporary", "short"], 
        a: 2, 
        hint: "Temporary relief — тимчасове полегшення."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The professor's lecture on quantum mechanics was ________ food for thought.", 
        options: ["rich", "deep", "heavy", "ample"], 
        a: 3, 
        hint: "Ample food for thought — багата / щедра пожива для роздумів."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The government decided to ________ a curfew to restore order in the city.", 
        options: ["impose", "put", "force", "set"], 
        a: 0, 
        hint: "Impose a curfew — запровадити комендантську годину."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "She gave a ________ sigh of relief when she found her lost passport.", 
        options: ["heavy", "deep", "big", "loud"], 
        a: 1, 
        hint: "A deep sigh of relief — глибоке зітхання полегшення."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The company's decision to fire the union leader caused widespread ________.", 
        options: ["condemnation", "offense", "disapproval", "blame"], 
        a: 0, 
        hint: "Widespread condemnation — повсюдне, широке засудження."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The negotiations reached a dead ________ because neither side would compromise.", 
        options: ["stop", "end", "lock", "halt"], 
        a: 1, 
        hint: "Reach a dead end — зайти в глухий кут."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The historical museum holds documents of ________ value to researchers.", 
        options: ["priceless", "inestimable", "high", "deep"], 
        a: 1, 
        hint: "Of inestimable value — має неоціненне значення / цінність, яку неможливо виміряти."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The political speech was designed to trigger a ________ reaction from the public.", 
        options: ["gut", "heart", "brain", "deep"], 
        a: 0, 
        hint: "A gut reaction — інтуїтивна / підсвідома реакція («відчуття нутром»)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The economic forecast suggests that the retail sector faces a ________ future.", 
        options: ["dark", "bleak", "dim", "gray"], 
        a: 1, 
        hint: "A bleak future — похмуре, невтішне, безперспективне майбутнє."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The new mobile application has met with ________ success across Asia.", 
        options: ["phenomenal", "huge", "wide", "extreme"], 
        a: 0, 
        hint: "Phenomenal success — феноменальний, колосальний успіх."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The software upgrade caused a ________ error in the database system.", 
        options: ["fatal", "deadly", "killing", "terminal"], 
        a: 0, 
        hint: "A fatal error — фатальна помилка (комп'ютерний/технічний термін)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The policy change had a ________ effect on low-income families.", 
        options: ["disproportionate", "unequal", "unbalanced", "biased"], 
        a: 0, 
        hint: "A disproportionate effect — непропорційний вплив."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The manager wanted to find a ________ solution that would satisfy both clients.", 
        options: ["workable", "doing", "practicing", "easy"], 
        a: 0, 
        hint: "A workable solution — життєздатне, реальне до виконання рішення."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The international legal body decided to ________ criminal charges against the dictator.", 
        options: ["make", "bring", "put", "give"], 
        a: 1, 
        hint: "Bring criminal charges — висунути кримінальні звинувачення."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "I have a ________ suspicion that they are planning a surprise party for me.", 
        options: ["sneaking", "creeping", "hiding", "walking"], 
        a: 0, 
        hint: "A sneaking suspicion — підозра, яка закрадається; смутне передчуття."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The factory closure will have ________ implications for the town's employment rate.", 
        options: ["wide-ranging", "broad-moving", "far-going", "deep-sitting"], 
        a: 0, 
        hint: "Wide-ranging implications — далекосяжні, масштабні наслідки."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The university guidelines require students to choose a topic of ________ interest.", 
        options: ["mutual", "common", "shared", "joint"], 
        a: 0, 
        hint: "Mutual interest — взаємний інтерес."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The actor has always kept his private life ________ wrapped up from the media.", 
        options: ["closely", "tightly", "securely", "strictly"], 
        a: 1, 
        hint: "Tightly wrapped / tightly controlled — суворо закритий, затаємний."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The novel's plot relies heavily on a ________ coincidence at the very end.", 
        options: ["strange", "bizarre", "striking", "heavy"], 
        a: 2, 
        hint: "A striking coincidence — вражаючий збіг обставин."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "He is a ________ smoker and consumes at least two packs a day.", 
        options: ["heavy", "chronic", "hard", "deep"], 
        a: 0, 
        hint: "A heavy smoker — запеклий курець (також heavy traffic, heavy rain)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The board members had a ________ debate before voting on the merger.", 
        options: ["heated", "warm", "hot", "fiery"], 
        a: 0, 
        hint: "A heated debate — палкі, гарячі дебати."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The detective managed to gather ________ evidence to secure an arrest warrant.", 
        options: ["solid", "hard", "conclusive", "heavy"], 
        a: 2, 
        hint: "Conclusive evidence — переконливі, неспростовні докази."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The presentation gave a ________ outline of the company's five-year strategy.", 
        options: ["broad", "wide", "flat", "thin"], 
        a: 0, 
        hint: "A broad outline — загальний опис, начерк, загальні риси."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The internal conflict led to a ________ split within the political party.", 
        options: ["deep", "heavy", "wide", "bitter"], 
        a: 3, 
        hint: "A bitter split / bitter dispute — запеклий, гострий розкол."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The local police department is under ________ scrutiny following the incident.", 
        options: ["heavy", "intense", "sharp", "deep"], 
        a: 1, 
        hint: "Under intense scrutiny — під прискіпливим, пильним наглядом / вивченням."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The company was forced to abandon the project due to ________ financial difficulties.", 
        options: ["insurmountable", "unbeatable", "undone", "heavy"], 
        a: 0, 
        hint: "Insurmountable difficulties — непереборні труднощі."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The judge gave the young offender a ________ sentence because it was his first crime.", 
        options: ["light", "soft", "lenient", "mild"], 
        a: 2, 
        hint: "A lenient sentence — м'який, поблажливий вирок."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The public was left in ________ shock after the news of the terrorist attack.", 
        options: ["deep", "profound", "heavy", "total"], 
        a: 1, 
        hint: "In profound shock / profound grief — у стані глибокого шоку або глибокого смутку."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The old friends had a ________ conversation about their childhood memories.", 
        options: ["nostalgic", "long-forgotten", "wistful", "bittersweet"], 
        a: 3, 
        hint: "Bittersweet conversation / memory — гірко-солодкий (що викликає водночас і сум, і радість)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The regional government is making a ________ effort to clean up the local rivers.", 
        options: ["concerted", "united", "joint", "heavy"], 
        a: 0, 
        hint: "Make a concerted effort — докладати узгоджених, спільних зусиль."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The job offer was too good an opportunity to ________ down.", 
        options: ["turn", "put", "throw", "give"], 
        a: 0, 
        hint: "Turn down an offer — відхилити пропозицію (фразове поєднання/колокація)."
    },
    { 
        part: 1,
        topic: "Collocations",
        q: "The athlete's career was cut short due to a ________ injury during training.", 
        options: ["career-ending", "fatal", "heavy", "severe"], 
        a: 0, 
        hint: "A career-ending injury — травма, що завершує кар'єру (дуже популярний журналістський та академічний зворот)."
    },

    // --- 2. Phrasal Verbs ---
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The management decided to ________ off the annual gala due to unexpected budget deficits.", 
        options: ["put", "call", "set", "turn"], 
        a: 1, 
        hint: "Call off — скасувати (cancel). Put off означало б лише перенести на інший час."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "It took the young entrepreneur months to ________ up with a viable business plan.", 
        options: ["come", "make", "think", "catch"], 
        a: 0, 
        hint: "Come up with — придумати, запропонувати (ідею, план)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "She was completely taken ________ when her supervisor announced his sudden resignation.", 
        options: ["away", "back", "aback", "off"], 
        a: 2, 
        hint: "Be taken aback — бути приголомшеним, заскоченим зненацька."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The local police department promised to look ________ the complaints regarding late-night noise.", 
        options: ["into", "after", "for", "over"], 
        a: 0, 
        hint: "Look into — розслідувати, вивчати деталі справи (investigate)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "Despite numerous rejections, he refused to ________ up on his dream of becoming an author.", 
        options: ["give", "turn", "break", "put"], 
        a: 0, 
        hint: "Give up on — здатися, припинити спроби вірити в щось/когось."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "We need to ________ out the exact cost of the raw materials before signing the contract.", 
        options: ["think", "work", "count", "make"], 
        a: 1, 
        hint: "Work out — обчислити, вирахувати (calculate)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The heavy morning fog caused the flight to be ________ up for nearly three hours.", 
        options: ["kept", "held", "taken", "put"], 
        a: 1, 
        hint: "Hold up — затримувати (delay). Часто вживається у пасивному стані (be held up)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "I accidentally ran ________ an old classmate while shopping at the supermarket yesterday.", 
        options: ["into", "across", "over", "after"], 
        a: 0, 
        hint: "Run into someone — випадково зустріти когось (syn. bump into)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The newly launched streaming platform is beginning to ________ off among younger audiences.", 
        options: ["go", "take", "run", "set"], 
        a: 1, 
        hint: "Take off — швидко стати успішним/популярним (про бізнес, ідею чи продукт)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "He had to ________ down the job offer because the salary did not meet his expectations.", 
        options: ["put", "take", "turn", "bring"], 
        a: 2, 
        hint: "Turn down — відхилити, відмовити (reject)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The small startup was eventually ________ over by a massive multinational corporation.", 
        options: ["taken", "brought", "run", "turned"], 
        a: 0, 
        hint: "Take over — поглинути, взяти під контроль (іншу компанію)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The strict laws were designed to ________ down on cybercriminals and identity thieves.", 
        options: ["cut", "put", "break", "clamp"], 
        a: 3, 
        hint: "Clamp down on — рішуче придушувати, посилювати заходи боротьби з чимось."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The digital textbook can ________ up for the lack of interactive materials in class.", 
        options: ["make", "take", "do", "keep"], 
        a: 0, 
        hint: "Make up for — компенсувати щось (compensate)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The true nature of his complex scheme didn't ________ out until the investigation ended.", 
        options: ["turn", "come", "bring", "get"], 
        a: 1, 
        hint: "Come out — ставати відомим, виявлятися (про правду, факти)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The scientific team decided to ________ out a series of tests to confirm their theory.", 
        options: ["make", "carry", "take", "bring"], 
        a: 1, 
        hint: "Carry out — проводити, виконувати (дослідження, експерименти, накази)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "I cannot ________ out what this distorted ancient inscription is supposed to mean.", 
        options: ["make", "do", "see", "take"], 
        a: 0, 
        hint: "Make out — розібрати, розгледіти, зрозуміти щось насилу."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The non-profit organization was ________ up to help refugees integrate into the community.", 
        options: ["put", "brought", "set", "made"], 
        a: 2, 
        hint: "Set up — заснувати, започаткувати (організацію, бізнес)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "If you don't know the exact meaning of the term, you should ________ it up in the dictionary.", 
        options: ["look", "see", "watch", "check"], 
        a: 0, 
        hint: "Look up — шукати інформацію в довіднику, словнику чи інтернеті."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The regular workshops helped the foreign students ________ up with the intense curriculum.", 
        options: ["keep", "catch", "hold", "make"], 
        a: 1, 
        hint: "Catch up with — наздогнати (інших за рівнем, знаннями)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The distinct smell of rotten eggs is ________ off by this specific chemical reaction.", 
        options: ["given", "taken", "thrown", "put"], 
        a: 0, 
        hint: "Give off — виділяти, випускати (запах, тепло, світло, газ)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The lecture on macroeconomics ________ out to be much more fascinating than I expected.", 
        options: ["turned", "came", "ended", "brought"], 
        a: 0, 
        hint: "Turn out — виявитися (в результаті)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The legal department advised the board to ________ out of the controversial deal.", 
        options: ["go", "run", "back", "turn"], 
        a: 2, 
        hint: "Back out (of) — вийти з угоди, відмовитися від виконання обіцянки в останній момент."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "Her excellent grandparents were the ones who ________ her up in a quiet rural environment.", 
        options: ["grew", "brought", "raised", "set"], 
        a: 1, 
        hint: "Bring up — виховувати (дитину). Зверни увагу: grow up означає 'рости/дорослішати' самостійно."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The software automated system helps the company ________ down on paper waste.", 
        options: ["fall", "cut", "put", "turn"], 
        a: 1, 
        hint: "Cut down on — зменшити споживання або використання чогось (reduce)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The rebel army managed to ________ down the corrupt regime after a long siege.", 
        options: ["take", "bring", "put", "turn"], 
        a: 1, 
        hint: "Bring down — повалити, скинути (уряд, владу, режим)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The car suddenly ________ down on the most isolated section of the highway.", 
        options: ["broke", "fell", "went", "cut"], 
        a: 0, 
        hint: "Break down — зламатися (про техніку, транспорт)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The general manager decided to ________ into the financial reports before the meeting.", 
        options: ["go", "look", "see", "run"], 
        a: 0, 
        hint: "Go into — детально досліджувати, заглиблюватися в аналіз чогось."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "We need to find someone reliable to ________ after the laboratory animals over the weekend.", 
        options: ["see", "watch", "look", "keep"], 
        a: 2, 
        hint: "Look after — доглядати за кимось/чимось (take care of)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The bold project proposal was flatly ________ down by the conservative city council.", 
        options: ["turned", "put", "cast", "thrown"], 
        a: 0, 
        hint: "Turn down — відхилити (пропозицію, ідею)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "They had to ________ up a loan from the national bank to complete the bridge construction.", 
        options: ["take", "bring", "get", "make"], 
        a: 0, 
        hint: "Take up (a loan / insurance) — оформити, взяти (кредит, позику, страховку)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The criminal managed to ________ away with the stolen diamonds despite the tight security.", 
        options: ["run", "get", "break", "make"], 
        a: 1, 
        hint: "Get away with — уникнути покарання, втекти з вкраденим."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The long-standing treaty was ________ by the outbreak of the sudden border war.", 
        options: ["broken down", "torn up", "cut off", "put away"], 
        a: 1, 
        hint: "Tear up — розірвати, анулювати (документ, угоду, контракт) у прямому чи переносному сенсі."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The new interns are expected to ________ in with the rest of the development team quickly.", 
        options: ["go", "suit", "match", "fit"], 
        a: 3, 
        hint: "Fit in (with) — гармонійно вписуватися, адаптуватися до колективу."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "She likes to ________ out from the crowd by wearing eccentric and colorful vintage suits.", 
        options: ["step", "stand", "look", "shine"], 
        a: 1, 
        hint: "Stand out — виділятися, кидатися в очі (be noticeable)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The tech company had to ________ off hundreds of workers due to the economic recession.", 
        options: ["lay", "put", "turn", "fire"], 
        a: 0, 
        hint: "Lay off — звільнити з роботи через скорочення штату/економічні причини (не через провину працівника)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The meeting dragged ________ for hours without any tangible decision being made.", 
        options: ["out", "on", "away", "along"], 
        a: 1, 
        hint: "Drag on — нудно та надто довго тягтися (про час, збори, процес)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "He promised to ________ by her side no matter how difficult the court trial became.", 
        options: ["hold", "keep", "stand", "stay"], 
        a: 2, 
        hint: "Stand by someone — підтримувати когось у важкі часи, залишатися вірним."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The local database server suddenly ________ down, causing widespread panic in the office.", 
        options: ["went", "fell", "broke", "dropped"], 
        a: 0, 
        hint: "Went down — перестав працювати (про сервери, вебсайти, комп'ютерні системи)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "I will ________ up the proposal with the executive board during the next session.", 
        options: ["bring", "take", "put", "raise"], 
        a: 0, 
        hint: "Bring up — порушити питання, згадати тему для обговорення (mention)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The legal dispute ________ down to a basic disagreement over the property boundaries.", 
        options: ["comes", "boils", "falls", "runs"], 
        a: 1, 
        hint: "Boil down to — зводитися до чогось (до самої суті)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The massive project was ________ back by a series of severe supply chain disruptions.", 
        options: ["put", "held", "kept", "set"], 
        a: 3, 
        hint: "Set back — затримати прогрес або розвиток чогось (delay)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "You need to ________ in the application form completely before submitting it to the desk.", 
        options: ["write", "fill", "make", "put"], 
        a: 1, 
        hint: "Fill in / Fill out — заповнювати (анкету, бланк)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The two countries decided to ________ up diplomatic relations after decades of cold war.", 
        options: ["take", "open", "set", "break"], 
        a: 0, 
        hint: "Take up — відновлювати, розпочинати знову (стосунки, хобі, діяльність)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The brilliant scheme was carefully ________ out by a group of cyber security experts.", 
        options: ["thought", "made", "worked", "carried"], 
        a: 0, 
        hint: "Thought out — детально продумати (план, стратегію)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The old warehouse was ________ down to make room for a modern residential complex.", 
        options: ["pulled", "broken", "taken", "cut"], 
        a: 0, 
        hint: "Pull down — зносити, демонтувати (будівлі, споруди)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The virus epidemic ________ out in the overcrowded urban areas during early winter.", 
        options: ["broke", "burst", "spread", "came"], 
        a: 0, 
        hint: "Break out — раптово початися (про епідемії, війни, пожежі)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "You can ________ on him to deliver the confidential documents completely on time.", 
        options: ["trust", "rely", "believe", "depend"], 
        a: 1, 
        hint: "Rely on / Count on — покладатися на когось (хоча depend on теж підходить, традиційна фраза 'ти можеш покластися' — rely on або count on)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The historical museum was ________ into by professional art thieves last Tuesday.", 
        options: ["broken", "entered", "cut", "burst"], 
        a: 0, 
        hint: "Break into — незаконно вдертися, проникнути з метою пограбування."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The dynamic marketing team managed to ________ across their main ideas very effectively.", 
        options: ["get", "make", "bring", "put"], 
        a: 0, 
        hint: "Get across — чітко пояснити, донести (думку, повідомлення)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The toxic chemicals in the river will ________ out a serious environmental hazard.", 
        options: ["bring", "make", "give", "carry"], 
        a: 0, 
        hint: "Bring out — виявляти, спричиняти появу чогось (також випускати у продаж продукт)."
    },
	// === PHRASAL VERBS (Питання 51-100) — ЧАСТИНА 1: ЛЕКСИКА ===
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The candidate's legal team managed to ________ down the false accusations during the debate.", 
        options: ["live", "stare", "wear", "stomp"], 
        a: 1, 
        hint: "Stare down — впевнено протистояти загрозі, змусити когось відступити або спростувати звинувачення."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The detailed report ________ out the main causes of the global economic crisis.", 
        options: ["sets", "puts", "gives", "takes"], 
        a: 0, 
        hint: "Set out — детально, чітко викладати чи пояснювати інформацію (у письмовому вигляді)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "I am confident that this temporary market decline will soon ________ over.", 
        options: ["blow", "pass", "go", "run"], 
        a: 0, 
        hint: "Blow over — минутися, затихнути (про скандал, кризу, шторм) без серйозних наслідків."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The university professors always advise students to ________ down key arguments during lectures.", 
        options: ["take", "make", "hold", "keep"], 
        a: 0, 
        hint: "Take down — записувати, занотовувати інформацію (syn. write down)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "It's difficult to ________ out what she is saying because her accent is incredibly thick.", 
        options: ["make", "take", "see", "hear"], 
        a: 0, 
        hint: "Make out — розібрати на слух або розгледіти щось з великими зусиллями."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The scientific breakthrough was ________ about by years of rigorous laboratory research.", 
        options: ["brought", "taken", "carried", "come"], 
        a: 0, 
        hint: "Bring about — спричинити, викликати якісь зміни (cause to happen)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "She decided to ________ up yoga to reduce the stress caused by her management job.", 
        options: ["take", "go", "make", "set"], 
        a: 0, 
        hint: "Take up — почати займатися чимось новим (хобі, спорт, діяльність)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The electricity company threatens to ________ off our power supply if the bill isn't paid.", 
        options: ["cut", "take", "break", "put"], 
        a: 0, 
        hint: "Cut off — відімкнути, припинити постачання (води, газу, електрики)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The teacher told the lazy students that they had to ________ in their essays by Friday.", 
        options: ["hand", "give", "take", "send"], 
        a: 0, 
        hint: "Hand in — здавати роботу (вчителю, керівнику, офіційній особі)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "He didn't want to ________ up the painful memories of his childhood during the interview.", 
        options: ["bring", "call", "take", "wake"], 
        a: 0, 
        hint: "Bring up — згадувати, піднімати тему або питання для розмови."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The financial auditors managed to ________ down the error to a single mistyped digit.", 
        options: ["track", "follow", "look", "run"], 
        a: 0, 
        hint: "Track down — вистежити, знайти після тривалих пошуків."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "He is a brilliant team leader who knows how to ________ the best in his colleagues.", 
        options: ["bring out", "take out", "turn out", "make out"], 
        a: 0, 
        hint: "Bring out (the best) — виявляти, підкреслювати найкращі якості в комусь."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The global pandemic forced the airline to ________ down its international operations.", 
        options: ["scale", "cut", "drop", "turn"], 
        a: 0, 
        hint: "Scale down — зменшувати масштаби, скорочувати виробництво чи діяльність."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "I cannot understand how you can ________ up with such a messy room every single day.", 
        options: ["put", "keep", "live", "stand"], 
        a: 0, 
        hint: "Put up with — терпіти, миритися з чимось неприємним (tolerate)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The long-awaited sequel to the science-fiction movie didn't quite ________ up to expectations.", 
        options: ["live", "come", "match", "stand"], 
        a: 0, 
        hint: "Live up to — виправдовувати (очікування, надії, репутацію)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The investigative journalist accidentally ________ across a secret government archive.", 
        options: ["came", "ran", "found", "bumped"], 
        a: 0, 
        hint: "Come across — випадково натрапити на щось (find by chance)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The local economy is expected to ________ up once the new deep-water port is opened.", 
        options: ["pick", "take", "go", "rise"], 
        a: 0, 
        hint: "Pick up — покращуватися, відновлюватися (про бізнес, економіку, торгівлю)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The contract stipulates that either party can ________ out of the agreement with a 30-day notice.", 
        options: ["opt", "back", "turn", "get"], 
        a: 0, 
        hint: "Opt out (of) — відмовитися від участі, вийти з програми чи угоди за власним бажанням."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The dynamic marketing campaign helped the brand ________ through to a global audience.", 
        options: ["break", "get", "come", "go"], 
        a: 0, 
        hint: "Break through — прорватися, досягти успіху попри перешкоди чи конкуренцію."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The factory had to ________ out more than five thousand microchips per day to meet demand.", 
        options: ["turn", "make", "give", "run"], 
        a: 0, 
        hint: "Turn out — випускати, виробляти у великій кількості (produce)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "He didn't mean to ________ out the secret, but it slipped out during the casual conversation.", 
        options: ["let", "give", "blurt", "throw"], 
        a: 2, 
        hint: "Blurt out — бовкнути, вибовкати таємницю ненароком, не подумавши."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The legal negotiations ________ on for weeks because neither side wanted to compromise.", 
        options: ["dragged", "pulled", "held", "carried"], 
        a: 0, 
        hint: "Drag on — нудно та надто довго тривати (про процес, час)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The technical support team advised me to ________ down the router and restart it.", 
        options: ["power", "turn", "shut", "switch"], 
        a: 0, 
        hint: "Power down — вимкнути складний електронний пристрій з мережі."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The ancient text was so damaged that no historian could ________ out its meaning.", 
        options: ["puzzle", "figure", "work", "make"], 
        a: 1, 
        hint: "Figure out — збагнути, зрозуміти, розібратися в чомусь."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The software developers had to ________ up with a patch to fix the security vulnerability.", 
        options: ["come", "make", "think", "do"], 
        a: 0, 
        hint: "Come up with — розробити, створити, придумати (ідею, рішення проблеми)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The corporate restructuring will ________ about significant changes in the management.", 
        options: ["bring", "take", "carry", "set"], 
        a: 0, 
        hint: "Bring about — призвести до, зумовити (зміни, реформи)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The elderly couple decided to ________ down their massive house and move to a cozy apartment.", 
        options: ["downsize", "scale", "cut", "close"], 
        a: 0, 
        hint: "Downsize — у контексті нерухомості означає зміну житла на менше/економніше."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The heavy storm ________ down several old oak trees along the main avenue.", 
        options: ["blew", "cut", "brought", "knocked"], 
        a: 0, 
        hint: "Blow down — повалити вітром, здути (дерева, паркани)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The suspicious activity was ________ up by an automated cyber security filter.", 
        options: ["flagged", "picked", "taken", "caught"], 
        a: 0, 
        hint: "Flag up — привернути увагу до проблеми, помітити щось підозріле."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "He managed to ________ off the difficult presentation despite being incredibly nervous.", 
        options: ["pull", "carry", "bring", "make"], 
        a: 0, 
        hint: "Pull off — успішно впоратися з чимось дуже складним (зробити на ура)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The two business partners ________ out over the distribution of the yearly profits.", 
        options: ["fell", "broke", "split", "turned"], 
        a: 0, 
        hint: "Fall out (with someone) — посваритися, зіпсувати стосунки через розбіжності."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The police had to ________ off the dangerous area until the bomb squad arrived.", 
        options: ["cordon", "close", "shut", "lock"], 
        a: 0, 
        hint: "Cordon off — оточити територію стрічкою або очепленням заради безпеки."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The long-lost journal finally ________ up in a dusty box in the university basement.", 
        options: ["turned", "showed", "came", "brought"], 
        a: 0, 
        hint: "Turn up — несподівано знайтися чи з'явитися (особливо після тривалих пошуків)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The sales figures for this quarter simply do not ________ up with the inventory records.", 
        options: ["square", "match", "tie", "add"], 
        a: 0, 
        hint: "Square up / Square with — узгоджуватися, чітко відповідати одне одному (про цифри, факти)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "We need to ________ out all the old, outdated files to clear up disk space on the server.", 
        options: ["weed", "clean", "throw", "clear"], 
        a: 0, 
        hint: "Weed out — відсіювати, видаляти непотрібне, застаріле або неякісне."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The new tax policy will ________ heavily on small and medium-sized local businesses.", 
        options: ["weigh", "bear", "press", "fall"], 
        a: 1, 
        hint: "Bear on / Bear heavily on — тиснути, справляти негативний або сильний вплив."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "She was so exhausted by the intense heat that she ________ out during the marathon.", 
        options: ["passed", "blacked", "fainted", "dropped"], 
        a: 0, 
        hint: "Passed out — знепритомніти (lose consciousness)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The project manager asked everyone to ________ in with ideas for the marketing strategy.", 
        options: ["pitch", "join", "give", "throw"], 
        a: 0, 
        hint: "Pitch in — активно долучатися до спільної роботи, ділитися ідеями."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The target company managed to ________ off the hostile takeover bid by selling shares.", 
        options: ["ward", "fend", "fight", "keep"], 
        a: 1, 
        hint: "Fend off — відбивати атаки, захищатися (від ворожого поглинання компанії)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "I will ________ over the terms of the agreement before I sign the final paperwork.", 
        options: ["pore", "look", "go", "read"], 
        a: 0, 
        hint: "Pore over — дуже уважно, зосереджено вивчати документи чи тексти."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The direct evidence didn't ________ out the initial hypothesis made by the researchers.", 
        options: ["bear", "hold", "stand", "carry"], 
        a: 0, 
        hint: "Bear out — підтверджувати (правдивість слів, теорії або гіпотези)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The structural flaws in the bridge design were ________ up during the safety inspection.", 
        options: ["brought", "showed", "pointed", "taken"], 
        a: 2, 
        hint: "Point out — вказувати на щось, звертати особливу увагу."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The criminal group planned to ________ up the secure bank vault using plastic explosives.", 
        options: ["blow", "break", "tear", "burst"], 
        a: 0, 
        hint: "Blow up — підірвати вибухівкою."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The company had to ________ down its official statement to avoid further controversy.", 
        options: ["tone", "soften", "quiet", "water"], 
        a: 0, 
        hint: "Tone down — пом'якшувати тон, робити заяву менш різкою або агресивною."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The regular training sessions are starting to ________ off in her athletic performance.", 
        options: ["pay", "give", "bring", "turn"], 
        a: 0, 
        hint: "Pay off — окупатися, приносити очікувані позитивні результати."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "He didn't want to ________ into detail about his personal life during the business lunch.", 
        options: ["go", "step", "get", "come"], 
        a: 0, 
        hint: "Go into detail — заглиблюватися в деталі, детально розписувати ситуацію."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The newly discovered documents ________ new light on the events of the American Revolution.", 
        options: ["cast", "throw", "shed", "bring"], 
        a: 2, 
        hint: "Shed light on — проливати світло на щось, робити зрозумілим."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "You should always ________ up your critical computer data to an external drive or cloud.", 
        options: ["backup", "back", "keep", "save"], 
        a: 1, 
        hint: "Back up — робити резервну копію файлів або даних."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The long-term effects of this medical treatment have not been fully ________ out yet.", 
        options: ["tested", "proven", "borne", "carried"], 
        a: 2, 
        hint: "Borne out — третя форма від bear out (бути підтвердженим фактами чи наукою)."
    },
    { 
        part: 1,
        topic: "Phrasal Verbs",
        q: "The old business structure was completely ________ apart by the innovative digital startup.", 
        options: ["torn", "broken", "pulled", "cut"], 
        a: 0, 
        hint: "Tear apart — розірвати на шматки, вщент деструктурувати або знищити старе."
    },
	

    // --- 3. Idioms & Fixed Expressions ---
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The family made a ________ effort to find their lost dog before nightfall.", 
        options: ["last-ditch", "final-minute", "end-row", "late-hour"], 
        a: 0, 
        hint: "Ідіома: 'last-ditch effort' — відчайдушна спроба в останній момент (з останнього окопу)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Don't take his help for ________; he is doing it out of pure kindness.", 
        options: ["granted", "sure", "true", "accepted"], 
        a: 0, 
        hint: "Сталий вираз: 'take something for granted' — сприймати щось як належне (не цінувати)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Investing in education might be expensive now, but it pays off in the long ________.", 
        options: ["race", "run", "time", "distance"], 
        a: 1, 
        hint: "Сталий вираз: 'in the long run' — у довгостроковій перспективі / зрештою."
    },

    // --- 4. Words easily confused / Synonyms ---
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "This is the exact ________ where the historic treaty was signed in 1918.", 
        options: ["place", "spot", "area", "zone"], 
        a: 1, 
        hint: "Синоніми: 'spot' використовується для позначення дуже конкретної, точної точки/місця на карті, де щось відбулося."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "She has been looking for a well-paid ________ in the IT sector for three months.", 
        options: ["work", "job", "career", "employment"], 
        a: 1, 
        hint: "Confused words: 'job' — обчислювальний іменник (a job), позначає конкретну посаду. 'Work' — необчислювальний."
    },

    // --- 5. Dependent Prepositions ---
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "Are you aware ________ the potential risks involved in this medical procedure?", 
        options: ["with", "about", "of", "for"], 
        a: 2, 
        hint: "Залежний прийменник: прикметник 'aware' завжди вимагає після себе прийменник 'of' (aware of — усвідомлювати)."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The success of our project depends entirely ________ your team's dedication.", 
        options: ["on", "in", "at", "from"], 
        a: 0, 
        hint: "Залежний прийменник: дієслово 'depend' завжди вживається з прийменником 'on' (залежати від)."
    },

    // === ЧАСТИНА 2: ГРАМАТИКА (Для майбутнього наповнення) ===
    { 
        part: 2,
        topic: "Grammar", // загальна мітка для частини 2, поки ми її не деталізували
        q: "Hardly ________ the station when the train pulled out.", 
        options: ["I had reached", "had I reached", "did I reach", "I reached"], 
        a: 1, 
        hint: "Частина 2 (Граматика): Це інверсія. Після заперечувальних прислівників на кшталт Hardly йде допоміжне дієслово перед підметом."
    }
];