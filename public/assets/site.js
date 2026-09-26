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

// 言語の切り替え：選んだ言語を覚え、初めての訪問ではブラウザの言語に合わせて案内を表示する
(() => {
  const pageLang = document.documentElement.lang === 'en' ? 'en' : 'ja';
  const switchLink = document.querySelector('.lang-switch');
  if (!switchLink) return;
  const KEY = 'kaze-lang';
  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const save = (lang) => { try { localStorage.setItem(KEY, lang); } catch (e) { /* 保存できない環境では何もしない */ } };
  const appNames = { ja: { 'Electrical Design Tools': '電気設計便利ツール' }, en: { '電気設計便利ツール': 'Electrical Design Tools' } };
  const targetLang = pageLang === 'ja' ? 'en' : 'ja';
  const target = () => {
    const url = new URL(switchLink.getAttribute('href'), location.href);
    const params = new URLSearchParams(location.search);
    const app = params.get('app');
    if (app) params.set('app', appNames[targetLang][app] || app);
    const query = params.toString();
    return url.pathname + (query ? '?' + query : '') + location.hash;
  };
  document.querySelectorAll('a[hreflang="ja"], a[hreflang="en"]').forEach((link) => link.addEventListener('click', () => save(link.getAttribute('hreflang'))));
  const stored = read();
  if (stored === targetLang) { location.replace(target()); return; }
  if (stored) return;
  const browserLang = ((navigator.languages && navigator.languages[0]) || navigator.language || '').slice(0, 2).toLowerCase();
  const suggest = pageLang === 'ja' ? browserLang !== 'ja' : browserLang === 'ja';
  if (!suggest) return;
  const text = pageLang === 'ja'
    ? { message: 'This page is also available in English.', go: 'View in English', close: 'Close', lang: 'en' }
    : { message: 'このページは日本語でもご覧いただけます。', go: '日本語で見る', close: '閉じる', lang: 'ja' };
  const banner = document.createElement('div');
  banner.className = 'lang-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Language');
  banner.lang = text.lang;
  const message = document.createElement('span'); message.textContent = text.message;
  const go = document.createElement('a'); go.href = target(); go.hreflang = targetLang; go.textContent = text.go; go.addEventListener('click', () => save(targetLang));
  const close = document.createElement('button'); close.type = 'button'; close.textContent = text.close; close.setAttribute('aria-label', text.close);
  close.addEventListener('click', () => { save(pageLang); banner.remove(); });
  banner.append(message, go, close);
  document.body.prepend(banner);
})();
