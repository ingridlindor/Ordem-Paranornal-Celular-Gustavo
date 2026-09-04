// ==== CONFIGURAÇÃO (edite aqui) ====
const CORRECT_PIN = "2547"; // troque pela senha real do celular
const TRANCATRON_PASSWORD = "160322"; // senha da porta (TRANCATRON)
const TRANCATRON_LOCKOUT_SECONDS = 120; // tempo de bloqueio após senha errada

const ANSWERS = {
  nome: ["gustavo alves de campos"],
  aniversario: ["1978-06-07"], // formato do <input type="date">: AAAA-MM-DD
  dataImportante: ["1997-08-10", "2015-09-02"], // formato do <input type="date">: AAAA-MM-DD
  nomeImportante: ["olivia", "laura"]
};

const EMAIL_CODE = "87NF25"; // código de verificação exigido para abrir o e-mail

const EMAILS = {
  inbox: [
    {
      from: "Alan",
      avatarClass: "avatar-1",
      to: "mim, Edgar, Eloísa, Kênia, Victor",
      subject: "Voltei do Iraque, precisamos conversar",
      date: "dom., 12 de março de 2022, 19:12",
      body: "Pessoal, voltei hoje de manhã. Não vou dar detalhes por aqui porque vocês precisam ver com os próprios olhos. Existe uma chance pra todos nós. Preciso ver vocês em pessoa. Essa quinta à noite, daqui a 4 dias, na casa do Gustavo? Ele disse que a gente pode usar o porão dele. Não faltem. Por favor.\n\nAtt.\nAlan"
    }
  ],
  sent: [
    {
      from: "Gustavo",
      avatarClass: "avatar-6",
      to: "Alan",
      subject: "Não Acredito",
      date: "ter., 4 de abril de 2022, 14:57",
      body: "Fiz o último exame ontem. Os médicos não sabem como explicar, mas simplesmente não tem mais nada nos pulmões. A Olívia chorou a noite inteira. A Laurinha também, mesmo sem entender direito, ela sentiu que eu tava bem.\n\nEu ainda não contei o que fizemos, na verdade acho que não deveríamos contar. Eu vou deixar tudo trancado no porão. Você sabe como estão os outros?\n\nEu vi que o Victor mandou mensagem no grupo de suporte falando que não iria mais, e convidei ele pra vir jogar poker aqui semana que vem. A Eloísa parece que só saiu do grupo sem falar nada, a Kênia também, mas ela nunca foi de falar muito. O Edgar ainda não respondeu, mas o Victor disse que falou com ele por telefone e ele tava bem também.\n\nObrigado, Alan. De coração."
    },
    {
      from: "Gustavo",
      avatarClass: "avatar-6",
      to: "Victor",
      subject: "pesadelos",
      date: "seg., 28 de agosto de 2022, 07:34",
      body: "Tá acontecendo comigo também, não consigo dormir mais direito. Toda noite fico sonhando com um corpo se dobrando pra dentro. Você que tem estudado mais sobre esses rituais e ocultismo, o que acha que pode ser? Tem algum jeito de resolver isso? Vai passar?\n\nOlívia diz que eu fico falando durante a noite em línguas que ela não entende e a marca parece doer cada dia mais... Fisicamente eu me sinto ótimo, mas viver assim é um inferno.\n\nO que nós fizemos?\n\nG."
    }
  ]
};
const CHATS = {
  reuniao: {
    name: "Lidando com despedidas",
    sub: "Alan, Eloísa, Eu, Kênia, Edgar, Victor",
    avatarClass: "avatar-group",
    avatarText: "👥",
    isGroup: true,
    lastTime: "18:34",
    messages: [
      { type: "date", text: "11 de outubro de 2022" },
      { from: "them", sender: "Alan", text: "pessoal, só confirmando a reunião depois de amanhã no porão do Gustavo.", time: "18:20" },
      { from: "them", sender: "Alan", text: "eu acho que tenho a resposta para resolver os problemas que temos passado", time: "18:21" },
      { from: "them", sender: "Alan", text: "precisamos estar todos juntos", time: "18:21" },
      { from: "me", text: "Nem a Olívia nem a Laurinha vão estar, então o timing é ótimo.", time: "18:30" },
      { from: "me", text: "Lembrando que eu instalei a tranca elétrica", time: "18:33" },
      { from: "me", text: "A senha da porta é a data que nenhum de nós conseguiria esquecer.", time: "18:34" },
      { from: "me", text: "O dia em que tudo mudou.", time: "18:34" }
    ]
  },
  alan: {
    name: "Alan",
    sub: "visto por último 13:04",
    avatarClass: "avatar-1",
    avatarText: "A",
    lastTime: "12:59",
    messages: [
      { type: "date", text: "Hoje" },
      { from: "them", text: "Gustavo, você tá sozinho?", time: "12:50" },
      { from: "them", text: "eu reli os textos. eu tinha entendido uma coisa errado.", time: "12:50" },
      { from: "them", text: "o ritual nunca foi um milagre, ele é uma troca. as pessoas eram SACRIFICADAS para que líderes pudessem viver em seu lugar.", time: "12:52" },
      { from: "them", text: "entre todos que fizeram o ritual, apenas dois podem viver, Gustavo.", time: "12:52" },
      { from: "them", text: "e a hora de pagar a dívida tá chegando.", time: "12:53" },
      { from: "me", text: "Que conversa é essa alan?", time: "12:55" },
      { from: "me", text: "Que divida? O que vai acontecer?", time: "12:55" },
      { from: "them", text: "eu te explico melhor em pessoa, eu vou chegar mais cedo que os outros", time: "12:56" },
      { from: "them", text: "aquelas grades do seu depósito ainda estão lá?", time: "12:57" },
      { from: "me", text: "Alan, no que voce ta pensando...", time: "12:59" }
    ]
  },
  victor: {
    name: "Victor",
    sub: "visto por último 18:03",
    avatarClass: "avatar-5",
    avatarText: "V",
    lastTime: "16:45",
    messages: [
      { type: "date", text: "Hoje" },
      { from: "me", text: "Você estava certo, o Alan me fez uma proposta completamente maluca.", time: "13:38" },
      { from: "me", text: "Eu acho que tudo isso tá mexendo com a cabeça dele.", time: "13:39" },
      { from: "me", text: "Não sei o que fazer, ele ta aqui.", time: "13:43" },
      { from: "me", text: "Acho que você não deveria vir", time: "13:47" },
      { from: "me", text: "Ele quer realizar o ritual de novo mas fazendo algo ainda pior dessa vez", time: "13:47" },
      { from: "them", text: "Se precisar, eu tenho uma maneira de impedir ele de fazer isso.", time: "13:54" },
      { from: "them", text: "Preciso buscar algumas coisas e vou´chegar aí mais tarde, mas vou preparado para caso a gente precise fazer o necessário.", time: "13:55" },
      { from: "them", text: "Da um jeito de prender ele", time: "13:59" },
      { from: "them", text: "Daqui a pouco eu to aí", time: "16:13" },
      { from: "them", text: "Gustavo?", time: "16:45" }
    ]
  }
};
// =====================================

const MAX_ATTEMPTS = 3;

const lockScreen = document.getElementById("lockScreen");
const hintScreen = document.getElementById("hintScreen");
const recoveryScreen = document.getElementById("recoveryScreen");
const homeScreen = document.getElementById("homeScreen");
const contactsScreen = document.getElementById("contactsScreen");
const emailLockScreen = document.getElementById("emailLockScreen");
const emailScreen = document.getElementById("emailScreen");
const emailDetailScreen = document.getElementById("emailDetailScreen");
const messagesScreen = document.getElementById("messagesScreen");
const chatDetailScreen = document.getElementById("chatDetailScreen");
const trancatronScreen = document.getElementById("trancatronScreen");
const licenseScreen = document.getElementById("licenseScreen");

const pinDots = document.querySelectorAll("#pinDots .dot");
const lockMessage = document.getElementById("lockMessage");
const keypad = document.getElementById("keypad");
const forgotBtn = document.getElementById("forgotBtn");

let currentPin = "";
let wrongAttempts = 0;

function normalize(str) {
  return str
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function updateDots() {
  pinDots.forEach((dot, i) => dot.classList.toggle("filled", i < currentPin.length));
}

function shakeAndClear(msg) {
  lockMessage.textContent = msg;
  lockScreen.querySelector(".lock-content").classList.add("shake");
  setTimeout(() => lockScreen.querySelector(".lock-content").classList.remove("shake"), 400);
  currentPin = "";
  updateDots();
}

keypad.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const key = btn.dataset.key;

  if (key === "back") {
    currentPin = currentPin.slice(0, -1);
    updateDots();
    return;
  }

  if (key === "hint") {
    lockScreen.classList.add("hidden");
    hintScreen.classList.remove("hidden");
    return;
  }

  if (currentPin.length >= 4) return;
  currentPin += key;
  updateDots();

  if (currentPin.length === 4) {
    setTimeout(() => {
      if (currentPin === CORRECT_PIN) {
        lockScreen.classList.add("hidden");
        homeScreen.classList.remove("hidden");
      } else {
        wrongAttempts++;
        shakeAndClear("Senha incorreta");
        if (wrongAttempts >= MAX_ATTEMPTS) {
          forgotBtn.hidden = false;
        }
      }
    }, 150);
  }
});

document.getElementById("hintBackBtn").addEventListener("click", () => {
  hintScreen.classList.add("hidden");
  lockScreen.classList.remove("hidden");
});

forgotBtn.addEventListener("click", () => {
  lockScreen.classList.add("hidden");
  recoveryScreen.classList.remove("hidden");
});

document.getElementById("cancelRecoveryBtn").addEventListener("click", () => {
  recoveryScreen.classList.add("hidden");
  lockScreen.classList.remove("hidden");
});

document.getElementById("recoveryForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll("input[data-q]");
  let allCorrect = true;

  inputs.forEach((input) => {
    const key = input.dataset.q;
    const feedback = input.nextElementSibling;
    const isCorrect = input.type === "date"
      ? ANSWERS[key].includes(input.value)
      : ANSWERS[key].some((a) => normalize(a) === normalize(input.value));

    input.classList.toggle("correct", isCorrect);
    input.classList.toggle("wrong", !isCorrect);
    feedback.textContent = isCorrect ? "" : "Resposta incorreta.";

    if (!isCorrect) allCorrect = false;
  });

  if (allCorrect) {
    recoveryScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
  }
});

document.getElementById("contactsAppIcon").addEventListener("click", () => {
  homeScreen.classList.add("hidden");
  contactsScreen.classList.remove("hidden");
});

document.getElementById("licenseAppIcon").addEventListener("click", () => {
  homeScreen.classList.add("hidden");
  licenseScreen.classList.remove("hidden");
});

document.getElementById("licenseBackBtn").addEventListener("click", () => {
  licenseScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

document.getElementById("contactsBackBtn").addEventListener("click", () => {
  contactsScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

// ==== E-MAIL ====

document.querySelectorAll(".email-app-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    document.getElementById("emailCodeInput").value = "";
    document.getElementById("emailCodeFeedback").textContent = "";
    homeScreen.classList.add("hidden");
    emailLockScreen.classList.remove("hidden");
  });
});

document.getElementById("emailCodeCancelBtn").addEventListener("click", () => {
  emailLockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

document.getElementById("emailCodeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("emailCodeInput");
  const feedback = document.getElementById("emailCodeFeedback");

  if (normalize(input.value).toUpperCase() === EMAIL_CODE) {
    emailLockScreen.classList.add("hidden");
    emailScreen.classList.remove("hidden");
    renderEmailList("inbox");
  } else {
    feedback.textContent = "Código incorreto.";
  }
});

document.getElementById("emailBackBtn").addEventListener("click", () => {
  emailScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

document.querySelectorAll(".email-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".email-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderEmailList(tab.dataset.folder);
  });
});

function renderEmailList(folder) {
  const list = document.getElementById("emailList");
  const emails = EMAILS[folder];
  list.innerHTML = "";

  if (emails.length === 0) {
    list.innerHTML = '<div class="email-empty">Nenhum e-mail aqui.</div>';
    return;
  }

  emails.forEach((email, index) => {
    const item = document.createElement("div");
    item.className = "email-item";
    item.innerHTML = `
      <div class="contact-avatar ${email.avatarClass}">${email.from.charAt(0)}</div>
      <div class="email-item-body">
        <div class="email-item-top">
          <span class="email-item-from">${email.from}</span>
          <span class="email-item-date">${email.date}</span>
        </div>
        <div class="email-item-subject">${email.subject}</div>
        <div class="email-item-snippet">${email.body.split("\n")[0]}</div>
      </div>
    `;
    item.addEventListener("click", () => openEmailDetail(folder, index));
    list.appendChild(item);
  });
}

function openEmailDetail(folder, index) {
  const email = EMAILS[folder][index];
  const detail = document.getElementById("emailDetail");
  detail.innerHTML = `
    <h2>${email.subject}</h2>
    <div class="email-detail-meta">
      <div class="contact-avatar ${email.avatarClass}">${email.from.charAt(0)}</div>
      <div>
        <div class="email-detail-from">${email.from}</div>
        <div class="email-detail-to">para ${email.to}</div>
        <div class="email-detail-date">${email.date}</div>
      </div>
    </div>
    <div class="email-detail-text">${email.body}</div>
  `;
  emailScreen.classList.add("hidden");
  emailDetailScreen.classList.remove("hidden");
}

document.getElementById("emailDetailBackBtn").addEventListener("click", () => {
  emailDetailScreen.classList.add("hidden");
  emailScreen.classList.remove("hidden");
});

// ==== MENSAGENS (WHATSAPP) ====

document.querySelectorAll(".messages-app-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    messagesScreen.classList.remove("hidden");
    renderChatList();
  });
});

document.getElementById("messagesBackBtn").addEventListener("click", () => {
  messagesScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

function renderChatList() {
  const list = document.getElementById("chatList");
  list.innerHTML = "";

  Object.keys(CHATS).forEach((key) => {
    const chat = CHATS[key];
    const lastMsg = [...chat.messages].reverse().find((m) => m.text && !m.type);
    const item = document.createElement("div");
    item.className = "chat-item";
    item.innerHTML = `
      <div class="contact-avatar ${chat.avatarClass}">${chat.avatarText}</div>
      <div class="chat-item-body">
        <div class="chat-item-top">
          <span class="chat-item-name">${chat.name}</span>
          <span class="chat-item-time">${chat.lastTime}</span>
        </div>
        <div class="chat-item-snippet">${lastMsg && lastMsg.from === "me" ? '<span class="check">✓✓</span> ' : ""}${lastMsg ? lastMsg.text : ""}</div>
      </div>
    `;
    item.addEventListener("click", () => openChat(key));
    list.appendChild(item);
  });
}

function openChat(key) {
  const chat = CHATS[key];

  document.getElementById("chatHeaderAvatar").className = `chat-header-avatar ${chat.avatarClass}`;
  document.getElementById("chatHeaderAvatar").textContent = chat.avatarText;
  document.getElementById("chatHeaderName").textContent = chat.name;
  document.getElementById("chatHeaderSub").textContent = chat.sub;

  const body = document.getElementById("chatBody");
  body.innerHTML = "";

  let lastSender = null;

  chat.messages.forEach((msg) => {
    if (msg.type === "date") {
      const divider = document.createElement("div");
      divider.className = "chat-date-divider";
      divider.textContent = msg.text;
      body.appendChild(divider);
      lastSender = null;
      return;
    }

    const row = document.createElement("div");
    row.className = `chat-bubble-row ${msg.from}`;

    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${msg.from}`;

    let html = "";
    if (chat.isGroup && msg.from === "them" && msg.sender !== lastSender) {
      html += `<div class="chat-bubble-sender">${msg.sender}</div>`;
    }
    html += `${msg.text}<span class="chat-bubble-time">${msg.time}${msg.from === "me" ? ' <span class="check">✓✓</span>' : ""}</span>`;
    bubble.innerHTML = html;

    row.appendChild(bubble);
    body.appendChild(row);
    lastSender = msg.sender || null;
  });

  messagesScreen.classList.add("hidden");
  chatDetailScreen.classList.remove("hidden");
}

document.getElementById("chatDetailBackBtn").addEventListener("click", () => {
  chatDetailScreen.classList.add("hidden");
  messagesScreen.classList.remove("hidden");
});

// ==== TRANCATRON ====

const trancatronDots = document.querySelectorAll("#trancatronDots .tc-digit");
const trancatronMessage = document.getElementById("trancatronMessage");
const trancatronKeypad = document.getElementById("trancatronKeypad");
const trancatronLed = document.getElementById("trancatronLed");
const trancatronStatusText = document.getElementById("trancatronStatusText");

let trancatronPin = "";
let trancatronLockedUntil = 0;
let trancatronTimerInterval = null;

function updateTrancatronDots() {
  trancatronDots.forEach((digit, i) => digit.classList.toggle("filled", i < trancatronPin.length));
}

function setTrancatronKeypadEnabled(enabled) {
  trancatronKeypad.querySelectorAll("button").forEach((btn) => {
    btn.disabled = !enabled;
  });
}

function setTrancatronStatus(unlocked) {
  trancatronLed.classList.toggle("unlocked", unlocked);
  trancatronStatusText.classList.toggle("unlocked", unlocked);
  trancatronStatusText.textContent = unlocked ? "DESTRANCADO" : "TRANCADO";
}

function startTrancatronLockout() {
  trancatronLockedUntil = Date.now() + TRANCATRON_LOCKOUT_SECONDS * 1000;
  setTrancatronKeypadEnabled(false);

  clearInterval(trancatronTimerInterval);
  trancatronTimerInterval = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((trancatronLockedUntil - Date.now()) / 1000));
    if (remaining <= 0) {
      clearInterval(trancatronTimerInterval);
      trancatronMessage.innerHTML = "&nbsp;";
      setTrancatronKeypadEnabled(true);
      return;
    }
    const mm = Math.floor(remaining / 60);
    const ss = String(remaining % 60).padStart(2, "0");
    trancatronMessage.innerHTML = `<span class="tc-timer">SISTEMA BLOQUEADO · AGUARDE ${mm}:${ss}</span>`;
  }, 250);
}

document.querySelectorAll(".trancatron-app-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    trancatronPin = "";
    updateTrancatronDots();
    setTrancatronStatus(false);
    homeScreen.classList.add("hidden");
    trancatronScreen.classList.remove("hidden");

    if (Date.now() < trancatronLockedUntil) {
      setTrancatronKeypadEnabled(false);
    } else {
      setTrancatronKeypadEnabled(true);
      trancatronMessage.innerHTML = "&nbsp;";
    }
  });
});

document.getElementById("trancatronBackBtn").addEventListener("click", () => {
  trancatronScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

trancatronKeypad.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn || btn.disabled) return;
  const key = btn.dataset.key;

  if (key === "back") {
    trancatronPin = trancatronPin.slice(0, -1);
    updateTrancatronDots();
    return;
  }

  if (trancatronPin.length >= 6) return;
  trancatronPin += key;
  updateTrancatronDots();

  if (trancatronPin.length === 6) {
    setTimeout(() => {
      if (trancatronPin === TRANCATRON_PASSWORD) {
        trancatronMessage.innerHTML = '<span class="tc-success">PORTA ABERTA</span>';
        setTrancatronStatus(true);
        setTrancatronKeypadEnabled(false);
      } else {
        trancatronPin = "";
        updateTrancatronDots();
        trancatronMessage.innerHTML = '<span class="tc-error">SENHA INCORRETA</span>';
        setTimeout(() => startTrancatronLockout(), 700);
      }
    }, 150);
  }
});
