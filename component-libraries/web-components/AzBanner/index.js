import { html, LitElement } from "lit-element";
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
       * Has logo-lockup
       */
      noLockup: {
        type: Boolean,
        attribute: true,
      },

      /**
       * Fluid container or fixed-width container.
       */
      fluid: {
        type: Boolean,
        attribute: true,
			}
		};
  }

  constructor() {
    super();

    this.noLockup = false;
    this.fluid = false;
  }

  render() {
    return html`
        ${this.fluid
        ? html`<div class="container container-fluid">`
        : html`<div class="container">`}
          <div class="row">
            <a href='https://www.arizona.edu' className="arizona-logo">
              <img
                class="arizona-line-logo"
                alt="The University of Arizona"
                src="https://cdn.uadigital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg"
              />
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
