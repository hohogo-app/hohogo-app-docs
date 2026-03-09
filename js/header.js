class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '';
        const isZh = this.getAttribute('lang') === 'zh-hk';
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
        const ext = isLocal ? '.html' : '';
        let currentPath = window.location.pathname.split('/').pop();
        currentPath = currentPath.replace('.html', '');
        if (currentPath === 'zh-hk' || currentPath === 'en-ca' || currentPath === '') currentPath = 'index';

        const pathSuffix = (currentPath === 'index' && !isLocal) ? '' : `${currentPath}${ext}`;
        const langUrl = isZh ? `../en-ca/${pathSuffix}` : `../zh-hk/${pathSuffix}`;

        this.innerHTML = `
        <div class="nav-wrapper">
            <nav>
                <a href="${isLocal ? 'index.html' : './'}" class="logo" style="display: flex; align-items: center; gap: 10px;">
                    <img src="${basePath}img/app_icon.png" alt="HoHoGo Icon" style="width: 36px; height: 36px; border-radius: 8px;">
                    HoHoGo
                </a>
                <div style="display: flex; gap: 15px; align-items: center;">
                    <a href="${langUrl}" style="color: var(--ink); text-decoration: none; font-weight: 600; font-size: 14px; padding: 8px;">${isZh ? 'English' : '繁體中文（香港）'}</a>
                    <a href="https://apps.apple.com/us/app/hohogo-travel-map-journal/id6759505355" class="nav-btn" target="_blank" rel="noopener noreferrer">${isZh ? '下載 App' : 'Get the App'}</a>
                </div>
            </nav>
        </div>
        `;
    }
}

customElements.define('app-header', Header);
