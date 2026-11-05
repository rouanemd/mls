'use strict';

const translations = {
  en: {
    skip: 'Skip to content', homeLabel: 'Moroccan Life Support — home', brandTag: 'Train · Raise awareness · Take action', menuLabel: 'Open menu', navLabel: 'Main navigation',
    navAbout: 'About us', navTraining: 'Training', navActions: 'Our work', navResources: 'Resources', navContact: 'Contact', join: 'Join us', languageLabel: 'Language',
    since: 'Since 2022', location: 'Meknès · Morocco', heroLead: 'Together, let’s learn to', heroEm: 'save lives.', heroBody: 'Training, raising awareness and taking action for better-prepared communities in Morocco.', discoverTraining: 'Explore our training', discoverMLS: 'Discover MLS',
    communityAlt: 'A large group of young people attending a first-aid awareness workshop in Bouznika', communityCaption: 'Raising awareness in Bouznika', trainingEyebrow: 'Our areas of action', trainingTitle: 'Useful skills. Shared knowledge.',
    firstAid: 'First aid', firstAidBody: 'Introducing lifesaving skills so citizens can feel more confident and better prepared.', trainingRequest: 'Arrange a training session', simulation: 'Healthcare simulation', simulationBody: 'Learning through hands-on workshops and realistic practice scenarios.', seeActions: 'Explore our work', solidarity: 'Community action', solidarityBody: 'Connecting with young people and communities to raise awareness and share knowledge.', takePart: 'Get involved with MLS',
    videoLabel: 'MLS video raising awareness about cardiopulmonary resuscitation', videoFallback: 'Your browser cannot play this video.', playLabel: 'Play the MLS video', videoEyebrow: 'MLS on video', videoTitle: 'One action can change everything.', videoSubtitle: 'Raising awareness about cardiopulmonary resuscitation', videoBody: 'A campaign to introduce lifesaving skills and inspire people to learn.', videoNote: 'MLS awareness video · 2022. This video does not replace hands-on training.',
    aboutEyebrow: 'About the association', aboutTitle: 'A committed team for safer lives.', aboutBody: 'Founded in 2022 in Meknès, Moroccan Life Support is a Moroccan nonprofit association. We work through training, awareness and community action to promote first aid and community health.', aboutBody2: 'Healthcare professionals, trainers and volunteers share one conviction: learning together helps us act when a life is at stake.', meetTeam: 'Get in touch with the team', teamAlt: 'MLS team at the first Emergency Days event in Meknès', teamCaption: 'The MLS team · Emergency Days, Meknès', scoutingAlt: 'A trainer supporting a young participant practising CPR on a manikin outdoors',
    youthEyebrow: 'Sharing skills for tomorrow', youthTitle: 'Raising awareness from an early age.', youthBody: 'In schools, camps and associations, our workshops make learning accessible. Young people also have a part to play in building a culture of first aid.',
    actionsEyebrow: 'In the community', actionsTitle: 'Our mission in action.', actionsIntro: 'Workshops and shared experiences, close to the needs of our communities.', schoolAlt: 'A large group of participants at a first-aid training session at Jahjouh High School', schoolMeta: 'Meknès · 2024', schoolTitle: 'First aid at school', schoolBody: 'A training session at Jahjouh High School to introduce students to lifesaving skills.', campMeta: 'Bouznika · 2023', campTitle: 'Learning, together', campBody: 'Awareness and training workshops for children attending holiday camps.', emergencyMeta: 'ISPITS Meknès · 2023', emergencyTitle: 'Emergency Days', emergencyBody: 'Practical sessions focused on emergency care and healthcare simulation.',
    contactEyebrow: 'Be part of MLS', contactTitle: 'Together, let’s make a difference.', contactBody: 'Would you like to join the association, propose a partnership or arrange training? Let’s talk.', linkedin: 'Find MLS on LinkedIn ↗', nameLabel: 'Your name', emailLabel: 'Your email address', subjectLabel: 'I would like to…', subjectTraining: 'Arrange a training session', subjectVolunteer: 'Join MLS', subjectPartner: 'Propose a partnership', subjectOther: 'Ask a question', messageLabel: 'Your message', formNote: 'We use your contact details only to respond to your request. Please do not submit personal medical information.', send: 'Send message', sending: 'Sending…', formError: 'Your message could not be sent. Please try again or email mrccnlfspprt@gmail.com.', localForm: 'The form is ready for your Netlify website. For now, please email mrccnlfspprt@gmail.com.', footerTag: 'Moroccan nonprofit association',
    pageTitle: 'Moroccan Life Support — Together, we save lives', pageDescription: 'Moroccan Life Support: a Moroccan nonprofit promoting first aid, healthcare simulation and better-prepared communities.', successTitle: 'Thank you for your message.', successBody: 'Your message has been sent to Moroccan Life Support. Our team will get back to you using the email address you provided.', successBack: 'Back to the website', successPageTitle: 'Thank you — Moroccan Life Support'
  },
  ar: {
    skip: 'الانتقال إلى المحتوى', homeLabel: 'Moroccan Life Support — الصفحة الرئيسية', brandTag: 'نُكوّن · نُوعّي · نعمل', menuLabel: 'فتح القائمة', navLabel: 'القائمة الرئيسية',
    navAbout: 'الجمعية', navTraining: 'التكوينات', navActions: 'أنشطتنا', navResources: 'الموارد', navContact: 'تواصل معنا', join: 'انضم إلينا', languageLabel: 'اللغة',
    since: 'منذ 2022', location: 'مكناس · المغرب', heroLead: 'معاً، لنتعلّم كيف', heroEm: 'ننقذ الأرواح.', heroBody: 'نُكوّن ونُوعّي ونعمل من أجل مجتمعات أكثر استعداداً في المغرب.', discoverTraining: 'اكتشف تكويناتنا', discoverMLS: 'تعرّف على MLS',
    communityAlt: 'مجموعة كبيرة من الأطفال والشباب في ورشة توعوية حول الإسعافات الأولية ببوزنيقة', communityCaption: 'التوعية في بوزنيقة', trainingEyebrow: 'مجالات عملنا', trainingTitle: 'مهارات نافعة. ومعرفة نتقاسمها.',
    firstAid: 'الإسعافات الأولية', firstAidBody: 'التعريف بالمهارات المنقذة للحياة ليصبح المواطنون أكثر ثقة واستعداداً.', trainingRequest: 'تنظيم دورة تكوينية', simulation: 'المحاكاة في الصحة', simulationBody: 'التعلّم بالممارسة من خلال ورشات تطبيقية وسيناريوهات واقعية.', seeActions: 'اكتشف أنشطتنا', solidarity: 'العمل التضامني', solidarityBody: 'لقاء الشباب والمجتمعات للتوعية ومشاركة المعارف.', takePart: 'شارك مع MLS',
    videoLabel: 'فيديو MLS للتوعية بالإنعاش القلبي الرئوي', videoFallback: 'متصفحك لا يدعم تشغيل هذا الفيديو.', playLabel: 'تشغيل فيديو MLS', videoEyebrow: 'MLS بالفيديو', videoTitle: 'خطوة واحدة قد تُغيّر كل شيء.', videoSubtitle: 'التوعية بالإنعاش القلبي الرئوي', videoBody: 'حملة للتعريف بالمهارات المنقذة للحياة وتشجيع الجميع على التعلّم.', videoNote: 'فيديو توعوي من MLS · 2022. لا يُغني هذا الفيديو عن التكوين التطبيقي.',
    aboutEyebrow: 'الجمعية', aboutTitle: 'فريق ملتزم من أجل حياة أكثر أماناً.', aboutBody: 'تأسست Moroccan Life Support سنة 2022 بمكناس، وهي جمعية مغربية غير ربحية. نعمل على التكوين والتوعية والعمل الميداني للنهوض بالإسعافات الأولية وصحة المجتمع.', aboutBody2: 'يجمع مهنيي الصحة والمكوّنين والمتطوعين إيمان واحد: التعلّم معاً يساعدنا على التدخل عندما تكون حياة إنسان على المحك.', meetTeam: 'تواصل مع الفريق', teamAlt: 'فريق MLS خلال النسخة الأولى من أيام الطوارئ بمكناس', teamCaption: 'فريق MLS · أيام الطوارئ، مكناس', scoutingAlt: 'مكوّنة ترافق مشاركة صغيرة أثناء التدريب على الإنعاش القلبي الرئوي على دمية في الهواء الطلق',
    youthEyebrow: 'ننقل المعرفة من أجل الغد', youthTitle: 'التوعية منذ الصغر.', youthBody: 'في المدارس والمخيمات والجمعيات، تجعل ورشاتنا التعلّم متاحاً للجميع. وللأطفال والشباب أيضاً دور في ترسيخ ثقافة الإسعافات الأولية.',
    actionsEyebrow: 'في الميدان', actionsTitle: 'رسالتنا تتحوّل إلى عمل.', actionsIntro: 'لقاءات وورشات تنطلق من احتياجات مجتمعاتنا.', schoolAlt: 'مجموعة كبيرة من المشاركين في دورة حول الإسعافات الأولية بثانوية جحجوح', schoolMeta: 'مكناس · 2024', schoolTitle: 'الإسعافات الأولية في المدرسة', schoolBody: 'تكوين بثانوية جحجوح لتعريف التلاميذ بالمهارات المنقذة للحياة.', campMeta: 'بوزنيقة · 2023', campTitle: 'نتعلّم معاً', campBody: 'ورشات للتوعية والتكوين لفائدة أطفال المخيمات الصيفية.', emergencyMeta: 'المعهد العالي للمهن التمريضية وتقنيات الصحة بمكناس · 2023', emergencyTitle: 'أيام الطوارئ', emergencyBody: 'لقاءات تطبيقية حول الرعاية الاستعجالية والمحاكاة في الصحة.',
    contactEyebrow: 'كن جزءاً من MLS', contactTitle: 'معاً، لنُحدث فرقاً.', contactBody: 'هل ترغب في الانضمام إلى الجمعية، أو اقتراح شراكة، أو تنظيم تكوين؟ لنتواصل.', linkedin: 'تابع MLS على LinkedIn ↗', nameLabel: 'اسمك', emailLabel: 'بريدك الإلكتروني', subjectLabel: 'أرغب في…', subjectTraining: 'تنظيم دورة تكوينية', subjectVolunteer: 'الانضمام إلى MLS', subjectPartner: 'اقتراح شراكة', subjectOther: 'طرح سؤال', messageLabel: 'رسالتك', formNote: 'نستخدم بيانات التواصل فقط للرد على طلبك. يرجى عدم إرسال معلومات طبية شخصية.', send: 'إرسال الرسالة', sending: 'جارٍ الإرسال…', formError: 'تعذّر إرسال رسالتك. يرجى المحاولة مجدداً أو مراسلتنا على mrccnlfspprt@gmail.com.', localForm: 'النموذج جاهز للعمل بعد نشر الموقع على Netlify. حالياً، يرجى مراسلتنا على mrccnlfspprt@gmail.com.', footerTag: 'جمعية مغربية غير ربحية',
    pageTitle: 'Moroccan Life Support — معاً ننقذ الأرواح', pageDescription: 'Moroccan Life Support: جمعية مغربية غير ربحية تهتم بالإسعافات الأولية والمحاكاة في الصحة ومجتمعات أكثر استعداداً.', successTitle: 'شكراً على رسالتك.', successBody: 'تم إرسال رسالتك إلى Moroccan Life Support. سيتواصل معك فريقنا عبر البريد الإلكتروني الذي قدمته.', successBack: 'العودة إلى الموقع', successPageTitle: 'شكراً — Moroccan Life Support'
  }
};

Object.keys(window.MLS_COPY || {}).forEach(lang => Object.assign(translations[lang], window.MLS_COPY[lang]));

// French is present in the HTML so the content remains readable without JavaScript.
const french = {};
document.querySelectorAll('[data-i18n], [data-i18n-alt], [data-i18n-aria]').forEach(element => {
  if (element.dataset.i18n) french[element.dataset.i18n] = element.textContent;
  if (element.dataset.i18nAlt) french[element.dataset.i18nAlt] = element.alt;
  if (element.dataset.i18nAria) french[element.dataset.i18nAria] = element.getAttribute('aria-label');
});
Object.assign(french, {
  pageTitle: 'Moroccan Life Support — Ensemble, sauvons des vies',
  pageDescription: 'Moroccan Life Support : une association marocaine engagée pour les premiers secours, la simulation en santé et des communautés mieux préparées.',
  sending: 'Envoi en cours…', formError: 'Votre message n’a pas pu être envoyé. Réessayez ou écrivez à mrccnlfspprt@gmail.com.',
  localForm: 'Le formulaire est prêt pour votre site Netlify. Pour le moment, écrivez à mrccnlfspprt@gmail.com.',
  successPageTitle: 'Merci — Moroccan Life Support'
});
translations.fr = french;
let currentLanguage = 'fr';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
function closeMenu() {
  if (!menuButton) return;
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
function setLanguage(language, updateURL = true) {
  currentLanguage = ['fr', 'ar', 'en'].includes(language) ? language : 'fr';
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = dictionary[element.dataset.i18n] ?? french[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => { element.alt = dictionary[element.dataset.i18nAlt] ?? french[element.dataset.i18nAlt]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', dictionary[element.dataset.i18nAria] ?? french[element.dataset.i18nAria]); });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage)));
  document.title = dictionary[document.body.dataset.page === 'success' ? 'successPageTitle' : 'pageTitle'];
  document.querySelector('meta[name="description"]')?.setAttribute('content', dictionary.pageDescription);
  const field = document.querySelector('#form-language');
  if (field) field.value = currentLanguage;
  const back = document.querySelector('#back-home');
  if (back) back.href = `index.html?lang=${currentLanguage}`;
  const status = document.querySelector('#form-status');
  if (status && status.dataset.message) status.textContent = dictionary[status.dataset.message];
  try { localStorage.setItem('mls-language', currentLanguage); } catch { /* Storage can be disabled. */ }
  if (updateURL) {
    const url = new URL(location.href);
    url.searchParams.set('lang', currentLanguage);
    history.replaceState(null, '', url);
  }
  if (typeof renderTimeline === 'function') renderTimeline(currentLanguage);
  document.querySelectorAll('a[href]').forEach(link => {
    const raw = link.getAttribute('href');
    if (!raw || raw.startsWith('#') || /^(mailto:|tel:|https?:)/.test(raw)) return;
    const url = new URL(raw, location.href);
    if (url.pathname.endsWith('.html') || raw.startsWith('./')) {
      url.searchParams.set('lang', currentLanguage);
      link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
    }
  });
  const pageNames = {activities:'navActions',association:'navAbout',training:'navTraining',contact:'navContact',resources:'navResources'};
  const pageKey = pageNames[document.body.dataset.page];
  if (pageKey) document.title = dictionary[pageKey] + ' — Moroccan Life Support';
  navigation?.querySelectorAll('a').forEach(link => {
    if (link.dataset.i18n === pageKey) link.setAttribute('aria-current','page');
  });
  closeMenu();
}
let savedLanguage;
try { savedLanguage = localStorage.getItem('mls-language'); } catch { /* Keep default French. */ }
setLanguage(new URLSearchParams(location.search).get('lang') || savedLanguage || 'fr', false);
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
window.addEventListener('popstate', () => setLanguage(new URLSearchParams(location.search).get('lang') || 'fr', false));
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });

const video = document.querySelector('#cpr-video');
const playButton = document.querySelector('#video-play');
playButton?.addEventListener('click', async () => {
  try { await video.play(); playButton.hidden = true; } catch { playButton.hidden = true; video.focus(); }
});
video?.addEventListener('play', () => { playButton.hidden = true; });
video?.addEventListener('ended', () => { playButton.hidden = false; });

const form = document.querySelector('form[name="mls-contact"]');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (['localhost', '127.0.0.1', ''].includes(location.hostname) || location.protocol === 'file:') {
    status.dataset.message = 'localForm'; status.textContent = translations[currentLanguage].localForm; return;
  }
  const button = form.querySelector('[type="submit"]');
  button.disabled = true;
  status.dataset.message = 'sending'; status.textContent = translations[currentLanguage].sending;
  try {
    const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() });
    if (!response.ok) throw new Error('Submission failed');
    location.href = `merci.html?lang=${currentLanguage}`;
  } catch {
    status.dataset.message = 'formError'; status.textContent = translations[currentLanguage].formError;
    button.disabled = false;
  }
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
