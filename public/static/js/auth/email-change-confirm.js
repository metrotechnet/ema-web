import { initAuthLocale } from './common.js';

const form = document.querySelector('#emailChangeConfirmForm');
const submitButton = form?.querySelector('button[type="submit"]');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const message = document.querySelector('#message');
const passwordToggleButtons = document.querySelectorAll('.reset-password-toggle');

function getCurrentLanguage() {
  const fromUrl = String(new URLSearchParams(String(window.location.search || '').replace(/&amp;/g, '&')).get('lang') || '').trim().toLowerCase();
  const fromDocument = String(document.documentElement?.lang || '').trim().toLowerCase();
  const fromStorage = String(localStorage.getItem('preferredLanguage') || '').trim().toLowerCase();
  const source = fromUrl || fromDocument || fromStorage || 'en';
  return source.split('-', 1)[0] || 'en';
}

function getConfirmLocale() {
  const locale = JSON.parse(localStorage.getItem('ema_ui_locale_' + getCurrentLanguage()) || '{}');
  return locale?.authPage?.emailChangeConfirm || {};
}

function getConfirmError(key, fallback) {
  const confirmLocale = getConfirmLocale();
  return String(confirmLocale?.errors?.[key] || fallback || '').trim();
}

function show(text, ok = false) {
  if (!message) return;
  message.textContent = text;
  message.className = `auth-message reset-message ${ok ? 'ok' : 'error'}`;
}

function setPending(isPending) {
  if (!submitButton) return;
  submitButton.disabled = isPending;
  submitButton.classList.toggle('is-loading', isPending);
  submitButton.setAttribute('aria-busy', String(isPending));
  document.body.style.cursor = isPending ? 'wait' : '';
}

function getConfirmToken() {
  const params = new URLSearchParams(String(window.location.search || '').replace(/&amp;/g, '&'));
  return String(params.get('token') || params.get('code') || params.get('oobCode') || '').trim();
}

function prefillEmail() {
  if (!emailInput) return;
  const params = new URLSearchParams(String(window.location.search || '').replace(/&amp;/g, '&'));
  const value = String(
    params.get('email') ||
    params.get('new_email') ||
    params.get('newEmail') ||
    ''
  ).trim();
  emailInput.value = value;
  emailInput.readOnly = true;
  emailInput.setAttribute('readonly', 'readonly');
  emailInput.setAttribute('aria-readonly', 'true');
}

function setPasswordVisibility(input, button, visible) {
  if (!input || !button) return;
  input.type = visible ? 'text' : 'password';
  button.setAttribute('aria-pressed', String(visible));
  button.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
  button.setAttribute('tabindex', '-1');
}

passwordToggleButtons.forEach((button) => {
  button.setAttribute('tabindex', '-1');
  button.setAttribute('aria-hidden', 'true');
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const input = document.getElementById(targetId || '');
    if (!input) return;
    const visible = input.type === 'password';
    setPasswordVisibility(input, button, visible);
  });
});

async function initPage() {
  await initAuthLocale();
  document.documentElement.lang = getCurrentLanguage();
  prefillEmail();

  if (!getConfirmToken()) {
    show(getConfirmError('missingCode', 'This confirmation link is missing the required token.'), false);
  }
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const token = getConfirmToken();
  const password = String(passwordInput?.value || '').trim();
  const confirmPassword = String(confirmPasswordInput?.value || '').trim();

  if (!token) {
    show(getConfirmError('missingCode', 'This confirmation link is missing the required token.'), false);
    return;
  }

  if (!password || !confirmPassword) {
    show(getConfirmError('generic', 'Please complete both password fields.'), false);
    return;
  }

  if (password !== confirmPassword) {
    show(getConfirmError('passwordMismatch', 'The passwords do not match.'), false);
    return;
  }

  if (password.length < 6) {
    show(getConfirmError('weakPassword', 'Please choose a stronger password.'), false);
    return;
  }

  setPending(true);

  try {
    const response = await fetch('/api/user-profile/email-change/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
        new_password: password,
        language: getCurrentLanguage(),
      }),
    });

    const payload = await response.json().catch(() => ({}));
    const status = String(payload?.status || '').trim().toLowerCase();
    const detail = String(payload?.message || payload?.detail || '').trim();

    if (status !== 'updated') {
      if (detail.toLowerCase().includes('expired') || status === 'expired') {
        show(getConfirmError('invalid', 'This confirmation link is invalid or has expired.'), false);
        return;
      }
      if (detail.toLowerCase().includes('same_as_previous_password')) {
        show(getConfirmError('sameAsPreviousPassword', 'You cannot reuse your previous password.'), false);
        return;
      }
      show(detail || getConfirmError('generic', 'Unable to confirm your email change.'), false);
      return;
    }

    show(getConfirmError('success', 'Your email address has been updated successfully.'), true);
    form.reset();
    window.setTimeout(() => {
      const nextLanguage = getCurrentLanguage();
      const loginUrl = new URL('/login', window.location.origin);
      loginUrl.searchParams.set('clearCache', '1');
      loginUrl.searchParams.set('lang', nextLanguage || 'en');
      window.location.href = loginUrl.pathname + loginUrl.search;
    }, 1400);
  } catch (_error) {
    show(getConfirmError('generic', 'Unable to confirm your email change.'), false);
  } finally {
    setPending(false);
  }
});

initPage();
