import { LitElement, html } from 'lit-element';
import { eventDataLayerPush } from '../mixins/shadow-events-datalayer';
import { DelegateFocusMixin } from '../mixins/delegate-focus-mixin';
import azButtonStyles from './style';

export default class AzButton extends DelegateFocusMixin(LitElement) {
  static get properties() {
    return {
      /**
      * Set to URL to render <a> element styled as button.
      */
      link: {
        type: String,
        reflect: true,
      },
      target: {
        type: String,
        reflect: true,
      },
      toggle: {
        type: String,
        reflect: true,
      },
      event: {
        type: String,
        reflect: true,
      },
      elmid: {
        type: String,
        reflect: true,
      },
      value: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [azButtonStyles];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  changeAttributes() {
    this.setAttribute('closed', 'true');
    this.setAttribute('aria-expanded', 'true');
    this.requestUpdate();
  }

  handleClick(e) {
    eventDataLayerPush(e, '');
    if (this.event) {
      const event = new Event(this.event);
      document.querySelector(this.target).dispatchEvent(event);
    } else {
      const openAzOffCanvasMenu = new Event('open-az-offcanvas-menu');
      document.querySelector(this.target).dispatchEvent(openAzOffCanvasMenu);
    }
  }

  render() {
    return html`
      ${this.link
    ? html`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${eventDataLayerPush}" id="${this.elmid}">${this.value}<slot></slot></a>`
    : html`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this.handleClick}" id="${this.elmid}">${this.value}<slot></slot></button>`}
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'button');
  }

  /**
   * @protected
   */
  get focusElement() {
    return this.shadowRoot.querySelector('.button');
  }
}

customElements.get('az-button') || customElements.define('az-button', AzButton);
