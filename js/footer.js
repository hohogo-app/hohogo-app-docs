class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '';
        const isZh = this.getAttribute('lang') === 'zh-hk';
        this.innerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-top">
                    <div class="footer-brand">
                        <h2 class="logo" style="color: white; border: none;">HoHoGo</h2>
                        <p>&copy; 2026 HoHo Inc. ${isZh ? '版權所有。' : 'All rights reserved.'}</p>
                        <p style="margin-top: 10px;">${isZh ? '聯絡我們：' : 'Contact:'} hohogo.app@gmail.com</p>
                    </div>
                    <div class="footer-links">
                        <a href="${basePath}faq">${isZh ? '支援與常見問題' : 'Support & FAQ'}</a>
                        <a href="${basePath}privacy">${isZh ? '私隱政策' : 'Privacy Policy'}</a>
                        <a href="${basePath}terms">${isZh ? '條款及細則' : 'Terms & Conditions'}</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    ${isZh ? 'Apple 和 Apple 標誌是 Apple Inc. 的商標' : 'Apple and the Apple Logo are trademarks of Apple Inc.'}
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-footer', Footer);
