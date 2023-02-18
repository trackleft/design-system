import { LitElement, html, css } from 'lit';
import azBannerStyles from "./style";

export default class AzBanner extends LitElement {
  static get styles() {
    return [azBannerStyles];
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
      }
    };
  }

  containerType() {
    if (this.fluid) {
      return css`container container-fluid`;
    } else {
      return css`container`;
    }
  }

  setLogo() {
    if (this.logoVersion === 'none') {
      return html``;
    } else if (this.logoVersion === 'a-line-logo') {
      return html`
        <img
          class="arizona-a-line-logo"
          alt="The University of Arizona"
          src="https://brand.arizona.edu/sites/default/files/ua-banner/ua-web-branding/images/ua_a_line_logo_white.svg"
        />`;
    } else {
      return html`
      <img
          class="arizona-line-logo"
          alt="The University of Arizona"
          src="https://cdn.uadigital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg"
      />`;
    }
  }

  setTheme() {
    if (this.theme === 'az-red') {
      return css`bg-red`;
    }

  }
  constructor() {
    super();
    this.logoVersion = false;
    this.fluid = false;
  }

  render() {
    return html`
      <header class="${this.setTheme()} arizona-header" id="header_arizona" role="banner">
        <div class="${this.containerType()}">
          <div class="row">
            <a href='https://www.arizona.edu' className="arizona-logo">
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
customElements.get("az-banner") || customElements.define("az-banner", AzBanner);
