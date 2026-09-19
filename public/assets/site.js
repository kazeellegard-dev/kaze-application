const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open); });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menuButton?.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form')?.addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const body = ['お名前: ' + (data.get('name') || '未入力'), 'メールアドレス: ' + data.get('email'), '対象アプリ: ' + (data.get('app') || '未選択'), '', 'お問い合わせ内容:', data.get('message')].join('\n'); window.location.href = 'mailto:kazeellegardapple@gmail.com?subject=' + encodeURIComponent('KAZE Application サポートお問い合わせ') + '&body=' + encodeURIComponent(body); });
