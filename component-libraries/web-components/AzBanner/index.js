import { html, LitElement } from 'lit-element';
import { denormalize } from 'linkset-menu';
import './az-button';
import { eventDataLayerPush } from './mixins/shadow-events-datalayer';
import azBannerStyles from './style';

export default class AzBanner extends LitElement {
  static get styles() {
    return [azBannerStyles];
  }

		 static get properties() {
			 return {
				 /**
					* URL of target site
					*/
				 thisUrl: { type: String },

				 /**
					* Base URL of menu endpoint
					*/
				 baseUrl: { type: String },

				 /**
					* Machine name of menu
					*/
				 menuId: { type: String },

				 /**
					* Branding heading for the menu
					*/
				 branding: { type: String },

				 /**
					* An array of objects containing data for the menu tree
					*/
				 tree: { type: Array },

				 /**
					* Loading state
					*/
				 isLoading: {
					 type: Boolean,
					 attribute: false,
				 },

				 /**
					* Loading message
					*/
				 loadingMessage: { type: String },
			 };
		 }

		 constructor() {
			 super();

			 this.tree = [];
			 this.isLoading = false;
			 this.loadingMessage = 'Loading...';
		 }

		 connectedCallback() {
			 super.connectedCallback();

			 if (this.baseUrl && this.menuId) {
				 this.fetchData(this.baseUrl, this.menuId);
			 }
		 }

		 static azMenuLevelTemplate(levels) {
			 return html`
				 ${levels}
			 `;
		 }

		 static openMenu(e) {
			 e.preventDefault();

			 const { target } = e;
			 const isExpanded = target.getAttribute('aria-expanded') === 'true';

			 if (isExpanded) {
				 target.setAttribute('aria-expanded', 'false');
				 target.nextElementSibling.classList.remove('show');
			 } else {
				 target.setAttribute('aria-expanded', 'true');
				 target.nextElementSibling.classList.add('show');
			 }
		 }

		 azMenuParentTemplate(title, children) {
			 return html`
				 <button
					 @click="${AzRedbar.openMenu}"
					 role="button"
					 aria-expanded="false"
					 aria-haspopup="true"
					 href="#"
					 class="resource-menu btn btn-outline-red"
				 >
					 ${title}
				 </button>
				 <div class="dropdown-menu dropdown-menu pull-right">
					 ${this.renderAzMenuLevel(children)}
					 </div>
			 `;
		 }

		 static azMenuLinkTemplate(title, href) {
			 return html`<div class="dropdown-item"><a href=${href} @click="${(e) => { eventDataLayerPush(e, 'az-redbar'); }}">${title}</a></div>`;
		 }

		 static azMenuItemTemplate(title) {
			 return html`${title}`;
		 }

		 renderAzMenuLevel(level) {
			 const levels = level.map((item) => this.renderAzMenuItem(item));

			 return AzRedbar.azMenuLevelTemplate(levels);
		 }

		 renderAzMenuItem(item) {
			 const titleTest = item && item.link && item.link.attributes && item.link.attributes.title;
			 const hrefTest = item && item.link && item.link.href;
			 const childrenTest = item && item.children;
			 const title = (titleTest ? item.link.attributes.title : undefined);
			 let href = (hrefTest ? item.link.href : undefined);
			 const children = (childrenTest ? item.children : undefined);

			 if (children.length) {
				 return this.azMenuParentTemplate(title, children);
			 }
			 if (href) {
				 href = href.charAt(0) === '/' ? this.thisUrl + href : href;
				 return AzRedbar.azMenuLinkTemplate(title, href);
			 }
			 return AzRedbar.azMenuItemTemplate(title);
		 }

		 fetchData(baseURL, menuID) {
			 this.isLoading = true;
			 const url = `${baseURL}/system/menu/${menuID}/linkset`;

			 fetch(url, {})
				 .then((response) => {
					 if (response.ok) {
						 return response.json();
					 }
					 this.isLoading = false;
					 throw new Error(
						 `Unable to fetch ${url}. ${response.status} ${response.statusText}`,
					 );
				 })
				 .then((json) => {
					 try {
						 const denormalized = denormalize(json, menuID);
						 this.tree = denormalized.tree;
					 } catch (e) {
						 throw new Error('Unable to denormalize menu.');
					 }
					 this.isLoading = false;
				 });
		 }

			 render() {
		 return html`
			 <header class="bg-red arizona-header" id="header_arizona" role="banner">
					 <div class="container">
							 <div class="row">
									 <section class="ml-auto d-none d-lg-block d-xl-block region region-header-ua-utilities">
											 <div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-az-barrio-search" role="search">
													 <div class="content">
															 <form action="${this.thisUrl}/search/google" method="GET" id="search-block-form" accept-charset="UTF-8" class="search-form search-block-form">
																	 <div class="input-group">
																			 <label for="edit-keys" class="sr-only">Search</label>
																			 <input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search form-control" placeholder="Search this site" aria-label="Search this site">
																			 <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper input-group-append" id="edit-actions">
																					 <button data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit btn">
																							 <svg id="search-icon" title="search" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#8B0015"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
																					 </button>
																			 </div>
																	 </div>
															 </form>
													 </div>
											 </div>
											 <div class="resources">
													 <span class="caret"></span>
													 ${this.isLoading
															 ? html`
															 <button role="button" aria-expanded="false" aria-haspopup="true" href="#" class="resource-menu btn btn-outline-red"><slot name="loading">${this.loadingMessage}</slot></button>
															 `
															 : this.renderAzMenuLevel(this.tree)}
											 </div>
									 </section>
									 <section class="redbar-buttons d-lg-none">
											 <az-button theme="red" redbar role="button" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo">
													 <svg class="icon"  id="button-search-icon" title="search" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
													 <span class="icon-text"> search </span>
											 </az-button>
											 <az-button theme="red" redbar role="button" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo">
													 <svg class="icon" title="menu" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
													 <span class="icon-text"> menu </span>
											 </az-button>
									 </section>
							 </div>
					 </div>
			 </header>
		 `;
	 }
}
customElements.get('az-banner') || customElements.define('az-banner', AzBanner);
