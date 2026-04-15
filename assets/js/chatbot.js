/* Rahima's Assistant Chatbot Script 
*/
(function () {
  'use strict';

  var KB = [
    {
      keys: ['who','rahima','about','introduce','tell me','yourself','she','her'],
      answer: "👩‍💻 <b>Rahima Moussoulouhou Eddine</b> is a 2nd-year Computer Engineering student, passionate about <b>cybersecurity</b>. She is based in <b>Djibouti</b> and aims to become a Cybersecurity Engineer.<br><br>🎂 Born March 19, 2007 &nbsp;|&nbsp; 📍 Djibouti, Djibouti"
    },
    {
      keys: ['skill','tech','language','python','css','html','javascript','c++','programming','code','master','level','proficiency'],
      answer: "💻 <b>Rahima's technical skills:</b><br><br>🟢 Python &nbsp;—&nbsp; 90%<br>🟢 C &nbsp;—&nbsp; 85%<br>🟡 HTML &nbsp;—&nbsp; 75%<br>🟡 CSS &nbsp;—&nbsp; 70%<br>🟠 C++ &nbsp;—&nbsp; 60%<br>🟠 JavaScript &nbsp;—&nbsp; 50%"
    },
    {
      keys: ['education','school','degree','bachelor','university','study','studies','formation','faculty','engineering','diploma','academic'],
      answer: "🎓 <b>Academic background:</b><br><br>📘 <b>Bachelor's in Computer Engineering</b> (in progress, 2024–present)<br>&nbsp;&nbsp;&nbsp;Faculty of Engineering, Djibouti<br>&nbsp;&nbsp;&nbsp;Subjects: C, algorithms, networks, operating systems<br><br>📗 <b>Scientific Baccalaureate</b> (2021–2024)<br>&nbsp;&nbsp;&nbsp;Lycée SMD, Anjouan, Comores<br>&nbsp;&nbsp;&nbsp;Focus: Math, Physics, Computer Science"
    },
    {
      keys: ['project','glino','game','portfolio','work','built','created','made','achievement'],
      answer: "🚀 <b>Rahima's projects:</b><br><br>🎮 <b>Glino Game</b> — her main project, built during her 1st year of university<br><br>⚙️ <b>C Projects:</b><br>• File management and data structure programs<br>• Mini interactive learning system in C with exercises and solutions<br>• Algorithmic problem solving<br>• Debugging and code optimization"
    },
    {
      keys: ['expertise','domain','cybersecurity','network','linux','ethical','hacking','security','speciality','field','interest'],
      answer: "🤖 <b>Rahima's areas of expertise:</b><br><br>🔐 <b>Cybersecurity</b> — system protection, vulnerability detection<br>💻 <b>Programming</b> — C and Python, problem solving<br>🌐 <b>Computer Networks</b> — how networks work and how to secure them<br>🐧 <b>Linux Systems</b> — system administration, command line<br>🎯 <b>Ethical Hacking</b> — identifying and fixing security flaws<br>💡 <b>Technology & Innovation</b> — constant tech watch"
    },
    {
      keys: ['experience','internship','work','job','professional','practice','self','learning','self-learning'],
      answer: "💼 <b>Professional experience:</b><br><br>📚 <b>Academic Projects</b> (2023–present)<br>&nbsp;&nbsp;&nbsp;Faculty of Engineering, Djibouti<br>&nbsp;&nbsp;&nbsp;• C programs (file management, structured data)<br>&nbsp;&nbsp;&nbsp;• Mini interactive learning system in C<br>&nbsp;&nbsp;&nbsp;• Debugging, testing and optimization<br><br>🔍 <b>Self-learning in Cybersecurity</b> (2024–present)<br>&nbsp;&nbsp;&nbsp;• Network security and system vulnerabilities<br>&nbsp;&nbsp;&nbsp;• Linux command-line tools<br>&nbsp;&nbsp;&nbsp;• Ethical hacking and secure coding basics"
    },
    {
      keys: ['contact','email','phone','reach','message','github','address','find','locate','get in touch'],
      answer: "📬 <b>Contact Rahima:</b><br><br>📧 <b>Email:</b> <a href='mailto:rahimamem03@gmail.com' style='color:#22ff88'>rahimamem03@gmail.com</a><br>📞 <b>Phone:</b> +253 77 72 85 38<br>🐙 <b>GitHub:</b> <a href='https://github.com/rahimamem03-debug/' target='_blank' style='color:#22ff88'>github.com/rahimamem03-debug</a><br>📍 <b>Address:</b> Faculty of Engineering, Djibouti City, Djibouti"
    },
    {
      keys: ['page','section','site','website','navigation','menu','home','resume','cv'],
      answer: "🗂️ <b>Website pages:</b><br><br>🏠 <b>Home</b> — landing page<br>👩 <b>About</b> — Rahima's presentation<br>📄 <b>Resume</b> — full CV<br>🛡️ <b>Expertise</b> — skill areas<br>🚀 <b>Portfolio</b> — completed projects<br>📬 <b>Contact</b> — contact form"
    },
    {
      keys: ['goal','dream','future','ambition','aspire','plan','career','become','want'],
      answer: "🎯 <b>Rahima's goal:</b><br><br>She aspires to become a <b>Cybersecurity Engineer</b>, designing secure systems and protecting digital infrastructures from modern cyber threats.<br><br>She is motivated, curious, and continuously learning to reach that goal. 💪"
    },
    {
      keys: ['age','old','born','birthday','2007'],
      answer: "🎂 Rahima was born on <b>March 19, 2007</b>. She is <b>19 years old</b>."
    },
    {
      keys: ['hello','hi','hey','good morning','good evening','howdy','sup'],
      answer: "👋 Hi! I'm Rahima's assistant.<br><br>I can answer your questions about her <b>skills</b>, <b>projects</b>, <b>education</b>, or how to <b>contact her</b>. What would you like to know?"
    },
    {
      keys: ['thank','thanks','great','perfect','cool','nice','awesome','good'],
      answer: "😊 You're welcome! Feel free to ask if you have any other questions about Rahima."
    },
    {
      keys: ['bye','goodbye','see you','ciao','later','good night'],
      answer: "👋 Goodbye! Don't hesitate to come back if you have more questions about Rahima. Have a great day!"
    }
  ];

  var DEFAULT = "🤔 I'm not sure I understood your question. You can ask me things like:<br><br>• <i>Who is Rahima?</i><br>• <i>What are her skills?</i><br>• <i>How can I contact her?</i><br>• <i>What are her projects?</i>";

  function getAnswer(q) {
    q = q.toLowerCase().trim();
    for (var i = 0; i < KB.length; i++) {
      for (var j = 0; j < KB[i].keys.length; j++) {
        if (q.indexOf(KB[i].keys[j]) !== -1) return KB[i].answer;
      }
    }
    return DEFAULT;
  }

  /* STYLES */
  
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
    ._rcw_bub a { color:#a78bfa; }
    ._rcw_bub b { color:#a78bfa; font-weight:600; }

    ._rcw_typing { display:flex; gap:8px; align-items:flex-end; }
    ._rcw_dots { display:flex; gap:4px; padding:11px 14px; background:#131525; border:1px solid rgba(167,139,250,.15); border-radius:14px; border-top-left-radius:4px; }
    ._rcw_dots span { width:6px; height:6px; border-radius:50%; background:#a78bfa; animation:_rcw_bounce 1.2s ease-in-out infinite; }
    ._rcw_dots span:nth-child(2){animation-delay:.18s} ._rcw_dots span:nth-child(3){animation-delay:.36s}
    @keyframes _rcw_bounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-6px);opacity:1}}

    ._rcw_foot { padding:12px 14px 15px; flex-shrink:0; background:#0d0f1a; border-top:1px solid rgba(167,139,250,.12); }
    ._rcw_err { margin-bottom:10px; padding:8px 12px; border-radius:8px; background:rgba(239,68,68,.1); border:1px solid rgba(239,68,68,.25); color:#fca5a5; font-size:11.5px; display:none; }
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
    ._rcw_send:disabled { opacity:.35; cursor:not-allowed; transform:none; }
    ._rcw_send svg { width:15px; height:15px; fill:none; stroke:#fff; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; }
    ._rcw_hint { font-size:9.5px; color:#1e293b; text-align:center; margin-top:8px; }
  `;
  document.head.appendChild(style);

  /* HTML */
  var wrap = document.createElement('div');
  wrap.innerHTML = `
    <button id="_rcw_btn" aria-label="Open chat">
      <!-- Robot head SVG -->
      <svg viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg">
        <!-- Antenna -->
        <rect class="robot-antenna" x="18.5" y="1" width="3" height="6" rx="1.5"/>
        <circle class="robot-antenna-tip" cx="20" cy="1.5" r="2.5"/>
        <!-- Head -->
        <rect class="robot-body" x="6" y="7" width="28" height="22" rx="6"/>
        <!-- Visor strip -->
        <rect fill="#1a1a4e" fill-opacity="0.15" x="8" y="12" width="24" height="10" rx="3"/>
        <!-- Left eye -->
        <circle class="robot-eye-l" cx="14" cy="17" r="3.5"/>
        <circle fill="white" fill-opacity="0.5" cx="15" cy="15.5" r="1.2"/>
        <!-- Right eye -->
        <circle class="robot-eye-r" cx="26" cy="17" r="3.5"/>
        <circle fill="white" fill-opacity="0.5" cx="27" cy="15.5" r="1.2"/>
        <!-- Mouth -->
        <path class="robot-mouth" d="M14 25 Q20 28.5 26 25"/>
        <!-- Ear details -->
        <rect class="robot-body" fill-opacity="0.7" x="3" y="14" width="3" height="6" rx="1.5"/>
        <rect class="robot-body" fill-opacity="0.7" x="34" y="14" width="3" height="6" rx="1.5"/>
        <!-- Neck -->
        <rect class="robot-body" fill-opacity="0.5" x="16" y="29" width="8" height="4" rx="2"/>
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
          <p>Ask me anything about Rahima — her skills, projects, education or how to contact her.</p>
          <div class="_rcw_chips">
            <button class="_rcw_chip" data-q="Who is Rahima?">Who is Rahima?</button>
            <button class="_rcw_chip" data-q="What are her skills?">Her skills</button>
            <button class="_rcw_chip" data-q="Tell me about her projects">Projects</button>
            <button class="_rcw_chip" data-q="What is her education?">Education</button>
            <button class="_rcw_chip" data-q="How can I contact her?">Contact</button>
            <button class="_rcw_chip" data-q="What is her expertise?">Expertise</button>
          </div>
        </div>
      </div>
      <div class="_rcw_foot">
        <div class="_rcw_irow">
          <textarea class="_rcw_ta" id="_rcw_ta" placeholder="Ask me about Rahima…" rows="1"></textarea>
          <button class="_rcw_send" id="_rcw_send" aria-label="Send">
            <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
        <div class="_rcw_hint">Enter to send &nbsp;·&nbsp; Shift+Enter for new line</div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  /* LOGIC */
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
