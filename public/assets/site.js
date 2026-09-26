const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open); });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menuButton?.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }));
const yearEl = document.querySelector('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
const presetApp = new URLSearchParams(location.search).get('app'); const appSelect = document.querySelector('#app'); if (presetApp && appSelect) { [...appSelect.options].forEach((option) => { if (option.text === presetApp) appSelect.value = option.text; }); }
const isEnglish = document.documentElement.lang === 'en';
const mailText = isEnglish
  ? { name: 'Name', email: 'Email', app: 'App', message: 'Message', none: 'Not provided', unselected: 'Not selected', subject: 'KAZE Application Support Inquiry' }
  : { name: 'お名前', email: 'メールアドレス', app: '対象アプリ', message: 'お問い合わせ内容', none: '未入力', unselected: '未選択', subject: 'KAZE Application サポートお問い合わせ' };
document.querySelector('#contact-form')?.addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const body = [mailText.name + ': ' + (data.get('name') || mailText.none), mailText.email + ': ' + data.get('email'), mailText.app + ': ' + (data.get('app') || mailText.unselected), '', mailText.message + ':', data.get('message')].join('\n'); window.location.href = 'mailto:kazeellegardapple@gmail.com?subject=' + encodeURIComponent(mailText.subject) + '&body=' + encodeURIComponent(body); });
