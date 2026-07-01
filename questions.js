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
    // === IDIOMS & FIXED EXPRESSIONS (Питання 1-50) — ЧАСТИНА 1: ЛЕКСИКА ===
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I wanted to voice my disagreement during the meeting, but at the last minute I got cold ________.", 
        options: ["hands", "feet", "heart", "mind"], 
        a: 1, 
        hint: "Get cold feet — злякатися в останній момент, струсити (lose courage)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The supervisor told the team to cut ________ and finish the project before the weekend.", 
        options: ["edges", "corners", "lines", "paths"], 
        a: 1, 
        hint: "Cut corners — халтурити, робити щось швидко/дешево на шкоду якості."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Don't worry about the small technical issues; look at the big ________ instead.", 
        options: ["photo", "view", "picture", "scene"], 
        a: 2, 
        hint: "The big picture — загальна картина, ситуація в цілому."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The pricing of the new smartphone is still up in the ________ as management argues.", 
        options: ["sky", "air", "cloud", "wind"], 
        a: 1, 
        hint: "Up in the air — під питанням, ще не вирішено остаточно."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "It's time to face the ________ and admit that our marketing campaign was a total failure.", 
        options: ["music", "truth", "crowd", "wall"], 
        a: 0, 
        hint: "Face the music — розплачуватися за свої вчинки, мужньо зустріти критику чи неприємності."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "She was over the ________ when she found out she had received the full academic scholarship.", 
        options: ["sky", "stars", "moon", "cloud"], 
        a: 2, 
        hint: "Over the moon — бути на сьомому небі від щастя, неймовірно радіти."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The expensive renovation of the old town hall turned out to be a white ________.", 
        options: ["crow", "elephant", "bear", "whale"], 
        a: 1, 
        hint: "A white elephant — щось дуже дороге, але абсолютно марне й обтяжливе в утриманні."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I am feeling a bit under the ________ today, so I think I will stay in bed.", 
        options: ["weather", "rain", "storm", "cloud"], 
        a: 0, 
        hint: "Under the weather — почуватися неважливо, прихворіти."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The secret leaked because somebody accidentally let the cat out of the ________.", 
        options: ["box", "bag", "cage", "room"], 
        a: 1, 
        hint: "Let the cat out of the bag — пробовкатися, ненароком виказати таємницю."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He didn't mean to insult you; he just has a habit of putting his foot in his ________.", 
        options: ["eye", "mouth", "face", "shoe"], 
        a: 1, 
        hint: "Put your foot in your mouth — бовкнути щось недоречне, безтактне або образливе."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Her sudden decision to resign came completely out of the ________.", 
        options: ["blue", "sky", "dark", "nowhere"], 
        a: 0, 
        hint: "Out of the blue — абсолютно несподівано, як грім серед ясного неба."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "We need to hit the ________ running if we want to beat our rivals to the market.", 
        options: ["ground", "road", "floor", "street"], 
        a: 0, 
        hint: "Hit the ground running — одразу взятися за справу з великим ентузіазмом та енергією."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The new digital strategy helped us stay ahead of the ________ in our industry.", 
        options: ["line", "wave", "curve", "trend"], 
        a: 2, 
        hint: "Stay ahead of the curve — йти на крок попереду, бути прогресивнішим за конкурентів."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I don't see eye to ________ with my colleague on how the budget should be allocated.", 
        options: ["eye", "face", "mind", "head"], 
        a: 0, 
        hint: "See eye to eye — повністю погоджуватися з кимось, мати однакові погляди."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The professor told us to stop beating around the ________ and state our main thesis.", 
        options: ["tree", "bush", "wall", "topic"], 
        a: 1, 
        hint: "Beat around the bush — ходити довкола, говорити натяками замість суті."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Buying a used car online without an inspection is like buying a pig in a ________.", 
        options: ["box", "poke", "bag", "cage"], 
        a: 1, 
        hint: "Buy a pig in a poke — купувати кота в мішку (щось наосліп, не перевіривши якість)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Let's call it a ________; we've been working on this code for ten hours straight.", 
        options: ["time", "day", "night", "shift"], 
        a: 1, 
        hint: "Call it a day — закруглятися, завершувати роботу на сьогодні."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I know the software inside ________, so feel free to ask me any technical questions.", 
        options: ["out", "and out", "down", "away"], 
        a: 0, 
        hint: "Know something inside out — знати щось досконало, вздовж і впоперек."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The legal fees for this lengthy trial are going to cost an arm and a ________.", 
        options: ["hand", "foot", "leg", "head"], 
        a: 2, 
        hint: "Cost an arm and a leg — коштувати ціле багатство, бути надзвичайно дорогим."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Keep your ________ up; things will definitely get better once the audit is over.", 
        options: ["head", "chin", "face", "eyes"], 
        a: 1, 
        hint: "Keep your chin up — не вішати носа, триматися бадьоро попри труднощі."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I don't think we should change our plans now; let's play it by ________ instead.", 
        options: ["hand", "eye", "ear", "mind"], 
        a: 2, 
        hint: "Play it by ear — діяти за обставинами, експромтом, без чіткого плану."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The sound of my neighbor practicing the violin drives me up the ________.", 
        options: ["wall", "roof", "ceiling", "stairs"], 
        a: 0, 
        hint: "Drive someone up the wall — сильно дратувати, виводити когось із себе."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He didn't really want to help, he was just paying lip ________ to the charity project.", 
        options: ["talk", "service", "praise", "word"], 
        a: 1, 
        hint: "Pay lip service to — підтримувати лише на словах, займатися лицемірством."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The final exam was a piece of ________; I finished it in less than twenty minutes.", 
        options: ["bread", "pie", "cake", "sweet"], 
        a: 2, 
        hint: "A piece of cake — дуже легка справа, дрібниця."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "You should take his promises with a grain of ________; he rarely keeps them.", 
        options: ["sugar", "salt", "pepper", "sand"], 
        a: 1, 
        hint: "Take with a grain of salt — ставитися до чогось скептично, ділити навпіл, не вірити на слово."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The corporate manager decided to spill the ________ and reveal the upcoming merger.", 
        options: ["beans", "peas", "milk", "tea"], 
        a: 0, 
        hint: "Spill the beans — видати таємницю, розказати секрет завчасно."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He hit the ________ on the head when he diagnosed the exact glitch in the system.", 
        options: ["screw", "nail", "hammer", "pin"], 
        a: 1, 
        hint: "Hit the nail on the head — влучити в саме яблучко, сказати/зробити абсолютно правильно."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The tech company is on the ________ edge of artificial intelligence research.", 
        options: ["cutting", "sharp", "front", "first"], 
        a: 0, 
        hint: "Cutting edge — передовий, найсучасніший (найновіші технології)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "We must accept that failure is part and ________ of starting a brand new business.", 
        options: ["portion", "parcel", "piece", "section"], 
        a: 1, 
        hint: "Part and parcel — невід'ємна частина чогось."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He has been burning the ________ oil to prepare for his final bar exam.", 
        options: ["midnight", "evening", "night", "late"], 
        a: 0, 
        hint: "Burn the midnight oil — працювати або вчитися допізна, ночами."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "You are barking up the wrong ________ if you think I have the key to the archive room.", 
        options: ["dog", "tree", "path", "wall"], 
        a: 1, 
        hint: "Bark up the wrong tree — йти хибним шляхом, звинувачувати не ту людину чи шукати не там."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Her sudden success overnight proved that she was a dark ________ in the competition.", 
        options: ["horse", "sheep", "cat", "bird"], 
        a: 0, 
        hint: "A dark horse — темна конячка (маловідома людина, яка несподівано перемагає)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Don't count your ________ before they hatch; the client hasn't signed the contract yet.", 
        options: ["eggs", "chickens", "birds", "profits"], 
        a: 1, 
        hint: "Don't count your chickens before they hatch — курчат по осені рахують (не радій результату завчасно)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The economic crisis forced many citizens to tighten their ________.", 
        options: ["shoes", "belts", "pockets", "coats"], 
        a: 1, 
        hint: "Tighten one's belt — затягнути пасок, почати економити."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Winning the prestigious trophy was the ________ on the cake for his incredible career.", 
        options: ["icing", "cream", "sugar", "sweet"], 
        a: 0, 
        hint: "The icing on the cake — вишенька на торті (приємне доповнення до і так хорошої ситуації)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The arguments used by the defense attorney simply hold no ________.", 
        options: ["weight", "water", "truth", "ground"], 
        a: 1, 
        hint: "Hold water — витримувати критику, бути логічним/переконливим (про аргументи чи теорії)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He is safe and ________ after spending a freezing night lost in the mountains.", 
        options: ["sound", "well", "healthy", "whole"], 
        a: 0, 
        hint: "Safe and sound — цілий і неушкоджений, у повній безпеці."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "She decided to take the bull by the ________ and ask her boss for a promotion directly.", 
        options: ["tail", "ears", "horns", "head"], 
        a: 2, 
        hint: "Take the bull by the horns — взяти бика за роги (діяти рішуче перед лицем труднощів)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I cannot agree with this proposal; it goes completely against the ________.", 
        options: ["flow", "grain", "wind", "tide"], 
        a: 1, 
        hint: "Go against the grain — йти врозріз з переконаннями, бути неприродним чи протилежним чиємусь єству."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He was left in the ________ when his business partners disappeared with all the money.", 
        options: ["dark", "lurch", "cold", "rain"], 
        a: 1, 
        hint: "Leave in the lurch — кинути напризволяще, залишити в біді без допомоги."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The long-lost relatives haven't seen each other once in a blue ________.", 
        options: ["star", "moon", "sun", "sky"], 
        a: 1, 
        hint: "Once in a blue moon — вкрай рідко, майже ніколи."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The marketing director is known for always speaking her ________ openly.", 
        options: ["mind", "thoughts", "heart", "words"], 
        a: 0, 
        hint: "Speak one's mind — відверто висловлювати свою думку, казати те, що думаєш."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "We must do this strictly by the ________ to avoid any issues with the tax auditors.", 
        options: ["law", "book", "rules", "page"], 
        a: 1, 
        hint: "By the book — суворо за правилами/законом, як пише книжка."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He is always trying to curry ________ with the manager by bringing him coffee.", 
        options: ["favor", "praise", "respect", "honor"], 
        a: 0, 
        hint: "Curry favor with someone — підлещуватися, намагатися здобути чиюсь прихильність у корысливих цілях."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The final decision is in your ________ now; we are waiting for your answer.", 
        options: ["hands", "court", "side", "mind"], 
        a: 1, 
        hint: "The ball is in your court — м'яч на твоєму боці (черга діяти або приймати рішення за тобою)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The small firm had to sink or ________ when the multinational giant entered the market.", 
        options: ["swim", "float", "fly", "run"], 
        a: 0, 
        hint: "Sink or swim — або пан, або пропав (випливти або потонути, самостійно рятуватися)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I managed to pass the driver's license test by the skin of my ________.", 
        options: ["hands", "teeth", "face", "fingers"], 
        a: 1, 
        hint: "By the skin of one's teeth — ледве-ледве, дивом, у самий останній момент."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I wanted to ask her out, but I lost my ________ at the very last moment.", 
        options: ["heart", "mind", "nerve", "head"], 
        a: 2, 
        hint: "Lose one's nerve — втратити мужність, злякатися в рішучу мить."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The dynamic player is a breath of fresh ________ for our struggling football team.", 
        options: ["wind", "air", "sky", "water"], 
        a: 1, 
        hint: "A breath of fresh air — ковток свіжого повітря (щось нове та позитивне, що змінює ситуацію)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He is an old ________ at fixing laptops, so he will solve this glitch easily.", 
        options: ["hand", "man", "head", "mind"], 
        a: 0, 
        hint: "An old hand — досвідчений майстер, експерт у своїй справі, який «зуби з'їв» на чомусь."
    },
	// === IDIOMS & FIXED EXPRESSIONS (Питання 51-100) — ЧАСТИНА 1: ЛЕКСИКА ===
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The political scandal set the ________ among the pigeons, causing panic in the parliament.", 
        options: ["cat", "fox", "wolf", "hound"], 
        a: 0, 
        hint: "Set the cat among the pigeons — вчинити переполох, викликати серйозне обурення чи паніку."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I wanted to clear the ________ with my partner after our fierce argument yesterday.", 
        options: ["sky", "air", "wind", "ground"], 
        a: 1, 
        hint: "Clear the air — розрядити атмосферу, з'ясувати стосунки, щоб зняти напругу."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Don't get so upset about his remarks; just let them roll off your ________ back.", 
        options: ["duck's", "swan's", "goose's", "horse's"], 
        a: 0, 
        hint: "Like water off a duck's back — як з гуски вода (про зауваження чи критику, які абсолютно не хвилюють людину)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The young entrepreneur has a chip on his ________ because he didn't go to an Ivy League college.", 
        options: ["head", "shoulder", "heart", "mind"], 
        a: 1, 
        hint: "Have a chip on one's shoulder — мати образу на весь світ через почуття меншовартості, бути через це агресивним."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I am trying to keep my head above ________ while paying off these massive university loans.", 
        options: ["water", "sea", "clouds", "waves"], 
        a: 0, 
        hint: "Keep one's head above water — триматися на плаву, ледве зводити кінці з кінцями (особливо у фінансах)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The police are trying to piece ________ the timeline of events leading up to the robbery.", 
        options: ["together", "up", "out", "away"], 
        a: 0, 
        hint: "Piece together — збирати по шматочках, відновлювати картину подій або факти."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "She decided to throw ________ the sponge and admit that she couldn't pass the rigorous code test.", 
        options: ["in", "away", "out", "down"], 
        a: 0, 
        hint: "Throw in the sponge / towel — визнати себе переможеним, здатися, кинути рушник."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The unexpected bonus from my company really made my ________.", 
        options: ["day", "week", "time", "life"], 
        a: 0, 
        hint: "Make someone's day — підняти настрій на весь день, зробити когось щасливим."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The CEO was accused of feathering his own ________ instead of investing in product quality.", 
        options: ["pocket", "nest", "hat", "bed"], 
        a: 1, 
        hint: "Feather one's own nest — набивати власну кишеню, гріти руки на робочому місці."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Her prediction about the market crash was spot ________, surprising all the senior analysts.", 
        options: ["on", "in", "at", "up"], 
        a: 0, 
        hint: "Spot on — абсолютно точно, в саме яблучко (syn. accurate)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The legal advisor told us to keep our options ________ until we receive the official offer.", 
        options: ["clear", "open", "free", "wide"], 
        a: 1, 
        hint: "Keep one's options open — не приймати поспішних рішень, залишати за собою право вибору."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "We must give credit where credit is ________; her design was the foundation of our success.", 
        options: ["due", "owed", "given", "paid"], 
        a: 0, 
        hint: "Give credit where credit is due — віддати належне комусь, визнати чиїсь заслуги."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I have a gut ________ that something is wrong with the company's financial balance.", 
        options: ["feeling", "thought", "mind", "sense"], 
        a: 0, 
        hint: "Gut feeling — інтуїція, внутрішнє чуття, передчуття."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The project collapsed because there were too many chiefs and not enough ________.", 
        options: ["Indians", "workers", "soldiers", "helpers"], 
        a: 0, 
        hint: "Too many chiefs and not enough Indians — забагато начальників і мало виконавців (коли всі хочуть керувати)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He is always sitting on the ________, refusing to support either of the political factions.", 
        options: ["wall", "fence", "chair", "bench"], 
        a: 1, 
        hint: "Sit on the fence — займати нейтральну позицію, вагатися між двома сторонами, не мати чіткої думки."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He didn't make a fortune, but he managed to make ends ________.", 
        options: ["meet", "join", "close", "tie"], 
        a: 0, 
        hint: "Make ends meet — зводити кінці з кінцями, ледве заробляти на прожиття."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I didn't expect him to jump down my ________ just because I arrived ten minutes late.", 
        options: ["neck", "throat", "face", "head"], 
        a: 1, 
        hint: "Jump down someone's throat — грубо накинутися на когось із критикою чи криком, розлютитися."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The details are classified; she told me about the new technology under the ________.", 
        options: ["rose", "table", "counter", "carpet"], 
        a: 0, 
        hint: "Under the rose (sub rosa) / Under the table — таємно. Але 'under the rose' — це класичний вираз для секретних розмов, а 'under the table' — частіше про хабарі."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He had to swallow his ________ and apologize for the mistake he made in front of the clients.", 
        options: ["anger", "pride", "words", "tears"], 
        a: 1, 
        hint: "Swallow one's pride — наступити на горло власній гордості, переступити через себе."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The general manager decided to give the new digital specialist a free ________.", 
        options: ["hand", "arm", "rein", "path"], 
        a: 2, 
        hint: "Give a free rein — надати повну свободу дій або карт-бланш (також часто вживається 'free hand')."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Don't make such a mountain out of a ________; it's just a minor typos in the report.", 
        options: ["molehill", "stone", "rock", "hill"], 
        a: 0, 
        hint: "Make a mountain out of a molehill — робити з мухи слона, перебільшувати масштаби проблеми."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The internal investigations completely cleared his name, so he is off the ________.", 
        options: ["line", "hook", "anchor", "rope"], 
        a: 1, 
        hint: "Off the hook — зірватися з гачка, уникнути покарання чи неприємностей."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I would take what he says with a pinch of ________; he is known for exaggerating facts.", 
        options: ["salt", "pepper", "sugar", "dust"], 
        a: 0, 
        hint: "Take with a pinch/grain of salt — ставитися з недовірою, скептично сприймати інформацію."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He is always building castles in the ________ instead of studying for his state exams.", 
        options: ["sky", "air", "clouds", "mind"], 
        a: 1, 
        hint: "Build castles in the air — будувати повітряні замки, мріяти про нездійсненне."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The law firm decided to pull out all the ________ to win this high-profile corporate case.", 
        options: ["stops", "plugs", "lines", "ropes"], 
        a: 0, 
        hint: "Pull out all the stops — докласти максимум зусиль, зробити все можливе задля досягнення мети."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "She has been walking on ________ ever since she received the job offer from Google.", 
        options: ["clouds", "air", "eggshells", "stars"], 
        a: 1, 
        hint: "Walk on air — бути на сьомому небі від щастя (а от walking on eggshells — це поводитися вкрай обережно)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "We need to get our act ________ if we want to release the app before the deadline.", 
        options: ["together", "up", "fixed", "done"], 
        a: 0, 
        hint: "Get one's act together — зібратися, навести лад у своїх справах, почати діяти організовано."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I don't think she will change her mind; she is as stubborn as a ________.", 
        options: ["mule", "donkey", "horse", "bull"], 
        a: 0, 
        hint: "As stubborn as a mule — впертий як віслюк (у англійській традиції — mule (мул))."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The deal was signed behind closed ________, without consulting the minor shareholders.", 
        options: ["gates", "doors", "walls", "windows"], 
        a: 1, 
        hint: "Behind closed doors — за зачиненими дверима, таємно від громадськості."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The price of real estate in the capital is skyrocketing by leaps and ________.", 
        options: ["jumps", "bounds", "steps", "distances"], 
        a: 1, 
        hint: "By leaps and bounds — семимильними кроками, стрімко, дуже швидко."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "She has been feeling down in the ________ ever since her research paper was rejected.", 
        options: ["dumps", "blues", "lows", "ground"], 
        a: 0, 
        hint: "Down in the dumps — бути пригніченим, у поганому настрої, хандрити."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The software developers are working against the ________ to deliver the update tonight.", 
        options: ["time", "clock", "hour", "deadline"], 
        a: 1, 
        hint: "Work against the clock — поспішати зробити щось до певного часу, працювати наввипередки з часом."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The whole team was kept in the ________ about the company's planned layoffs.", 
        options: ["dark", "shadow", "blind", "secret"], 
        a: 0, 
        hint: "Keep someone in the dark — тримати в невіданні, приховувати інформацію."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He didn't study at all, so he will have to trust his ________ luck during the exam.", 
        options: ["pot", "blind", "pure", "raw"], 
        a: 1, 
        hint: "Blind luck — сліпа удача, чисте везіння навмання."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The sudden tax increase was a bitter ________ to swallow for small business owners.", 
        options: ["pill", "medicine", "apple", "truth"], 
        a: 0, 
        hint: "A bitter pill to swallow — гірка пігулка, яку доводиться проковтнути (неприємний факт, з яким треба змиритися)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "Let's get down to brass ________ and discuss the final numbers of the budget.", 
        options: ["tacks", "pins", "screws", "nails"], 
        a: 0, 
        hint: "Get down to brass tacks — перейти до конкретики, перейти до суті справи."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The two direct competitors are at ________ drawn over the patent infringement.", 
        options: ["swords", "knives", "daggers", "guns"], 
        a: 2, 
        hint: "At daggers drawn — на ножах, у ворожих стосунках."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I cannot remember the exact term, but it is on the tip of my ________.", 
        options: ["mouth", "lips", "tongue", "teeth"], 
        a: 2, 
        hint: "On the tip of my tongue — крутиться на язиці."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The local laboratory managed to break new ________ in genetic disease mutations.", 
        options: ["land", "ground", "soil", "field"], 
        a: 1, 
        hint: "Break new ground — відкривати нові горизонти, робити відкриття, започатковувати щось нове."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "You should learn to hold your ________ when senior staff are delivering instructions.", 
        options: ["mouth", "words", "tongue", "speech"], 
        a: 2, 
        hint: "Hold your tongue — прикусити язика, помовчати."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "They are like two peas in a ________; they have identical hobbies and clothing tastes.", 
        options: ["pod", "box", "bag", "shell"], 
        a: 0, 
        hint: "Like two peas in a pod — як дві краплі води схожі, схожі як дві горошини в стручку."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The small electronic shop went to the ________ because of the giant online store.", 
        options: ["dogs", "wall", "floor", "ground"], 
        a: 1, 
        hint: "Go to the wall — збанкрутувати, потерпіти крах (також є вираз go to the dogs — занепасти)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I decided to give him a piece of my ________ after he crashed my car.", 
        options: ["heart", "mind", "brain", "thought"], 
        a: 1, 
        hint: "Give someone a piece of one's mind — висказати все, що думаєш, відчитати, вилаяти когось."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The newly hired accountant is still learning the ________ in our department.", 
        options: ["rules", "ropes", "lines", "steps"], 
        a: 1, 
        hint: "Learn the ropes — освоювати тонкощі справи, входити в курс справ."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "She managed to keep a straight ________ during the hilarious comedy presentation.", 
        options: ["face", "head", "look", "mind"], 
        a: 0, 
        hint: "Keep a straight face — утримуватися від сміху, зберігати серйозний вигляд."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The heavy investment turned out to be a flash in the ________, yielding no long-term value.", 
        options: ["pan", "sky", "pot", "fire"], 
        a: 0, 
        hint: "A flash in the pan — миттєвий успіх, короткочасний спалах, який не мав продовження."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The dynamic defense attorney managed to turn the ________ in favor of the suspect.", 
        options: ["waves", "tables", "chairs", "game"], 
        a: 1, 
        hint: "Turn the tables — змінити ситуацію на власну користь, помінятися ролями з супротивником."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "He is a real book________; he spends every single weekend reading in the library.", 
        options: ["bug", "fly", "worm", "bee"], 
        a: 2, 
        hint: "Bookworm — книжковий хробак, людина, яка обожнює читати."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "The internal management conflict was just a storm in a ________.", 
        options: ["glass", "teacup", "pot", "bucket"], 
        a: 1, 
        hint: "A storm in a teacup — буря в склянці води (багато галасу з нічого, дріб'язковий скандал)."
    },
    { 
        part: 1,
        topic: "Idioms & Fixed Expressions",
        q: "I am completely snowed ________ with administrative work before the national holiday.", 
        options: ["under", "down", "up", "in"], 
        a: 0, 
        hint: "Snowed under (with work) — завалений роботою вище голови."
    },
	

    // =========================================================================
// ТЕМА: Words easily confused / Synonyms (Питання 1-100) — ЧАСТИНА 1 та 2
// =========================================================================

    // --- ЧАСТИНА 1 (Питання 1-50) ---
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The project was cancelled because the company couldn't secure ________ funding.", 
        options: ["adequate", "adapted", "adopted", "adjacent"], 
        a: 0, 
        hint: "Adequate — достатній, відповідний. Adapted — пристосований." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The heavy smoke from the factory began to ________ everyone's breathing in the area.", 
        options: ["affect", "effect", "infect", "deflect"], 
        a: 0, 
        hint: "Affect — дієслово (впливати). Effect — переважно іменник (результат, ефект)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The political dissident was granted ________ in the British embassy.", 
        options: ["asylum", "refugee", "sanctuary", "evacuation"], 
        a: 0, 
        hint: "Grant asylum — надати політичний притулок (офіційне стале поєднання)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The new smart watch can ________ your heart rate and sleep patterns automatically.", 
        options: ["monitor", "evaluate", "examine", "audit"], 
        a: 0, 
        hint: "Monitor — відстежувати, моніторити (процес у реальному часі за допомогою приладів)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The graph shows a ________ decline in the company's annual profits since 2022.", 
        options: ["steady", "stiff", "still", "stern"], 
        a: 0, 
        hint: "Steady decline — стабільне, постійне падіння." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The customs officer refused to let them pass because their documents were ________.", 
        options: ["invalid", "unable", "ineffective", "incapable"], 
        a: 0, 
        hint: "Invalid documents — недійсні документи (які втратили юридичну силу)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The target of the marketing strategy is to ________ more young people to the brand.", 
        options: ["attract", "distract", "extract", "contract"], 
        a: 0, 
        hint: "Attract — приваблювати, залучати. Distract — відволікати." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The suspect claimed he was completely ________ of the diamond theft.", 
        options: ["innocent", "ignorant", "harmless", "faultless"], 
        a: 0, 
        hint: "Innocent of smth — невинуватий у чомусь." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The manager's harsh words had a negative ________ on the team's motivation.", 
        options: ["impact", "impulse", "impression", "implication"], 
        a: 0, 
        hint: "Have an impact on — мати вплив на щось/когось." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The university decided to ________ the tuition fees for international students next year.", 
        options: ["raise", "rise", "arise", "lift"], 
        a: 0, 
        hint: "Raise (transitive verb, потребує додатка) — піднімати, підвищувати (fees, hands). Rise (intransitive) — підніматися самостійно." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The recipe requires you to ________ the butter before adding it to the flour.", 
        options: ["melt", "dissolve", "thaw", "blend"], 
        a: 0, 
        hint: "Melt — танути, топити (тверде тіло під теплом перетворюється на рідину). Dissolve — розчиняти у воді." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The prime minister gave a ________ speech outlining the new economic reforms.", 
        options: ["brief", "short", "concise", "abrupt"], 
        a: 0, 
        hint: "Brief speech — коротка промова (тривалість події)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The legal document requires a ________ from both parties to become valid.", 
        options: ["signature", "sign", "signal", "sight"], 
        a: 0, 
        hint: "Signature — підпис (іменник). Sign — знак, вивіска або дієслово 'підписувати'." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The weather forecast says the heavy rain will ________ into snow by evening.", 
        options: ["turn", "change", "convert", "transform"], 
        a: 0, 
        hint: "Turn into — перетворитися на щось (природна зміна стану)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The small shop was forced to close because it couldn't ________ with big supermarkets.", 
        options: ["compete", "contest", "combat", "oppose"], 
        a: 0, 
        hint: "Compete with — конкурувати з кимось." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The direct evidence proved that the accountant had ________ the financial reports.", 
        options: ["falsified", "fake", "mistaken", "wronged"], 
        a: 0, 
        hint: "Falsify — фальсифікувати, підробляти дані чи документи." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The local laboratory is conducting research to find a ________ for the rare disease.", 
        options: ["cure", "heal", "treat", "recovery"], 
        a: 0, 
        hint: "Find a cure for — знайти ліки/засіб від хвороби. Heal — заживати (про рани)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The sudden noise from the street ________ the students during their final exam.", 
        options: ["distracted", "attracted", "abstracted", "extracted"], 
        a: 0, 
        hint: "Distract — відволікати увагу." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The ancient artifacts on display at the local museum are completely ________.", 
        options: ["genuine", "genius", "generous", "general"], 
        a: 0, 
        hint: "Genuine — справжній, автентичний, не підробка." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The company will ________ any travel expenses incurred during your business trip.", 
        options: ["reimburse", "refund", "repay", "reward"], 
        a: 0, 
        hint: "Reimburse expenses — відшкодовувати витрачені робочі кошти. Refund — повертати гроші за товар." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The witness gave a highly ________ description of the suspect's car to the police.", 
        options: ["accurate", "acute", "actual", "active"], 
        a: 0, 
        hint: "Accurate — точний, правильний до деталей. Actual — фактичний, реальний." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The new manager is trying to ________ a friendlier atmosphere in the office.", 
        options: ["foster", "force", "forward", "found"], 
        a: 0, 
        hint: "Foster an atmosphere / collaboration — заохочувати, плекати, сприяти розвитку атмосфери." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The tech company decided to ________ its head office from Chicago to New York.", 
        options: ["relocate", "remove", "replace", "revolve"], 
        a: 0, 
        hint: "Relocate — змінювати місце проживання або переносити компанію/офіс." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The harsh Arctic climate makes the northern regions of Canada completely ________.", 
        options: ["inhospitable", "hostile", "unfriendly", "unpopular"], 
        a: 0, 
        hint: "Inhospitable — негостинний, непридатний для життя через суворі природні умови." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The sudden power outage ________ all industrial production at the factory for five hours.", 
        options: ["halted", "hesitated", "hovered", "hastened"], 
        a: 0, 
        hint: "Halt — зупинити, припинити рух або діяльність (syn. stop)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The internal audit revealed that the employee had ________ access to secret files.", 
        options: ["unauthorized", "unauthentic", "unapproved", "unlawful"], 
        a: 0, 
        hint: "Unauthorized access — несанкціонований доступ (без офіційного дозволу)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The defensive walls of the ancient castle were built to ________ enemy attacks.", 
        options: ["withstand", "withdraw", "withhold", "within"], 
        a: 0, 
        hint: "Withstand — витримувати, чинити опір, не піддаватися силі." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The new software update is fully ________ with older computer operating systems.", 
        options: ["compatible", "comparable", "competitive", "compliant"], 
        a: 0, 
        hint: "Compatible with — сумісний із технічної точки зору." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The dynamic marketing manager gave a very ________ presentation to the investors.", 
        options: ["persuasive", "pervasive", "persistent", "perceptive"], 
        a: 0, 
        hint: "Persuasive — переконливий (здатний схилити на свій бік). Pervasive — повальний, усеохоплюючий." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The detailed dictionary includes clear sentences to ________ how words are used.", 
        options: ["illustrate", "illuminate", "illusion", "eliminate"], 
        a: 0, 
        hint: "Illustrate — ілюструвати, наочно показувати на прикладах." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The government official tried to ________ the rumors about the imminent tax increase.", 
        options: ["dispel", "disperse", "discard", "discharge"], 
        a: 0, 
        hint: "Dispel rumors / doubts — розвіювати чутки, сумніви або страхи." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The local library is an ________ resource for students preparing for examinations.", 
        options: ["invaluable", "worthless", "priceless", "valuable"], 
        a: 0, 
        hint: "Invaluable — безцінний (надзвичайно корисний, коли цінність неможливо виміряти). Теж правильний за логікою варіант 'valuable', але 'invaluable' — сильніший синонім, що частіше тестується." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The sales of ice cream are highly ________ on the unpredictable weather conditions.", 
        options: ["dependent", "dependable", "defensive", "deficient"], 
        a: 0, 
        hint: "Dependent on — залежний від чогось. Dependable — надійний." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The severe storm caused ________ damage to the electricity infrastructure across the region.", 
        options: ["extensive", "intensive", "expensive", "exclusive"], 
        a: 0, 
        hint: "Extensive damage — масштабні, великі за площею чи обсягом руйнування." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The dynamic company decided to ________ its operation into the European market.", 
        options: ["expand", "expend", "extend", "expose"], 
        a: 0, 
        hint: "Expand — розширювати (бізнес, територію, межі). Expend — витрачати ресурси." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The bright student received a prestigious award for her ________ academic performance.", 
        options: ["outstanding", "outdated", "outgoing", "outspoken"], 
        a: 0, 
        hint: "Outstanding — видатний, блискучий, надзвичайний." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The young boy was highly ________ by the historic stories about ancient Rome.", 
        options: ["fascinated", "interested", "attracted", "excited"], 
        a: 0, 
        hint: "Fascinated by — сильно заінтригований, зачарований чимось." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The primary school teacher was incredibly ________ with the noisy children.", 
        options: ["patient", "passionate", "passive", "painstaking"], 
        a: 0, 
        hint: "Patient — терплячий." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The software update is designed to ________ the security features of the mobile app.", 
        options: ["enhance", "enlarge", "enforce", "encourage"], 
        a: 0, 
        hint: "Enhance — покращувати, удосконалювати якість або властивості (security, quality)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The military general decided to ________ the base due to the approaching enemy army.", 
        options: ["evacuate", "escape", "avoid", "depart"], 
        a: 0, 
        hint: "Evacuate — евакуювати людей або залишати військову базу з міркувань безпеки." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The economic analysts predict that fuel prices will fluctuate ________ over the next month.", 
        options: ["considerably", "considerately", "consistently", "consciously"], 
        a: 0, 
        hint: "Fluctuate considerably — значно, суттєво коливатися." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The experienced pilot managed to execute a ________ emergency landing in the field.", 
        options: ["safe", "secure", "sound", "stable"], 
        a: 0, 
        hint: "Safe landing — безпечна посадка (фізично неушкоджена)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The research team needs to collect ________ evidence before publishing the theory.", 
        options: ["substantial", "substantive", "substituted", "subjective"], 
        a: 0, 
        hint: "Substantial evidence — вагомі, солідні, значні докази." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The old wooden bridge was replaced because it was structurally ________.", 
        options: ["unsafe", "insecure", "unstable", "invalid"], 
        a: 0, 
        hint: "Structurally unsafe — структурно небезпечний (про споруди, будівлі)." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The CEO gave a ________ explanation of the budget cuts, which lasted only two minutes.", 
        options: ["brief", "short", "abrupt", "concise"], 
        a: 0, 
        hint: "Brief explanation — коротке пояснення за часом." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The sharp increase in sales was ________ to the successful winter marketing campaign.", 
        options: ["attributed", "contributed", "distributed", "allocated"], 
        a: 0, 
        hint: "Attributed to — приписувати чомусь, вважати наслідком чогось." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The dynamic software company tries to ________ innovative ideas among its engineers.", 
        options: ["foster", "force", "found", "forward"], 
        a: 0, 
        hint: "Foster ideas / growth — заохочувати розвиток ідей." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The legal advisor recommended making a ________ copy of the corporate contract.", 
        options: ["duplicate", "double", "dual", "twin"], 
        a: 0, 
        hint: "Duplicate copy — точна копія, дублікат документа." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The administrative staff worked late to ________ the office files before the inspection.", 
        options: ["organize", "organic", "originate", "orchestrate"], 
        a: 0, 
        hint: "Organize files — організувати, упорядкувати документи." 
    },
    { 
        part: 1, 
        topic: "Words easily confused / Synonyms", 
        q: "The local fire department acted quickly to ________ the blazing house fire.", 
        options: ["extinguish", "distinguish", "exhaust", "expel"], 
        a: 0, 
        hint: "Extinguish a fire — гасити пожежу чи вогонь (syn. put out)." 
    },

    // --- ЧАСТИНА 2 (Питання 51-100) ---
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The higher taxes will inevitably ________ the disposable income of middle-class families.", 
        options: ["affect", "effect", "impact", "reflect"], 
        a: 0, 
        hint: "Affect — дієслово (впливати на щось). Effect — переважно іменник (результат, ефект)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The new manager gave me a very nice ________ on my presentation skills yesterday.", 
        options: ["compliment", "complement", "praise", "applause"], 
        a: 0, 
        hint: "Compliment — комплімент (похвала). Complement — доповнення (те, що робить повним)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The Sahara is the largest hot ________ in the world, stretching across North Africa.", 
        options: ["desert", "dessert", "abandon", "wilderness"], 
        a: 0, 
        hint: "Desert (з однією 's') — пустеля. Dessert (з двома 's') — десерт, солодка страва."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The long-term economic strategy helped to ________ the country's financial growth.", 
        options: ["ensure", "insure", "assure", "secure"], 
        a: 0, 
        hint: "Ensure — гарантувати, забезпечувати. Insure — страхувати від фінансових втрат."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The criminal managed to ________ the police by hiding in the dense forest for three days.", 
        options: ["elude", "allude", "delude", "illusion"], 
        a: 0, 
        hint: "Elude — уникати, вислизати (від переслідування, закону чи розуміння)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "She likes her coffee black, with ________ no sugar or milk added.", 
        options: ["altogether", "all together", "completely", "totally"], 
        a: 0, 
        hint: "Altogether — повністю, цілком (adverb). All together — усі разом (групою)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The school principal is a man of strict ________ who never tolerates cheating.", 
        options: ["principles", "principals", "rules", "beliefs"], 
        a: 0, 
        hint: "Principles — принципи, моральні переконання. Principal — директор школи."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The dark, heavy curtains were ________ to block out the morning sunlight completely.", 
        options: ["stationary", "stationery", "still", "fixed"], 
        a: 0, 
        hint: "Stationary (через 'a') — нерухомий, стаціонарний. Stationery (через 'e') — канцтовари."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The financial advisor gave us some highly ________ tips on how to invest our savings.", 
        options: ["valuable", "invaluable", "priceless", "worthy"], 
        a: 1, 
        hint: "Invaluable — безцінний, надзвичайно корисний. Вищий ступінь значення синоніму valuable."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The historic treaty was signed by the leaders of both ________ nations.", 
        options: ["adjacent", "neighboring", "close", "nearby"], 
        a: 1, 
        hint: "Neighboring nations — сусідні держави (стале геополітичне поєднання)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The new tax policy will have a major ________ on small business owners next year.", 
        options: ["effect", "affect", "impact", "consequence"], 
        a: 0, 
        hint: "Have a major effect on — мати великий вплив/ефект (потрібен іменник після артикля)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The company decided to ________ the employee's proposal for a flexible remote work schedule.", 
        options: ["accept", "except", "agree", "approve"], 
        a: 0, 
        hint: "Accept — приймати (пропозицію, умови). Except — окрім, за винятком."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "You need to ________ your driving style to the icy road conditions during winter.", 
        options: ["adapt", "adopt", "adept", "adjust"], 
        a: 0, 
        hint: "Adapt to — пристосовуватися, адаптуватися. Adopt — приймати (закон), всиновлювати."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The local council is planning to build a new sports ________ near the city center.", 
        options: ["site", "sight", "cite", "place"], 
        a: 0, 
        hint: "Site — місце будівництва, майданчик. Sight — зір, визначне місце."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The graph shows a ________ increase in internet usage over the past decade.", 
        options: ["continual", "continuous", "constant", "perpetual"], 
        a: 1, 
        hint: "Continuous — безперервний (триває без жодної зупинки). Continual — той, що повторюється регулярно з перервами."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The judicial committee will decide whether the evidence is ________ to the murder case.", 
        options: ["relevant", "relative", "related", "connected"], 
        a: 0, 
        hint: "Relevant to — доречний, релевантний, який має пряме відношення до справи."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The project failed because the team members were ________ to collaborate effectively.", 
        options: ["unable", "incapable", "impossible", "disabled"], 
        a: 0, 
        hint: "Unable to do smth — нездатний щось зробити (вживається з інфінітивом)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The dynamic CEO tried to ________ confidence in his employees during the market crash.", 
        options: ["inspire", "aspire", "conspire", "perspire"], 
        a: 0, 
        hint: "Inspire confidence — вселяти впевненість, надихати."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The police warning helped to ________ further acts of vandalism in the residential area.", 
        options: ["prevent", "avoid", "protect", "resist"], 
        a: 0, 
        hint: "Prevent — запобігати (зупинити подію до того, як вона станеться)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The customer service representative was very ________ and answered all my questions politely.", 
        options: ["courteous", "court", "curt", "cautious"], 
        a: 0, 
        hint: "Courteous — ввічливий, галантний (syn. polite). Curt — різкий, грубий."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The software update is ________ with older operating systems, so you don't need to upgrade.", 
        options: ["compatible", "comparable", "competitive", "compliant"], 
        a: 0, 
        hint: "Compatible with — сумісний із (про техніку, софт чи людей)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The newly married couple bought a beautiful house in a ________ area of the city.", 
        options: ["residential", "resident", "residing", "suburban"], 
        a: 0, 
        hint: "Residential area — житловий/спальний район."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The sharp decline in sales has caused ________ concern among the company investors.", 
        options: ["widespread", "broad", "scattered", "expanded"], 
        a: 0, 
        hint: "Widespread concern — широко поширене, повсюдне занепокоєння."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The young artist has a ________ talent for painting, which she discovered in early childhood.", 
        options: ["natural", "physical", "normal", "typical"], 
        a: 0, 
        hint: "Natural talent — природний, вроджений талант."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The severe weather conditions forced the airlines to ________ all flights to London.", 
        options: ["suspend", "delay", "postpone", "interrupt"], 
        a: 0, 
        hint: "Suspend flights — тимчасово офіційно призупинити польоти."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The detailed report provides a ________ overview of the global economic trends.", 
        options: ["comprehensive", "comprehensible", "understanding", "extended"], 
        a: 0, 
        hint: "Comprehensive — всеосяжний, детальний, повний. Comprehensible — зрозумілий."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The direct route across the mountains is too ________ for heavy transport vehicles.", 
        options: ["hazardous", "harmful", "injurious", "toxic"], 
        a: 0, 
        hint: "Hazardous — небезпечний, ризикований (про умови, шляхи, речовини)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The team leader managed to ________ the project deadline despite several technical issues.", 
        options: ["meet", "fit", "match", "fulfill"], 
        a: 0, 
        hint: "Meet the deadline — вкластися в терміни, дедлайн."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The primary school teacher was highly ________ with the students, never losing her temper.", 
        options: ["patient", "passionate", "passive", "painstaking"], 
        a: 0, 
        hint: "Patient — терплячий."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The legal document requires the ________ of a licensed public notary to be valid.", 
        options: ["witness", "testimony", "evidence", "proof"], 
        a: 0, 
        hint: "Requires the witness — вимагає присутності свідка (завірення свідком)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The scientific team is conducting a series of experiments to ________ their new hypothesis.", 
        options: ["verify", "justify", "magnify", "clarify"], 
        a: 0, 
        hint: "Verify a hypothesis — перевірити, верифікувати гіпотезу."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The heavy morning traffic on the main highway is a ________ occurrence for commuters.", 
        options: ["daily", "daytime", "dayday", "day-to-day"], 
        a: 0, 
        hint: "Daily occurrence — щоденне явище (те, що стається кожного дня)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The new digital layout has made the corporate website much more ________ for elderly users.", 
        options: ["accessible", "available", "approachable", "attainable"], 
        a: 0, 
        hint: "Accessible — доступний, зручний у використанні (зокрема для літніх чи людей з інвалідністю)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The sudden resignation of the prime minister caused a political ________ in the country.", 
        options: ["turmoil", "turnover", "turkey", "turnip"], 
        a: 0, 
        hint: "Political turmoil — політичний хаос, нестабільність, смятіння."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The marketing director gave a ________ nod to signal that the meeting was over.", 
        options: ["brief", "short", "concise", "abrupt"], 
        a: 0, 
        hint: "Brief nod — короткий кивок головою (тривалість)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The internal audit revealed that some financial transactions were highly ________.", 
        options: ["questionable", "inquiring", "asking", "interrogative"], 
        a: 0, 
        hint: "Questionable — сумнівний, який викликає серйозні запитання."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The young boy was highly ________ by the stories of medieval knights and castles.", 
        options: ["fascinated", "interested", "attracted", "excited"], 
        a: 0, 
        hint: "Fascinated by — захоплений, заворожений чимось (сильніше за interested)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The logistics manager tried to ________ the delivery routes to save on fuel expenses.", 
        options: ["optimize", "maximum", "increase", "utilize"], 
        a: 0, 
        hint: "Optimize routes — оптимізувати маршрути (зробити найбільш ефективними)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The bright neon signs in the city center are designed to ________ customers into shops.", 
        options: ["lure", "force", "push", "command"], 
        a: 0, 
        hint: "Lure — заманювати, приваблювати гарним виглядом чи рекламою."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The defense lawyer argued that his client acted under extreme ________ from the gang.", 
        options: ["duress", "stress", "pressure", "force"], 
        a: 0, 
        hint: "Under duress — під примусом, під загрозою сили (юридичний термін)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The new eco-friendly packaging is made from ________ materials that decompose quickly.", 
        options: ["biodegradable", "renewable", "reusable", "sustainable"], 
        a: 0, 
        hint: "Biodegradable — біорозкладний (який швидко розпадається природним шляхом)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The sound quality of the old vinyl record was ________ due to minor surface scratches.", 
        options: ["flawed", "broken", "damaged", "injured"], 
        a: 0, 
        hint: "Flawed — із дефектами, недосконалий через вади чи пошкодження."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The historic old theater was completely ________ by the catastrophic fire last night.", 
        options: ["demolished", "ruined", "destroyed", "damaged"], 
        a: 2, 
        hint: "Destroyed — повністю знищений. Demolished частіше використовується про заплановане знесення будівель технікою."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The government issued a ________ warning to citizens to stay indoors during the hurricane.", 
        options: ["stern", "hard", "strict", "grave"], 
        a: 0, 
        hint: "Stern warning — суворе, серйозне, жорстке попередження."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "She has an ________ memory for faces, remembering people she met only once years ago.", 
        options: ["incredible", "unbelievable", "impossible", "amazing"], 
        a: 0, 
        hint: "Incredible memory — неймовірна, вражаюча пам'ять."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The regular exercise and healthy diet had a ________ effect on his overall physical health.", 
        options: ["profound", "deep", "heavy", "serious"], 
        a: 0, 
        hint: "Profound effect — глибокий, дуже потужний та значний ефект."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The local artisan produces ________ jewelry that cannot be found anywhere else in the world.", 
        options: ["unique", "single", "lone", "solitary"], 
        a: 0, 
        hint: "Unique — унікальний, єдиний у своєму роді."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The online streaming platform offers a ________ selection of independent movies.", 
        options: ["diverse", "different", "various", "mixed"], 
        a: 0, 
        hint: "Diverse selection — різноманітний вибір (багато несхожих елементів)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The heavy rainfall caused the river to overflow, making the local roads completely ________.", 
        options: ["impassable", "impossible", "impassive", "impermeable"], 
        a: 0, 
        hint: "Impassable — непрохідний, непроїжджий (про дороги через перешкоди)."
    },
    { 
        part: 1,
        topic: "Words easily confused / Synonyms",
        q: "The target of the workshop is to ________ collaboration between the two creative teams.", 
        options: ["foster", "force", "follow", "forward"], 
        a: 0, 
        hint: "Foster collaboration — стимулювати, заохочувати, підтримувати співпрацю."
    },

    // =========================================================================
// ТЕМА: Dependent Prepositions (Питання 1-100) — ЛЕКСИКА / ГРАМАТИКА
// =========================================================================

    // --- ЧАСТИНА 1 (Питання 1-50) ---
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "She has always been very good ________ explaining complex mathematical theories to kids.", 
        options: ["at", "in", "with", "on"], 
        a: 0, 
        hint: "Good at smth — хороший у чомусь, здібний до чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The success of the outdoor music festival depends heavily ________ the weather conditions.", 
        options: ["on", "of", "to", "with"], 
        a: 0, 
        hint: "Depend on smth/smb — залежати від чогось/когось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "Are you interested ________ joining our corporate research and development team?", 
        options: ["in", "at", "on", "about"], 
        a: 0, 
        hint: "Interested in smth — зацікавлений у чомусь." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local police department is responsible ________ maintaining public order in this area.", 
        options: ["for", "to", "with", "about"], 
        a: 0, 
        hint: "Responsible for smth — відповідальний за щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "I am really looking forward ________ meeting your business partners next Tuesday.", 
        options: ["to", "at", "for", "on"], 
        a: 0, 
        hint: "Look forward to smth/doing smth — із нетерпінням чекати на щось (після 'to' йде герундій)." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The young graphic designer is very proud ________ her first illustrated children's book.", 
        options: ["of", "about", "for", "with"], 
        a: 0, 
        hint: "Proud of smth/smb — гордий чимось/кимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "You shouldn't rely ________ public transport if you have an important job interview.", 
        options: ["on", "at", "with", "to"], 
        a: 0, 
        hint: "Rely on smth/smb — покладатися на щось/когось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The regular training courses are highly beneficial ________ all new employees.", 
        options: ["to", "for", "with", "at"], 
        a: 0, 
        hint: "Beneficial to smb/smth — вигідний, корисний для когось/чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "Most small business owners are very afraid ________ a sudden increase in taxes.", 
        options: ["of", "from", "about", "with"], 
        a: 0, 
        hint: "Afraid of smth — боятися чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The experienced marketing manager apologized ________ making a mistake in the report.", 
        options: ["for", "to", "about", "with"], 
        a: 0, 
        hint: "Apologize for smth — вибачитися за щось (apologize to smb — вибачитися перед кимось)." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local population is deeply dissatisfied ________ the quality of medical services.", 
        options: ["with", "at", "about", "from"], 
        a: 0, 
        hint: "Dissatisfied with smth — незадоволений чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The digital layout of the new application is quite similar ________ the previous version.", 
        options: ["to", "with", "as", "like"], 
        a: 0, 
        hint: "Similar to smth — схожий на щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "She succeeded ________ graduating from the university with top honors last month.", 
        options: ["in", "at", "on", "with"], 
        a: 0, 
        hint: "Succeed in doing smth — досягти успіху в чомусь, вдатися зробити щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The students were intensely focused ________ solving the complex physics problems.", 
        options: ["on", "at", "in", "to"], 
        a: 0, 
        hint: "Focused on smth — зосереджений на чомусь." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The city of Paris is famous ________ its beautiful architecture and world-class museums.", 
        options: ["for", "about", "of", "with"], 
        a: 0, 
        hint: "Famous for smth — відомий чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "He graduated ________ Oxford University with a master's degree in international law.", 
        options: ["from", "at", "of", "in"], 
        a: 0, 
        hint: "Graduate from (a university) — випуститися з університету." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local farmers are heavily dependent ________ subsidies from the government.", 
        options: ["on", "of", "to", "from"], 
        a: 0, 
        hint: "Dependent on smth — залежний від чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The new software update is fully compatible ________ most corporate computers.", 
        options: ["with", "to", "for", "at"], 
        a: 0, 
        hint: "Compatible with smth — сумісний із чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The young boy is completely obsessed ________ playing online strategy games.", 
        options: ["with", "about", "on", "by"], 
        a: 0, 
        hint: "Obsessed with smth — одержимий чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "You need to adapt yourself ________ the new working conditions as soon as possible.", 
        options: ["to", "with", "for", "at"], 
        a: 0, 
        hint: "Adapt to smth — пристосуватися до чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The company director strongly disapproves ________ smoking inside the office building.", 
        options: ["of", "with", "about", "for"], 
        a: 0, 
        hint: "Disapprove of smth — не схвалювати щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The teacher congratulated the bright student ________ winning the national chess tournament.", 
        options: ["on", "for", "about", "with"], 
        a: 0, 
        hint: "Congratulate smb on smth — привітати когось із чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The judicial committee consists ________ five experienced high court judges.", 
        options: ["of", "from", "with", "in"], 
        a: 0, 
        hint: "Consist of smth — складатися з чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local charity organization provides homeless people ________ hot meals and warm clothes.", 
        options: ["with", "for", "to", "on"], 
        a: 0, 
        hint: "Provide smb with smth — забезпечувати когось чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The project manager is very keen ________ implementing agile methodologies in our workflow.", 
        options: ["on", "at", "about", "for"], 
        a: 0, 
        hint: "Keen on smth/doing smth — сильно захоплюватися чимось, прагнути чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The heavy morning fog was blamed ________ the catastrophic car accident on the highway.", 
        options: ["for", "on", "with", "about"], 
        a: 0, 
        hint: "Blame smth for smth — звинувачувати щось у чомусь (але blame smth on smb — покладати провину на когось)." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "She was fully aware ________ the potential financial risks involved in the investment.", 
        options: ["of", "about", "with", "on"], 
        a: 0, 
        hint: "Aware of smth — усвідомлювати щось, знати про щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local security guard prevented the unauthorized teenagers ________ entering the private laboratory.", 
        options: ["from", "of", "to", "against"], 
        a: 0, 
        hint: "Prevent smb from doing smth — заважати, не дозволяти комусь зробити щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "I am not very familiar ________ the inner workings of this new manufacturing machinery.", 
        options: ["with", "to", "about", "at"], 
        a: 0, 
        hint: "Familiar with smth — знайомий із чимось (добре розбиратися)." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The marketing assistant is brilliant ________ creating engaging content for social media channels.", 
        options: ["at", "in", "with", "on"], 
        a: 0, 
        hint: "Brilliant at smth — блискучий у чомусь (дуже талановитий)." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The custom procedures differ significantly ________ one country to another within the continent.", 
        options: ["from", "with", "between", "than"], 
        a: 0, 
        hint: "Differ from — відрізнятися від чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The young couple decided to spend all their savings ________ a two-week trip to Japan.", 
        options: ["on", "for", "in", "with"], 
        a: 0, 
        hint: "Spend money/time on smth — витрачати гроші/час на щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The new employee is completely dynamic and capable ________ handling complex legal cases.", 
        options: ["of", "to", "for", "with"], 
        a: 0, 
        hint: "Capable of smth/doing smth — здатний на щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The young children were deeply absorbed ________ watching the magic show on stage.", 
        options: ["in", "at", "with", "on"], 
        a: 0, 
        hint: "Absorbed in smth — повністю поглинений, занурений у якусь діяльність." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The defense lawyer succeeded ________ proving his client's innocence during the trial.", 
        options: ["in", "at", "on", "for"], 
        a: 0, 
        hint: "Succeed in doing smth — вдатися зробити щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The company supervisor is always very kind ________ everyone, regardless of their position.", 
        options: ["to", "with", "for", "about"], 
        a: 0, 
        hint: "Kind to smb — добрий до когось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The sudden drop in temperature resulted ________ severe crop damage for local farmers.", 
        options: ["in", "from", "to", "with"], 
        a: 0, 
        hint: "Result in smth — призвести до чогось (мати результатом)." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The little girl is completely terrified ________ large guard dogs barking loudly.", 
        options: ["of", "from", "by", "about"], 
        a: 0, 
        hint: "Terrified of smth — дуже наляканий чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The accountant was accused ________ manipulating the corporate financial statements.", 
        options: ["of", "for", "with", "in"], 
        a: 0, 
        hint: "Accuse smb of smth — звинувачувати когось у чомусь." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local sports facility is always crowded ________ teenagers on Saturday afternoons.", 
        options: ["with", "of", "by", "at"], 
        a: 0, 
        hint: "Crowded with smb/smth — переповнений кимось/чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local hospital is fully equipped ________ the latest medical technologies.", 
        options: ["with", "by", "for", "in"], 
        a: 0, 
        hint: "Equipped with smth — обладнаний чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "She has been married ________ her university classmate for more than ten years.", 
        options: ["to", "with", "for", "at"], 
        a: 0, 
        hint: "Married to smb — одружений із кимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The scientific team is still searching ________ a sustainable solution to plastic pollution.", 
        options: ["for", "to", "of", "on"], 
        a: 0, 
        hint: "Search for smth — шукати щось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The project leader was deeply disappointed ________ the low sales results last quarter.", 
        options: ["with", "for", "of", "to"], 
        a: 0, 
        hint: "Disappointed with/at/by smth — розчарований чимось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The manager needs to deal ________ the customer complaints as quickly as possible.", 
        options: ["with", "to", "on", "about"], 
        a: 0, 
        hint: "Deal with smth — мати справу з чимось, вирішувати проблему." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The university professor is very enthusiastic ________ the upcoming research project.", 
        options: ["about", "for", "with", "to"], 
        a: 0, 
        hint: "Enthusiastic about smth — сповнений ентузіазму щодо чогось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The local community strongly objects ________ the construction of a new highway here.", 
        options: ["to", "against", "with", "on"], 
        a: 0, 
        hint: "Object to smth — заперечувати проти чогось, бути проти." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The little boy was punished because he was extremely rude ________ his grandparents.", 
        options: ["to", "with", "at", "for"], 
        a: 0, 
        hint: "Rude to smb — грубий до когось." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "The regular training program focuses ________ developing leadership skills among managers.", 
        options: ["on", "at", "in", "for"], 
        a: 0, 
        hint: "Focus on smth — зосереджуватися на чомусь." 
    },
    { 
        part: 1, 
        topic: "Dependent Prepositions", 
        q: "He is highly experienced ________ managing international logistics networks.", 
        options: ["in", "at", "with", "on"], 
        a: 0, 
        hint: "Experienced in smth/doing smth — досвідчений у чомусь (також використовується 'at')." 
    },

    // --- ЧАСТИНА 2 (Питання 51-100) ---
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The administrative manager is very bad ________ remembering people's names.", 
        options: ["at", "in", "with", "about"], 
        a: 0, 
        hint: "Bad at smth — поганий у чомусь, не вміє щось робити."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The local company specializes ________ custom web design for e-commerce platforms.", 
        options: ["in", "on", "at", "with"], 
        a: 0, 
        hint: "Specialize in smth — спеціалізуватися на чомусь."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "They are planning to convert the historic old warehouse ________ a luxury apartment complex.", 
        options: ["into", "to", "in", "for"], 
        a: 0, 
        hint: "Convert smth into smth — перетворити, реконструювати щось у щось інше."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The legal department belongs ________ a large multi-national financial corporation.", 
        options: ["to", "with", "on", "at"], 
        a: 0, 
        hint: "Belong to smb/smth — належати комусь/чомусь."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The corporate director is completely content ________ the current financial results.", 
        options: ["with", "about", "at", "of"], 
        a: 0, 
        hint: "Content with smth — задоволений тим, що є (syn. satisfied with)."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The little children were terrified ________ the loud thunder during the night storm.", 
        options: ["of", "by", "from", "about"], 
        a: 0, 
        hint: "Terrified of smth — дуже наляканий чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The customer service assistant was polite ________ the angry investor despite the pressure.", 
        options: ["to", "with", "at", "for"], 
        a: 0, 
        hint: "Polite to smb — ввічливий до когось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The sharp decline in annual sales resulted ________ a major restructuring of the team.", 
        options: ["in", "from", "to", "with"], 
        a: 0, 
        hint: "Result in smth — призвести до чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The second version of the software is identical ________ the original prototype.", 
        options: ["to", "with", "as", "like"], 
        a: 0, 
        hint: "Identical to smth — ідентичний чомусь (абсолютно такий самий)."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The young athlete has successfully recovered ________ her severe knee injury.", 
        options: ["from", "of", "off", "out of"], 
        a: 0, 
        hint: "Recover from smth — одужати, відновитися після чогось (хвороби, травми)."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "He is famous ________ his unique ability to solve complex corporate conflicts quickly.", 
        options: ["for", "about", "with", "of"], 
        a: 0, 
        hint: "Famous for smth — відомий чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The business partners finally agreed ________ the terms of the new distribution contract.", 
        options: ["on", "to", "with", "at"], 
        a: 0, 
        hint: "Agree on smth — дійти спільної згоди щодо якогось питання/умов."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "You must choose ________ a career in marketing or a position in human resources.", 
        options: ["between", "among", "from", "with"], 
        a: 0, 
        hint: "Choose between X and Y — обирати між двома варіантами."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The company supervisor was very angry ________ the team for missing the final deadline.", 
        options: ["with", "at", "about", "for"], 
        a: 0, 
        hint: "Angry with smb (for doing smth) — сердитий на когось (за щось)."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The new eco-friendly car is equipped ________ an advanced electric hybrid engine.", 
        options: ["with", "by", "in", "for"], 
        a: 0, 
        hint: "Equipped with smth — обладнаний, оснащений чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The software application prevents the user ________ opening malicious email attachments.", 
        options: ["from", "to", "against", "off"], 
        a: 0, 
        hint: "Prevent smb from doing smth — заважати, захищати від виконання якоїсь дії."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The local hospital heavily depends ________ financial investments from private charities.", 
        options: ["on", "of", "to", "from"], 
        a: 0, 
        hint: "Depend on smth — залежати від чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "She was deeply disappointed ________ the low quality of the hotel room service.", 
        options: ["with", "at", "for", "by"], 
        a: 0, 
        hint: "Disappointed with smth — розчарований чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The scientific community is still looking ________ a valid explanation for the phenomenon.", 
        options: ["for", "at", "to", "after"], 
        a: 0, 
        hint: "Look for smth — шукати щось (look after — доглядати, look at — дивитися)."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The prime minister was completely unaware ________ the secret military operational plans.", 
        options: ["of", "about", "with", "on"], 
        a: 0, 
        hint: "Unaware of smth — не знати, не усвідомлювати чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The manager congratulated the young specialist ________ his brilliant sales presentation.", 
        options: ["on", "for", "about", "with"], 
        a: 0, 
        hint: "Congratulate smb on smth — привітати когось із чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The local laboratory consists ________ three primary research departments and a dark room.", 
        options: ["of", "from", "with", "in"], 
        a: 0, 
        hint: "Consist of smth — складатися з чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The public transportation network is brilliant ________ handling high volumes of passengers.", 
        options: ["at", "in", "on", "with"], 
        a: 0, 
        hint: "Brilliant at smth — неймовірно здібний, талановитий у чомусь."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The criminal was formally accused ________ breaking into the local jewelry store.", 
        options: ["of", "for", "with", "in"], 
        a: 0, 
        hint: "Accuse smb of smth — звинуватити когось у чомусь."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "He has been happily married ________ a talented landscape architect for fifteen years.", 
        options: ["to", "with", "for", "at"], 
        a: 0, 
        hint: "Married to smb — одружений із кимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The young intern is very keen ________ mastering the Python programming language.", 
        options: ["on", "at", "about", "for"], 
        a: 0, 
        hint: "Keen on smth/doing smth — сильно зацікавлений у чомусь."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The logistics company provides our factory ________ raw manufacturing materials every week.", 
        options: ["with", "for", "to", "on"], 
        a: 0, 
        hint: "Provide smb with smth — забезпечувати когось чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The city council strongly objects ________ the demolition of the historic opera theater.", 
        options: ["to", "against", "with", "on"], 
        a: 0, 
        hint: "Object to smth — виступати проти чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The final project results are deeply dependent ________ the approval of the marketing board.", 
        options: ["on", "of", "from", "to"], 
        a: 0, 
        hint: "Dependent on smth — залежний від чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The regular sports activity is highly beneficial ________ maintaining cardiovascular health.", 
        options: ["to", "for", "with", "at"], 
        a: 0, 
        hint: "Beneficial to smth — корисний, сприятливий для чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The strict supervisor strongly disapproves ________ using personal mobile phones during shifts.", 
        options: ["of", "with", "about", "for"], 
        a: 0, 
        hint: "Disapprove of smth — не схвалювати щось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The local administrative board is responsible ________ issuing building licenses in the city.", 
        options: ["for", "to", "with", "about"], 
        a: 0, 
        hint: "Responsible for smth — відповідальний за щось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The new corporate regulations are very similar ________ the guidelines used last year.", 
        options: ["to", "with", "as", "like"], 
        a: 0, 
        hint: "Similar to smth — схожий на щось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The young children were completely absorbed ________ building a giant LEGO castle.", 
        options: ["in", "at", "with", "on"], 
        a: 0, 
        hint: "Absorbed in smth — повністю занурений у якийсь процес."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The software testing team is currently dealing ________ a series of critical security bugs.", 
        options: ["with", "to", "on", "about"], 
        a: 0, 
        hint: "Deal with smth — мати справу з чимось, розбиратися з проблемою."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The digital design of this smartphone differs completely ________ the rival company's model.", 
        options: ["from", "with", "between", "than"], 
        a: 0, 
        hint: "Differ from smth — відрізнятися від чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "I am not very familiar ________ the layout of this new administrative building.", 
        options: ["with", "to", "about", "at"], 
        a: 0, 
        hint: "Familiar with smth — знайомий із чимось, добре орієнтуватися."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The primary school students were intensely focused ________ painting Christmas cards.", 
        options: ["on", "at", "in", "to"], 
        a: 0, 
        hint: "Focus on smth — концентруватися, зосереджуватися на чомусь."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The project assistant apologized ________ delivering the printed documents so late.", 
        options: ["for", "to", "about", "with"], 
        a: 0, 
        hint: "Apologize for smth — вибачитися за щось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The university professor is highly experienced ________ conducting deep clinical trials.", 
        options: ["in", "at", "with", "on"], 
        a: 0, 
        hint: "Experienced in smth — досвідчений у чомусь."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The local conference hall was completely crowded ________ medical specialists yesterday.", 
        options: ["with", "of", "by", "at"], 
        a: 0, 
        hint: "Crowded with smb — переповнений кимось/чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The dynamic marketing company decides to spend a lot of money ________ online advertising.", 
        options: ["on", "for", "in", "with"], 
        a: 0, 
        hint: "Spend money on smth — витрачати гроші на щось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The young teenagers are extremely enthusiastic ________ participating in the eco-marathon.", 
        options: ["about", "for", "with", "to"], 
        a: 0, 
        hint: "Enthusiastic about smth — захоплений, налаштований із великим ентузіазмом щодо чогось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The dynamic development team is completely capable ________ launching the app on time.", 
        options: ["of", "to", "for", "with"], 
        a: 0, 
        hint: "Capable of smth/doing smth — здатний на щось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The toxic gas leak from the pipeline was blamed ________ the industrial factory owner.", 
        options: ["on", "for", "with", "about"], 
        a: 0, 
        hint: "Blame smth on smb — покласти провину за щось на когось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The little children were extremely rude ________ the museum tour guide this morning.", 
        options: ["to", "with", "at", "for"], 
        a: 0, 
        hint: "Rude to smb — грубий, неввічливий до когось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The global organization is actively searching ________ new talented IT specialists.", 
        options: ["for", "to", "of", "on"], 
        a: 0, 
        hint: "Search for smb/smth — шукати когось/щось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The young software developer is very proud ________ his innovative mobile application.", 
        options: ["of", "about", "for", "with"], 
        a: 0, 
        hint: "Proud of smth — гордий чимось."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "The sudden drop in agricultural sales resulted ________ financial difficulties for the farm.", 
        options: ["in", "from", "to", "with"], 
        a: 0, 
        hint: "Result in smth — призвести до якогось результату/наслідків."
    },
    { 
        part: 1,
        topic: "Dependent Prepositions",
        q: "We are deeply looking forward ________ starting our summer holiday in Italy.", 
        options: ["to", "at", "for", "on"], 
        a: 0, 
        hint: "Look forward to smth/doing smth — із нетерпінням очікувати на щось."
    },
	{
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Perhaps the most striking thing about octopuses ___ their ability to change colour and body pattern.",
        options: ["is", "are", "were", "has been"],
        a: 0,
        hint: "Subject-Verb Agreement — Головне слово підмета 'thing' (однина), тому дієслово має бути 'is', попри множину 'octopuses' поруч."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By the time the rescue team arrived, the hikers ___ for more than 24 hours in the freezing cold.",
        options: ["have been waiting", "had been waiting", "waited", "were waiting"],
        a: 1,
        hint: "Past Perfect Continuous — Використовується для дії, яка тривала певний час у минулому ДО іншої минулої події (arrived)."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The news about the unexpected economic collapse ___ broadcasted on all major channels yesterday.",
        options: ["was", "were", "has been", "is"],
        a: 0,
        hint: "Singular Nouns — Іменник 'news' (новини) в англійській мові завжди вживається в однині, тому обираємо 'was'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The majority of students ___ already submitted their graduation papers before the deadline.",
        options: ["had", "has", "have", "having"],
        a: 0,
        hint: "Past Perfect — Конструкція 'before the deadline' разом із контекстом минулого часу вимагає Past Perfect ('had submitted')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Every man, woman, and child in the flooded area ___ given temporary shelter by the Red Cross.",
        options: ["were", "was", "have been", "are"],
        a: 1,
        hint: "Subject-Verb Agreement — Займенник 'Every' завжди вимагає після себе дієслова у формі однини ('was')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "He promised that he ___ us as soon as he reached the airport, but he forgot.",
        options: ["will call", "would call", "calls", "called"],
        a: 1,
        hint: "Future-in-the-Past — Після минулого часу в головному реченні (promised) майбутній час 'will' змінюється на 'would'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Look! A rare species of birds ___ over the lake right now.",
        options: ["is flying", "are flying", "flies", "fly"],
        a: 0,
        hint: "Present Continuous — Маркер 'right now' вказує на поточну дію, а підмет 'a rare species' узгоджується як однина ('is flying')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Since she moved to London three years ago, Sarah ___ in touch with her former classmates.",
        options: ["didn't keep", "hasn't kept", "hadn't kept", "doesn't keep"],
        a: 1,
        hint: "Present Perfect — З підрядними реченнями часу, що починаються з 'Since' (з того часу як), використовується Present Perfect."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Neither the manager nor the employees ___ aware of the new security regulations implemented last week.",
        options: ["was", "were", "has been", "is"],
        a: 1,
        hint: "Neither... nor Rule — Присудок узгоджується з найближчим до нього іменником. 'Employees' — множина, тому обираємо 'were'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "This time tomorrow, we ___ over the Atlantic Ocean on our way to New York.",
        options: ["will fly", "will be flying", "fly", "are flying"],
        a: 1,
        hint: "Future Continuous — Маркер 'This time tomorrow' вказує на тривалу дію, яка відбуватиметься в конкретний момент у майбутньому."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "A number of new residential buildings ___ in this district over the last few years.",
        options: ["was built", "has been built", "have been built", "were building"],
        a: 2,
        hint: "A number of vs The number — Вираз 'A number of' завжди вимагає дієслова у множині ('have been built'), на відміну від 'The number'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The number of tourists visiting our historic city ___ significantly since last summer.",
        options: ["has increased", "have increased", "is increasing", "increased"],
        a: 0,
        hint: "The number of — Вираз 'The number of' позначає конкретну статистичну кількість і вимагає дієслова в однині ('has increased')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "When we entered the lecture hall, the professor ___ the final graphs on the whiteboard.",
        options: ["drew", "was drawing", "had drawn", "has drawn"],
        a: 1,
        hint: "Past Continuous — Коротку дію в минулому (entered) перервала інша тривала процесуальна дія в минулому (was drawing)."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The statistics provided in the latest annual financial report ___ completely inaccurate.",
        options: ["is", "was", "are", "has been"],
        a: 2,
        hint: "Plural Nouns — Слово 'statistics', коли воно означає конкретні дані чи цифри, узгоджується з дієсловом у множині ('are')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Hardly had the airplane touched down when the passengers ___ unbuckling their seatbelts.",
        options: ["started", "had started", "were starting", "start"],
        a: 0,
        hint: "Inversion Structure — У парі з конструкцією 'Hardly had... when' у другій частині речення завжди вживається час Past Simple ('started')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Ten miles ___ a long distance to walk on foot, especially in such heavy rain.",
        options: ["seem", "seems", "are seeming", "were seeming"],
        a: 1,
        hint: "Plural Units — Одиниці виміру відстані, часу чи грошей сприймаються як єдине ціле, тому дієслово ставиться в однину ('seems')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By the end of next month, the construction crew ___ the renovation of the historical theatre.",
        options: ["will finish", "will have finished", "finishes", "will be finishing"],
        a: 1,
        hint: "Future Perfect — Маркер 'By the end of...' вказує на дію, яка завершиться до певного моменту в майбутньому ('will have finished')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "None of the information leaked to the press yesterday ___ confirmed by official sources.",
        options: ["were", "was", "have been", "are"],
        a: 1,
        hint: "Uncountable Nouns — Необчислювальний іменник 'information' завжди вимагає однини, тому правильний варіант — 'was'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The teacher, along with all her enthusiastic students, ___ currently attending the museum exhibition.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Parenthetical Phrases — Звороти з 'along with', 'as well as' не змінюють число підмета. Підмет 'The teacher' — однина, тому 'is'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "I will call you as soon as I ___ my business trip expenses calculated.",
        options: ["will get", "get", "got", "am getting"],
        a: 1,
        hint: "Time Clauses — У підрядних реченнях часу після сполучників 'as soon as', 'when', 'if' майбутній час замінюється на Present Simple ('get')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Ancient civilisations ___ that the Earth was flat before scientific discoveries proved otherwise.",
        options: ["believed", "had believed", "have believed", "were believing"],
        a: 0,
        hint: "Past Simple — Констатація історичного факту в минулому без прив'язки до передминулого моменту вимагає форми 'believed'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Gymnastics ___ considered one of the most physically demanding Olympic disciplines.",
        options: ["are", "is", "were", "have been"],
        a: 1,
        hint: "Nouns ending in -ics — Назви наук чи видів спорту на '-ics' (gymnastics, physics) граматично є одниною, тому обираємо 'is'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Over the past decade, renewable energy sources ___ increasingly popular worldwide.",
        options: ["became", "have become", "had become", "are becoming"],
        a: 1,
        hint: "Present Perfect — Маркер 'Over the past decade' (за останнє десятиліття) показує зв'язок із теперішнім, що вимагає Present Perfect."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Either the director or his assistants ___ responsible for sending out the invitations.",
        options: ["is", "are", "was", "has been"],
        a: 1,
        hint: "Either... or Rule — Присудок узгоджується з найближчим іменником. Оскільки 'assistants' стоїть у множині, обираємо варіант 'are'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "When we finally reached the peak of the mountain, it ___ for hours without stopping.",
        options: ["snowed", "was snowing", "had been snowing", "has been snowing"],
        a: 2,
        hint: "Past Perfect Continuous — Дія тривала певний час у минулому ('for hours') до настання іншого моменту в минулому ('reached')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Every piece of furniture in this showroom ___ custom-made by local craftsmen.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Uncountable Nouns — Слово 'furniture' є необчислювальним, а слово сполучення 'Every piece' додатково вказує на однину ('is')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "He spoke about his achievements as though he ___ the world's leading expert in the field.",
        options: ["is", "was", "were", "has been"],
        a: 2,
        hint: "Subjunctive Mood — Після зворотів 'as if / as though' (нібито) для вираження нереальності використовується форма 'were' для всіх осіб."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The dynamics of global climate change ___ thoroughly discussed during yesterday's summit.",
        options: ["was", "were", "is", "has been"],
        a: 1,
        hint: "Subject-Verb Agreement — Підмет речення 'dynamics' стоїть у формі множини, тому дієслово-присудок має бути 'were'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "While my vehicle ___ at the local service station, I had to take a taxi to the office.",
        options: ["was repairing", "was being repaired", "repaired", "had repaired"],
        a: 1,
        hint: "Past Continuous Passive — Машина була в процесі ремонту (над нею виконували дію в минулому), тому потрібен тривалий пасив."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The committee ___ still debating the budget allocation when the meeting was adjourned.",
        options: ["was", "were", "is", "are"],
        a: 0,
        hint: "Collective Nouns — Збірний іменник 'committee' діє як єдине ціле (проводив дебати), тому вживається форма однини 'was'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By the time the sun set, they ___ walking in the forest for six hours.",
        options: ["had been", "have been", "were", "would be"],
        a: 0,
        hint: "Past Perfect Continuous — Підкреслюється тривалість дії ('for six hours') перед іншою дією в минулому ('the sun set')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Fifty dollars ___ too much to pay for a regular ticket to this local concert.",
        options: ["are", "were", "is", "seem"],
        a: 2,
        hint: "Plural Units — Грошові суми ('Fifty dollars') сприймаються граматично як один квант або сума, тому потребують однини ('is')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Great Expectations ___ written by Charles Dickens in the early 1860s.",
        options: ["was", "were", "has been", "had been"],
        a: 0,
        hint: "Titles of Works — Назви книг, навіть якщо вони мають форму множини ('Expectations'), узгоджуються з дієсловом в однині ('was')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Neither of the candidates ___ acceptable qualifications for this executive position.",
        options: ["have", "has", "are having", "having"],
        a: 1,
        hint: "Neither of Rule — Займенниковий вираз 'Neither of + іменник у множині' традиційно вимагає після себе дієслова в однині ('has')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "I didn't recognize her because she ___ her hair dyed a completely different color.",
        options: ["had", "has had", "had had", "was having"],
        a: 2,
        hint: "Past Perfect — Вона змінила колір волосся ДО того, як я її зустрів (передминула дія), тому обираємо каузативну форму 'had had'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Water ___ at 100 degrees Celsius under standard atmospheric pressure conditions.",
        options: ["boils", "boil", "is boiling", "has boiled"],
        a: 0,
        hint: "Present Simple — Використовується для загальновідомих наукових фактів та законів природи (водя кипить — 'boils')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The criteria for evaluating the new software applications ___ highly subjective.",
        options: ["is", "was", "are", "has been"],
        a: 2,
        hint: "Irregular Plurals — Слово 'criteria' — це форма множини від латинського слова 'criterium'. Тому присудок має бути у множині ('are')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Our regular customer told us that he ___ the package the following week.",
        options: ["will collect", "would collect", "collects", "collected"],
        a: 1,
        hint: "Future-in-the-Past — Оскільки головне речення в минулому часі (told), майбутній маркер 'the following week' вимагає форми 'would collect'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Diabetes ___ a metabolic disease that affects millions of people globally.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Nouns ending in -is — Назви хвороб із закінченням на '-is' або '-s' (diabetes, measles) є одниною, тому вимагають форми 'is'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The cattle ___ grazing peacefully in the green pasture when the storm began.",
        options: ["was", "were", "is", "has been"],
        a: 1,
        hint: "Collective Nouns — Іменник 'cattle' (худоба) завжди є збірним іменником множини і вимагає узгодження з формою 'were'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Scarcely ___ the opera singer finished her performance when the audience burst into applause.",
        options: ["had", "has", "did", "was"],
        a: 0,
        hint: "Inversion Structure — Прислівник 'Scarcely' на початку речення викликає інверсію і вимагає часу Past Perfect ('had... finished')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "A packet of various organic seeds ___ attached to the cover of the gardening magazine.",
        options: ["were", "was", "are", "have been"],
        a: 1,
        hint: "Subject-Verb Agreement — Справжнім підметом є однина 'A packet' (пакет), а не додаток 'seeds'. Тому присудок ставимо в однину — 'was'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "This traditional dish ___ from unique local ingredients for centuries.",
        options: ["is prepared", "has been prepared", "was prepared", "prepared"],
        a: 1,
        hint: "Present Perfect Passive — Маркер 'for centuries' (протягом століть) вимагає зв'язку минулого з теперішнім через Present Perfect Passive."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The phenomenon observed during the solar eclipse ___ described as extremely rare.",
        options: ["was", "were", "are", "have been"],
        a: 0,
        hint: "Irregular Singulars — Слово 'phenomenon' є формою однини (множина — phenomena), тому дієслово має стояти в однині ('was')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "More than one witness ___ that the suspect was not present at the crime scene.",
        options: ["has testified", "have testified", "testify", "were testifying"],
        a: 0,
        hint: "More than one Rule — Стала граматична конструкція 'More than one + іменник в однині' узгоджується з дієсловом в однині ('has testified')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By next Friday, the students ___ all their major mid-term examinations.",
        options: ["will take", "will have taken", "take", "are taking"],
        a: 1,
        hint: "Future Perfect — Прийменник часу 'By next Friday' чітко вказує на дедлайн та завершеність майбутньої дії ('will have taken')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "All the luggage carried by the international passengers ___ carefully inspected at customs.",
        options: ["were", "was", "are", "have been"],
        a: 1,
        hint: "Uncountable Nouns — Іменник 'luggage' (багаж) є необчислювальним і в англійській мові завжди потребує форми однини ('was')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The audience ___ requested to turn off their mobile phones before the play started.",
        options: ["was", "were", "is", "are"],
        a: 0,
        hint: "Collective Nouns — Оскільки колектив 'audience' діяв як єдина група перед початком вистави, використовується форма однини 'was'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "While we ___ options for the weekend trip, my brother called to cancel his participation.",
        options: ["discussed", "were discussing", "had discussed", "have discussed"],
        a: 1,
        hint: "Past Continuous — Тривала фонова дія в минулому часі ('were discussing') переривається раптовою короткою подією ('called')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Many a promising young athlete ___ injured due to inadequate training routines.",
        options: ["have been", "has been", "are", "were"],
        a: 1,
        hint: "Many a Rule — Книжкова та поетична конструкція 'Many a + іменник в однині' завжди вимагає присудка в однині ('has been')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The scissors I bought yesterday ___ sharp enough to cut through this thick cardboard.",
        options: ["isn't", "aren't", "wasn't", "doesn't"],
        a: 1,
        hint: "Plural Nouns — Парні предмети, такі як 'scissors' (ножиці), завжди вважаються множиною, тому обираємо заперечення 'aren't'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The company's headquarters ___ located in the heart of the business district.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Headquarters Rule — Слово 'headquarters' (штаб-квартира) може узгоджуватися з одниною, якщо мається на увазі один офісний комплекс ('is')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "No sooner ___ the manager entered his office than the urgent phone call came in.",
        options: ["had", "did", "has", "was"],
        a: 0,
        hint: "Inversion Structure — Вираз 'No sooner... than' вимагає інверсії у першій частині, яка зазвичай будується за допомогою Past Perfect ('had')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Two years ___ a long time to wait for a visa approval, but he remained patient.",
        options: ["are", "were", "is", "seem"],
        a: 2,
        hint: "Plural Units — Певні періоди часу ('Two years') розглядаються як один числовий проміжок, тому дієслово ставиться в однину ('is')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The local police ___ conducting a thorough investigation into the recent bank robbery.",
        options: ["is", "are", "was", "has been"],
        a: 1,
        hint: "Police Rule — Слово 'police' в англійській мові завжди граматично представляє групу людей і вимагає дієслова у множині ('are')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By the time we find a solution to this global issue, much damage ___ done.",
        options: ["will be", "will have been", "is", "has been"],
        a: 1,
        hint: "Future Perfect Passive — Передбачається, що шкода вже буде завдана ДО певного моменту в майбутньому (Future Perfect у пасиві)."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "None of the participants ___ able to solve the last puzzle in yesterday's competition.",
        options: ["was", "were", "are", "have been"],
        a: 0,
        hint: "None of Rule — За правилами офіційної граматики займенник 'None' (жоден) у минулому часі найчастіше узгоджується з одниною ('was')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The principal, accompanied by several senior teachers, ___ greeting the newcomers.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Parenthetical Phrases — Конструкція 'accompanied by' не змінює число головного підмета 'the principal'. Тому присудок в однині — 'is'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The species of tropical flowers discovered last month ___ never been documented before.",
        options: ["has", "have", "was", "were"],
        a: 0,
        hint: "Species Agreement — Слово 'species' має однакову форму для однини і множини. Контекст 'The species... discovered' вказує на однину ('has')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "I am absolutely sure that she ___ English fluently by the time she graduates.",
        options: ["will speak", "will have spoken", "speaks", "is speaking"],
        a: 0,
        hint: "Future Simple — Зі сполучниками майбутнього часу, коли описується загальна здатність, а не дедлайн процесу, ставимо 'will speak'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "A large number of volunteers ___ expected to join the beach clean-up event this weekend.",
        options: ["is", "are", "was", "has been"],
        a: 1,
        hint: "A number of — Вираз 'A large number of' є еквівалентом слова 'many' (багато) і потребує дієслова у множині ('are')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The media ___ focusing heavily on the details of the royal wedding recently.",
        options: ["has been", "have been", "is", "was"],
        a: 1,
        hint: "Irregular Plurals — Слово 'media' є формою множини від латинського 'medium'. Сучасна граматика віддає перевагу множині ('have been')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Since the global company updated its policy, flexible hours ___ provided to all employees.",
        options: ["were", "are", "have been", "had been"],
        a: 2,
        hint: "Present Perfect Passive — Наявність підрядного речення з 'Since' вказує на період, що триває дотепер, тому ставимо 'have been'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Neither of the draft project proposals ___ fully aligned with our corporate strategy.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Neither of Rule — Узгодження заперечного виразу 'Neither of' потребує дієслова-присудка у формі третьої особи однини ('is')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "This time next year, my best friend ___ his master's degree at Oxford University.",
        options: ["will pursue", "will be pursuing", "pursues", "is pursuing"],
        a: 1,
        hint: "Future Continuous — 'This time next year' описує конкретний тривалий момент або процес, який відбуватиметься у майбутньому."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Every book and journal in this section of the library ___ signed by the author.",
        options: ["was", "were", "are", "have been"],
        a: 0,
        hint: "Subject-Verb Agreement — Коли підмети об'єднані сполучником 'and', але перед ними стоїть 'Every', дієслово має бути в однині ('was')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The staff ___ unable to agree on the new schedule and requested a vote.",
        options: ["was", "were", "is", "has been"],
        a: 1,
        hint: "Collective Nouns — Коли члени збірного іменника 'staff' (персонал) мають розбіжності та діють як окремі особи, вживається множина ('were')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By the time the curtain rose, the musicians ___ tuning their instruments for ten minutes.",
        options: ["had been", "have been", "were", "would be"],
        a: 0,
        hint: "Past Perfect Continuous — Тривала дія ('for ten minutes'), яка розпочалася і відбувалася до іншого моменту в минулому ('rose')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The economics of the energy transition project ___ extensively researched by our team.",
        options: ["has been", "have been", "was", "is"],
        a: 1,
        hint: "Nouns ending in -ics — Назви наук на '-ics' (economics) вважаються множиною, якщо вони означають практичні розрахунки чи фінансові показники."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Hardly ___ the bell rung when the children rushed out of the classroom.",
        options: ["had", "did", "was", "has"],
        a: 0,
        hint: "Inversion Structure — Конструкція 'Hardly... when' вимагає інверсії з дієсловом Past Perfect ('had... rung') на початку речення."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The green pyjamas you left in the hotel room ___ found by the cleaning service.",
        options: ["was", "were", "is", "has been"],
        a: 1,
        hint: "Plural Nouns — Іменники, що позначають одяг із двох частин (pyjamas, trousers), граматично завжди є множиною ('were')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The number of high-tech startups in our country ___ exponentially over the last five years.",
        options: ["has grown", "have grown", "is growing", "grew"],
        a: 0,
        hint: "The number of — Складений підмет з виразом 'The number of' узгоджується з присудком у формі однини ('has grown')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "He behaved as if nothing out of the ordinary ___ happened during their absence.",
        options: ["had", "has", "was", "would"],
        a: 0,
        hint: "Subjunctive Mood — Оскільки подія вже відбулася в минулому, порівняльний зворот 'as if' вимагає використання форми Past Perfect ('had')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Our manager promised that the technical issues ___ resolved by the end of the day.",
        options: ["will be", "would be", "are", "were"],
        a: 1,
        hint: "Future-in-the-Past — Після слів автора у минулому часі (promised) майбутній час у пасиві 'will be' переходить у 'would be'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The data collected during the clinical trials ___ currently being processed by scientists.",
        options: ["is", "are", "was", "has been"],
        a: 1,
        hint: "Irregular Plurals — Слово 'data' (дані) історично та в академічному середовищі є формою множини від 'datum'. Обираємо варіант 'are'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "When we stepped outside the airport terminal, we realized it ___ heavily for quite some time.",
        options: ["rained", "was raining", "had been raining", "has been raining"],
        a: 2,
        hint: "Past Perfect Continuous — Описує тривалу дію, яка почалася в минулому і тривала аж до моменту іншої події в минулому (realized)."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Either your password or your security answers ___ entered incorrectly multiple times.",
        options: ["was", "were", "has been", "is"],
        a: 1,
        hint: "Either... or Rule — Присудок приймає форму іменника, який розташований найближче до нього. 'Answers' — множина, тому обираємо 'were'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The phenomena responsible for creating the Aurora Borealis ___ still under intense study.",
        options: ["is", "are", "was", "has been"],
        a: 1,
        hint: "Irregular Plurals — Іменник 'phenomena' закінчується на '-a' і є формою множини (однина — phenomenon). Тому ставимо присудок 'are'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By next September, my sister ___ from the Academy of Fine Arts.",
        options: ["will graduate", "will have graduated", "graduates", "is graduating"],
        a: 1,
        hint: "Future Perfect — Маркер часу 'By next...' означає завершеність майбутньої дії до певного моменту часу, що вимагає 'will have graduated'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The acoustics in this newly built concert hall ___ considered to be absolutely flawless.",
        options: ["are", "is", "was", "has been"],
        a: 0,
        hint: "Nouns ending in -ics — Слово 'acoustics' (акустичні властивості приміщення) у цьому значенні вимагає дієслова у множині ('are')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "More than one global corporation ___ expressed genuine interest in acquiring our small startup.",
        options: ["has", "have", "is", "are"],
        a: 0,
        hint: "More than one Rule — За правилами граматики вираз 'More than one' узгоджується з іменником та дієсловом у формі однини ('has')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "While the ancient temple ___ by archaeologists, a secret chamber was found.",
        options: ["was excavating", "was being excavated", "excavated", "had excavated"],
        a: 1,
        hint: "Past Continuous Passive — Храм перебував у процесі розкопок (дія виконувалася над об'єктом у минулому), тому потрібен тривалий пасив."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The jury ___ still deliberating on the verdict when the court building lost power.",
        options: ["was", "were", "is", "are"],
        a: 0,
        hint: "Collective Nouns — Суд присяжних ('jury') діяв як один злагоджений державний орган однини, тому обираємо форму 'was'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "No sooner ___ the general signed the peace treaty than the military conflict ceased completely.",
        options: ["had", "did", "was", "has"],
        a: 0,
        hint: "Inversion Structure — Інверсійна конструкція з 'No sooner... than' вимагає використання часу Past Perfect ('had... signed')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Thirty kilometers ___ the total distance of the cross-country race scheduled for tomorrow.",
        options: ["are", "is", "were", "seem"],
        a: 1,
        hint: "Plural Units — Загальна протяжність або числове значення відстані ('Thirty kilometers') сприймається як один показник однини ('is')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The headquarters of the international organization ___ moved to Geneva last year.",
        options: ["were", "was", "are", "has been"],
        a: 1,
        hint: "Headquarters Rule — Оскільки мова йде про переїзд однієї головної філії або офісу, 'headquarters' виступає як однина ('was')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Since he received his promotion, Mr. Davis ___ in charge of the regional sales department.",
        options: ["was", "is", "has been", "had been"],
        a: 2,
        hint: "Present Perfect — Наявність часового обмеження 'Since' (з того часу як) вимагає зв'язування з теперішнім через час Present Perfect."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The audience ___ waving their hands and cheering as the rock band appeared on stage.",
        options: ["was", "were", "is", "has been"],
        a: 1,
        hint: "Collective Nouns — Оскільки глядачі виконували індивідуальні фізичні дії окремо один від одного (waving), використовується множина 'were'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "By the time the security guards checked the CCTV footage, the thieves ___ the building.",
        options: ["left", "had left", "were leaving", "have left"],
        a: 1,
        hint: "Past Perfect — Крадіжка відбулася раніше, ніж охорона перевірила камери спостереження (передминула дія), тому ставимо 'had left'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Every map and guidebook available at the local tourist office ___ outdated information.",
        options: ["contain", "contains", "are containing", "containing"],
        a: 1,
        hint: "Subject-Verb Agreement — Визначник 'Every' нівелює множину сполучника 'and'. Будь-який підмет з 'Every' — це завжди однина ('contains')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The glasses you ordered online last week ___ finally arrived at the post office.",
        options: ["has", "have", "was", "were"],
        a: 1,
        hint: "Plural Nouns — Окуляри ('glasses'), як і інші парні предмети, є іменником виключно множини, тому обираємо допоміжне дієслово 'have'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The criteria used by the admissions committee ___ modified before the current semester began.",
        options: ["was", "were", "is", "has been"],
        a: 1,
        hint: "Irregular Plurals — 'Criteria' — це форма множини від іменника латинського походження. У минулому часі вимагає форми 'were'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The teacher, along with the school principal, ___ discussing the upcoming final exams right now.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Parenthetical Phrases — Додатковий зворот 'along with' не впливає на число підмета. 'The teacher' — це однина, тому обираємо 'is'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "I will call you the very moment I ___ any news regarding your job application.",
        options: ["will receive", "receive", "received", "am receiving"],
        a: 1,
        hint: "Time Clauses — У підрядних реченнях часу ('the very moment') замість майбутнього часу за правилами ставиться Present Simple ('receive')."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The species of rare orchid ___ inside this modern greenhouse since the turn of the century.",
        options: ["is preserved", "has been preserved", "was preserved", "preserved"],
        a: 1,
        hint: "Present Perfect Passive — Прийменник 'since' вимагає використання форми Present Perfect для опису дії, яка триває до теперішнього часу."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The committee ___ signed the new contract agreements, and each member went home.",
        options: ["has", "have", "is", "are"],
        a: 0,
        hint: "Collective Nouns — Комітет підписав папери спільно як єдине юридичне обличчя, тому використовуємо дієслово в однині — 'has'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "Neither the supervisor nor the lab technicians ___ how to calibrate the new microscope.",
        options: ["knows", "know", "is knowing", "has known"],
        a: 1,
        hint: "Neither... nor Rule — Дієслово узгоджується з найближчим словом підмета. 'Technicians' стоїть у множині, тому правильна форма — 'know'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "This time tomorrow, we ___ our final presentation in front of the board of directors.",
        options: ["will deliver", "will be delivering", "deliver", "are delivering"],
        a: 1,
        hint: "Future Continuous — Маркер 'This time tomorrow' вказує на точний момент тривалої майбутньої події, тому ставимо 'will be delivering'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "The news delivered by the emergency response team ___ much better than we expected.",
        options: ["was", "were", "are", "has been"],
        a: 0,
        hint: "Singular Nouns — Іменник 'news' закінчується на літеру '-s', але граматично завжди позначає однину, тому правильна відповідь — 'was'."
    },
    {
        part: 2,
        topic: "Verb Tenses & Agreement",
        q: "None of the information contained in the official report ___ considered confidential anymore.",
        options: ["is", "are", "were", "have been"],
        a: 0,
        hint: "Uncountable Nouns — Необчислювальний іменник 'information' диктує використання присудка виключно у формі однини ('is')."
    },
	// ... твої попередні питання ...
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The manager avoids ___ any definitive promises before consulting the legal department.",
        options: ["to make", "making", "make", "having to make"],
        a: 1,
        hint: "Герундій — Після дієслова 'avoid' завжди використовується герундій (-ing)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I distinctly remember ___ the front door, so someone else must have unlocked it.",
        options: ["to lock", "locking", "lock", "having locked"],
        a: 1,
        hint: "Remember doing — Спогад про дію в минулому (пам'ятаю, як закривав)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "Please remember ___ the documents on your way out this evening.",
        options: ["to post", "posting", "post", "to have posted"],
        a: 0,
        hint: "Remember to do — Не забудь зробити дію в майбутньому."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The company cannot afford ___ any more staff during this economic downturn.",
        options: ["hiring", "to hire", "hire", "to be hiring"],
        a: 1,
        hint: "Інфінітив — Після дієслова 'afford' використовується інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "Our boss made us ___ late on Friday to finish the quarterly financial report.",
        options: ["stay", "to stay", "staying", "stayed"],
        a: 0,
        hint: "Bare infinitive — Після каузативного дієслова 'make' в активному стані йде інфінітив без 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "We were made ___ late on Friday night to finish the quarterly financial report.",
        options: ["stay", "to stay", "staying", "stayed"],
        a: 1,
        hint: "Passive Make — Якщо 'make' стоїть у пасивному стані, після нього обов'язково йде інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I need to get my car ___ before we go on our long road trip next week.",
        options: ["service", "servicing", "serviced", "to service"],
        a: 2,
        hint: "Causative Get — Структура 'get + object + V3' означає, що дію над об'єктом виконає хтось інший."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The security guard let me ___ the building after I showed my ID card.",
        options: ["enter", "to enter", "entering", "entered"],
        a: 0,
        hint: "Bare infinitive — Після дієслова 'let' вживається інфінітив без частки 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I look forward to ___ from you regarding the outcome of the job interview.",
        options: ["hear", "hearing", "to hear", "be hearing"],
        a: 1,
        hint: "Герундій — У фразі 'look forward to' слово 'to' є прийменником, тому далі йде герундій (-ing)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "It's no use ___ about things you cannot change; you just have to move on.",
        options: ["to worry", "worrying", "worry", "having worried"],
        a: 1,
        hint: "Герундій — Після усталеного виразу 'it's no use' завжди використовується герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He confessed to ___ the company's confidential files to a competitor.",
        options: ["steal", "stealing", "to steal", "have stolen"],
        a: 1,
        hint: "Герундій — Після 'confess to' частка 'to' працює як прийменник, тому потрібен герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "She tried ___ the engine, but the car battery was completely dead.",
        options: ["to start", "starting", "start", "to have started"],
        a: 0,
        hint: "Try to do — Намагатися зробити зусилля для виконання складної дії."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "If you have a headache, try ___ an aspirin or drinking some water.",
        options: ["to take", "taking", "take", "to have taken"],
        a: 1,
        hint: "Try doing — Спробувати щось зробити як експеримент (подивитися, чи допоможе)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The doctor recommended ___ down on sugar and processed carbohydrates.",
        options: ["to cut", "cutting", "cut", "to be cutting"],
        a: 1,
        hint: "Герундій — Після дієслова 'recommend' без додатка йде форма герундія."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "They managed ___ the mountain peak despite the sudden blizzard.",
        options: ["reaching", "to reach", "reach", "having reached"],
        a: 1,
        hint: "Інфінітив — Після дієслова 'manage' (впоратися) завжди йде інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I would rather ___ at home tonight than go out to that noisy club.",
        options: ["stay", "to stay", "staying", "stayed"],
        a: 0,
        hint: "Would rather — Після цього виразу використовується інфінітив без 'to' для вираження віддачі переваги."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "We object to the new highway ___ right through our peaceful neighborhood.",
        options: ["to build", "building", "being built", "to be built"],
        a: 2,
        hint: "Пасивний герундій — Після 'object to' (бути проти) потрібен герундій; оскільки дорогу будують, форма пасивна: 'being built'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ by the beautiful scenery, we decided to stop the car and take photos.",
        options: ["Fascinating", "Fascinated", "Having fascinated", "To fascinate"],
        a: 1,
        hint: "Past Participle — Оскільки почуття відчували 'ми' (були зачаровані), використовуємо пасивний дієприкметник на -ed."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The book was so ___ that I couldn't put it down until I finished it.",
        options: ["gripped", "gripping", "to grip", "having gripped"],
        a: 1,
        hint: "Present Participle — Для опису характеристики предмета/книги використовуємо форму на -ing (захоплююча)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "You had better ___ your homework before the teacher walks into the room.",
        options: ["do", "to do", "doing", "done"],
        a: 0,
        hint: "Had better — Після фрази 'had better' (краще б тобі) вживається голий інфінітив без 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The government intends ___ new legislation to curb carbon emissions.",
        options: ["introducing", "to introduce", "introduce", "having introduced"],
        a: 1,
        hint: "Інфінітив — Після дієслова 'intend' (мати намір) стандартно використовується інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I can't help ___ sorry for the people who lost their homes in the flood.",
        options: ["to feel", "feel", "feeling", "having felt"],
        a: 2,
        hint: "Герундій — Ідіома 'can't help' означає 'не можу стриматися від' і вимагає герундія (-ing)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He denied ___ any money from the cash register on Tuesday afternoon.",
        options: ["to take", "take", "taking", "to have taken"],
        a: 2,
        hint: "Герундій — Дієслово 'deny' (заперечувати) вимагає після себе форму герундія."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The teacher refused ___ the deadline for the final history project.",
        options: ["extending", "to extend", "extend", "to have extended"],
        a: 1,
        hint: "Інфінітив — Після дієслова 'refuse' (відмовлятися) завжди вживається інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ the book twice, he already knew how the complex plot would unfold.",
        options: ["Reading", "Having read", "To read", "Read"],
        a: 1,
        hint: "Perfect Participle — Використовується форма 'Having + V3' для підкреслення дії, яка повністю завершилася ДО іншої події в минулому."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He left the meeting without ___ goodbye to any of his colleagues.",
        options: ["say", "saying", "to say", "having to say"],
        a: 1,
        hint: "Герундій після прийменників — Після будь-яких прийменників (у даному випадку 'without') дієслово набуває форми герундія."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I'm not used to ___ up so early in the morning for a weekend shift.",
        options: ["wake", "waking", "to wake", "woken"],
        a: 1,
        hint: "Be used to — Конструкція 'be used to' (мати звичку до чогось) вимагає герундія, де 'to' є прийменником."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I used to ___ to the cinema every single weekend when I lived in London.",
        options: ["go", "going", "went", "to go"],
        a: 0,
        hint: "Used to — Конструкція 'used to + голий інфінітив' описує регулярні дії чи стани у минулому, яких зараз немає."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The police ordered the suspect ___ out of the stolen vehicle slowly.",
        options: ["step", "stepping", "to step", "stepped"],
        a: 2,
        hint: "Інфінітив з додатком — Конструкція 'order + someone + to do something'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The broken window needs ___ before the heavy rain starts tonight.",
        options: ["fixing", "to fix", "fixed", "to be fixing"],
        a: 0,
        hint: "Need + -ing — Дієслово 'need' з герундієм має пасивне значення (потребує ремонту = needs to be fixed)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I would appreciate ___ from you as soon as you make a final decision.",
        options: ["to hear", "hearing", "hear", "to be hearing"],
        a: 1,
        hint: "Герундій — Дієслово 'appreciate' (цінувати, бути вдячним за) вимагає герундія."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He claims ___ the Queen when he was visiting London last summer.",
        options: ["to meet", "meeting", "to have met", "meet"],
        a: 2,
        hint: "Perfect Infinitive — Форма 'to have + V3' вказує на те, що дія відбулася раніше за дію головного дієслова (стверджує зараз, що зустрів тоді)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The accused man strongly resisted ___ to the local police station.",
        options: ["taking", "to take", "being taken", "to be taken"],
        a: 2,
        hint: "Пасивний герундій — Після 'resist' потрібен герундій; оскільки везли його, форма стає пасивною: 'being taken'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The dynamic marketing team spent hours ___ the new advertising campaign.",
        options: ["planning", "to plan", "plan", "on plan"],
        a: 0,
        hint: "Spend time doing — Вираз 'spend time + -ing' описує тривалість виконання певної дії."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The sudden loud noise caused everyone in the quiet library ___ up.",
        options: ["jump", "jumping", "to jump", "jumped"],
        a: 2,
        hint: "Cause to do — Дієслово 'cause' вимагає після додатка інфінітива з часткою 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "It's vital for our team to prevent them from ___ the critical game.",
        options: ["winning", "to win", "win", "won"],
        a: 0,
        hint: "Prevent from doing — Після фрази 'prevent someone from' використовується герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "They postponed ___ the outdoor wedding because of the severe weather warning.",
        options: ["to hold", "holding", "hold", "to have held"],
        a: 1,
        hint: "Герундій — Після дієслова 'postpone' (відкладати) завжди ставиться герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I happened ___ her in the crowded supermarket yesterday morning.",
        options: ["seeing", "to see", "see", "to have seen"],
        a: 1,
        hint: "Happen to do — Вираз означає 'випадково щось зробити'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "They are planning ___ to a bigger house next year when the baby is born.",
        options: ["moving", "to move", "move", "to be moving"],
        a: 1,
        hint: "Інфінітив — Після дієслова 'plan' ставиться інфінітив з часткою 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "You can't expect him ___ all your complex technical problems for free.",
        options: ["solve", "solving", "to solve", "solved"],
        a: 2,
        hint: "Expect to do — Конструкція 'expect someone to do something'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "She likes ___ the house clean and tidy before guests arrive.",
        options: ["keeping", "to keep", "keep", "to be keeping"],
        a: 0,
        hint: "Like doing — Герундій після 'like' часто вказує на постійну дію, що приносить задоволення."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "We stopped at the gas station ___ the fuel tank and buy some snacks.",
        options: ["to fill", "filling", "fill", "for filling"],
        a: 0,
        hint: "Stop to do — Зупинитися в дорозі, щоб зробити якусь іншу цільову дію."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The doctor told him to stop ___ cigarettes if he wants to recover.",
        options: ["to smoke", "smoking", "smoke", "having smoked"],
        a: 1,
        hint: "Stop doing — Припинити якусь дію чи звичку взагалі."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I regret ___ you that your application for the scholarship has been rejected.",
        options: ["to inform", "informing", "inform", "to have informed"],
        a: 0,
        hint: "Regret to do — Мені шкода (я з жалем повідомляю) про те, що маю зробити зараз."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He deeply regrets ___ those harsh words to his sister during their argument.",
        options: ["to say", "saying", "say", "to have said"],
        a: 1,
        hint: "Regret doing — Шкодувати про те, що вже було зроблено в минулому."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ for the bus in the heavy pouring rain, she caught a terrible cold.",
        options: ["Waiting", "Waited", "Having waited", "To wait"],
        a: 0,
        hint: "Present Participle — Одночасна дія в активному стані (чекаючи на автобус, вона застудилася)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "She enjoys ___ classical music while studying for her university exams.",
        options: ["to listen to", "listening to", "listening", "to listen"],
        a: 1,
        hint: "Enjoy + герундій — Після 'enjoy' потрібен герундій з обов'язковим прийменником 'to' перед додатком music."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "My parents always encourage me ___ my dreams no matter how hard they seem.",
        options: ["pursue", "pursuing", "to pursue", "pursued"],
        a: 2,
        hint: "Encourage to do — Конструкція 'encourage someone to do something'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I can hear someone ___ up the stairs right now; please be quiet.",
        options: ["walk", "walking", "to walk", "walked"],
        a: 1,
        hint: "Sense verbs — Після дієслів сприйняття (hear/see) герундій підкреслює процес дії прямо зараз."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I saw the thief ___ the wallet from the bag and then disappear into the crowd.",
        options: ["steal", "stealing", "to steal", "stolen"],
        a: 0,
        hint: "Sense verbs — Голий інфінітив після дієслів сприйняття показує дію від початку до кінця (факт завершеної дії)."
    },
	{
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The heavy morning fog delayed the plane from ___ on schedule.",
        options: ["take off", "taking off", "to take off", "taken off"],
        a: 1,
        hint: "Delay from doing — Після прийменників (зокрема from) завжди використовується герундій (-ing)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He is bound ___ the championship if he keeps training with such dedication.",
        options: ["win", "winning", "to win", "to be winning"],
        a: 2,
        hint: "Be bound to do — Сталий вираз, який означає 'обов'язково щось зробити / приречений на успіх'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "It's no good ___ about spilled milk; we need to find a solution now.",
        options: ["crying", "to cry", "cry", "having cried"],
        a: 0,
        hint: "It's no good doing — Після цієї стійкої фрази (це марно / немає сенсу) вживається герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The government promised ___ tax rates for small businesses next year.",
        options: ["reducing", "to reduce", "reduce", "to have reduced"],
        a: 1,
        hint: "Інфінітив — Після дієслова 'promise' (обіцяти) завжди використовується інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I would love ___ to your party, but I have to work a night shift.",
        options: ["to come", "coming", "come", "to have come"],
        a: 0,
        hint: "Would love to do — На відміну від простого 'love', вираз 'would love' вимагає саме інфінітива з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "They objects to their children ___ violent video games late at night.",
        options: ["play", "to play", "playing", "to be playing"],
        a: 2,
        hint: "Object to doing — У виразі 'object to' слово 'to' є прийменником, тому далі йде герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ the historical museum, we went to a cozy cafe for lunch.",
        options: ["Visiting", "Having visited", "Visited", "To visit"],
        a: 1,
        hint: "Perfect Participle — Форма 'Having + V3' показує дію, яка повністю завершилася перед наступною (спочатку відвідали, потім пішли в кафе)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The project was considered too ___ to be funded by the conservative bank.",
        options: ["risking", "risked", "risky", "to risk"],
        a: 2,
        hint: "Прикметник — Тут потрібне звичайне описове слово 'risky' (ризикований) для характеристики проекту."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "You had better ___ those muddy shoes before you walk onto the clean carpet.",
        options: ["take off", "to take off", "taking off", "taken off"],
        a: 0,
        hint: "Had better — Після конструкції 'had better' використовується голий інфінітив (bare infinitive)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The young athlete aspires ___ in the next Olympic Games.",
        options: ["competing", "to compete", "compete", "to be competing"],
        a: 1,
        hint: "Інфінітив — Дієслово 'aspire' (прагнути) вимагає після себе інфінітива з часткою 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I can't resist ___ a piece of chocolate cake whenever I pass that bakery.",
        options: ["buying", "to buy", "buy", "having bought"],
        a: 0,
        hint: "Герундій — Після дієслова 'resist' (не могти втриматися / опиратися) завжди йде герундій (-ing)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The suspect admitted ___ the store but denied stealing the money.",
        options: ["to enter", "entering", "enter", "to have entered"],
        a: 1,
        hint: "Герундій — Дієслово 'admit' (визнавати) вимагає після себе форму герундія."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The dynamic team leader managed ___ the conflict between the developers.",
        options: ["resolving", "to resolve", "resolve", "having resolved"],
        a: 1,
        hint: "Manage to do — Усталений вираз, що означає 'змогти / спромогтися виконати складну дію'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ by his friends, the boy finally confessed to breaking the window.",
        options: ["Encouraging", "Encouraged", "Having encouraged", "To encourage"],
        a: 1,
        hint: "Past Participle — Дієприкметник минулого часу (V3) вживається у пасивному значенні: 'будучи підбадьореним'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He crossed the busy street without ___ both left and right.",
        options: ["look", "looking", "to look", "having looked"],
        a: 1,
        hint: "Герундій після прийменників — Після прийменника 'without' дієслово автоматично приймає закінчення -ing."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I'm looking forward to ___ my relatives in Canada this winter.",
        options: ["visit", "visiting", "to visit", "visited"],
        a: 1,
        hint: "Look forward to doing — 'To' тут є частиною прийменникової фрази, тому після неї обов'язково пишемо герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I used to ___ football every afternoon when I was in high school.",
        options: ["play", "playing", "played", "to play"],
        a: 0,
        hint: "Used to — Конструкція для опису звичок у минулому, яких більше немає. Вимагає базової форми дієслова."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The custom officer forced him ___ his heavy suitcases for inspection.",
        options: ["open", "opening", "to open", "opened"],
        a: 2,
        hint: "Force someone to do — Дієслово 'force' (змушувати) вимагає структури з інфінітивом з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The dirty office windows desperately need ___ before the spring holidays.",
        options: ["washing", "to wash", "washed", "to be washing"],
        a: 0,
        hint: "Need doing — Структра 'need + -ing' несе в собі пасивний зміст (потребують миття / щоб їх помили)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I would appreciate your ___ me know if there are any changes to the schedule.",
        options: ["let", "letting", "to let", "have let"],
        a: 1,
        hint: "Герундій — Після дієслова 'appreciate' використовується герундій. Прийменник або займенник перед ним підкреслює автора дії."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The professor pretends ___ everything about ancient Egyptian culture.",
        options: ["to know", "knowing", "know", "to have known"],
        a: 0,
        hint: "Pretend to do — Після дієслова 'pretend' (робити вигляд / вдавати) завжди слідує інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The defensive driver narrowly avoided ___ into the back of the delivery truck.",
        options: ["crash", "crashing", "to crash", "having crashed"],
        a: 1,
        hint: "Avoid doing — Дієслово 'avoid' є класичним тригером для використання герундія (-ing)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "She likes ___ novels on her porch during rainy summer afternoons.",
        options: ["reading", "to read", "read", "to be reading"],
        a: 0,
        hint: "Like doing — Герундій після дієслів уподобання акцентує увагу на самому процесі та отриманні задоволення."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "We stopped at the mall ___ some new clothes for the upcoming wedding.",
        options: ["to buy", "buying", "buy", "for buying"],
        a: 0,
        hint: "Stop to do — Зупинити поточну дію (йти/їхати) задля іншої мети (купити щось)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "You must stop ___ so much junk food if you want to lower your cholesterol.",
        options: ["to eat", "eating", "eat", "having eaten"],
        a: 1,
        hint: "Stop doing — Повністю припинити якусь звичку чи тривалу дію."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I regret ___ you that all flights have been canceled due to the storm.",
        options: ["to tell", "telling", "tell", "to have told"],
        a: 0,
        hint: "Regret to do — Вираз 'regret to inform / tell' використовується для висловлення жалю перед повідомленням поганих новин."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "He deeply regrets ___ his college education to join a rock band.",
        options: ["to quit", "quitting", "quit", "to have quit"],
        a: 1,
        hint: "Regret doing — Шкодувати про вчинок, який уже було скоєно в минулому."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ for hours in the queue, they finally got the front-row concert tickets.",
        options: ["Waiting", "Waited", "Having waited", "To wait"],
        a: 2,
        hint: "Perfect Participle — Процес очікування повністю передував купівлі квитків, тому потрібна перфектна форма: 'Having + V3'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "Children usually enjoy ___ to fairy tales before they go to sleep.",
        options: ["to listen", "listening", "listen", "to be listening"],
        a: 1,
        hint: "Enjoy doing — Після дієслова 'enjoy' завжди ставиться герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The strict parents never allow their children ___ sugary sodas.",
        options: ["drink", "drinking", "to drink", "drank"],
        a: 2,
        hint: "Allow someone to do — Якщо після 'allow' вказано конкретний додаток (кого/що), використовується інфінітив з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I can smell something ___ in the kitchen; check the oven immediately!",
        options: ["burn", "burning", "to burn", "burnt"],
        a: 1,
        hint: "Sense verbs — Після дієслів відчуття (smell/hear/see) форма на -ing показує дію в моменті її тривання."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "Did you notice anyone ___ the office building during the lunch break?",
        options: ["leave", "to leave", "left", "to be leaving"],
        a: 0,
        hint: "Sense verbs — Голий інфінітив після 'notice' використовується для фіксації закінченого факту дії."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The team practiced ___ the new strategy until they could do it perfectly.",
        options: ["to execute", "executing", "execute", "to be executing"],
        a: 1,
        hint: "Practice doing — Після дієслова 'practice' (тренуватися / практикувати) завжди використовується герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "It's worth ___ the ancient ruins if you ever travel to Greece.",
        options: ["visit", "visiting", "to visit", "having visited"],
        a: 1,
        hint: "Be worth doing — Після прикметникового виразу 'be worth' (варто щось зробити) традиційно вживається герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The hikers struggled ___ their way back to the camp in the pitch dark.",
        options: ["finding", "to find", "find", "having found"],
        a: 1,
        hint: "Struggle to do — Дієслово 'struggle' (насилу робити / докладати надзусиль) вимагає інфінітива з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I would prefer ___ at a quiet restaurant rather than order takeout.",
        options: ["to dine", "dining", "dine", "to be dining"],
        a: 0,
        hint: "Would prefer to do — Вираз 'would prefer' потребує після себе інфінітива, на відміну від простого 'prefer', де можливий герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The company focuses on ___ young talents fresh out of university.",
        options: ["recruit", "recruiting", "to recruit", "recruited"],
        a: 1,
        hint: "Герундій після прийменників — Прийменник 'on' автоматично вимагає перетворення наступного дієслова на герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ by the unexpected turn of events, the speaker lost his train of thought.",
        options: ["Confusing", "Confused", "Having confused", "To confuse"],
        a: 1,
        hint: "Past Participle — Пасивне значення дієприкметника (V3): спікер сам 'був збитий з пантелику'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The teacher caught the student ___ during the chemistry midterm exam.",
        options: ["cheat", "cheating", "to cheat", "cheated"],
        a: 1,
        hint: "Catch someone doing — Стала структура, яка означає застати когось під час гарячого (в процесі виконання дії)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "You had better ___ the financial contract carefully before signing it.",
        options: ["read", "to read", "reading", "have read"],
        a: 0,
        hint: "Had better — Після цієї фрази завжди йде інфінітив без частки 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The organization aims ___ clean drinking water to remote villages.",
        options: ["providing", "to provide", "provide", "having provided"],
        a: 1,
        hint: "Aim to do — Дієслово 'aim' (мати за мету) керує інфінітивом із часткою 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "I can't imagine ___ in a crowded city like Tokyo or New York.",
        options: ["to live", "living", "live", "having lived"],
        a: 1,
        hint: "Imagine doing — Після дієслова 'imagine' (уявляти) завжди ставиться герундій з закінченням -ing."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The suspects denied ___ anywhere near the bank on the night of the robbery.",
        options: ["being", "to be", "be", "having to be"],
        a: 0,
        hint: "Deny doing — Після дієслова 'deny' (заперечувати) за правилами граматики використовується герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The landlord refused ___ the broken heating system until next month.",
        options: ["fixing", "to fix", "fix", "to be fixing"],
        a: 1,
        hint: "Refuse to do — Дієслово 'refuse' (відмовлятися) завжди вимагає після себе інфінітива з 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "___ his car keys at the office, he had to take a taxi home.",
        options: ["Leaving", "Left", "Having left", "To leave"],
        a: 2,
        hint: "Perfect Participle — Дія відбулася і повністю закінчилася раніше за основну подію (спочатку забув, тому потім поїхав на таксі)."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "She succeeded in ___ the difficult exam on her very first attempt.",
        options: ["pass", "passing", "to pass", "passed"],
        a: 1,
        hint: "Succeed in doing — Після дієслова з прийменником 'succeed in' обов'язково використовується герундій."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "Are you used to ___ spicy food since you moved to Thailand?",
        options: ["eat", "eating", "to eat", "eaten"],
        a: 1,
        hint: "Be used to doing — Конструкція 'be used to' означає 'мати звичку / бути звиклим до чогось' і потребує герундія."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The general manager made the employees ___ late to complete the audit.",
        options: ["work", "to work", "working", "worked"],
        a: 0,
        hint: "Causative Make — Каузативне дієслово 'make' в активному стані вимагає інфінітива без частки 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "The students were made ___ late to complete their chemistry lab reports.",
        options: ["work", "to work", "working", "worked"],
        a: 1,
        hint: "Passive Make — Якщо дієслово 'make' стоїть у пасивному стані (were made), інфінітив повертає свою частку 'to'."
    },
    {
        part: 2,
        topic: "Gerund, Infinitive & Participles",
        q: "You should have your laptop ___ by an expert if it keeps crashing.",
        options: ["check", "checking", "checked", "to check"],
        a: 2,
        hint: "Causative Have — Пасивна каузативна форма 'have + object + V3' (коли дію над об'єктом робить хтось інший)."
    },
	// ... твої попередні питання ...
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The company values ___ employees and always listens to their feedback.",
        options: ["its", "it's", "their", "his"],
        a: 0,
        hint: "Possessive adjective — Для неживих іменників в однині (the company) використовується присвійний прикметник 'its' (без апострофа)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "My keys are on the kitchen table, but where are ___?",
        options: ["your", "yours", "you", "yours'"],
        a: 1,
        hint: "Possessive pronoun — Абсолютна форма присвійного займенника 'yours' використовується, коли після нього немає іменника."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "John and ___ went to the tech conference to represent our startup.",
        options: ["me", "I", "myself", "mine"],
        a: 1,
        hint: "Subject pronoun — Оскільки займенник є частиною підмета (хто виконав дію?), потрібно використовувати 'I', а не 'me'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Between you and ___, I don't think the new marketing strategy will work.",
        options: ["I", "me", "myself", "mine"],
        a: 1,
        hint: "Object pronoun — Після прийменників (між нами / between you and...) завжди вживається об'єктний відмінок 'me'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The children painted the entire wooden fence all by ___.",
        options: ["themselves", "theirselves", "themself", "himself"],
        a: 0,
        hint: "Reflexive pronoun — Зворотний займенник для множини (they/children) — це 'themselves'. Форми 'theirselves' не існує."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of the two candidates was qualified enough for the managerial position.",
        options: ["Neither", "None", "Either", "Any"],
        a: 0,
        hint: "Determiners — Коли ми говоримо про заперечення щодо ДВОХ осіб або предметів, використовується займенник 'Neither'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We asked ten people for directions, but ___ of them knew the way.",
        options: ["neither", "none", "no one", "either"],
        a: 1,
        hint: "Determiners — Для заперечення серед групи з ТРЬОХ і більше об'єктів/людей використовується займенник 'none'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There is ___ traffic on the highway today, so we will arrive much earlier.",
        options: ["few", "little", "a few", "a little"],
        a: 1,
        hint: "Quantifiers — Іменник 'traffic' є незлічуваним. 'Little' означає 'мало' (недостатньо або майже немає) у негативному контексті."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Could you please give me ___ advice on how to pass the driving test?",
        options: ["an", "some", "any", "many"],
        a: 1,
        hint: "Quantifiers — Слово 'advice' є незлічуваним. У ввічливих проханнях та пропозиціях замість 'any' вживається 'some'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The supervisor noticed that ___ had left their office keys on the desk.",
        options: ["someone", "anyone", "some", "anybody"],
        a: 0,
        hint: "Indefinite pronouns — У стверджувальних реченнях для позначення невідомої особи використовується 'someone'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I couldn't find my passport ___ in the house, and now I'm panicking.",
        options: ["somewhere", "anywhere", "nowhere", "everywhere"],
        a: 1,
        hint: "Indefinite pronouns — У заперечних реченнях (де вже є couldn't) замість 'somewhere' використовується 'anywhere'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of the students has to submit the final research paper by Friday.",
        options: ["Each", "All", "Every", "Both"],
        a: 0,
        hint: "Determiners — Займенник 'Each' узгоджується з дієсловом в однині (has), розглядаючи кожного студента окремо."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ the employees were invited to the annual corporate dinner gala.",
        options: ["Every", "Each", "All", "Whole"],
        a: 2,
        hint: "Determiners — Займенник 'All' використовується з іменниками у множині (all the employees) і вимагає дієслова у множині."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "He didn't make ___ mistakes during his presentation, which was impressive.",
        options: ["much", "many", "some", "little"],
        a: 1,
        hint: "Quantifiers — 'Mistakes' — злічувальний іменник у множині. Для заперечних речень використовується детермінатив 'many'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We still have ___ time left before the train departs, so we can grab a coffee.",
        options: ["a little", "little", "a few", "few"],
        a: 0,
        hint: "Quantifiers — 'Time' (час) — незлічувальний іменник. 'A little' означає 'трохи, якась кількість є', чого достатньо для кави."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Very ___ people attended the outdoor concert due to the torrential rain.",
        options: ["few", "little", "a few", "a little"],
        a: 0,
        hint: "Quantifiers — 'People' — злічувальний іменник. 'Few' означає 'мало, майже ніхто', що підсилюється словом 'Very'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The twin brothers always help ___ with their homework and sports training.",
        options: ["each other", "one another", "themselves", "theirselves"],
        a: 0,
        hint: "Reciprocal pronouns — Для взаємної дії між ДВОМА особами використовується сталий вираз 'each other'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "All the team members cooperated with ___ to finish the project on time.",
        options: ["each other", "one another", "themselves", "ourselves"],
        a: 1,
        hint: "Reciprocal pronouns — Для взаємної дії в групі, де БІЛЬШЕ ніж дві особи, традиційно використовується 'one another'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The cat licked ___ paw after eating the delicious fish.",
        options: ["its", "it's", "his", "their"],
        a: 0,
        hint: "Possessive adjective — 'Its' показує приналежність тварині в однині. Не плутайте зі скороченням 'it's' (it is)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ who wishes to join the advanced programming class must pass an entry test.",
        options: ["Anyone", "Someone", "No one", "Some"],
        a: 0,
        hint: "Indefinite pronouns — 'Anyone' вживається в умовних чи загальних твердженнях у значенні 'будь-хто, кожен, хто бажає'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I bought two shirts, but ___ of them fit me properly, so I returned both.",
        options: ["neither", "none", "either", "any"],
        a: 0,
        hint: "Determiners — Заперечення стосується саме двох куплених сорочок, тому обираємо 'neither'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "She spent the ___ day organizing her digital photos and documents.",
        options: ["all", "whole", "every", "each"],
        a: 1,
        hint: "Determiners — З одниною злічуваних іменників (day) у значенні 'весь повністю' вживається структура 'the whole + іменник'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Does ___ have a charger for an iPhone that I could borrow for ten minutes?",
        options: ["anyone", "someone", "no one", "somebody"],
        a: 0,
        hint: "Indefinite pronouns — У загальних запитаннях стандартно використовуються займенники з компонентом any- ('anyone / anybody')."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The new laptop is lightweight, making ___ perfect for digital nomads.",
        options: ["it", "its", "it's", "itself"],
        a: 0,
        hint: "Object pronoun — Після дієслів або прикметників як додаток використовується звичайний особовий займенник 'it'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Don't worry about us; we can take care of ___ during the hiking trip.",
        options: ["ourselves", "ourself", "us", "themselves"],
        a: 0,
        hint: "Reflexive pronoun — Зворотний займенник від підмета 'we' — це 'ourselves' (ми подбаємо про себе самі)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ plan is better? Yours or the design team's proposal?",
        options: ["Which", "What", "Whose", "Who"],
        a: 0,
        hint: "Interrogative pronouns — Коли є обмежений, конкретний вибір між кількома варіантами, ставиться запитальне слово 'Which'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "He is a man ___ opinion I highly value and respect in this industry.",
        options: ["whose", "who", "whom", "which"],
        a: 0,
        hint: "Relative pronouns — Відносний займенник 'whose' вказує на приналежність (людина, чию думку я ціную)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The manager congratulated my colleague and ___ on winning the award.",
        options: ["I", "me", "myself", "mine"],
        a: 1,
        hint: "Object pronoun — Оскільки дія спрямована на нас (кого привітали?), потрібен займенник в об'єктному відмінку 'me'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There are fifty applicants, and ___ has been interviewed by HR.",
        options: ["every", "all", "each", "both"],
        a: 2,
        hint: "Determiners — Займенник 'each' виділяє окремо кожного з групи і використовується з дієсловом в однині (has)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have two smartphones; you can use ___ of them if you need to make a call.",
        options: ["either", "any", "neither", "none"],
        a: 0,
        hint: "Determiners — 'Either' означає 'будь-який з двох' (вибір одного з наданої пари варіантів)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The report contains too ___ technical jargon, making it hard to read.",
        options: ["many", "much", "few", "little"],
        a: 1,
        hint: "Quantifiers — Іменник 'jargon' є незлічувальним, тому для позначення надмірної кількості використовується 'too much'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ information we received from the local guide turned out to be false.",
        options: ["The few", "The little", "Many", "A few"],
        a: 1,
        hint: "Quantifiers — Слово 'information' незлічувальне. Сполучення 'The little' вказує на ту невелику кількість конкретної інформації, що була отримана."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "She cut ___ with a sharp knife while she was preparing the salad.",
        options: ["herself", "her", "hers", "himself"],
        a: 0,
        hint: "Reflexive pronoun — Оскільки виконавець дії (she) і об'єкт дії збігаються, використовується зворотний займенник 'herself'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Are these books ___ or do they belong to the library?",
        options: ["your", "yours", "you", "yours'"],
        a: 1,
        hint: "Possessive pronoun — 'Yours' замінює конструкцію 'your books', щоб уникнути повторення іменника в кінці речення."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have tried on five pairs of shoes, but ___ of them look good.",
        options: ["none", "neither", "any", "no one"],
        a: 0,
        hint: "Determiners — Заперечення стосується п'яти пар (більше ніж дві), тому використовується 'none'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The government has done ___ to solve the rising unemployment issue.",
        options: ["little", "few", "a little", "a few"],
        a: 0,
        hint: "Quantifiers — З дієсловами для вираження малої, майже відсутньої міри дії використовується прислівниковий квантифікатор 'little'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "You can find ___ details about the flight on our official website.",
        options: ["further", "any", "some", "every"],
        a: 0,
        hint: "Determiners — Слово 'further' у ролі детермінатива означає 'додаткові / подальші' (деталі)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The house ___ was quite old, but the garden was breathtakingly beautiful.",
        options: ["itself", "it", "its", "themself"],
        a: 0,
        hint: "Reflexive pronoun — Емфатичне (підсилювальне) використання зворотного займенника: 'Сама по собі хата була старою'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ who missed the safety training must attend the session on Monday.",
        options: ["Those", "That", "These", "This"],
        a: 0,
        hint: "Demonstrative pronouns — Вказівний займенник множини 'Those' часто використовується у значенні 'ті люди, які...' перед підрядними реченнями."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There is ___ water left in the bottle; could you refill it, please?",
        options: ["no", "not", "any", "none"],
        a: 0,
        hint: "Determiners — Заперечний детермінатив 'no' ставиться безпосередньо перед іменником (no water = немає води)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The test was so difficult that almost ___ passed it successfully.",
        options: ["nobody", "anybody", "somebody", "everybody"],
        a: 0,
        hint: "Indefinite pronouns — Логіка речення вказує на негативний результат через складність, тому обираємо заперечний займенник 'nobody'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Could you pass me ___ documents lying over there on the counter?",
        options: ["those", "these", "this", "that"],
        a: 0,
        hint: "Demonstrative pronouns — 'Over there' вказує на предмети, що знаходяться далеко від мовця, а 'documents' — це множина, тому потрібні 'those'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of my parents are doctors, so dinner conversations are often medical.",
        options: ["Both", "All", "Either", "Each"],
        a: 0,
        hint: "Determiners — Батьків завжди двоє, тому для ствердження про них обох використовується слово 'Both'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "She has very ___ friends in the city, so she often feels lonely.",
        options: ["few", "little", "a few", "a little"],
        a: 0,
        hint: "Quantifiers — Оскільки вона почувається самотньо, друзів у неї замало (негативний відтінок). Зі злічуваними іменниками це слово 'few'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Is there ___ chance of rain today according to the weather forecast?",
        options: ["any", "some", "many", "few"],
        a: 0,
        hint: "Quantifiers — У питальних реченнях із незлічуваними іменниками зазвичай використовується детермінатив 'any'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "This laptop is mine, and that one on the desk is ___.",
        options: ["his", "him", "he", "his'"],
        a: 0,
        hint: "Possessive pronoun — Форма присвійного займенника 'his' є однаковою як у ролі прикметника, так і в абсолютній формі без іменника."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ candidate should bring a printed copy of their resume to the interview.",
        options: ["Every", "All", "Both", "Several"],
        a: 0,
        hint: "Determiners — Детермінатив 'Every' вживається з іменниками в однині (candidate) для узагальнення всієї групи."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We managed to complete the difficult task with ___ help from our team leader.",
        options: ["some", "any", "an", "many"],
        a: 0,
        hint: "Quantifiers — У стверджувальних реченнях із незлічуваними іменниками використовується 'some' (якась кількість допомоги)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The town was heavily damaged; ___ house on the street lost its roof.",
        options: ["every", "all", "whole", "most"],
        a: 0,
        hint: "Determiners — 'Every' підкреслює тотальність, охоплюючи кожен окремий будинок (house в однині) на вулиці."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The old man lived by ___ in a small wooden cabin deep in the forest.",
        options: ["himself", "him", "his", "oneself"],
        a: 0,
        hint: "Reflexive pronoun — Вираз 'by himself' є ідіоматичним і означає 'самостійно / наодинці'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The two business partners respect ___ greatly, which makes them successful.",
        options: ["each other", "one another", "themselves", "himself"],
        a: 0,
        hint: "Reciprocal pronouns — Оскільки партнерів двоє, використовуємо взаємний займенник 'each other'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have loaded all the suitcases into the car trunk except ___.",
        options: ["this one", "these one", "this", "those one"],
        a: 0,
        hint: "Demonstrative pronouns — Для виділення одного конкретного предмета в однині використовується конструкція 'this one'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ code is this? It's completely unreadable and lacks comments.",
        options: ["Whose", "Who's", "Which", "What"],
        a: 0,
        hint: "Interrogative pronouns — Питальний займенник 'Whose' перекладається як 'Чий' і запитує про приналежність речі."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The algorithm runs efficiently, but ___ memory consumption is too high.",
        options: ["its", "it's", "their", "his"],
        a: 0,
        hint: "Possessive adjective — Присвійний детермінатив 'its' описує характеристику неживого об'єкта (the algorithm) в однині."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "They solved the complex architectural problem all by ___.",
        options: ["themselves", "theirselves", "themself", "himself"],
        a: 0,
        hint: "Reflexive pronoun — Зворотний займенник для дійової особи 'They' має форму 'themselves'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ laptop do you prefer? The silver one or the black one?",
        options: ["Which", "What", "Whose", "Who"],
        a: 0,
        hint: "Interrogative pronouns — Запит стосується вибору з конкретного, чітко обмеженого набору альтернатив, тому потрібен займенник 'Which'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The secret stayed strictly between the CEO and ___.",
        options: ["him", "he", "himself", "his"],
        a: 0,
        hint: "Object pronoun — Після прийменників завжди вживаються особові займенники в об'єктному відмінку (між ким? — between the CEO and him)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have invited ten colleagues, but ___ of them have confirmed yet.",
        options: ["none", "neither", "any", "no one"],
        a: 0,
        hint: "Determiners — Мова йде про відсутність підтвердження від групи людей (більше ніж двоє), тому використовується 'none'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "She spent the ___ evening learning advanced SQL queries.",
        options: ["whole", "all", "every", "each"],
        a: 0,
        hint: "Determiners — Структура 'the whole + іменник в однині' (evening) перекладається як 'увесь вечір від початку до кінця'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "He didn't give us ___ specific details about the server migration timeline.",
        options: ["any", "some", "no", "much"],
        a: 0,
        hint: "Quantifiers — У заперечних реченнях (didn't) перед злічуваними іменниками у множині ставиться квантифікатор 'any'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There are only ___ tickets left for the final football match.",
        options: ["a few", "few", "a little", "little"],
        a: 0,
        hint: "Quantifiers — Слово 'tickets' — злічуване. Конструкція 'only a few' означає 'лише декілька / зовсім небагато'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have ___ sympathy for people who cheat on exams.",
        options: ["little", "few", "a little", "a few"],
        a: 0,
        hint: "Quantifiers — 'Sympathy' — незлічуваний абстрактний іменник. Форма 'little' вказує на практичну відсутність співчуття."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The two designers offered to critique ___ project layouts.",
        options: ["each other's", "each other", "one another's", "themselves"],
        a: 0,
        hint: "Possessive reciprocal — Присвійна форма взаємного займенника 'each other's' перекладається як 'макети один одного'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We should buy ___ milk; there's barely enough for breakfast.",
        options: ["some more", "any more", "many", "few"],
        a: 0,
        hint: "Quantifiers — 'Some more' використовується у стверджувальних реченнях, коли потрібно висловити запит на додаткову кількість незлічуваного об'єкта."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The dog looked at its reflection in the mirror and scared ___.",
        options: ["itself", "it", "its", "himself"],
        a: 0,
        hint: "Reflexive pronoun — Тварини у граматиці зазвичай кодуються займенником 'it', тому зворотна форма для них — 'itself'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ student must sign the attendance sheet upon entering the exam room.",
        options: ["Every", "All", "Both", "Many"],
        a: 0,
        hint: "Determiners — 'Every' вимагає після себе іменника в однині (student) і стосується кожного представника групи без винятку."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "This car is expensive, but ___ engine is incredibly fuel-efficient.",
        options: ["its", "it's", "his", "their"],
        a: 0,
        hint: "Possessive adjective — Займенник 'its' вказує на належність деталі до неживого предмета (машини) в однині."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I asked around, but ___ knew how to fix the broken database schema.",
        options: ["nobody", "anybody", "somebody", "everyone"],
        a: 0,
        hint: "Indefinite pronouns — Контекст алегоричного протиставлення 'але' (but) вказує, що результат був нульовим: 'ніхто не знав'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Take a look at ___ birds flying high near the mountain top.",
        options: ["those", "these", "this", "that"],
        a: 0,
        hint: "Demonstrative pronouns — Птахи летять високо і далеко від нас, а іменник 'birds' стоїть у множині, тому правильний варіант — 'those'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of my brothers are studying software engineering at the same university.",
        options: ["Both", "All", "Each", "Either"],
        a: 0,
        hint: "Determiners — Займенник 'Both' вказує на пару осіб (вони обидва) і чудово поєднується з дієсловом у множині (are)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "He has so ___ patience left that the slightest noise irritates him.",
        options: ["little", "few", "a little", "a few"],
        a: 0,
        hint: "Quantifiers — Терпіння ('patience') є незлічуваним іменником. Структура 'so little' перекладається як 'так мало'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I don't need ___ help with this task; it's quite simple.",
        options: ["any", "some", "no", "many"],
        a: 0,
        hint: "Quantifiers — Заперечна частка 'don't' блокує використання 'some' та 'no', вимагаючи займенника 'any'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "This red pen belongs to the teacher, and the blue one is ___.",
        options: ["mine", "my", "me", "myself"],
        a: 0,
        hint: "Possessive pronoun — Абсолютна форма присвійного займенника 'mine' використовується самостійно замість конструкції 'my pen'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The software update automatically installs ___ on all connected devices.",
        options: ["itself", "it", "its", "it's"],
        a: 0,
        hint: "Reflexive pronoun — Оскільки оновлення інсталює саме себе (дія замикається на підметі), використовуємо 'itself'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "They decided to paint the entire apartment ___ to save money.",
        options: ["themselves", "theirselves", "themself", "himself"],
        a: 0,
        hint: "Reflexive pronoun — Емфатичний займенник для підмета 'They' має вигляд 'themselves' (вони самі це зробили)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of the three options you select will lead to a different outcome.",
        options: ["Whichever", "Whatever", "Whoever", "Whosever"],
        a: 0,
        hint: "Relative pronouns — Займенник 'Whichever' означає 'який би ви не вибрали з конкретно перелічених варіантів'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The children divided the large chocolate bar equally among ___.",
        options: ["themselves", "theirselves", "each other", "one another"],
        a: 0,
        hint: "Reflexive pronoun — Коли група людей ділить щось внутрішньо між собою (всередині групи), використовується 'themselves'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I didn't recognize the person ___ called you from an unknown number.",
        options: ["who", "which", "whom", "whose"],
        a: 0,
        hint: "Relative pronouns — Для опису та ідентифікації людей (the person) використовується відносний займенник 'who'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There are fifty applicants, and ___ has a unique set of skills.",
        options: ["each", "all", "every", "both"],
        a: 0,
        hint: "Determiners — Слово 'each' розглядає членів групи індивідуально та узгоджується з дієсловом в однині 'has'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "You can choose ___ of these two pathways; both lead to the station.",
        options: ["either", "any", "neither", "none"],
        a: 0,
        hint: "Determiners — Оскільки вибір стосується саме двох стежок, 'either' означає 'будь-яку з цих двох'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The report contains far too ___ errors to be accepted by the board.",
        options: ["many", "much", "few", "little"],
        a: 0,
        hint: "Quantifiers — Помилки ('errors') — це злічуваний іменник у множині. Вираз 'too many' означає 'надто багато'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ knowledge is a dangerous thing, so you should research deeper.",
        options: ["A little", "Little", "Few", "A few"],
        a: 0,
        hint: "Quantifiers — 'A little knowledge' — це відома ідіома Френсіса Бекона ('поверхневі знання є небезпечними'). Знання — незлічувані."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "She managed to repair the broken shelf all by ___.",
        options: ["herself", "her", "hers", "oneself"],
        a: 0,
        hint: "Reflexive pronoun — Конструкція 'by herself' перекладається як 'самостійно / без сторонньої допомоги'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Are you sure this umbrella is ___? I think it belongs to Sarah.",
        options: ["yours", "your", "you", "yours'"],
        a: 0,
        hint: "Possessive pronoun — 'Yours' виступає самостійним займенником-додатком, який не вимагає після себе іменника."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have reviewed ten code repositories, and ___ of them had issues.",
        options: ["none", "neither", "no one", "any"],
        a: 0,
        hint: "Determiners — Заперечення поширюється на групу з 10 репозиторіїв (більше двох), тому використовується слово 'none'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The new framework is great, but I have ___ experience using it.",
        options: ["little", "few", "a little", "a few"],
        a: 0,
        hint: "Quantifiers — Досвід ('experience') незлічуваний. Форма 'little' вказує на брак досвіду (майже немає)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "You can find ___ documentation on the internal wiki page.",
        options: ["some", "any", "an", "many"],
        a: 0,
        hint: "Quantifiers — Документація є незлічуваним збірним поняттям, у стверджувальному реченні з нею вживається детермінатив 'some'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The project team members always support ___ during stressful sprints.",
        options: ["one another", "themselves", "each other's", "himself"],
        a: 0,
        hint: "Reciprocal pronouns — Для взаємодії всередині цілої команди (більше ніж дві особи) зазвичай обирають вираз 'one another'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The virus spreads quickly because of ___ ability to mutate rapidly.",
        options: ["its", "it's", "their", "his"],
        a: 0,
        hint: "Possessive adjective — 'Its' (без апострофа) є присвійним детермінативом для неживих об'єктів або вірусів в однині."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of the employees has access to the confidential server room.",
        options: ["Neither", "None", "All", "Both"],
        a: 0,
        hint: "Determiners — Займенник 'Neither' (жоден із двох) узгоджується з дієсловом в однині 'has' на відміну від займенників 'all' або 'both'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The application crashed because ___ of the configuration files was missing.",
        options: ["one", "some", "any", "few"],
        a: 0,
        hint: "Determiners — Числівниковий детермінатив 'one' ідеально узгоджується з дієсловом в однині 'was missing' та іменником у множині через 'of'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Could you pass me ___ folder that is sitting next to your laptop?",
        options: ["that", "this", "these", "those"],
        a: 0,
        hint: "Demonstrative pronouns — Папка лежить біля співрозмовника (відносно далеко від мовця) і вона одна (однина), тому використовується 'that'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We don't have ___ flour left to make the birthday cake.",
        options: ["enough", "many", "few", "a few"],
        a: 0,
        hint: "Quantifiers — Незлічуваний іменник 'flour' (борошно) у заперечному контексті найкраще поєднується з квантифікатором 'enough' (достатньо)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The team had ___ arguments, but they eventually reached a consensus.",
        options: ["several", "much", "little", "every"],
        a: 0,
        hint: "Quantifiers — 'Arguments' — злічувальний іменник у множині. Квантифікатор 'several' перекладається як 'декілька / кілька'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ smartphone is this? Someone left it charging in the conference room.",
        options: ["Whose", "Who's", "Which", "What"],
        a: 0,
        hint: "Interrogative pronouns — Питання стосується власника пристрою, тому використовується займенник 'Whose' (Чий)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The manager assigned the task to David and ___ yesterday morning.",
        options: ["me", "I", "myself", "mine"],
        a: 0,
        hint: "Object pronoun — Оскільки на нас спрямована дія (кому призначили?), використовується особовий займенник в об'єктному відмінку 'me'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There is ___ reason to doubt his loyalty; he has been completely honest.",
        options: ["no", "not", "any", "none"],
        a: 0,
        hint: "Determiners — Заперечний детермінатив 'no' ставиться перед іменником в однині, відкидаючи будь-яку наявність підстав чи причин."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "She completed the online cybersecurity test all by ___.",
        options: ["herself", "her", "hers", "themselves"],
        a: 0,
        hint: "Reflexive pronoun — Зворотний займенник 'herself' у поєднанні з 'by' підкреслює абсолютну самостійність виконання дії жінкою."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The house was empty; there was ___ there to answer our knocks.",
        options: ["nobody", "anybody", "somebody", "everybody"],
        a: 0,
        hint: "Indefinite pronouns — Логіка першої частини речення ('хата була порожньою') вимагає використання заперечного займенника 'nobody'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ laptop do you think is more durable? Asus or Lenovo?",
        options: ["Which", "What", "Whose", "Who"],
        a: 0,
        hint: "Interrogative pronouns — Коли запит вибору звужується до конкретних брендів/альтернатив, використовується займенник 'Which'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have prepared two different designs; you can review ___ of them.",
        options: ["either", "any", "neither", "none"],
        a: 0,
        hint: "Determiners — Пропозиція вибору стосується саме двох підготовлених дизайнів, тому використовується детермінатив 'either'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There are fifty files, and ___ file needs to be checked for malware.",
        options: ["every", "all", "both", "many"],
        a: 0,
        hint: "Determiners — 'Every' поєднується з іменником в однині (file) для вираження тотальної перевірки кожного об'єкта зі списку."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The engine runs smoothly, but ___ emission levels are above the norm.",
        options: ["its", "it's", "their", "his"],
        a: 0,
        hint: "Possessive adjective — Присвійне слово 'its' вказує на приналежність рівнів викидів конкретному неживому механізму (engine)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "He didn't make ___ progress with his research paper this weekend.",
        options: ["much", "many", "some", "few"],
        a: 0,
        hint: "Quantifiers — Прогрес ('progress') є незлічуваним іменником. У заперечних реченнях велика кількість позначається як 'not much'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We have only ___ milk left; please buy a carton on your way home.",
        options: ["a little", "little", "a few", "few"],
        a: 0,
        hint: "Quantifiers — Молоко — незлічувальний іменник. Конструкція 'only a little' вказує на критично малу, але наявну кількість рідини."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Very ___ customers filed complaints about the updated interface layout.",
        options: ["few", "little", "a few", "a little"],
        a: 0,
        hint: "Quantifiers — Клієнти ('customers') є злічуваними у множині. Вираз 'very few' означає 'вкрай мало / лічені одиниці'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The corporate team members helped ___ pack the exhibition equipment.",
        options: ["each other", "one another", "themselves", "theirselves"],
        a: 0,
        hint: "Reciprocal pronouns — Займенник 'each other' вказує на взаємодопомогу між учасниками процесу."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "They built the entire wooden treehouse completely by ___.",
        options: ["themselves", "theirselves", "themself", "himself"],
        a: 0,
        hint: "Reflexive pronoun — Форма зворотного займенника для третьої особи множини (They) — 'themselves'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ employee is entitled to twenty days of paid annual leave.",
        options: ["Each", "All", "Both", "Many"],
        a: 0,
        hint: "Determiners — 'Each' виділяє кожного індивідуального працівника окремо і чудово узгоджується з іменником в однині."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I spent the ___ afternoon searching for the lost database credentials.",
        options: ["whole", "all", "every", "each"],
        a: 0,
        hint: "Determiners — 'The whole afternoon' перекладається як 'весь пообідній час від початку до кінця' (з одниною іменників)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Did you find ___ interesting at the international technology expo?",
        options: ["anything", "something", "nothing", "every"],
        a: 0,
        hint: "Indefinite pronouns — У загальних запитаннях для позначення невідомої речі чи явища стандартно використовується займенник 'anything'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The user interface is intuitive, which makes ___ very easy to navigate.",
        options: ["it", "its", "it's", "itself"],
        a: 0,
        hint: "Object pronoun — В ролі простого додатка (робить що? — легким для навігації) використовується особовий займенник 'it'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We managed to pull ___ together and launch the startup project on time.",
        options: ["ourselves", "ourself", "us", "themselves"],
        a: 0,
        hint: "Reflexive pronoun — Фразове дієслово 'pull oneself together' означає 'зібратися з силами'. Для підмета 'we' форма буде 'ourselves'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The company updated ___ security policy after the severe cyberattack.",
        options: ["its", "it's", "their", "his"],
        a: 0,
        hint: "Possessive adjective — Безпідметний присвійний займенник 'its' вказує на приналежність політики безпеки компанії (однина)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Are these headphones ___ or did someone leave them in the office?",
        options: ["yours", "your", "you", "yours'"],
        a: 0,
        hint: "Possessive pronoun — Абсолютна форма 'yours' використовується наприкінці речення без подальшого іменника."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Alex and ___ are responsible for updating the server documentation.",
        options: ["I", "me", "myself", "mine"],
        a: 0,
        hint: "Subject pronoun — Оскільки займенник входить до складу підмета (хто оновлює?), він повинен стояти у називному відмінку 'I'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I couldn't locate the error log ___ on the main server partition.",
        options: ["anywhere", "somewhere", "nowhere", "everywhere"],
        a: 0,
        hint: "Indefinite pronouns — Наявність заперечення 'couldn't' зобов'язує використовувати форму 'anywhere'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of the two candidates was selected due to a lack of experience.",
        options: ["Neither", "None", "Either", "Any"],
        a: 0,
        hint: "Determiners — Заперечення стосовно рівно двох кандидатів передається виключно словом 'Neither'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "We interviewed twenty web developers, but ___ of them met the criteria.",
        options: ["none", "neither", "no one", "any"],
        a: 0,
        hint: "Determiners — Заперечення поширюється на велику групу людей (20 розробників), тому обираємо займенник 'none'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "There is too ___ noise in this open-space office; I cannot concentrate.",
        options: ["much", "many", "few", "little"],
        a: 0,
        hint: "Quantifiers — Шум ('noise') — незлічувальний іменник. Для позначення надлишку використовується конструкція 'too much'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The accountant found ___ discrepancies in the quarterly financial statement.",
        options: ["several", "much", "little", "every"],
        a: 0,
        hint: "Quantifiers — Невідповідності ('discrepancies') стоять у множині. Квантифікатор 'several' означає 'кілька / декілька'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "She has ___ understanding of the underlying cryptographic protocols.",
        options: ["little", "few", "a few", "many"],
        a: 0,
        hint: "Quantifiers — Розуміння ('understanding') є незлічуваним поняттям. Форма 'little' вказує на слабкий, майже відсутній рівень знань."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Could you provide me with ___ examples of responsive web design?",
        options: ["some", "any", "an", "much"],
        a: 0,
        hint: "Quantifiers — У ввічливих запитах-проханнях зі злічуваними іменниками у множині використовується детермінатив 'some'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The five core team members always share knowledge with ___.",
        options: ["one another", "themselves", "each other's", "himself"],
        a: 0,
        hint: "Reciprocal pronouns — Для позначення взаємної дії між багатьма учасниками колективу (більше ніж двоє) використовується 'one another'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The baby bird was small and couldn't defend ___ against the predator.",
        options: ["itself", "it", "its", "himself"],
        a: 0,
        hint: "Reflexive pronoun — Зворотний займенник 'itself' використовується для опису тварин або птахів, чия стать є невідомою за контекстом."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ individual team is responsible for managing its own product backlog.",
        options: ["Each", "All", "Both", "Many"],
        a: 0,
        hint: "Determiners — Займенник 'Each' фокусується на кожній команді окремо та узгоджується з іменником в однині (individual team)."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "This workstation is mine, and that one near the window is ___.",
        options: ["hers", "her", "she", "hers'"],
        a: 0,
        hint: "Possessive pronoun — Абсолютна форма присвійного займенника 'hers' самостійно вказує на володіння об'єктом без повторення слова 'workstation'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The system administrator resolved the critical security bug all by ___.",
        options: ["himself", "him", "his", "oneself"],
        a: 0,
        hint: "Reflexive pronoun — Поєднання 'by himself' підкреслює, що адміністратор упорався із завданням самотужки."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The project was a failure because almost ___ understood the requirements.",
        options: ["nobody", "anybody", "somebody", "everybody"],
        a: 0,
        hint: "Indefinite pronouns — Провал проекту логічно зумовлений тим, що 'ніхто не зрозумів вимог', тому вибираємо заперечний займенник 'nobody'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "Please print out ___ charts that are currently displayed on my screen.",
        options: ["these", "this", "that", "those"],
        a: 0,
        hint: "Demonstrative pronouns — Мовець вказує на графіки, що знаходяться близько (на моєму екрані) і у множині (charts), тому потрібен займенник 'these'."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "___ of my co-founders agreed to sign the venture capital term sheet.",
        options: ["Both", "All", "Each", "Either"],
        a: 0,
        hint: "Determiners — Займенник 'Both' чудово вказує на згоду обох співзасновників компанії (пара осіб) разом із дієсловом у множині."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "I have so ___ interest in mobile gaming that I don't install any games.",
        options: ["little", "few", "a little", "a few"],
        a: 0,
        hint: "Quantifiers — Інтерес ('interest') є незлічуваним абстрактним іменником, а вираз 'so little' підкреслює його повну відсутність."
    },
    {
        part: 2,
        topic: "Pronouns & Determiners",
        q: "The web development application automatically saves ___ changes every minute.",
        options: ["its", "it's", "their", "his"],
        a: 0,
        hint: "Possessive adjective — Присвійний детермінатив 'its' описує дію програми (однина, неживий предмет)."
    },
	// ... твої попередні питання ...
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The company's headquarters is located near ___ Amazon River.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Артиклі з географічними назвами — Перед назвами річок (Amazon River) завжди вживається визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "He is studying to become ___ software engineer at a prestigious university.",
        options: ["a", "an", "the", "—"],
        a: 1,
        hint: "Невизначений артикль — Перед назвами професій, що починаються з голосного звуку ([e] в engineer), ставиться артикль 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The international flight to London was delayed by ___ hour and a half.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Артикль перед німим 'h' — У слові 'hour' перша літера не читається, слово починається з голосного звуку, тому потрібен артикль 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "They have travelled across ___ Europe several times on business trips.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Артиклі з континентами — Перед назвами континентів (Europe, Asia) артикль зазвичай не вживається (нульовий артикль)."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Mount Everest is the highest mountain peak in the world.",
        options: ["—", "The", "A", "An"],
        a: 0,
        hint: "Артиклі з горами — Перед назвами поодиноких гірських вершин (Mount Everest) артикль не ставиться."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The group of scientists recently hiked across ___ Alps during their expedition.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Артиклі з гірськими хребтами — На відміну від окремих вершин, перед назвами гірських масивів та ланцюгів (Alps) ставиться 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ United States is one of the leading tech hubs in the world.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Артиклі з країнами — Якщо назва країни містить слова United, Kingdom, Republic, або стоїть у множині, використовується артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "She loves playing ___ piano in her spare time to relax after work.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Музичні інструменти — З дієсловом 'play' перед назвами музичних інструментів традиційно вживається визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The kids like to play ___ football in the local park every Saturday.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Види спорту — Перед назвами спортивних ігор та видів спорту (football, tennis, chess) артикль не використовується."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ water in this mountain stream is cold and perfectly clean.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Конкретизація речовин — Хоча вода є незлічуваним іменником, тут йдеться про конкретну воду в конкретному струмку, тому потрібен артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "He bought ___ new smartphone, but the smartphone turned out to be defective.",
        options: ["a", "the", "an", "—"],
        a: 0,
        hint: "Перша згадка об'єкта — Коли ми вперше згадуємо злічуваний предмет в однині, використовується невизначений артикль 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "Could you please pass me ___ salt from the top shelf?",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Ситуативна конкретика — Співрозмовники розуміють, про яку саме сіль ідеться в кімнаті, тому вживається визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ honest mistake can easily be corrected if you notice it in time.",
        options: ["An", "A", "The", "—"],
        a: 0,
        hint: "Артикль перед німим 'h' — Прикметник 'honest' починається з голосного звуку [о], тому вживається невизначений артикль 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The international flight crossed ___ Atlantic Ocean in less than seven hours.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Назви океанів та морів — Перед назвами океанів, морів та заток завжди ставиться визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "She usually goes to bed late at ___ night after completing her studies.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Сталі вирази часу — У виразі 'at night' (вночі) артикль традиційно відсутній, на відміну від 'in the evening/morning'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "They live in a beautiful house in ___ Netherlands near the coast.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Артиклі з країнами — Назва 'Netherlands' історично та граматично (форма множини) вимагає обов'язкового вживання артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The young student wants to study ___ computer science in Germany.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Навчальні дисципліни — Перед назвами наук, шкільних предметів та академічних дисциплін артикль не ставиться."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Pacific Ocean is the largest and deepest of Earth's oceanic divisions.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Назви океанів — Перед назвою Тихого океану (Pacific Ocean) обов'язково використовується визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The local museum is located in ___ High Street, right opposite the bank.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Назви вулиць — Перед назвами вулиць, площ та парків (High Street, Broadway) артикль зазвичай не використовується."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "He usually has ___ breakfast at 7:30 AM before leaving for the office.",
        options: ["—", "a", "the", "an"],
        a: 0,
        hint: "Прийоми їжі — Перед назвами стандартних прийомів їжі (breakfast, lunch, dinner) артикль не вживається."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ dinner we had at the Italian restaurant yesterday was absolutely delicious.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Конкретизація прийомів їжі — Оскільки йдеться про конкретну вечерю (яку ми їли в ресторані), загальне слово отримує артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The multi-millionaire purchased ___ expensive yacht during his trip to Monaco.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Невизначений артикль — Слово 'expensive' починається з голосного звуку, тому використовується форма 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Sahara Desert stretches across much of North Africa.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Назви пустель — Перед географічними назвами пустель (Sahara Desert, Gobi Desert) завжди ставиться визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "She can speak ___ French fluently because she lived in Paris for five years.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Назви мов — Якщо після назви мови немає слова 'language' (наприклад, просто French), артикль не використовується."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ French language is known for its complex but beautiful pronunciation.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Конструкція з 'language' — Коли після назви мови стоїть слово 'language', використання артикля 'the' є обов'язковим."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The legal department provided us with ___ useful information regarding patents.",
        options: ["—", "a", "an", "the"],
        a: 0,
        hint: "Незлічувані іменники — Слово 'information' є незлічуваним, тому вжити перед ним артикль 'a' або 'an' граматично неможливо."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The tech company's innovative product was awarded ___ first prize.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Сталі вирази з числівниками — У фразах на зразок 'win first prize' або 'take first place' перед порядковим числівником артикль часто опускається."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ second chapter of the textbook covers advanced database normalization.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Порядкові числівники — Перед порядковими числівниками (the second, the third), які вказують на точний порядок, ставиться артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The international flight will arrive on ___ third of October.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Дати — При позначенні днів місяця за допомогою порядкових числівників завжди використовується артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The engineering team built ___ three-story laboratory in the tech park.",
        options: ["a", "an", "the", "—"],
        a: 0,
        hint: "Складені прикметники — 'Three-story' тут виступає у ролі прикметника до іменника 'laboratory'. Оскільки опис загальний, ставимо 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ United Kingdom consists of England, Scotland, Wales, and Northern Ireland.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Країни зі словом Kingdom — Назви держав, що містять політичні терміни на зразок 'Kingdom', вимагають артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "He is ___ tallest developer in our software engineering department.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Найвищий ступінь порівняння — Перед прикметниками у найвищому ступені порівняння (tallest) завжди вживається артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The cargo ship sailed across ___ Red Sea to deliver the manufacturing components.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Назви морських об'єктів — Назви морів (Red Sea, Mediterranean Sea) завжди потребують визначеного артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "They spent their summer vacation near ___ Lake Baikal in Siberia.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Артиклі з озерами — Якщо перед назвою озера стоїть власне слово 'Lake', визначений артикль 'the' не використовується."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ moon looks incredibly bright and beautiful in the clear sky tonight.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Унікальні космічні об'єкти — Перед назвами унікальних, єдиних у своєму роді об'єктів природи (the moon, the sun) ставиться 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The software architect usually drinks ___ cup of strong coffee every morning.",
        options: ["a", "the", "an", "—"],
        a: 0,
        hint: "Обчислювальна порція — Поняття 'cup of coffee' є злічуваним, у загальному значенні однини використовується артикль 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The system administrator needs ___ advice on how to configure the firewall.",
        options: ["—", "an", "a", "the"],
        a: 0,
        hint: "Незлічувані абстракції — Слово 'advice' в англійській мові є незлічуваним, артиклі 'a/an' з ним ніколи не використовуються."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The financial consultants managed to double their revenue in ___ year 2025.",
        options: ["the", "—", "a", "an"],
        a: 0,
        hint: "Конструкція з роком — Перед комбінацією слова 'year' та конкретного цифрового позначення року вживається артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The international scientific team set up a research camp near ___ Nile.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Назви всесвітньо відомих річок — Перед назвою річки Ніл (Nile / Nile River) використання артикля 'the' є обов'язковим."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The experienced astronaut has been to ___ space three times.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Космос як поняття — Коли слово 'space' означає відкритий космос / всесвіт, воно використовується без жодного артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The construction worker forgot to bring ___ iron hammer to the site.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Фонетичне правило — Прикметник 'iron' (залізний) починається з голосного звуку [аɪ], тому потрібен артикль 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Smiths always host a wonderful block party for their neighbors in July.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Прізвища у множині — Для позначення всієї родини/сім'ї за їхнім прізвищем у множині завжди використовується артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The tourists purchased a beautiful painting in a gallery near ___ Seine.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Річки Європи — Перед назвою річки Сена (Seine) обов'язково вживається визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The university student is currently writing ___ unique essay on history.",
        options: ["a", "an", "the", "—"],
        a: 0,
        hint: "Фонетичне правило 'U' — Слово 'unique' починається з приголосного звуку [ј] (йюнік), тому перед ним ставиться артикль 'a', а не 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The expert developer has over ___ ten years of experience in cybersecurity.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Кількісні числівники — Перед простими кількісними числівниками, які супроводжують іменники у множині, артикль не ставиться."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ thousands of local citizens gathered to protest the new tax policy.",
        options: ["—", "The", "A", "An"],
        a: 0,
        hint: "Невизначена велика кількість — Оборот 'thousands of' (тисячі когось) виступає як самостійний квантифікатор і не вимагає артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The new residential complex is located on ___ fifth floor of the building.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Порядкові числівники — Опис поверхів через порядковий числівник (fifth) завжди супроводжується артиклем 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The company announced a budget cut of ___ one million dollars.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Числівники міри — Перед словом 'million', коли перед ним вже стоїть точний числівник 'one', артикль ставити не потрібно."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The internal database architecture design was completed in ___ year 2024.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Конструкція з роком — Словосполучення на кшталт 'in the year 2024' вимагають визначеного артикля перед словом 'year'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The mathematical theorem was discovered by ___ ancient Greek scientist.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Голосний звук — Прикметник 'ancient' (стародавній) починається з голосного звуку [еɪ], тому використовується форма 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The cargo delivery train passed right through ___ United Kingdom.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Політичні назви країн — Назва держави 'United Kingdom' завжди супроводжується визначеним артиклем 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Mount Kilimanjaro is a dormant volcano located in Tanzania.",
        options: ["—", "The", "A", "An"],
        a: 0,
        hint: "Поодинокі вершини — Власні назви окремих гір з компонентом 'Mount' не використовують артикль."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The geography teacher showed us the map of ___ Canary Islands.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Групи островів — Перед назвами архіпелагів та груп островів (Canary Islands) завжди ставиться визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Madagascar is a large island nation located off the coast of East Africa.",
        options: ["—", "The", "A", "An"],
        a: 0,
        hint: "Поодинокі острови — На відміну від архіпелагів, окремі острови (Madagascar, Cyprus) пишуться без артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The container vessel successfully crossed ___ Suez Canal yesterday evening.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Канали та протоки — Перед штучними судноплавними каналами (Suez Canal, Panama Canal) завжди ставиться 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "She dreams of visiting ___ Louvre during her next weekend trip to Paris.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Музеї та галереї — Перед всесвітньо відомими назвами музеїв, галерей та театрів використовується артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The database developers usually have ___ quick lunch at their office desks.",
        options: ["a", "the", "an", "—"],
        a: 0,
        hint: "Прийоми їжі з прикметником — Якщо перед назвою прийому їжі (lunch) стоїть описовий прикметник (quick), з'являється артикль 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The marketing director is currently looking for ___ honest assistant.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Німе 'h' — Прикметник 'honest' починається з голосного звуку, що зумовлює вибір невизначеного артикля 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The physics lab equipment measures the speed of ___ light very accurately.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Загальні фізичні явища — Незлічувані іменники, що означають загальні природні явища (light, gravity), використовуються без артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ information you provided in the spreadsheet was incredibly helpful.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Конкретизація незлічуваних іменників — Обмеження інформації підрядному реченням ('яку ти надав') вимагає артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The senior software engineer code review was ___ absolute masterpiece.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Фонетика голосного — Перед словом 'absolute' ([æ]), яке починається з голосного, ставиться артикль 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The research team spent three weeks exploring ___ Gobi Desert.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Пустелі планети — Перед географічними назвами пустельних регіонів (Gobi Desert) ставиться визначений артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The prime minister gave a brilliant speech at ___ university yesterday.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Конкретне місце — Йдеться про конкретний університет, де відбувався захід, тому використовується артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The active child wants to learn how to play ___ guitar this autumn.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Інструменти з дієсловом play — Музичні інструменти у контексті гри на них вимагають артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The dynamic management team values ___ honesty above all other qualities.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Абстрактні іменники — Абстрактні поняття та людські якості (honesty, patience) у загальному значенні вживаються без артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The professional software update fixed ___ dozens of critical system security bugs.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Сталі кількісні вирази — Фраза 'dozens of' (десятки чогось) виступає квантифікатором і не потребує артикля перед собою."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The young graphic designer bought ___ unique monitor for color grading.",
        options: ["a", "an", "the", "—"],
        a: 0,
        hint: "Приголосний звук [ј] — Перед прикметником 'unique' звучить приголосний старт, тому граматично правильним є артикль 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The international trade route runs directly through ___ Mediterranean Sea.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Морська географія — Власні назви морів (Mediterranean Sea) завжди вживаються з визначеним артиклем 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The local tourism guide showed the group around ___ Hyde Park in London.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Назви парків — Більшість назв міських парків (Hyde Park, Central Park) використовуються з нульовим артиклем."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ sun is shining brightly, heating up the concrete city streets.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Єдині у світі об'єкти — Сонце (sun) є унікальним астрономічним об'єктом для Землі, тому пишеться з артиклем 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The financial department noticed a serious error in ___ second report.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Порядкові структури — Порядковий числівник 'second' конкретизує документ по порядку, вимагаючи артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The corporate event organizer ordered ___ hundred customized branded notebooks.",
        options: ["a", "the", "an", "—"],
        a: 0,
        hint: "Числівники міри — Перед словами hundred, thousand, million в однині часто ставиться невизначений артикль 'a' у значенні 'один'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The software testing team discovered ___ exciting new feature in the update.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Фонетичне правило — Слово 'exciting' починається з голосного звуку, тому використовується невизначений артикль 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The company's dynamic legal counsel graduated from ___ Oxford University.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Університети з власною назвою — Якщо назва закладу містить ім'я засновника чи міста на початку (Oxford University), артикль не ставиться."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The engineering students spent their field day near ___ Lake Superior.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Озера зі словом Lake — Окремі озера, назва яких починається з географічного детермінатива 'Lake', вживаються без артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Bahamas is a popular destination for tourists seeking warm weather.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Острівні держави у множині — Назви островів або держав, що мають граматичну форму множини (Bahamas), вимагають артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The software company's office is located on ___ corner of 5th Avenue.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Просторова конкретика — Визначене місце в міському просторі ('на розі саме цієї вулиці') потребує артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "He loves to read books about ___ history of the Roman Empire.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Обмеження за допомогою 'of' — Іменник 'history' конкретизований додатком з прийменником 'of' (історія кого/чого?), тому ставимо 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The system security logs are backed up twice ___ day on an external drive.",
        options: ["a", "the", "an", "—"],
        a: 0,
        hint: "Дистрибутивне значення — Артикль 'a/an' використовується у значенні 'за / в' при вказівці регулярності частоти дій (twice a day)."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ air in this server room is kept cold by a powerful cooling system.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Речовини у конкретному місці — Повітря (air) незлічуване, але оскільки це повітря саме в цій серверній, воно маркується артиклем 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The senior software team lead has ___ unique perspective on cloud migration.",
        options: ["a", "an", "the", "—"],
        a: 0,
        hint: "Приголосний звук — Перед словом 'unique' звучить приголосний [ј], тому граматично коректним є вибір артикля 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The experienced captain safely sailed the ship across ___ Pacific.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Скорочені назви океанів — Навіть якщо слово Ocean опускається, сама назва 'the Pacific' все одно вимагає визначеного артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The young family moved to a small town in ___ Republic of Ireland.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Політичні терміни у назвах країн — Присутність політичного слова 'Republic' автоматично впроваджує використання артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The group of tourists spent their afternoon walking down ___ Broadway.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Знамениті вулиці — Відомі вулиці та проспекти (Broadway, Wall Street) традиційно використовуються з нульовим артиклем."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ breakfast they served at the conference hotel was mediocre.",
        options: ["The", "A", "An", "—"],
        a: 0,
        hint: "Специфічний прийом їжі — Йдеться про конкретний сніданок у готелі під час конференції, тому потрібен артикль 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The financial analyst needed ___ accurate data to complete the charts.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Іменники у множині — Слово 'data' (дані) граматично є формою множини, тому невизначені артиклі 'a/an' перед ним не ставляться."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The team required exactly ___ hour to upload all the configuration updates.",
        options: ["an", "a", "the", "—"],
        a: 0,
        hint: "Фонетичне правило — 'Hour' починається з голосного звуку через німу літеру 'h', тому використовується артикль 'an'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The delivery company recently bought ___ dozen new electric cargo vans.",
        options: ["a", "the", "an", "—"],
        a: 0,
        hint: "Сталі числівникові вирази — Фраза 'a dozen' (дюжина / дванадцять) є усталеною мірою і вимагає невизначеного артикля 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The tech startup team secured their first investment on ___ tenth of March.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Дати календаря — Порядкові числівники у структурі позначення календарних дат завжди супроводжуються артиклем 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "___ Mount Vesuvius is a well-known active volcano located in Italy.",
        options: ["—", "The", "A", "An"],
        a: 0,
        hint: "Поодинокі вершини — Конструкції назв окремих гір, що починаються зі слова 'Mount', не вживають жодного артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The oceanographic vessel is currently exploring ___ deep waters of the Atlantic.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Означені підрядні структури — Поєднання 'the deep waters of...' конкретизоване наступним географічним об'єктом через прийменник 'of'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The young couple spent their honey moon traveling around ___ United Arab Emirates.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Назви країн у множині/з політичними термінами — Держава 'United Arab Emirates' (ОАЕ) завжди пишеться з артиклем 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The geology professor explained the historical formation of ___ Rocky Mountains.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Гірські ланцюги — Назви великих гірських хребтів та систем (Rocky Mountains) обов'язково вимагають артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The development team successfully resolved ___ three complex system bugs today.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Кількісні числівники з множиною — Простий кількісний числівник (three) перед іменником у множині виключає потребу в артиклі."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The software company updated its policy in ___ third quarter of the fiscal year.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Порядкові визначення — Означення часових періодів через порядкові числівники (the third quarter) потребує артикля 'the'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The dynamic management board voted to invest ___ million dollars into AI research.",
        options: ["a", "the", "an", "—"],
        a: 0,
        hint: "Числівникові вирази міри — Перед числівником 'million', коли він вживається у значенні 'один мільйон', ставиться артикль 'a'."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The young kid loves reading fascinating stories about ___ space exploration.",
        options: ["—", "the", "a", "an"],
        a: 0,
        hint: "Загальні незлічувані абстракції — Словосполучення 'space exploration' (дослідження космосу) є загальним поняттям, артикль відсутній."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The local history museum is located on ___ corner of the central square.",
        options: ["the", "a", "an", "—"],
        a: 0,
        hint: "Просторова локація — Позначення конкретного географічного або топографічного кута (the corner of...) вимагає визначеного артикля."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The expert supervisor has ___ industrial experience spanning over twenty years.",
        options: ["—", "an", "a", "the"],
        a: 0,
        hint: "Незлічувані абстрактні іменники — Досвід ('experience') є незлічуваним іменником, тому використання невизначених артиклів 'a/an' є помилкою."
    },
    {
        part: 2,
        topic: "Articles & Numerals",
        q: "The financial investment project failed in ___ year 2023 due to the global crisis.",
        options: ["the", "—", "a", "an"],
        a: 0,
        hint: "Формальний вираз з роком — Конструкція з безпосереднім використанням слова 'year' перед лічбою (the year 2023) потребує артикля 'the'."
    },
	{
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The supervisor was so ___ by the team's presentation that she immediately approved the budget.",
        options: ["impressed", "impressing", "impress", "impressive"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Закінчення -ed описує почуття або стан живої істоти (була вражена), тоді як -ing описує властивість предмета."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "We sat around a ___ table in the middle of the old library hall.",
        options: ["beautiful large round wooden", "large beautiful wooden round", "wooden beautiful large round", "round large wooden beautiful"],
        a: 0,
        hint: "Порядок прикметників — Правильна послідовність: Opinion (beautiful) -> Size (large) -> Shape (round) -> Material (wooden)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The statistics professor gave an ___ explanation of the market dynamics.",
        options: ["amazing clear text", "clear amazing text", "text clear amazing", "amazing text clear"],
        a: 0,
        hint: "Порядок прикметників — Прикметник-оцінка (amazing) завжди передує фактологічному опису (clear)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "It was a truly ___ football match, and the fans couldn't sit still until the final whistle.",
        options: ["exciting", "excited", "excite", "excitedly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Для опису подій, неживих предметів чи явищ, які викликають емоцію (захопливий матч), використовується форма на -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "She bought a ___ vase at the local antique auction last Sunday.",
        options: ["charming small ancient Chinese", "small charming Chinese ancient", "ancient Chinese small charming", "Chinese ancient small charming"],
        a: 0,
        hint: "Порядок прикметників — Нормативний порядок в англійській мові: Opinion (charming) -> Size (small) -> Age (ancient) -> Origin (Chinese)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The long-distance flight was absolutely ___ for most of the economy passengers.",
        options: ["exhausting", "exhausted", "exhaust", "exhaustively"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Оскільки політ є причиною втоми (виснажливий), обираємо дієприкметникову форму із закінченням -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He wore a ___ jacket to the formal corporate dinner.",
        options: ["smart black Italian leather", "black smart leather Italian", "Italian leather black smart", "smart leather Italian black"],
        a: 0,
        hint: "Порядок прикметників — Класичний ланцюжок вимагає схеми: Opinion (smart) -> Color (black) -> Origin (Italian) -> Material (leather)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "After hiking up the steep trail for four hours, the tourists felt thoroughly ___.",
        options: ["exhausted", "exhausting", "exhaust", "exhaustively"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Стан людей (виснажені, утомлені) після тривалого фізичного навантаження кодується формою на -ed."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The researcher discovered some ___ documents in the national museum's basement.",
        options: ["fascinating old historical", "historical fascinating old", "old historical fascinating", "fascinating historical old"],
        a: 0,
        hint: "Порядок прикметників — Суб'єктивне враження (fascinating) має стояти на початку ряду, перед віком (old) та типом (historical)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Listening to the monotonous voice of the presenter made the audience feel ___.",
        options: ["bored", "boring", "bore", "boredly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Почуття та емоційний стан людей, яким нудно від певної дії, вимагають закінчення -ed."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The new housing complex consists of several ___ buildings.",
        options: ["modern tall concrete", "tall concrete modern", "concrete tall modern", "modern concrete tall"],
        a: 0,
        hint: "Порядок прикметників — Дотримуємось послідовності ознак: Age (modern) -> Size/Height (tall) -> Material (concrete)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The documentary about deep-sea creatures was highly ___ to the young students.",
        options: ["interesting", "interested", "interest", "interestingly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Характеристика фільму як джерела інтересу (цікавий) маркується суфіксом -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The executive drove a ___ sports car to the country club.",
        options: ["sleek fast red German", "German fast red sleek", "red German sleek fast", "fast sleek German red"],
        a: 0,
        hint: "Порядок прикметників — Вірна побудова опису: Opinion/Style (sleek) -> Physical quality (fast) -> Color (red) -> Origin (German)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The software updates were rather ___ because the manual contained outdated steps.",
        options: ["confusing", "confused", "confuse", "confusingly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Оновлення та інструкції заплутані самі по собі, тобто виступають причиною плутанини, тому обираємо -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "We were completely ___ by the sudden change in the financial regulations.",
        options: ["confused", "confusing", "confuse", "confusingly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Якщо йдеться про стан людей, які збиті з пантелику чи заплутались через новини, використовуємо форму -ed."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "They live in a ___ house near the southern coast of France.",
        options: ["lovely large old stone", "stone old large lovely", "large lovely stone old", "old stone lovely large"],
        a: 0,
        hint: "Порядок прикметників — Послідовність визначень: Opinion (lovely) -> Size (large) -> Age (old) -> Material (stone)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The results of the medical tests were extremely ___ for the whole family.",
        options: ["worrying", "worried", "worry", "worriedly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Результати аналізів викликають тривогу (вони є тривожними), отже необхідна активна ознака на -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The candidate gave a ___ answer that failed to satisfy the journalists.",
        "options": ["disappointing", "disappointed", "disappoint", "disappointedly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Відповідь політика розчарувала публіку, тобто була розчаровуючою, що потребує суфікса -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The little boy looked terribly ___ during the thunderous storm.",
        options: ["frightened", "frightening", "frighten", "frighteningly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Переляканий погляд чи внутрішній страх дитини описується пасивним дієприкметником на -ed."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The dark alley looked quite ___ to the pedestrians at night.",
        options: ["frightening", "frightened", "frighten", "frighteningly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Провулок лякає перехожих, є страшним за своєю суттю, тому обираємо активну ознаку на -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He packed his belongings into a ___ suitcase before leaving for college.",
        options: ["heavy square brown plastic", "plastic brown square heavy", "brown heavy plastic square", "square plastic heavy brown"],
        a: 0,
        hint: "Порядок прикметників — Правильний стандартний ланцюжок: Physical quality/Weight (heavy) -> Shape (square) -> Color (brown) -> Material (plastic)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The theater critics were heavily ___ with the avant-garde performance.",
        options: ["disappointed", "disappointing", "disappoint", "disappointedly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Критики відчули розчарування (були розчаровані), що вимагає закінчення -ed для опису стану."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "She received a ___ ring from her grandmother on her wedding day.",
        options: ["gorgeous antique gold", "gold antique gorgeous", "antique gorgeous gold", "gold gorgeous antique"],
        a: 0,
        hint: "Порядок прикметників — Дотримуємось правила суб'єктивного сприйняття перед об'єктивним: Opinion (gorgeous) -> Age (antique) -> Material (gold)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Working in a noisy open-plan office all day can be highly ___.",
        options: ["irritating", "irritated", "irritate", "irritatedly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Робота в галасливих умовах виступає подразником, є дратівливою, тому використовуємо форму на -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The clients were getting ___ because the system migration took longer than promised.",
        options: ["irritated", "irritating", "irritate", "irritatedly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Клієнти ставали роздратованими, відчували роздратування через затримки, що вимагає форми -ed."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The decorator chose a ___ carpet for the luxurious master bedroom.",
        options: ["thick soft grey wool", "grey wool thick soft", "soft grey wool thick", "wool grey soft thick"],
        a: 0,
        hint: "Порядок прикметників — Опис властивостей матеріальних об'єктів будується так: Physical texture (thick, soft) -> Color (grey) -> Material (wool)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Hearing that the startup had secured major investment was very ___ news.",
        options: ["encouraging", "encouraged", "encourage", "encouragingly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Новини вселяють надію, є обнадійливими (активний вплив), тому ставимо суфікс -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The project manager felt greatly ___ after the successful review meeting.",
        options: ["encouraged", "encouraging", "encourage", "encouragingly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Стан людини, яку надихнули або підбадьорили результати, передається пасивним дієприкметником на -ed."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The museum exhibition featured several ___ statues from the Roman Empire.",
        options: ["magnificent tall white marble", "white marble magnificent tall", "tall white marble magnificent", "magnificent marble white tall"],
        a: 0,
        hint: "Порядок прикметників — Коректне поєднання дескрипторів: Opinion (magnificent) -> Dimension (tall) -> Color (white) -> Material (marble)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The scientific community found the data anomalies to be utterly ___.",
        options: ["puzzling", "puzzled", "puzzle", "puzzlingly"],
        a: 0,
        hint: "Прикметники на -ed/-ing — Аномалії в даних спантеличують вчених, тобто є загадковими чи незрозумілими, що вимагає форми на -ing."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The task turned out to be ___ more difficult than the professor had initially warned us.",
        options: ["far", "very", "too", "so"],
        a: 0,
        hint: "Підсилення порівняльного ступеня — Для підсилення порівняльних форм (more difficult) використовуються слова far, much, significantly, але не прислівник very."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Of the two innovative solutions proposed, the second one seems ___ practical.",
        options: ["the more", "the most", "more", "most"],
        a: 0,
        hint: "Порівняння двох об'єктів — При виборі між двома конкретними варіантами вживається вищий ступінь з означеним артиклем the."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ we focus on the research details, the more accurate our results will be.",
        options: ["more", "most", "much", "the more"],
        a: 0,
        hint: "Конструкція паралельного порівняння — Структура 'The + вищий ступінь, the + вищий ступінь' описує взаємопов'язані зміни."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The lecture was ___ boring that most of the students lost interest before the break.",
        options: ["so", "such", "too", "very"],
        a: 0,
        hint: "Конструкція наслідку — Сполучення 'so + прикметник + that' вказує на високу інтенсивність ознаки, що призводить до певного результату."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This winter is significantly ___ than the one we had a decade ago.",
        options: ["colder", "the coldest", "more cold", "as cold"],
        a: 0,
        hint: "Вищий ступінь прикметника — Односкладові прикметники утворюють порівняльну форму за допомогою суфікса -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "She plays the violin much ___ than she did when she first started.",
        options: ["better", "best", "well", "more good"],
        a: 0,
        hint: "Винятки ступенів порівняння — Прислівник well та прикметник good мають супплетивну (змінену) форму вищого ступеня — better."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This is by far ___ interesting book I have read this year.",
        options: ["the most", "more", "the more", "most"],
        a: 0,
        hint: "Підсилення найвищого ступеня — Фраза 'by far' (однозначно, безумовно) використовується для підсилення найвищого ступеня порівняння з артиклем the."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The economic situation is growing ___ unstable with each passing month.",
        options: ["increasingly", "more increase", "increasing", "most increase"],
        a: 0,
        hint: "Модифікація ознаки — Прислівник increasingly (все більше й більше) вживається перед прикметниками для опису процесу наростання якості."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This device is twice as efficient ___ the previous version.",
        options: ["as", "than", "like", "so"],
        a: 0,
        hint: "Кратне порівняння — Для порівняння величин із використанням слів twice/three times застосовується конструкція 'as + прикметник + as'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "It was ___ a complex theory that nobody in the room could explain it.",
        options: ["such", "so", "very", "too"],
        a: 0,
        hint: "Інтенсифікатор перед іменником — Сполучення 'such + a/an + прикметник + злічуваний іменник' слугує для емоційного або логічного підсилення."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This is the ___ building in the entire city center.",
        options: ["oldest", "older", "most old", "elder"],
        a: 0,
        hint: "Найвищий ступінь предметів — Для опису неживих об'єктів у значенні 'найстаріший' використовується суфіксальна форма oldest."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He works much ___ now than he did five years ago.",
        options: ["harder", "more hard", "hardest", "the hardest"],
        a: 0,
        hint: "Порівняння коротких прислівників — Короткий прислівник hard збігається за формою з прикметником і у вищому ступені приймає закінчення -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The problem is not nearly ___ complicated as we initially thought.",
        options: ["as", "so", "more", "the"],
        a: 0,
        hint: "Ослаблення порівняння — Фраза 'not nearly as... as' означає 'далеко не такий... як' і вимагає базової форми прикметника."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The climate here is ___ than it is in my home country.",
        options: ["milder", "more mild", "mildest", "the mildest"],
        a: 0,
        hint: "Порівняльний ступінь — Односкладовий прикметник mild утворює вищий ступінь стандартним шляхом додавання -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He arrived ___ than everyone else at the conference.",
        options: ["earlier", "earliest", "more early", "the earlier"],
        a: 0,
        hint: "Зміна кінцевої літери — Прислівники та прикметники на -y (як-от early) змінюють 'y' на 'i' перед суфіксом -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "That was ___ difficult test I have ever taken in my life.",
        options: ["the most", "more", "the more", "most"],
        a: 0,
        hint: "Найвищий ступінь із донедавнім досвідом — Конструкція 'I have ever...' зазвичай вказує на потребу найвищого ступеня (the most + багатоскладовий прикметник)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "She feels ___ better after taking the prescribed treatment.",
        options: ["much", "very", "too", "so"],
        a: 0,
        hint: "Модифікація вищого ступеня — Для модифікації супплетивної форми better використовується підсилювач much."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This is ___ unique approach to solving the structural problem.",
        options: ["a", "an", "the", "—"],
        a: 0,
        hint: "Фонетичний вибір артикля — Прикметник unique починається з приголосного звуку /j/, тому перед ним вживається неозначений артикль a."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The task was too ___ for him to finish within the deadline.",
        options: ["complex", "more complex", "most complex", "complexer"],
        a: 0,
        hint: "Конструкція з 'too' — Модальний прислівник too (занадто) вимагає після себе використання позитивного (початкового) ступеня прикметника."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "It is ___ a beautiful day that we decided to have a picnic.",
        options: ["such", "so", "very", "too"],
        a: 0,
        hint: "Екскламаторна структура — Перед комбінацією 'артикль a + прикметник + іменник' ставиться слово such для вираження високої міри якості."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He is the ___ person to consult on this legal matter.",
        options: ["best", "better", "good", "most good"],
        a: 0,
        hint: "Найвищий ступінь винятку — Означений артикль the перед пропуском сигналізує про найвищий ступінь від слова good — best."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This alternative plan is ___ less effective than the original one.",
        options: ["far", "very", "too", "so"],
        a: 0,
        hint: "Зменшувальне порівняння — Конструкція 'less + прикметник' (менш ефективний) підсилюється за допомогою слова far (значно менш)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ you wait to make a decision, the fewer options you will have.",
        options: ["longer", "longest", "more long", "the longest"],
        a: 0,
        hint: "Паралельні пропорції — Перша частина парного звороту вимагає структури 'The + вищий ступінь' (The longer)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "With every passing minute, the night was growing ___.",
        options: ["colder and colder", "cold and cold", "the colder and colder", "coldest and coldest"],
        a: 0,
        hint: "Поступове посилення ознаки — Подвоєння вищого ступеня через сполучник and (colder and colder) показує безперервну динаміку змін."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He is ___ tallest manager in our international department.",
        options: ["the", "—", "a", "an"],
        a: 0,
        hint: "Артикль з найвищим ступенем — Форма найвищого ступеня порівняння (tallest) у класичній атрибутивній функції вимагає означеного артикля the."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The final quarter results were even ___ than the pessimistic forecast.",
        options: ["worse", "worst", "badder", "more bad"],
        a: 0,
        hint: "Супплетивні форми — Порівняльний ступінь від прикметника bad (поганий) — це irregular-форма worse."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Trust is considered the ___ important factor in any long-term partnership.",
        options: ["most", "more", "the most", "best"],
        a: 0,
        hint: "Найвищий ступінь аналітично — Для багатоскладового прикметника important найвищий ступінь будівництва забезпечується словом most (артикль the вже є в реченні)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The tea is still ___ hotter than I prefer to drink it.",
        options: ["a bit", "very", "too", "so"],
        a: 0,
        hint: "Помірне підсилення — Вираз 'a bit' (трішки, трохи) вживається перед вищим ступенем прикметників для демонстрації невеликої різниці."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Out of the twin sisters, Megan is definitely the ___.",
        options: ["smarter", "smartest", "smart", "most smart"],
        a: 0,
        hint: "Вибір із пари — Оскільки об'єктів лише два (twins), граматично правильно застосовувати вищий ступінь із артиклем the — the smarter."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ I contemplate the scenario, the less likely it seems to happen.",
        options: ["more", "most", "much", "the most"],
        a: 0,
        hint: "Подвійний вищий ступінь — Початок речення у сталій структурі пропорційності оформлюється як 'The more...'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This hybrid car model is significantly ___ efficient than its predecessor.",
        options: ["more", "most", "the more", "much more"],
        a: 0,
        hint: "Аналітичний порівняльний ступінь — Двоскладовий прикметник efficient, що закінчується не на -y, утворює вищий ступінь за допомогою слова more."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He was recognized as the ___ diligent employee of the financial year.",
        options: ["most", "more", "diligent", "most diligently"],
        a: 0,
        hint: "Багатоскладові дескриптори — Перед довгим прикметником diligent у найвищему ступені після артикля the додається слово most."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "She looks much ___ now that she has settled into her new house.",
        options: ["happier", "happy", "happiest", "more happy"],
        a: 0,
        hint: "Ортографія прикметників — Прикметник happy закінчується на приголосну + y, тому при додаванні суфікса -er літера y змінюється на i."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Have you heard the ___ news regarding the corporate merger?",
        options: ["latest", "last", "latter", "least"],
        a: 0,
        hint: "Семантичні відмінності — Слово latest означає найсвіжіший, найновіший на поточний момент часу."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "It is already ___ late to cancel the reservation without a penalty fee.",
        options: ["too", "so", "very", "much"],
        a: 0,
        hint: "Обмежувальне значення — Слово too перед прикметником позначає надмірність ознаки, яка унеможливлює або ускладнює дію."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Please make sure you install the ___ version of the antivirus program.",
        options: ["latest", "last", "latter", "least"],
        a: 0,
        hint: "Значення актуальності — Для програмного забезпечення та інформації актуальна версія позначається як 'the latest'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This is undoubtedly the ___ non-fiction book available on the market.",
        options: ["best", "better", "good", "most good"],
        a: 0,
        hint: "Супплетивний найвищий ступінь — Абсолютна перевага якості від слова good передається через супплетивну форму best."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "My brother is three years ___ than me, though he looks younger.",
        options: ["older", "old", "oldest", "elder"],
        a: 0,
        hint: "Порівняння віку поза родиною — При прямому порівнянні віку із використанням сполучника than вживається виключно форма older, а не elder."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Losing the contract due to a typo was the ___ experience of his career.",
        options: ["worst", "worse", "bad", "most bad"],
        a: 0,
        hint: "Найвищий ступінь винятку — Неправильний прикметник bad трансформується у найвищому ступені у слово worst."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The newly opened restaurant is much ___ than we expected.",
        options: ["busier", "busy", "busiest", "more busy"],
        a: 0,
        hint: "Двоскладові слова на -y — Слово busy підпорядковується правилу суфіксації зі зміною кінцевой голосної: busier."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This is the ___ conference room in the entire office building.",
        options: ["biggest", "bigger", "big", "most big"],
        a: 0,
        hint: "Правило закритих складів — Односкладовий прикметник big закінчується на одну голосну й одну приголосну, тому кінцева літера подвоюється: biggest."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The scenery from the top of the mountain was ___ a magnificent sight.",
        options: ["such", "so", "very", "too"],
        a: 0,
        hint: "Конструкція з незлічуваними/злічуваними структурами — Кваліфікатор such вживається перед групою 'артикль + прикметник + іменник'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "We need to gather ___ information before formulating a final hypothesis.",
        options: ["further", "farther", "farthest", "furthest"],
        a: 0,
        hint: "Абстрактне порівняння відстані — Слово further використовується у переносному значенні 'додатковий, подальший', на відміну від просторового farther."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The new manager is noticeably ___ than the previous director.",
        options: ["shorter", "short", "shortest", "more short"],
        a: 0,
        hint: "Стандартний короткий прикметник — При порівнянні лінійних параметрів об'єктів (short) додається закінчення -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "They celebrated their ___ moments while traveling through Asia.",
        options: ["happiest", "happier", "happy", "most happy"],
        a: 0,
        hint: "Зміна голосних в суперлятиві — Двоскладовий прикметник happy при додаванні суфікса -est змінює y на i: happiest."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The water in the northern lake is ___ cold for swimming safely today.",
        options: ["too", "so", "very", "much"],
        a: 0,
        hint: "Значення негативного ліміту — Прислівник too маркує ознаку як таку, що перевищує норму безпеки чи комфорту."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The lead developer is definitely ___ than the junior testers.",
        options: ["smarter", "smart", "smartest", "more smart"],
        a: 0,
        hint: "Простий вищий ступінь — Для прикметника smart порівняння забезпечується суфіксом -er за наявності сполучника ніж (than)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ part of the entire expedition was crossing the canyon.",
        options: ["most exciting", "more exciting", "exciting", "excitingest"],
        a: 0,
        hint: "Найвищий ступінь довгих слів — Прикметники із суфіксами -ing (exciting) вважаються багатоскладовими і потребують слова most."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Our newborn kitten is the ___ animal I have ever seen.",
        options: ["cutest", "cuter", "cute", "most cute"],
        a: 0,
        hint: "Прикметники на німе -e — Прикметник cute вже має закінчення -e, тому до нього додається лише формант -st у найвищому ступені."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The fabric of this summer shirt is much ___ than the woolen one.",
        options: ["thinner", "thin", "thinnest", "more thin"],
        a: 0,
        hint: "Подвоєння приголосних при порівнянні — Односкладове слово thin підвоює кінцеву n перед суфіксом -er згідно з фонологічними правилами."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "That was by far the ___ theatrical performance of the season.",
        options: ["worst", "worse", "bad", "most bad"],
        a: 0,
        hint: "Суперлятив винятку bad — Поєднання 'by far the' чітко координується з найвищим ступенем неправильного прикметника — worst."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "After weeks of systemic training, he became much ___.",
        options: ["stronger", "strong", "strongest", "more strong"],
        a: 0,
        hint: "Порівняльний ступінь моносилабічних слів — Прикметник strong складається з одного складу, тому його ступінь — stronger."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ you complete the assignment, the earlier you can leave.",
        options: ["sooner", "soonest", "soon", "more soon"],
        a: 0,
        hint: "Кореляційні структури — Зворот 'The sooner... the earlier...' побудований на зіставленні двох порівняльних форм."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The Amazon is one of the ___ rivers on our planet.",
        options: ["longest", "longer", "long", "most long"],
        a: 0,
        hint: "Конструкція 'one of the...' — Після цієї фрази завжди використовується прикметник у найвищому ступені (longest)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "People are becoming ___ conscious of ecological issues nowadays.",
        options: ["more", "most", "the more", "much more"],
        a: 0,
        hint: "Аналітичне порівняння — Двоскладовий прикметник conscious вимагає модифікатора more для утворення ступеня порівняння."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ way to resolve this conflict is through diplomatic negotiations.",
        options: ["best", "better", "good", "most good"],
        a: 0,
        hint: "Оптимальний ступінь — Означений артикль the перед пропуском вказує на вибір найвищої форми від irregular прикметника good — best."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The author created ___ a compelling plot that I read it in one night.",
        options: ["such", "so", "very", "too"],
        a: 0,
        hint: "Емфатичний зворот — Елемент such поєднується зі злічуваною структурою іменникової групи 'a + прикметник + іменник'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The economy of that small country is getting ___ with every quarter.",
        options: ["weaker and weaker", "weak and weak", "the weaker and weaker", "weakest and weakest"],
        a: 0,
        hint: "Динаміка регресу або прогресу — Повторення вищого ступеня прикметника через and демонструє планомірну зміну стану."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ you practice speaking English, the more fluent you become.",
        options: ["more", "most", "much", "the more"],
        a: 0,
        hint: "Конструкція подвійної залежності — Для формування першої частини використовується 'The more' у парі з порівняльною структурою у другій частині."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This user interface is the ___ option we have evaluated so far.",
        options: ["simplest", "simpler", "simple", "most simple"],
        a: 0,
        hint: "Двоскладові слова на -le — Прикметники типу simple утворюють найвищий ступінь синтетично через додавання закінчення -st: simplest."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "My new smartphone is slightly ___ than my previous one.",
        options: ["taller", "tall", "tallest", "more tall"],
        a: 0,
        hint: "Лінійні габарити предметів — Для короткого прикметника tall порівняльна форма створюється за загальним правилом суфіксації: taller."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The motivational speech was ___ inspiring that several people cried.",
        options: ["so", "such", "very", "too"],
        a: 0,
        hint: "Наслідковий зв'язок — Коли після інтенсифікатора йде чистий прикметник (inspiring) без іменника, використовується слово so перед сполучником that."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This vintage sports car is the ___ expensive item in the collection.",
        options: ["least", "less", "little", "most little"],
        a: 0,
        hint: "Антонімічний найвищий ступінь — Для вираження мінімальної міри ознаки (найменш дорогий) використовується irregular-форма найвищого ступеня від little — least."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Her language skills are ___ more advanced than those of her classmates.",
        options: ["slightly", "slight", "slighter", "slightest"],
        a: 0,
        hint: "Модифікація порівняння прислівником — Прислівник ступеня slightly (трохи, злегка) вживається для точного коригування порівняльної форми прикметника."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The tea was ___ hot to drink immediately, so I left it to cool down.",
        options: ["too", "so", "very", "much"],
        a: 0,
        hint: "Занадто висока міра ознаки — Прислівник too сигналізує про надмірність якості, яка заважає виконанню дії (drink)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The current generation is ___ older than the previous one was at retirement.",
        options: ["no", "not", "none", "never"],
        a: 0,
        hint: "Заперечення різниці в порівнянні — Частка no перед порівняльним ступенем прикметника (no older) означає 'анітрохи не старший'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Alexander the Great was one of the ___ military commanders in history.",
        options: ["greatest", "greater", "great", "most great"],
        a: 0,
        hint: "Конструкція унікальності — Шаблон 'one of the + найвищий ступінь' потребує суфікса -est для односкладового слова great."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The presentation was ___ more detailed than we had anticipated.",
        options: ["far", "very", "too", "so"],
        a: 0,
        hint: "Інтенсифікація більше ніж очікувалось — Far слугує класичним ампліфікатором для аналітичного вищого ступеня (more detailed)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Of the two potential candidates, we highly prefer the ___.",
        options: ["former", "first", "firstest", "latterly"],
        a: 0,
        hint: "Вибір між двома згаданими — При посиланні на першого з двох названих об'єктів/осіб використовується займенниковий прикметник former."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "She is ___ likely to accept the promotion if it involves relocation.",
        options: ["more", "most", "much", "the more"],
        a: 0,
        hint: "Порівняння ймовірностей — Прислівник likely утворює вищий ступінь аналітично за допомогою слова more."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ serious you are about your study, the better your marks will be.",
        options: ["more", "most", "much", "the more"],
        a: 0,
        hint: "Структурна кореляція — Конструкція подвійної зміни потребує вищого ступеня багатоскладового прикметника (more serious) після початкового the."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This chapter is the ___ page of our corporate history book.",
        options: ["last", "latest", "latter", "least"],
        a: 0,
        hint: "Порядкове фінальне значення — Слово last вказує на кінцевий елемент у послідовності (на відміну від часової свіжості latest)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The concrete base proved to be much ___ than the wooden pillars.",
        options: ["stronger", "strong", "strongest", "more strong"],
        a: 0,
        hint: "Простий порівняльний ступінь — Для односкладового прикметника strong використовується закінчення -er за наявності порівняльного ніж (than)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "He is known as the ___ neurosurgeon operating in this regional hospital.",
        options: ["busiest", "busier", "more busy", "most busy"],
        a: 0,
        hint: "Найвищий ступінь прикметників на -y — Двоскладове слово busy змінює кінцеву y на i перед суфіксом найвищого ступеня -est."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Her handmade evening gown was ___ than any designer dress at the party.",
        options: ["prettier", "pretty", "prettiest", "more pretty"],
        a: 0,
        hint: "Порівняння двоскладових слів на -y — Прикметник pretty підпорядковується правилу трансформації y -> i та додавання суфікса -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "According to the ___ data, global temperatures continue to rise rapidly.",
        options: ["latest", "last", "latter", "least"],
        a: 0,
        hint: "Семантика актуальних відомостей — Дані, отримані щойно або нещодавно, завжди маркуються словом latest."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This project requires a ___ more sophisticated approach than we used last year.",
        options: ["far", "very", "too", "so"],
        a: 0,
        hint: "Інтенсифікація аналітичної форми — Підсилювальне слово far вільно комбінується зі структурами типу 'more + прикметник'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Writing this complex algorithm was the ___ part of my job this month.",
        options: ["hardest", "harder", "hard", "most hard"],
        a: 0,
        hint: "Найвищий ступінь коротких прикметників — Односкладовий прикметник hard формує вищий ступінь переваги через суфікс -est."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The new skyscraper is significantly ___ than the old clock tower.",
        options: ["taller", "tall", "tallest", "more tall"],
        a: 0,
        hint: "Порівняння фізичної висоти — Односкладове слово tall вимагає стандартного суфіксального нарощення -er перед сполучником than."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ you train your endurance, the faster your body recovers.",
        options: ["harder", "hardest", "hard", "more hard"],
        a: 0,
        hint: "Кореляційний вищий ступінь прислівника — Прислівник hard у формі порівняння (harder) виступає першим елементом подвійного пропорційного звороту."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "She is considered the ___ student in the mathematical oligarchy.",
        options: ["cleverest", "cleverer", "clever", "more clever"],
        a: 0,
        hint: "Варіативність двоскладових слів — Прикметник clever може утворювати ступені як суфіксально, так і аналітично; варіант cleverest є нормативним суфіксальним найвищим ступенем."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "They live in ___ a quiet neighborhood that you can hear birds singing all day.",
        options: ["such", "so", "very", "too"],
        a: 0,
        hint: "Конструкція з невизначеним артиклем — Кваліфікатор міри such передує структурі 'a + прикметник + однинний злічуваний іменник'."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Please forward me the ___ update on the software development status.",
        options: ["latest", "last", "latter", "least"],
        a: 0,
        hint: "Часова актуальність — Слово latest позначає найновіші, найостанніші за часом випуску інформаційні матеріали."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The younger daughter is three years ___ than her twin brothers.",
        options: ["younger", "young", "youngest", "more young"],
        a: 0,
        hint: "Компаратив віку — Односкладовий прикметник young утворює стандартний вищий ступінь порівняння за допомогою суфікса -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Scoring that final goal was the ___ moment of the championship.",
        options: ["best", "better", "good", "most good"],
        a: 0,
        hint: "Абсолютна позитивна оцінка — Найвищий ступінь неправильного прикметника good реалізується через фіксовану форму best."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ you get, the more you appreciate peaceful weekends.",
        options: ["older", "oldest", "old", "more old"],
        a: 0,
        hint: "Пропорційне дорослішання — Комбінація 'The + вищий ступінь' (The older) відкриває філософські причинно-наслідкові структури речень."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "My grandmother is slightly ___ than my grandfather.",
        options: ["older", "old", "oldest", "elder"],
        a: 0,
        hint: "Пряме порівняння родичів зі сполучником than — Навіть всередині родини, якщо є слово than, вживається форма older (а не атрибутивне elder)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Failing to back up the data was the ___ decision the admin could make.",
        options: ["worst", "worse", "bad", "most bad"],
        a: 0,
        hint: "Найгірший варіант розвитку подій — За наявності означеного артикля the обирається форма найвищого ступеня від bad — worst."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The morning was ___ cold for the crops to survive without protection.",
        options: ["too", "so", "very", "much"],
        a: 0,
        hint: "Критична межа ознаки — Прислівник too вказує на деструктивну або надмірну інтенсивність температури перед інфінітивом мети (to survive)."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The local merchants became much ___ after the economic reform.",
        options: ["richer", "rich", "richest", "more rich"],
        a: 0,
        hint: "Синтетичний компаратив — Односкладовий прикметник rich вимагає стандартного нарощення суфіксом -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Finishing the budget reconciliation was the ___ part of the week.",
        options: ["hardest", "harder", "hard", "most hard"],
        a: 0,
        hint: "Максимальна складність — Найвищий ступінь односкладового прикметника hard будується шляхом приєднання закінчення -est."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Tokyo is one of the ___ metropolitan areas in the modern world.",
        options: ["biggest", "bigger", "big", "most big"],
        a: 0,
        hint: "Орфографічне подвоєння — Короткий прикметник big подвоює кінцеву приголосну g перед додаванням суперлятивного суфікса -est."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The test subjects felt ___ happier after eating chocolate.",
        options: ["noticeably", "notice", "noticeable", "most notice"],
        a: 0,
        hint: "Модифікація компаратива прислівником — Прислівник ступеня noticeably (помітно) виступає визначником міри перед порівняльним ступенем прикметника."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ advice I can give you is to save your emergency funds.",
        options: ["best", "better", "good", "most good"],
        a: 0,
        hint: "Найкраща порада — Найвищий ступінь прикметника good звучить як найкращий — the best."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "It was ___ an astonishing discovery that the laboratory received a grant.",
        options: ["such", "so", "very", "too"],
        a: 0,
        hint: "Конструкція підсилення з неозначеним артиклем an — Присутність структури 'an + прикметник + іменник' вимагає використання модифікатора such."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The sprinter ran ___ faster than his permanent rival.",
        options: ["much", "very", "too", "so"],
        a: 0,
        hint: "Ампліфікація швидкісних показників — Вищий ступінь прислівника чи прикметника (faster) підсилюється за допомогою слова much."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "No ___ action is needed until we receive official word from headquarters.",
        options: ["further", "farther", "farthest", "furthest"],
        a: 0,
        hint: "Значення абстрактного продовження — Прикметник further використовується у значенні 'подальший, додатковий' стосовно дій та інформації."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This chemistry exam proved to be the ___ of the semester.",
        options: ["easiest", "easier", "easy", "most easy"],
        a: 0,
        hint: "Найвищий ступінь слів на -y — Двоскладовий прикметник easy трансформує y в i перед приєднанням суфіксальної морфеми -est."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Our new office desk is slightly ___ than the old wooden table.",
        options: ["shorter", "short", "shortest", "more short"],
        a: 0,
        hint: "Порівняння габаритів меблів — Односкладовий прикметник short маркує вищий ступінь за допомогою флексії -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "That wedding was the ___ day of her entire life.",
        options: ["happiest", "happier", "happy", "most happy"],
        a: 0,
        hint: "Суперлятив емоційного стану — Для слова happy найвища форма утворюється суфіксально: the happiest."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The luggage was ___ heavy for the small child to lift without aid.",
        options: ["too", "so", "very", "much"],
        a: 0,
        hint: "Перевищення фізичних можливостей — Значення надмірності, яка створює перешкоду, кодується модальним словом too перед прикметником."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The software engineer is much ___ than the new business analyst.",
        options: ["smarter", "smart", "smartest", "more smart"],
        a: 0,
        hint: "Інтелектуальне порівняння двох осіб — Для короткого слова smart компаративна форма утворюється шляхом додавання закінчення -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ segment of the show was the acrobatics performance.",
        options: ["most exciting", "more exciting", "exciting", "excitingest"],
        a: 0,
        hint: "Найвищий ступінь складних дескрипторів — Перед багатоскладовим прикметником exciting після артикля the вживається слово most."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "This puppy is the ___ creature in the whole neighborhood.",
        options: ["cutest", "cuter", "cute", "most cute"],
        a: 0,
        hint: "Суперлятив прикметників на німу е — Прикметник cute отримує лише суфікс -st для утворення найвищої форми."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "Her reflection looked slightly ___ in the funhouse mirror.",
        options: ["thinner", "thin", "thinnest", "more thin"],
        a: 0,
        hint: "Подвоєння в закритому складі — Односкладовий прикметник thin подвоює приголосну n перед порівняльним суфіксом -er."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The project coordinator gave the ___ performance during the audit.",
        options: ["worst", "worse", "bad", "most bad"],
        a: 0,
        hint: "Найнижчий рівень якості — Неправильний прикметник bad трансформується у найвищому ступені у слово worst під впливом артикля the."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The mountain air made us feel much ___ than we did in the valley.",
        options: ["healthier", "healthy", "healthiest", "more healthy"],
        a: 0,
        hint: "Двоскладові слова фізичного стану на -y — Слово healthy змінює y на i та приймає закінчення порівняльного ступеня -er: healthier."
    },
    {
        part: 2,
        topic: "Adjectives & Comparison",
        q: "The ___ you invest in high-quality assets, the more secure your future is.",
        options: ["more", "most", "much", "the more"],
        a: 0,
        hint: "Фінансова кореляція — Конструкція подвійного порівняння 'The more... the more...' демонструє пряму пропорційну залежність двох факторів."
    }
	
];

