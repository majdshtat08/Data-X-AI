"use strict";

// ───────── إعدادات (غالباً لا تحتاج لتعديل شيء) ─────────
const CONFIG = {
  repo: "",            // مثال: "username/datax" — اتركه فارغاً ليُكتشف تلقائياً من رابط الموقع على GitHub Pages
  zip: "downloads/DATAX-App-v3.zip",  // أحدث نسخة مرفوعة داخل الموقع
  asset: "DATAX.exe",              // إن وُجد إصدار .exe على GitHub يُستخدم بدلاً منه تلقائياً
  author: { ar: "مجد الدين شتات", en: "Majd Al-Din Shattat" },
};

// ───────── النصوص (عربي / English) ─────────
const I18N = {
  ar: {
    nav_features: "المميزات", nav_how: "كيف يعمل", nav_versions: "النسخ", nav_faq: "أسئلة شائعة", nav_about: "عن المشروع",
    versions_title: "اختر نسخة DATA X", v1_label: "النسخة الأولى", v1_title: "النسخة الأولى",
    v1_description: "الإصدار الأساسي من DATA X.",
    announcement: "النسخة الثالثة متاحة الآن — حمّلها واختبر آخر التحسينات.",
    hero_lead: "مساعد ذكاء اصطناعي شخصي يعمل على جهازك: يبرمج، يصمم، ويمنتج الفيديوهات — مجاناً وبدون اشتراك.",
    dl_btn: "⬇ تحميل DATA X لويندوز", b_free: "مجاني 100%", b_private: "يعمل على جهازك", b_lang: "عربي + English",
    f_title: "شو بيعمل DATA X؟",
    f1_t: "برمجة وتطوير", f1_d: "يكتب الأكواد ويصلح الأخطاء ويشرح لك، بـ HTML وCSS وJavaScript وPython وغيرها.",
    f2_t: "مواقع جاهزة", f2_d: "بيبني موقع كامل بثلاثة ملفات (HTML وCSS وJS) جاهز للنشر على GitHub.",
    f3_t: "تصميم وصور", f3_d: "أغلفة وبوسترات احترافية، وصور بالذكاء الاصطناعي مجاناً.",
    f4_t: "مونتاج وريلز", f4_d: "يحوّل صورك وفيديوهاتك لريلز وتيك توك عمودي، يقص ويدمج ويضيف موسيقى.",
    f5_t: "تحكم بالكمبيوتر", f5_d: "يدير الملفات ويفتح البرامج ويتحكم بالماوس والكيبورد، وبيطلب موافقتك قبل أي شيء خطير.",
    f6_t: "خصوصية كاملة", f6_d: "الذكاء الاصطناعي بيشتغل محلياً على جهازك. محادثاتك وملفاتك ما بتطلع منه.",
    h_title: "ابدأ بثلاث خطوات",
    s1_t: "نزّل الملف", s1_d: "اضغط زر التحميل وراح ينزل ملف ZIP. فك الضغط عنه (كليك يمين ← Extract All) على سطح المكتب.", s1_d_exe: "اضغط زر التحميل. هو ملف واحد، ما بحتاج تثبّت بايثون ولا أي برنامج بنفسك.",
    s2_t: "شغّله أول مرة", s2_d: "دوبل كليك على START_DATAX.bat. أول مرة بيثبّت لحاله كل ما يلزم (بايثون، محرك الذكاء الاصطناعي، النموذج). بياخد دقائق مرة وحدة، وبعدها بيظهر اختصار DATA X على سطح المكتب.", s2_d_exe: "بيجهّز نفسه لحاله: بيثبّت محرك الذكاء الاصطناعي وبينزّل النموذج المناسب لجهازك. هاد بياخد دقائق مرة وحدة بس.",
    s3_t: "اطلب ما تريد", s3_d: "اكتب بالعربي: «اعمل لي موقع»، «صمم غلاف»، «جهّز ريل». وشوف النتيجة قدامك.",
    req: "المتطلبات: ويندوز 10 أو 11 • رام 8GB أو أكثر • مساحة فاضية حوالي 5GB • إنترنت أول مرة فقط.",
    q_title: "أسئلة شائعة",
    q1_q: "ظهرت رسالة «Windows protected your PC»، هل التطبيق آمن؟",
    q1_a: "هاي رسالة عادية لأي برنامج جديد ما عنده توقيع رقمي مدفوع (بتطلع عند ملف START_DATAX.bat أو الـ exe). اضغط «More info» ثم «Run anyway». الكود مفتوح المصدر وتقدر تراجعه بنفسك.",
    q2_q: "هل هو مجاني فعلاً؟", q2_a: "نعم، مجاني بالكامل. بيستخدم نماذج مفتوحة المصدر عن طريق Ollama، وما في مفتاح ولا اشتراك.",
    q3_q: "ليش بطيء عندي؟", q3_a: "الذكاء الاصطناعي بيشتغل على جهازك، فالسرعة بتعتمد على قوته. التطبيق بيختار تلقائياً نموذج أخف للأجهزة الأضعف، ويمكنك تغييره من الإعدادات.",
    q4_q: "هل يعمل على ماك أو لينكس؟", q4_a: "النسخة الجاهزة لويندوز حالياً. الكود مفتوح المصدر ويمكن تشغيله على أنظمة أخرى بتعديلات بسيطة.",
    a_title: "عن المشروع", a_text: "صُنع بواسطة {name} — رئيس Data X Team",
    end_t: "جاهز تجرّب؟", foot: "صُنع بحب للمبرمجين العرب",
    v2_label: "إصدار جديد", v2_title: "النسخة الثانية المحسّنة",
    v2_description: "حمّل النسخة الثانية من DATA X. هذا تنزيل مستقل عن النسخة الأولى.",
    v2_dl_btn: "⬇ تحميل النسخة الثانية", v2_note: "ملف ZIP • ويندوز",
    v2_missing: "تنزيل النسخة الثانية غير متاح حالياً.",
    v1_dl_btn: "⬇ تحميل النسخة الأولى",
    v3_label: "إصدار أحدث", v3_title: "النسخة الثالثة المحسّنة",
    v3_description: "حمّل أحدث نسخة من DATA X مع تحسينات وتجربة أكثر اكتمالاً.",
    v3_dl_btn: "⬇ تحميل النسخة الثالثة", v3_note: "ملف ZIP • ويندوز • 22 MB تقريباً",
    note_ver: "الإصدار {v} • حجم {mb} MB • ويندوز 10/11", note_zip: "ملف ZIP • بعد فك الضغط شغّل START_DATAX.bat • ويندوز 10/11",
    note_missing: "تنبيه: ملف التطبيق غير مرفوع بعد. أضِف downloads/DATAX-App.zip أو الإصدار DATAX.exe على GitHub.",
  },
  en: {
    nav_features: "Features", nav_how: "How it works", nav_versions: "Versions", nav_faq: "FAQ", nav_about: "About",
    versions_title: "Choose your DATA X version", v1_label: "Version 1", v1_title: "The original version",
    v1_description: "The original DATA X release.",
    announcement: "This is a demo version, and we're still working on it. Stay tuned for updates in the coming days.",
    hero_lead: "A personal AI assistant that runs on your own PC: it codes, designs and edits videos — free, no subscription.",
    dl_btn: "⬇ Download DATA X for Windows", b_free: "100% free", b_private: "Runs on your PC", b_lang: "عربي + English",
    f_title: "What can DATA X do?",
    f1_t: "Coding", f1_d: "Writes code, fixes bugs and explains things in HTML, CSS, JavaScript, Python and more.",
    f2_t: "Ready websites", f2_d: "Builds a complete site in three files (HTML, CSS, JS) ready to publish on GitHub.",
    f3_t: "Design & images", f3_d: "Professional covers and posters, plus free AI-generated images.",
    f4_t: "Video & reels", f4_d: "Turns your photos and clips into vertical Reels/TikTok videos: trim, merge, add music.",
    f5_t: "Computer control", f5_d: "Manages files, opens apps and controls mouse & keyboard — and asks before anything risky.",
    f6_t: "Full privacy", f6_d: "The AI runs locally on your machine. Your chats and files never leave it.",
    h_title: "Get started in 3 steps",
    s1_t: "Download the file", s1_d: "Click the download button to get a ZIP file. Extract it (right-click → Extract All) to your desktop.", s1_d_exe: "Click the download button. It's a single file — no need to install Python or anything yourself.",
    s2_t: "Run it once", s2_d: "Double-click START_DATAX.bat. On first run it installs everything needed (Python, the AI engine, the model). A few minutes, one time only — then a DATA X shortcut appears on your desktop.", s2_d_exe: "It sets itself up: installs the AI engine and downloads the right model for your PC. This takes a few minutes, one time only.",
    s3_t: "Ask for anything", s3_d: "Type: “build me a website”, “design a cover”, “make a reel”. Watch it happen.",
    req: "Requirements: Windows 10 or 11 • 8GB+ RAM • about 5GB free space • internet on first run only.",
    q_title: "FAQ",
    q1_q: "Windows shows “Windows protected your PC”. Is it safe?",
    q1_a: "That's normal for any new app without a paid code-signing certificate (it appears for START_DATAX.bat or the exe). Click “More info”, then “Run anyway”. The code is open source so you can review it.",
    q2_q: "Is it really free?", q2_a: "Yes, completely. It uses open-source models through Ollama — no API key, no subscription.",
    q3_q: "Why is it slow on my PC?", q3_a: "The AI runs on your own hardware, so speed depends on it. The app automatically picks a lighter model for weaker PCs, and you can change it in Settings.",
    q4_q: "Does it work on Mac or Linux?", q4_a: "The ready-made build is for Windows for now. The source is open and can be adapted to other systems.",
    a_title: "About the project", a_text: "Created by {name} — President of Data X Team",
    end_t: "Ready to try it?", foot: "Built with love for developers",
    v2_label: "New release", v2_title: "The improved second version",
    v2_description: "Download the second version of DATA X. This is a separate download from the first version.",
    v2_dl_btn: "⬇ Download version 2", v2_note: "ZIP file • Windows",
    v2_missing: "The second version download is currently unavailable.",
    v1_dl_btn: "⬇ Download version 1",
    v3_label: "Latest release", v3_title: "Improved version 3",
    v3_description: "Download the latest DATA X release with improvements and a more complete experience.",
    v3_dl_btn: "⬇ Download version 3", v3_note: "ZIP file • Windows • approx. 22 MB",
    note_ver: "Version {v} • {mb} MB • Windows 10/11", note_zip: "ZIP file • extract it, then run START_DATAX.bat • Windows 10/11",
    note_missing: "Notice: the app file is not uploaded yet. Add downloads/DATAX-App.zip or upload DATAX.exe in GitHub Releases.",
  },
};

// ───────── منطق ─────────
const $ = (s) => document.querySelector(s);
const state = { lang: "ar", kind: "zip", note: { k: "note_zip" }, v2Missing: false };

/** يستنتج اسم المستودع (owner/repo) من رابط GitHub Pages: owner.github.io/repo/ */
function detectRepo(host, path) {
  if (CONFIG.repo) return CONFIG.repo;
  if (!host.endsWith(".github.io")) return "";
  const owner = host.split(".")[0];
  const first = path.split("/").filter(Boolean)[0];
  return first && !first.includes(".") ? `${owner}/${first}` : `${owner}/${host}`;
}

function render() {
  const t = I18N[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    const txt = state.kind === "exe" && t[k + "_exe"] ? t[k + "_exe"] : t[k];
    if (typeof txt === "string") el.textContent = txt.replace("{name}", CONFIG.author[state.lang]);
  });
  $("#lang").textContent = state.lang === "ar" ? "EN" : "عربي";
  $("#dl-note").textContent = t[state.note.k].replace("{v}", state.note.v || "").replace("{mb}", state.note.mb || "");
  $("#dl-v2-note").textContent = state.v2Missing ? t.v2_missing : t.v2_note;
}

function setLang(l) {
  state.lang = l;
  try { localStorage.setItem("lang", l); } catch (e) { /* التخزين غير متاح */ }
  render();
}

/** الزر يعمل دائماً ويحمل ملف ZIP المرفوع داخل الموقع. */
async function setupDownload() {
  const links = [$("#dl"), $("#dl-v3")];
  links.forEach((a) => { a.href = CONFIG.zip; a.setAttribute("download", ""); });
  const v2Link = $("#dl-v2");

  const setUnavailable = () => {
    state.kind = "zip";
    state.note = { k: "note_missing" };
    links.forEach((a) => {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.classList.add("disabled");
      a.addEventListener("click", (event) => event.preventDefault());
    });
  };

  const repo = detectRepo(location.hostname, location.pathname);
  if (repo) { $("#gh").href = `https://github.com/${repo}`; $("#gh").hidden = false; }
  render();

  try {
    const v2Res = await fetch(v2Link.href, { method: "HEAD" });
    if (!v2Res.ok) throw new Error(`Version 2 download check failed: ${v2Res.status}`);
  } catch (e) {
    v2Link.removeAttribute("href");
    v2Link.setAttribute("aria-disabled", "true");
    v2Link.classList.add("disabled");
    state.v2Missing = true;
  }

  let zipAvailable = false;
  try {
    const zipRes = await fetch(CONFIG.zip, { method: "HEAD" });
    zipAvailable = zipRes.ok;
  } catch (e) { zipAvailable = false; }

  if (zipAvailable) {
    links.forEach((a) => {
      a.href = CONFIG.zip;
      a.setAttribute("download", "");
      a.classList.remove("disabled");
      a.removeAttribute("aria-disabled");
    });
  } else {
    setUnavailable();
  }
  render();
}

function init() {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
  const browserAr = (navigator.language || "ar").toLowerCase().startsWith("ar");
  state.lang = saved === "ar" || saved === "en" ? saved : (browserAr ? "ar" : "en");
  $("#year").textContent = new Date().getFullYear();
  $("#lang").addEventListener("click", () => setLang(state.lang === "ar" ? "en" : "ar"));
  const menu = $("#menu");
  $("#burger").addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("show")), { threshold: 0.12 });
    revealElements.forEach((el) => io.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("show"));
  }
  render();
  setupDownload();
}

if (typeof document !== "undefined") init();
if (typeof module !== "undefined") module.exports = { detectRepo, I18N };