import { LitElement, html, css} from 'lit';

// import * as ArizonaBootstrap from 'arizona-bootstrap/dist/css/arizona-bootstrap.min.css';
// import fs from 'fs';

// const ArizonaBootstrap = fs.readFileSync('../../node_modules/arizona-bootstrap/dist/css/arizona-bootstrap.min.css', 'utf8');

export class AzBanner extends LitElement {
  static get styles() {
    return css`
    * {
      background-color: black;
    }
   `;
  }
  static get properties() {
    return {
      /**
       * Color theme
       */
      theme: { type: String },

      /**
       * logoVersion
       * The version of the logo to use.
       * - a-line-logo
       * - line-logo
       */
      logoVersion: { type: String },

      /**
       * Fluid container or fixed-width container.
       */
      fluid: {
        type: Boolean,
        attribute: true,
      },
    };
  }

  containerType() {
    if (this.fluid) {
      return 'container container-fluid';
    }
    // Default
    return 'container';
  }

  setLogo() {
    if (this.logoVersion === 'none') {
      return html``;
    } if (this.logoVersion === 'a-line-logo') {
      return html`
        <img
          class="arizona-a-line-logo"
          alt="The University of Arizona"
          src="https://brand.arizona.edu/sites/default/files/ua-banner/ua-web-branding/images/ua_a_line_logo_white.svg"
        />`;
    }
    // Default
    return html`
      <img
          class="arizona-line-logo"
          alt="The University of Arizona"
          src="https://cdn.uadigital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg"
      />`;
  }

  setTheme() {
    if (this.theme === 'az-red') {
      return css`bg-red`;
    }
    // Default
    return css`bg-red`;
  }

  constructor() {
    super();
    this.logoVersion = false;
    this.fluid = false;
  }

  render() {
// inject <style> tag
// let style = document.createElement('style');
// style.textContent = ArizonaBootstrap;
// this.shadowRoot.appendChild(style);

    return html`
      <header class="${this.setTheme()} arizona-header" id="header_arizona" role="banner">
        <div class="${this.containerType()}">
          <div class="row">
            <a href='https://www.arizona.edu' class="arizona-logo">
            ${this.setLogo()}
            </a>
            <section class="ml-auto d-none d-lg-block d-xl-block region region-header-ua-utilities">
              <slot name="banner-utilities"></slot>
            </section>
            <section class="redbar-buttons d-lg-none">
              <slot name="banner-buttons"></slot>
            </section>
          </div>
        </div>
      </header>
    `;
  }
}
customElements.get('az-banner') || customElements.define('az-banner', AzBanner);

export default AzBanner;
