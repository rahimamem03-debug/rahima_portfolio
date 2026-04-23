/* Rahima's Assistant Chatbot — Smart keyword matching (no API needed) */
(function () {
  'use strict';

  // ─── Base de connaissances ────────────────────────────────────────────────
  // Chaque entrée a : keys (mots déclencheurs), weight (priorité), answers (réponses variées)
  var KB = [

    // ── Salutations ──────────────────────────────────────────────────────────
    {
      weight: 10,
      keys: ['hello','hi','hey','howdy','sup','hola','salut','bonjour','bonsoir','coucou',
             'good morning','good evening','good afternoon','greetings','yo','what up'],
      answers: [
        "👋 Hi! I'm Rahima's assistant.<br><br>You can ask me about her <b>skills</b>, <b>projects</b>, <b>education</b>, <b>expertise</b> or how to <b>contact her</b>. What would you like to know?",
        "👋 Hello! Happy to help you learn more about Rahima.<br><br>Feel free to ask anything about her <b>background</b>, <b>skills</b> or <b>projects</b>!",
        "👋 Bonjour ! Je suis l'assistant de Rahima.<br><br>Pose-moi une question sur ses <b>compétences</b>, ses <b>projets</b> ou ses <b>coordonnées</b> !"
      ]
    },

    // ── Qui est Rahima ───────────────────────────────────────────────────────
    {
      weight: 9,
      keys: ['who','rahima','about','introduce','yourself','present','tell me about',
             'qui est','qui','elle','parle moi','présente','c\'est qui','profile',
             'background','overview','person','identity','name','prénom','nom'],
      answers: [
        "👩‍💻 <b>Rahima Moussoulouhou Eddine</b> is a 2nd-year Computer Engineering student, passionate about <b>cybersecurity</b>. She is based in <b>Djibouti</b> and aims to become a Cybersecurity Engineer.<br><br>🎂 Born March 19, 2007 &nbsp;|&nbsp; 📍 Djibouti, Djibouti",
        "👩‍💻 Meet <b>Rahima Moussoulouhou Eddine</b> — a Computer Engineering student at the Faculty of Engineering in Djibouti. She's passionate about <b>cybersecurity</b> and secure software development, with a goal of becoming a Cybersecurity Engineer. 🔐",
        "👩‍💻 <b>Rahima</b> est étudiante en Génie Informatique (2ème année) à Djibouti. Née le 19 mars 2007, elle se spécialise en <b>cybersécurité</b> et développement sécurisé. Son objectif : devenir Ingénieure en Cybersécurité. 🎯"
      ]
    },

    // ── Compétences techniques ───────────────────────────────────────────────
    {
      weight: 9,
      keys: ['skill','skills','tech','language','languages','python','css','html',
             'javascript','c++','c language','programming','code','coding','master',
             'level','proficiency','know','knows','can','capable','compétence',
             'compétences','langage','maîtrise','niveau','sait','technologie',
             'stack','tools','outils','what can she do','what does she know'],
      answers: [
        "💻 <b>Rahima's technical skills:</b><br><br>🟢 Python &nbsp;—&nbsp; 90%<br>🟢 C &nbsp;—&nbsp; 85%<br>🟡 HTML &nbsp;—&nbsp; 75%<br>🟡 CSS &nbsp;—&nbsp; 70%<br>🟠 C++ &nbsp;—&nbsp; 60%<br>🟠 JavaScript &nbsp;—&nbsp; 50%",
        "💻 <b>Ses compétences techniques :</b><br><br>🟢 Python &nbsp;—&nbsp; 90% &nbsp;(son point fort !)<br>🟢 C &nbsp;—&nbsp; 85%<br>🟡 HTML &nbsp;—&nbsp; 75%<br>🟡 CSS &nbsp;—&nbsp; 70%<br>🟠 C++ &nbsp;—&nbsp; 60%<br>🟠 JavaScript &nbsp;—&nbsp; 50%",
        "💻 Rahima masters <b>6 programming languages</b>:<br><br>• Python (90%) — her strongest language<br>• C (85%) — used in most academic projects<br>• HTML (75%) & CSS (70%) — web development<br>• C++ (60%) & JavaScript (50%) — still growing!"
      ]
    },

    // ── Formation / Éducation ────────────────────────────────────────────────
    {
      weight: 9,
      keys: ['education','school','degree','bachelor','university','study','studies',
             'formation','faculty','engineering','diploma','academic','cursus',
             'parcours','étude','études','bac','baccalauréat','licence','fac',
             'scolarité','cours','classe','formation','where did she study',
             'where does she study','lycée','collège','anjouan','comoros','comores'],
      answers: [
        "🎓 <b>Academic background:</b><br><br>📘 <b>Bachelor's in Computer Engineering</b> (in progress, 2024–present)<br>&nbsp;&nbsp;&nbsp;Faculty of Engineering, Djibouti<br>&nbsp;&nbsp;&nbsp;Subjects: C, algorithms, networks, operating systems<br><br>📗 <b>Scientific Baccalaureate</b> (2021–2024)<br>&nbsp;&nbsp;&nbsp;Lycée SMD, Anjouan, Comoros<br>&nbsp;&nbsp;&nbsp;Focus: Math, Physics, Computer Science",
        "🎓 <b>Parcours académique de Rahima :</b><br><br>📘 <b>Licence en Génie Informatique</b> (en cours, 2024–présent)<br>&nbsp;&nbsp;&nbsp;Faculté de Génie, Djibouti<br>&nbsp;&nbsp;&nbsp;Matières : C, algorithmes, réseaux, systèmes d'exploitation<br><br>📗 <b>Baccalauréat Scientifique</b> (2021–2024)<br>&nbsp;&nbsp;&nbsp;Lycée SMD, Anjouan, Comores<br>&nbsp;&nbsp;&nbsp;Filière : Maths, Physique, Informatique"
      ]
    },

    // ── Projets ──────────────────────────────────────────────────────────────
    {
      weight: 9,
      keys: ['project','projects','glino','game','work','built','created','made',
             'achievement','réalisation','projet','projets','jeu','développé',
             'créé','construit','what has she built','what did she make',
             'portfolio project','academic project','c project','demo','app'],
      answers: [
        "🚀 <b>Rahima's projects:</b><br><br>🎮 <b>Glino Game</b> — her main project, built during her 1st year of university<br><br>⚙️ <b>C Projects:</b><br>• File management and data structure programs<br>• Mini interactive learning system in C with exercises and solutions<br>• Algorithmic problem solving<br>• Debugging and code optimization",
        "🚀 <b>Ses projets :</b><br><br>🎮 <b>Glino Game</b> — son projet principal, développé en 1ère année de licence<br><br>⚙️ <b>Projets en C :</b><br>• Gestion de fichiers et structures de données<br>• Système d'apprentissage interactif (exercices + solutions)<br>• Résolution de problèmes algorithmiques<br>• Débogage et optimisation de code"
      ]
    },

    // ── Expertise / Domaines ─────────────────────────────────────────────────
    {
      weight: 9,
      keys: ['expertise','domain','domains','cybersecurity','cyber','network','networks',
             'linux','ethical','hacking','hacker','security','speciality','specialization',
             'field','interest','interests','domaine','spécialité','sécurité','réseaux',
             'piratage éthique','what does she specialize in','focus','focused on'],
      answers: [
        "🛡️ <b>Rahima's areas of expertise:</b><br><br>🔐 <b>Cybersecurity</b> — system protection, vulnerability detection<br>💻 <b>Programming</b> — C and Python, problem solving<br>🌐 <b>Computer Networks</b> — how networks work and how to secure them<br>🐧 <b>Linux Systems</b> — system administration, command line<br>🎯 <b>Ethical Hacking</b> — identifying and fixing security flaws<br>💡 <b>Technology & Innovation</b> — constant tech watch",
        "🛡️ <b>Ses domaines d'expertise :</b><br><br>🔐 <b>Cybersécurité</b> — protection des systèmes, détection de vulnérabilités<br>💻 <b>Programmation</b> — C et Python, résolution de problèmes<br>🌐 <b>Réseaux informatiques</b> — fonctionnement et sécurisation<br>🐧 <b>Linux</b> — administration système, ligne de commande<br>🎯 <b>Ethical Hacking</b> — identification et correction de failles"
      ]
    },

    // ── Expérience ───────────────────────────────────────────────────────────
    {
      weight: 8,
      keys: ['experience','internship','job','professional','practice','self-learning',
             'expérience','stage','travail','professionnel','apprentissage','autodidacte',
             'self taught','work experience','professional experience','career history'],
      answers: [
        "💼 <b>Professional experience:</b><br><br>📚 <b>Academic Projects</b> (2024–present)<br>&nbsp;&nbsp;&nbsp;Faculty of Engineering, Djibouti<br>&nbsp;&nbsp;&nbsp;• C programs: file management, structured data<br>&nbsp;&nbsp;&nbsp;• Mini interactive learning system in C<br>&nbsp;&nbsp;&nbsp;• Debugging, testing and optimization<br><br>🔍 <b>Self-learning in Cybersecurity</b> (2024–present)<br>&nbsp;&nbsp;&nbsp;• Network security and system vulnerabilities<br>&nbsp;&nbsp;&nbsp;• Linux command-line tools<br>&nbsp;&nbsp;&nbsp;• Ethical hacking and secure coding basics"
      ]
    },

    // ── Contact ──────────────────────────────────────────────────────────────
    {
      weight: 9,
      keys: ['contact','email','phone','reach','message','github','address','find',
             'locate','get in touch','hire','hiring','recruit','recruiter',
             'contacter','joindre','email','téléphone','adresse','où','comment contacter',
             'how to contact','how can i contact','how to reach','social','linkedin',
             'instagram','facebook','réseau social','social media'],
      answers: [
        "📬 <b>Contact Rahima:</b><br><br>📧 <b>Email:</b> <a href='mailto:rahimamem03@gmail.com' style='color:#22ff88'>rahimamem03@gmail.com</a><br>📞 <b>Phone:</b> +253 77 72 85 38<br>🐙 <b>GitHub:</b> <a href='https://github.com/rahimamem03-debug/' target='_blank' style='color:#22ff88'>github.com/rahimamem03-debug</a><br>📍 <b>Address:</b> Faculty of Engineering, Djibouti City, Djibouti",
        "📬 <b>Pour contacter Rahima :</b><br><br>📧 rahimamem03@gmail.com<br>📞 +253 77 72 85 38<br>🐙 github.com/rahimamem03-debug<br>📘 Facebook: Rahima Mouslouheddine<br>📸 Instagram: @rahima_mem<br>📍 Djibouti City, Djibouti"
      ]
    },

    // ── Pages du site ────────────────────────────────────────────────────────
    {
      weight: 7,
      keys: ['page','pages','section','sections','site','website','navigation','menu',
             'home','resume','cv','about page','portfolio page','contact page',
             'site web','navigation','rubrique','onglet','what pages'],
      answers: [
        "🗂️ <b>Website pages:</b><br><br>🏠 <b>Home</b> — landing page with animated intro<br>👩 <b>About</b> — Rahima's personal presentation<br>📄 <b>Resume</b> — full CV with skill bars<br>🛡️ <b>Expertise</b> — 6 areas of expertise<br>🚀 <b>Portfolio</b> — completed projects<br>📬 <b>Contact</b> — contact form"
      ]
    },

    // ── Objectif / Carrière ──────────────────────────────────────────────────
    {
      weight: 8,
      keys: ['goal','goals','dream','future','ambition','aspire','plan','career',
             'become','want','vision','objective','aims','target','where is she going',
             'objectif','rêve','avenir','ambition','carrière','devenir','aspire',
             'veut devenir','où elle veut aller','what does she want to become'],
      answers: [
        "🎯 <b>Rahima's goal:</b><br><br>She aspires to become a <b>Cybersecurity Engineer</b>, designing secure systems and protecting digital infrastructures from modern cyber threats.<br><br>She is motivated, curious, and continuously learning to reach that goal. 💪",
        "🎯 <b>Son objectif :</b><br><br>Rahima veut devenir <b>Ingénieure en Cybersécurité</b>, concevoir des systèmes sécurisés et protéger les infrastructures numériques contre les cybermenaces modernes. 💪<br><br>Elle est motivée, curieuse et apprend en permanence !"
      ]
    },

    // ── Âge / Date de naissance ──────────────────────────────────────────────
    {
      weight: 8,
      keys: ['age','old','born','birthday','birth','2007','how old','quel age',
             'quel âge','née','naissance','anniversaire','date de naissance',
             'when was she born','how old is she','years old'],
      answers: [
        "🎂 Rahima was born on <b>March 19, 2007</b>. She is <b>19 years old</b>.",
        "🎂 Rahima est née le <b>19 mars 2007</b>. Elle a <b>19 ans</b>."
      ]
    },

    // ── Localisation ─────────────────────────────────────────────────────────
    {
      weight: 7,
      keys: ['where','location','country','city','djibouti','live','lives','based',
             'from','origine','pays','ville','habite','vit','située','localisation',
             'where is she from','where does she live','où elle vit','comoros'],
      answers: [
        "📍 Rahima is based in <b>Djibouti City, Djibouti</b>. She originally comes from <b>Anjouan, Comoros</b> where she completed her Baccalaureate.",
        "📍 Rahima vit à <b>Djibouti City, Djibouti</b>. Elle est originaire d'<b>Anjouan, Comores</b> où elle a passé son baccalauréat scientifique."
      ]
    },

    // ── Remerciements ────────────────────────────────────────────────────────
    {
      weight: 5,
      keys: ['thank','thanks','thank you','merci','thx','ty','appreciate',
             'great','perfect','cool','nice','awesome','good','excellent',
             'super','génial','parfait','bravo','bien'],
      answers: [
        "😊 You're welcome! Feel free to ask if you have any other questions about Rahima.",
        "😊 De rien ! N'hésite pas si tu as d'autres questions sur Rahima. 🙂",
        "😊 Glad I could help! Anything else you'd like to know about Rahima?"
      ]
    },

    // ── Au revoir ────────────────────────────────────────────────────────────
    {
      weight: 5,
      keys: ['bye','goodbye','see you','ciao','later','good night','au revoir',
             'bonne nuit','à bientôt','tchao','salut','take care','farewell'],
      answers: [
        "👋 Goodbye! Don't hesitate to come back if you have more questions about Rahima. Have a great day!",
        "👋 Au revoir ! N'hésite pas à revenir si tu as d'autres questions. Bonne journée ! 😊"
      ]
    },

    // ── Python spécifique ────────────────────────────────────────────────────
    {
      weight: 10,
      keys: ['python','how good is she at python','python level','python skill'],
      answers: [
        "🐍 Python is Rahima's <b>strongest language</b> with a proficiency of <b>90%</b>. She uses it mainly for programming exercises, algorithmic problem solving, and cybersecurity scripting."
      ]
    },

    // ── Linux spécifique ─────────────────────────────────────────────────────
    {
      weight: 10,
      keys: ['linux','bash','terminal','command line','shell','unix'],
      answers: [
        "🐧 Rahima is comfortable with <b>Linux systems</b> — she uses the command line for system administration, file management, and cybersecurity tools. Linux is one of her key areas of expertise."
      ]
    },

    // ── Ethical Hacking spécifique ───────────────────────────────────────────
    {
      weight: 10,
      keys: ['ethical hacking','hacker','hack','pentest','penetration','vulnerability',
             'ctf','capture the flag','piratage','vulnérabilité'],
      answers: [
        "🎯 Rahima is learning <b>Ethical Hacking</b> — the practice of identifying and fixing security flaws before malicious hackers can exploit them. She studies network security, system vulnerabilities, and secure coding principles."
      ]
    },

    // ── Glino Game spécifique ────────────────────────────────────────────────
    {
      weight: 10,
      keys: ['glino','glino game','game project','what is glino'],
      answers: [
        "🎮 <b>Glino Game</b> is Rahima's main project, developed during her 1st year of university at the Faculty of Engineering, Djibouti. It's a game she built as part of her academic work, showcasing her programming skills in action!"
      ]
    },

    // ── Collaboration / Recrutement ──────────────────────────────────────────
    {
      weight: 8,
      keys: ['hire','hiring','recruit','collaboration','collaborate','work together',
             'internship offer','job offer','available','embaucher','recruter',
             'disponible','collaborer','travailler ensemble','open to work'],
      answers: [
        "💼 Rahima is <b>open to collaborations</b>, internships, and opportunities in cybersecurity or software development!<br><br>📧 Reach her at <a href='mailto:rahimamem03@gmail.com' style='color:#22ff88'>rahimamem03@gmail.com</a> or use the <a href='contact.html' style='color:#22ff88'>contact form</a> on this site.",
        "💼 Rahima est <b>ouverte aux collaborations</b>, stages et opportunités en cybersécurité ou développement logiciel !<br><br>📧 Contacte-la à <a href='mailto:rahimamem03@gmail.com' style='color:#22ff88'>rahimamem03@gmail.com</a>"
      ]
    }
  ];

  // ── Réponses par défaut variées ───────────────────────────────────────────
  var DEFAULTS = [
    "🤔 I didn't quite catch that. You can ask me things like:<br><br>• <i>Who is Rahima?</i><br>• <i>What are her skills?</i><br>• <i>How can I contact her?</i><br>• <i>What are her projects?</i>",
    "🤔 Hmm, I'm not sure about that one! Try asking me about Rahima's <b>skills</b>, <b>education</b>, <b>projects</b> or <b>contact info</b>.",
    "🤔 Je n'ai pas bien compris. Essaie de me demander :<br><br>• <i>Qui est Rahima ?</i><br>• <i>Quelles sont ses compétences ?</i><br>• <i>Comment la contacter ?</i><br>• <i>Quels sont ses projets ?</i>"
  ];

  var defaultIndex = 0;

  // ── Moteur de recherche intelligent ──────────────────────────────────────
  function getAnswer(q) {
    q = q.toLowerCase().trim();

    // Normalisation basique
    q = q.replace(/[éèêë]/g, 'e')
         .replace(/[àâä]/g, 'a')
         .replace(/[ùûü]/g, 'u')
         .replace(/[îï]/g, 'i')
         .replace(/[ôö]/g, 'o')
         .replace(/[ç]/g, 'c');

    var bestScore = 0;
    var bestEntry = null;

    for (var i = 0; i < KB.length; i++) {
      var entry = KB[i];
      var score = 0;

      for (var j = 0; j < entry.keys.length; j++) {
        var key = entry.keys[j]
          .replace(/[éèêë]/g, 'e')
          .replace(/[àâä]/g, 'a')
          .replace(/[ùûü]/g, 'u')
          .replace(/[îï]/g, 'i')
          .replace(/[ôö]/g, 'o')
          .replace(/[ç]/g, 'c');

        if (q.indexOf(key) !== -1) {
          // Les mots-clés plus longs = score plus élevé (plus précis)
          score += (key.length + 1) * entry.weight;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    }

    // Score minimum de 3 pour éviter les faux positifs
    if (bestEntry && bestScore >= 3) {
      var pool = bestEntry.answers;
      return pool[Math.floor(Math.random() * pool.length)];
    }

    // Réponse par défaut en rotation
    var def = DEFAULTS[defaultIndex % DEFAULTS.length];
    defaultIndex++;
    return def;
  }

  /* ── STYLES ─────────────────────────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = `
    #_rcw_btn {
      position:fixed; bottom:28px; right:28px; z-index:2147483646;
      width:64px; height:64px; border-radius:50%; border:none; cursor:pointer;
      background:linear-gradient(135deg,#1a1a4e 0%,#2d1b69 50%,#4a1a8a 100%);
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 24px rgba(74,26,138,.65);
      animation:_rcw_pulse 3s ease-in-out infinite;
      transition:transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
      overflow:visible;
    }
    #_rcw_btn:hover {
      transform:scale(1.13) rotate(8deg);
      box-shadow:0 8px 32px rgba(74,26,138,.85),0 0 0 10px rgba(100,60,200,.12);
      animation:none;
    }
    #_rcw_btn:hover .r-eye-l,
    #_rcw_btn:hover .r-eye-r { animation:_rcw_eye_glow .4s ease-in-out infinite alternate; }
    #_rcw_btn svg { width:38px; height:38px; pointer-events:none; overflow:visible; }
    .r-body    { fill:rgba(255,255,255,.92); }
    .r-eye-l,.r-eye-r { fill:#00d4ff; filter:drop-shadow(0 0 3px #00d4ff); animation:_rcw_blink 5s ease-in-out infinite; }
    .r-eye-r   { animation-delay:.08s; }
    .r-ant     { fill:rgba(255,255,255,.7); }
    .r-ant-tip { fill:#a78bfa; filter:drop-shadow(0 0 4px #a78bfa); animation:_rcw_atip 2s ease-in-out infinite; }
    .r-mouth   { fill:none; stroke:rgba(255,255,255,.45); stroke-width:1.3; stroke-linecap:round; }
    #_rcw_bdot {
      position:absolute; bottom:2px; right:2px;
      width:15px; height:15px; border-radius:50%;
      background:radial-gradient(circle,#22ff88,#00c066);
      border:2.5px solid #1a1a4e;
      box-shadow:0 0 8px rgba(34,255,136,.7);
      animation:_rcw_dotpulse 2s ease-in-out infinite;
    }
    @keyframes _rcw_pulse {
      0%,100% { box-shadow:0 4px 24px rgba(74,26,138,.65),0 0 0 0 rgba(100,60,200,.35); }
      50%      { box-shadow:0 4px 24px rgba(74,26,138,.65),0 0 0 12px rgba(100,60,200,.0); }
    }
    @keyframes _rcw_blink {
      0%,88%,100% { transform:scaleY(1); }
      93%          { transform:scaleY(0.08); }
    }
    @keyframes _rcw_eye_glow {
      0%   { fill:#00d4ff; filter:drop-shadow(0 0 4px #00d4ff); }
      100% { fill:#a78bfa; filter:drop-shadow(0 0 7px #a78bfa); }
    }
    @keyframes _rcw_atip {
      0%,100% { filter:drop-shadow(0 0 4px #a78bfa); opacity:1; }
      50%      { filter:drop-shadow(0 0 9px #a78bfa); opacity:.6; }
    }
    @keyframes _rcw_dotpulse {
      0%,100% { box-shadow:0 0 8px rgba(34,255,136,.7); }
      50%      { box-shadow:0 0 16px rgba(34,255,136,1); }
    }

    #_rcw_panel {
      position:fixed; bottom:104px; right:28px; z-index:2147483647;
      width:370px; height:540px; border-radius:20px; overflow:hidden;
      background:#0d0f1a;
      border:1px solid rgba(167,139,250,.18);
      box-shadow:0 24px 64px rgba(0,0,0,.85),0 0 0 1px rgba(167,139,250,.06);
      display:flex; flex-direction:column;
      font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;
      opacity:0; pointer-events:none;
      transform:translateY(18px) scale(.94);
      transition:opacity .25s ease, transform .25s cubic-bezier(.34,1.3,.64,1);
    }
    #_rcw_panel._open { opacity:1; pointer-events:all; transform:translateY(0) scale(1); }
    @media(max-width:500px){
      #_rcw_panel { width:calc(100vw - 18px); right:9px; bottom:90px; height:72vh; }
      #_rcw_btn   { bottom:16px; right:16px; width:56px; height:56px; }
    }

    ._rcw_hd {
      padding:14px 16px; flex-shrink:0;
      background:linear-gradient(135deg,#1a1a4e,#2d1b69);
      border-bottom:1px solid rgba(167,139,250,.2);
      display:flex; align-items:center; gap:11px;
    }
    ._rcw_av {
      width:38px; height:38px; border-radius:50%; flex-shrink:0;
      background:rgba(255,255,255,.12); border:1.5px solid rgba(167,139,250,.4);
      display:flex; align-items:center; justify-content:center; font-size:19px;
    }
    ._rcw_nm { font-size:13.5px; font-weight:700; color:#fff; letter-spacing:.01em; }
    ._rcw_st { font-size:10px; color:#a78bfa; display:flex; align-items:center; gap:5px; margin-top:2px; }
    ._rcw_sd { width:5px; height:5px; border-radius:50%; background:#22ff88; animation:_rcw_dotpulse 2s infinite; }
    ._rcw_x  { margin-left:auto; background:none; border:none; cursor:pointer; color:rgba(255,255,255,.35); font-size:18px; line-height:1; transition:color .15s; padding:4px; }
    ._rcw_x:hover { color:#fff; }

    ._rcw_msgs {
      flex:1; overflow-y:auto; padding:16px 14px 8px;
      display:flex; flex-direction:column; gap:12px; scroll-behavior:smooth;
    }
    ._rcw_msgs::-webkit-scrollbar { width:3px; }
    ._rcw_msgs::-webkit-scrollbar-thumb { background:rgba(167,139,250,.25); border-radius:3px; }

    ._rcw_wlc { text-align:center; padding:8px 4px 4px; }
    ._rcw_wlc h3 { font-size:14.5px; font-weight:700; color:#fff; margin:0 0 6px; }
    ._rcw_wlc p  { font-size:12px; color:#64748b; line-height:1.55; margin:0 0 14px; }
    ._rcw_chips  { display:flex; flex-wrap:wrap; gap:6px; justify-content:center; }
    ._rcw_chip {
      font-size:11px; padding:6px 11px; border-radius:20px; cursor:pointer;
      background:rgba(167,139,250,.1); border:1px solid rgba(167,139,250,.3);
      color:#a78bfa; transition:all .15s; font-family:inherit;
    }
    ._rcw_chip:hover { background:rgba(167,139,250,.22); color:#fff; }

    ._rcw_row { display:flex; gap:8px; animation:_rcw_in .22s ease; }
    ._rcw_row.me { flex-direction:row-reverse; }
    @keyframes _rcw_in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }

    ._rcw_ico {
      width:28px; height:28px; border-radius:50%; flex-shrink:0; margin-top:2px;
      display:flex; align-items:center; justify-content:center; font-size:14px;
    }
    ._rcw_row.bot ._rcw_ico { background:linear-gradient(135deg,#2d1b69,#4a1a8a); border:1px solid rgba(167,139,250,.3); }
    ._rcw_row.me  ._rcw_ico { background:#1e2030; border:1px solid rgba(255,255,255,.08); }

    ._rcw_bub {
      max-width:80%; padding:10px 14px; border-radius:14px;
      font-size:12.5px; line-height:1.65; word-break:break-word;
    }
    ._rcw_row.bot ._rcw_bub { background:#131525; border:1px solid rgba(167,139,250,.15); color:#cbd5e1; border-top-left-radius:4px; }
    ._rcw_row.me  ._rcw_bub { background:linear-gradient(135deg,rgba(45,27,105,.7),rgba(74,26,138,.5)); border:1px solid rgba(167,139,250,.25); color:#fff; border-top-right-radius:4px; }
    ._rcw_bub a { color:#22ff88; }
    ._rcw_bub b { color:#a78bfa; font-weight:600; }

    ._rcw_typing { display:flex; gap:8px; align-items:flex-end; }
    ._rcw_dots { display:flex; gap:4px; padding:11px 14px; background:#131525; border:1px solid rgba(167,139,250,.15); border-radius:14px; border-top-left-radius:4px; }
    ._rcw_dots span { width:6px; height:6px; border-radius:50%; background:#a78bfa; animation:_rcw_bounce 1.2s ease-in-out infinite; }
    ._rcw_dots span:nth-child(2){animation-delay:.18s} ._rcw_dots span:nth-child(3){animation-delay:.36s}
    @keyframes _rcw_bounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-6px);opacity:1}}

    ._rcw_foot { padding:12px 14px 15px; flex-shrink:0; background:#0d0f1a; border-top:1px solid rgba(167,139,250,.12); }
    ._rcw_irow { display:flex; gap:8px; align-items:flex-end; }
    ._rcw_ta {
      flex:1; background:#131525; border:1px solid rgba(167,139,250,.2);
      border-radius:10px; color:#e2e8f0; font-family:inherit;
      font-size:13px; padding:10px 13px; resize:none; outline:none;
      line-height:1.45; min-height:40px; max-height:110px; transition:border-color .2s;
    }
    ._rcw_ta::placeholder { color:#334155; }
    ._rcw_ta:focus { border-color:rgba(167,139,250,.5); }
    ._rcw_send {
      width:40px; height:40px; border-radius:10px; border:none; cursor:pointer; flex-shrink:0;
      background:linear-gradient(135deg,#2d1b69,#4a1a8a);
      border:1px solid rgba(167,139,250,.3);
      display:flex; align-items:center; justify-content:center; transition:all .2s;
    }
    ._rcw_send:hover { transform:scale(1.08); box-shadow:0 4px 16px rgba(74,26,138,.6); }
    ._rcw_send svg { width:15px; height:15px; fill:none; stroke:#fff; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; }
    ._rcw_hint { font-size:9.5px; color:#1e293b; text-align:center; margin-top:8px; }
  `;
  document.head.appendChild(style);

  /* ── HTML ───────────────────────────────────────────────────────────────── */
  var wrap = document.createElement('div');
  wrap.innerHTML = `
    <button id="_rcw_btn" aria-label="Open chat">
      <svg viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg">
        <rect class="r-ant" x="18.5" y="1" width="3" height="6" rx="1.5"/>
        <circle class="r-ant-tip" cx="20" cy="1.5" r="2.5"/>
        <rect class="r-body" x="6" y="7" width="28" height="22" rx="6"/>
        <rect fill="#1a1a4e" fill-opacity="0.15" x="8" y="12" width="24" height="10" rx="3"/>
        <circle class="r-eye-l" cx="14" cy="17" r="3.5"/>
        <circle fill="white" fill-opacity="0.5" cx="15" cy="15.5" r="1.2"/>
        <circle class="r-eye-r" cx="26" cy="17" r="3.5"/>
        <circle fill="white" fill-opacity="0.5" cx="27" cy="15.5" r="1.2"/>
        <path class="r-mouth" d="M14 25 Q20 28.5 26 25"/>
        <rect class="r-body" fill-opacity="0.7" x="3" y="14" width="3" height="6" rx="1.5"/>
        <rect class="r-body" fill-opacity="0.7" x="34" y="14" width="3" height="6" rx="1.5"/>
        <rect class="r-body" fill-opacity="0.5" x="16" y="29" width="8" height="4" rx="2"/>
      </svg>
      <span id="_rcw_bdot"></span>
    </button>
    <div id="_rcw_panel" role="dialog" aria-label="Rahima's Assistant">
      <div class="_rcw_hd">
        <div class="_rcw_av">🤖</div>
        <div>
          <div class="_rcw_nm">Rahima's Assistant</div>
          <div class="_rcw_st"><span class="_rcw_sd"></span>Online</div>
        </div>
        <button class="_rcw_x" id="_rcw_close" aria-label="Close">✕</button>
      </div>
      <div class="_rcw_msgs" id="_rcw_msgs">
        <div class="_rcw_wlc" id="_rcw_wlc">
          <h3>👋 Hi! I'm Rahima's assistant</h3>
          <p>Ask me anything about Rahima in English or French — her skills, projects, education or how to contact her.</p>
          <div class="_rcw_chips">
            <button class="_rcw_chip" data-q="Who is Rahima?">Who is Rahima?</button>
            <button class="_rcw_chip" data-q="What are her skills?">Her skills</button>
            <button class="_rcw_chip" data-q="Tell me about her projects">Projects</button>
            <button class="_rcw_chip" data-q="What is her education?">Education</button>
            <button class="_rcw_chip" data-q="How can I contact her?">Contact</button>
            <button class="_rcw_chip" data-q="What is her career goal?">Career goal</button>
          </div>
        </div>
      </div>
      <div class="_rcw_foot">
        <div class="_rcw_irow">
          <textarea class="_rcw_ta" id="_rcw_ta" placeholder="Ask me about Rahima… (EN or FR)" rows="1"></textarea>
          <button class="_rcw_send" id="_rcw_send" aria-label="Send">
            <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
        <div class="_rcw_hint">Enter to send &nbsp;·&nbsp; Shift+Enter for new line</div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  /* ── LOGIC ──────────────────────────────────────────────────────────────── */
  var panel = document.getElementById('_rcw_panel');
  var msgs  = document.getElementById('_rcw_msgs');
  var ta    = document.getElementById('_rcw_ta');
  var send  = document.getElementById('_rcw_send');
  var open  = false;

  document.getElementById('_rcw_btn').onclick  = toggle;
  document.getElementById('_rcw_close').onclick = toggle;
  send.onclick = submit;

  ta.addEventListener('keydown', function(e){
    if (e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); submit(); }
  });
  ta.addEventListener('input', function(){
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 100) + 'px';
  });
  document.querySelectorAll('._rcw_chip').forEach(function(c){
    c.addEventListener('click', function(){ ta.value = c.dataset.q; submit(); });
  });

  function toggle(){
    open = !open;
    panel.classList.toggle('_open', open);
    if (open) setTimeout(function(){ ta.focus(); }, 260);
  }

  function scrollDown(){ msgs.scrollTop = msgs.scrollHeight; }

  function rmWelcome(){ var w = document.getElementById('_rcw_wlc'); if(w) w.remove(); }

  function esc(t){ return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function addMsg(cls, icon, html){
    rmWelcome();
    var el = document.createElement('div');
    el.className = '_rcw_row ' + cls;
    el.innerHTML = '<div class="_rcw_ico">' + icon + '</div><div class="_rcw_bub">' + html + '</div>';
    msgs.appendChild(el);
    scrollDown();
  }

  function showTyping(){
    var el = document.createElement('div');
    el.className = '_rcw_typing'; el.id = '_rcw_typ';
    el.innerHTML = '<div class="_rcw_ico" style="width:27px;height:27px;border-radius:50%;flex-shrink:0;margin-top:2px;background:radial-gradient(circle at 38% 38%,#22ff88,#00b84a);display:flex;align-items:center;justify-content:center;font-size:13px;">🛡️</div><div class="_rcw_dots"><span></span><span></span><span></span></div>';
    msgs.appendChild(el); scrollDown();
  }

  function hideTyping(){ var el = document.getElementById('_rcw_typ'); if(el) el.remove(); }

  function submit(){
    var text = ta.value.trim();
    if (!text) return;
    ta.value = ''; ta.style.height = 'auto';
    addMsg('me', '👤', esc(text));
    showTyping();
    setTimeout(function(){
      hideTyping();
      addMsg('bot', '🤖', getAnswer(text));
    }, 500 + Math.random() * 400);
    ta.focus();
  }

})();
