// ===================================
// LANDING PAGE I18N & START FLOW
// ===================================

const START_URL = "https://imx-ema-main.web.app/";

// Landing page text is loaded from the locale JSON files in static/locales.

/**
 * Resolve the landing page language from the URL.
 * @returns {string}
 */
function resolveLang() {
    const supported = ["fr", "en", "es"];
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (supported.includes(fromUrl)) return fromUrl;
    return "fr";
}

function resolveNestedValue(source, path) {
    if (!source || typeof source !== "object" || !path) return undefined;

    if (path in source) return source[path];

    const directValue = String(path)
        .split(".")
        .reduce((current, segment) => (current && typeof current === "object" && segment in current ? current[segment] : undefined), source);
    if (directValue !== undefined) {
        return directValue;
    }

    if (source.landing && typeof source.landing === "object") {
        const landingValue = String(path)
            .split(".")
            .reduce((current, segment) => (current && typeof current === "object" && segment in current ? current[segment] : undefined), source.landing);
        if (landingValue !== undefined) return landingValue;
    }

    return undefined;
}

async function loadLocaleForLanguage(lang) {
    try {
        const response = await fetch(`/static/locales/ui.${lang}.json`, { cache: "no-store" });
        if (!response.ok) {
            return {};
        }
        return await response.json();
    } catch (_error) {
        return {};
    }
}

/**
 * Apply landing-page translations and language-aware links.
 * @param {string} lang
 * @param {Record<string, any>} dict
 */
function applyI18n(lang, dict = {}) {
    const locale = dict && Object.keys(dict).length ? dict : {};
    const fallback = locale && locale.landing ? locale.landing : locale || {};

    document.documentElement.lang = lang;
    const resolvedTitle = resolveNestedValue(locale, "app.title") ?? resolveNestedValue(locale, "title") ?? resolveNestedValue(fallback, "title") ?? document.title;
    document.title = resolvedTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = resolveNestedValue(locale, key) ?? resolveNestedValue(fallback, key);
        if (value !== undefined) {
            el.innerHTML = value;
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        const key = el.getAttribute("data-i18n-alt");
        const value = resolveNestedValue(locale, key) ?? resolveNestedValue(fallback, key);
        if (value !== undefined) {
            el.setAttribute("alt", value);
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria-label");
        const value = resolveNestedValue(locale, key) ?? resolveNestedValue(fallback, key);
        if (value !== undefined) {
            el.setAttribute("aria-label", value);
        }
    });

    const startLink = document.getElementById("start-link");
    if (startLink) {
        startLink.setAttribute("href", `/index.html?lang=${lang}`);
    }

    const topbarLanguageSelector = document.getElementById("topbar-language-selector");
    if (topbarLanguageSelector) {
        topbarLanguageSelector.value = lang;
    }

    const heroStartLink = document.getElementById("hero-start-link");
    if (heroStartLink) {
        heroStartLink.setAttribute("href", START_URL);
    }

    const usageStartLink = document.getElementById("usage-start-link");
    if (usageStartLink) {
        usageStartLink.setAttribute("href", START_URL);
    }

    const brandLink = document.getElementById("brand-link");
    if (brandLink) {
        brandLink.setAttribute("href", `/?lang=${lang}`);
    }
}

/**
 * Show the landing start confirmation dialog.
 * @param {string} lang
 * @returns {Promise<boolean>}
 */
async function confirmLandingStart(lang) {
    const locale = await loadLocaleForLanguage(lang);
    const dict = locale.landing || locale;
    const title = resolveNestedValue(dict, "startModal.title") || "Bienvenue chez EMA";
    const roleAgentIconHtml = '<span style="display:inline-flex;align-items:center;justify-content:center;width:1.6rem;height:1.6rem;border-radius:0.5rem;background:#f59e0b;color:#ffffff;vertical-align:middle;margin-left:0.25rem;"><i class="bi bi-person-gear" aria-hidden="true" style="font-size:0.9rem;line-height:1;"></i></span>';
    const rawMessage = String(resolveNestedValue(dict, "startModal.message") || "Bienvenue")
        .replace(/\{\{ROLE_AGENT_ICON\}\}/g, roleAgentIconHtml);
    const confirmLabel = resolveNestedValue(dict, "startModal.confirm") || "Continuer";
    const cancelLabel = resolveNestedValue(dict, "startModal.cancel") || "Annuler";

    // Etape 2: Mettre en forme visuellement la note ERA.
    let formattedMessage = rawMessage;
    const listSplit = rawMessage.split("</ol>");
    if (listSplit.length >= 2) {
        const introAndSteps = `${listSplit[0]}</ol>`;
        const eraNote = listSplit.slice(1).join("</ol>").trim();
        if (eraNote) {
            formattedMessage = [
                introAndSteps,
                `<div style="margin-top:0.7rem;padding:0.75rem 0.85rem;border-radius:10px;background:#fff7d6;border:1px solid #f2d675;color:#5b4a00;font-weight:600;">`,
                `${eraNote}`,
                `</div>`,
            ].join("");
        }
    }

    // Etape 3: Afficher la popup de confirmation.
    const popupHtml = `
        <div style="text-align:left;line-height:1.55;font-size:0.98rem;color:#1f2937;">
            ${formattedMessage}
        </div>
    `;

    if (window.Swal && typeof window.Swal.fire === "function") {
        const result = await window.Swal.fire({
            title,
            html: popupHtml,
            icon: "info",
            confirmButtonText: confirmLabel,
            confirmButtonColor: "#f2b705",
            showCancelButton: true,
            cancelButtonText: cancelLabel,
            width: 760,
        });
        return Boolean(result && result.isConfirmed);
    }

    return window.confirm(`${title}\n\n${message}`);
}

/**
 * Bind the landing-page start action once per element.
 * @param {HTMLElement | null} linkElement
 */
function bindLandingStartAction(linkElement) {
    if (!linkElement || linkElement.dataset.startBound === "1") return;

    // No forced navigation: destination is intentionally left for later configuration.
    if (START_URL === "#") return;

    linkElement.dataset.startBound = "1";

    linkElement.addEventListener("click", async (event) => {
        event.preventDefault();
        const lang = resolveLang();
        const confirmed = await confirmLandingStart(lang);
        if (!confirmed) return;
        window.open(START_URL, "_blank", "noopener,noreferrer");
    });
}

/**
 * Bind the compact mobile menu toggle on the landing page.
 */
function bindMobileMenuToggle() {
    const navbar = document.querySelector(".slim-navbar");
    const burger = document.getElementById("slim-burger");
    const menu = document.getElementById("slim-menu");
    if (!navbar || !burger || !menu || burger.dataset.menuBound === "1") return;

    burger.dataset.menuBound = "1";
    const closeMenu = () => {
        navbar.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
        const willOpen = !navbar.classList.contains("menu-open");
        navbar.classList.toggle("menu-open", willOpen);
        burger.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });
}

/**
 * Force the landing page to use the canonical root path.
 */
function normalizeLandingPath() {
    const allowed = ["/", "/index.html"];
    if (allowed.includes(window.location.pathname)) return;

    const url = new URL(window.location.href);
    url.pathname = "/";
    window.history.replaceState({}, "", url);
}

const topbarLanguageSelector = document.getElementById("topbar-language-selector");
if (topbarLanguageSelector) {
    topbarLanguageSelector.addEventListener("change", async (event) => {
        const supported = ["fr", "en", "es"];
        const requestedLang = String(event.target.value || "fr");
        const nextLang = supported.includes(requestedLang) ? requestedLang : "fr";
        const url = new URL(window.location.href);
        url.searchParams.set("lang", nextLang);
        window.history.replaceState({}, "", url);
        const dict = await loadLocaleForLanguage(nextLang);
        applyI18n(nextLang, dict);
    });
}

normalizeLandingPath();
(async () => {
    const lang = resolveLang();
    const dict = await loadLocaleForLanguage(lang);
    applyI18n(lang, dict);
})();
bindMobileMenuToggle();

bindLandingStartAction(document.getElementById("hero-start-link"));
bindLandingStartAction(document.getElementById("usage-start-link"));
