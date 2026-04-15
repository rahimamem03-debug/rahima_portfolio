// On attend que le DOM soit complètement chargé avant d'agir
document.addEventListener('DOMContentLoaded', function() {

  // Contenu détaillé pour chaque expertise
  const topics = {
    cybersecurity: {
      title: "Cybersecurity",
      subtitle: "Protecting systems and understanding cyber threats",
      image: "assets/img/expertise/cybersecurity.png",
      heading: "Understand and anticipate cyber threats",
      p1: "Cybersecurity is essential to protect data and infrastructure. I'm learning to identify vulnerabilities, analyze risks, and implement protective measures.",
      list: [
        "Risk analysis and security audits",
        "Cryptography and secure communications",
        "Intrusion detection and incident response"
      ],
      p2: "I practice with tools like Wireshark, Metasploit, and platforms like TryHackMe.",
      p3: "My goal is to become an expert who can advise and protect organizations against cyberattacks.",
      sidebarText: "Cybersecurity is constantly evolving. New threats appear daily, making continuous learning essential."
    },
    programming: {
      title: "Programming",
      subtitle: "Software development & problem solving",
      image: "assets/img/expertise/programming.png",
      heading: "Master logic and algorithms",
      p1: "I mainly program in C, but I also explore Python and JavaScript. Programming lets me turn ideas into reality and automate tasks.",
      list: [
        "Algorithms and data structures",
        "Debugging and code optimization",
        "Personal projects (calculator, console games, etc.)"
      ],
      p2: "I join coding competitions (Codewars, FranceIOI) to improve speed and accuracy.",
      p3: "Eventually I want to develop secure applications and contribute to open source.",
      sidebarText: "C taught me memory management and discipline. Next I want to learn Rust for system security."
    },
    networks: {
      title: "Networks",
      subtitle: "Network architecture and security",
      image: "assets/img/expertise/networks.png",
      heading: "Understand information flow",
      p1: "Networks are the heart of modern communications. I study protocols (TCP/IP, DNS, HTTP) and equipment (routers, switches).",
      list: [
        "LAN configuration",
        "VLAN segmentation and firewalls",
        "Traffic analysis with Wireshark"
      ],
      p2: "I'm also learning basic network administration on Linux (iptables, route, netstat).",
      p3: "My aim is to combine networking and cybersecurity to become a network security engineer.",
      sidebarText: "A misconfigured network is an open door for attackers. Knowing protocols is essential to defend them."
    },
    linux: {
      title: "Linux Systems",
      subtitle: "Administration and command line",
      image: "assets/img/expertise/linux.png",
      heading: "Master the Linux environment",
      p1: "Linux is the go‑to OS for cybersecurity and servers. I use Ubuntu, Debian, and Kali Linux.",
      list: [
        "Essential commands (bash, grep, awk, sed)",
        "User and permission management",
        "Shell scripting for automation"
      ],
      p2: "I configure services (Apache, SSH, cron) and get familiar with tools like systemd.",
      p3: "My goal is to earn an LPIC‑1 certification to validate my skills.",
      sidebarText: "Linux administration is a major asset for any infrastructure or security professional."
    },
    ethicalhacking: {
      title: "Ethical Hacking",
      subtitle: "Test to better protect",
      image: "assets/img/expertise/ethicalhacking.png",
      heading: "Think like an attacker",
      p1: "Ethical hacking consists of finding flaws before malicious hackers do. I'm learning penetration testing methodologies.",
      list: [
        "Reconnaissance and information gathering",
        "Exploiting vulnerabilities (OWASP Top 10)",
        "Vulnerability reporting and patching"
      ],
      p2: "I use tools like Nmap, Burp Suite, John the Ripper on legal platforms (HackTheBox, RootMe).",
      p3: "I strictly follow legal and ethical guidelines. My aim is to become a certified pentester (CEH or OSCP).",
      sidebarText: "Ethical hacking demands constant vigilance and rigor. It's an exciting and responsible profession."
    },
    technology: {
      title: "Technology",
      subtitle: "Tech watch and innovation",
      image: "assets/img/expertise/technology.png",
      heading: "Stay at the cutting edge",
      p1: "I'm curious and regularly explore advances in AI, blockchain, cloud computing, and IoT.",
      list: [
        "Technology watch (blogs, conferences, MOOCs)",
        "Rapid prototyping with Arduino / Raspberry Pi",
        "Discovery of cloud architectures (AWS, Azure)"
      ],
      p2: "I participate in hackathons and workshops to apply these technologies to real problems.",
      p3: "My enthusiasm for tech drives me to learn continuously and share my discoveries.",
      sidebarText: "Technological innovation is a lever to solve societal challenges. I want to contribute to impactful projects."
    }
  };

  // Récupérer le paramètre ?topic= dans l'URL
  const urlParams = new URLSearchParams(window.location.search);
  let topic = urlParams.get('topic');

  // Si le paramètre est absent ou invalide, on utilise cybersecurity par défaut
  if (!topic || !topics[topic]) {
    topic = 'cybersecurity';
  }

  const data = topics[topic];

  // Mettre à jour les éléments de la page
  document.getElementById('detail-title').innerText = data.title;
  document.getElementById('detail-subtitle').innerText = data.subtitle;
  document.getElementById('breadcrumb-current').innerText = data.title;
  document.getElementById('detail-image').src = data.image;
  document.getElementById('detail-image').alt = data.title;
  document.getElementById('detail-heading').innerText = data.heading;
  document.getElementById('detail-paragraph-1').innerText = data.p1;
  document.getElementById('sidebar-text').innerText = data.sidebarText;
  document.getElementById('detail-paragraph-2').innerText = data.p2;
  document.getElementById('detail-paragraph-3').innerText = data.p3;

  // Générer la liste à puces
  const listUl = document.getElementById('detail-list');
  listUl.innerHTML = '';
  data.list.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="bi bi-check-circle"></i> <span>${item}</span>`;
    listUl.appendChild(li);
  });

  // Générer les liens vers les autres expertises dans la barre latérale
  const listContainer = document.getElementById('expertise-list');
  listContainer.innerHTML = '';
  for (const [key, value] of Object.entries(topics)) {
    if (key !== topic) {
      const a = document.createElement('a');
      a.href = `expertise-details.html?topic=${key}`;
      a.innerText = value.title;
      listContainer.appendChild(a);
    }
  }

});
