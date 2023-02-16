"use strict";(self.webpackChunk_az_digital_az_web_component_storybook=self.webpackChunk_az_digital_az_web_component_storybook||[]).push([[391],{"./stories/AzButton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{clickButtons:()=>clickButtons,default:()=>AzButton_stories,linkButtons:()=>linkButtons});__webpack_require__("../../node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),blocks=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/blocks.mjs"),lit_element=__webpack_require__("../../node_modules/lit-element/index.js");const eventDataLayerPush=(e,location="")=>{window.dataLayer=window.dataLayer||[];var targetElement=e.composedPath()[0],parentDropDown=e.composedPath()[3].innerText?e.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+e.type,shadow_event:{elementInnerHTML:targetElement.textContent||"",elementInnerText:targetElement.innerText||"",title:"shadow-dom-link",element:targetElement,elementClasses:targetElement.className||"",elementId:targetElement.id||"",elementLocation:location||"",elementTarget:targetElement.target||"",elementUrl:targetElement.href||targetElement.action||"",originalEvent:e,parent:parentDropDown||"",inShadowDom:!0}})},$$tabindex=Symbol("tabindex"),$$oldTabindex=Symbol("oldTabindex"),$$newTabindex=Symbol("newTabindex"),DelegateFocusMixin=superClass=>class extends superClass{static get properties(){return{tabIndex:{converter:{fromAttribute:Number,toAttribute:value=>null==value?null:value.toString()},noAccessor:!0,reflect:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.hasAttribute("tabindex")||(this.tabIndex=0)}get tabIndex(){return this[$$tabindex]}set tabIndex(value){const oldValue=this[$$tabindex];this[$$tabindex]=value,this.requestUpdate("tabIndex",oldValue)}firstUpdated(){this.addEventListener("focusin",(e=>{e.composedPath()[0]===this&&this._focus()})),this.addEventListener("keydown",(e=>{!e.defaultPrevented&&e.shiftKey&&9===e.keyCode&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),setTimeout((()=>{this._isShiftTabbing=!1}),0))}))}update(props){props.has("disabled")&&this._disabledChanged(this.disabled,props.get("disabled")),props.has("tabIndex")&&(this[$$newTabindex]=this.tabIndex,this._tabIndexChanged(this.tabIndex)),super.update(props)}updated(props){super.updated(props),props.has("disabled")&&(this.focusElement.disabled=this.disabled,this.disabled&&this.blur()),props.has("tabIndex")&&void 0!==this[$$newTabindex]&&(this.focusElement.tabIndex=this[$$newTabindex],this[$$newTabindex]=void 0)}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this._isShiftTabbing||this.focusElement.focus()}focus(){this.disabled||this.focusElement.focus()}blur(){this.focusElement.blur()}_disabledChanged(disabled,oldDisabled){disabled?(this[$$oldTabindex]=this.tabIndex,this.tabIndex=-1,this.setAttribute("aria-disabled","true")):oldDisabled&&(void 0!==this[$$oldTabindex]&&(this.tabIndex=this[$$oldTabindex]),this.removeAttribute("aria-disabled"))}_tabIndexChanged(tabindex){this.disabled&&tabindex&&(-1!==this.tabIndex&&(this[$$oldTabindex]=this.tabIndex),this.tabIndex=null)}},style=lit_element.iv`
     @import url("https://use.typekit.net/emv3zbo.css");
     @import url("https://cdn.digital.arizona.edu/lib/az-icons/main/az-icons-styles.css");

    .button {
        display: inline-block;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-style: solid;
        border-width: 1px;
        border-radius: 0;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        display: inline-block;
        margin-bottom: 0;
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        padding: 6px 12px;
        font-size: 16px;
        line-height: 1.5;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: .04em;
        white-space: normal;
        border-width: 2px;
        border-color: transparent;
    }
    .button:hover {
        text-decoration: none;
    }
    .button:focus {
        outline: 0;
        box-shadow: 0 0 0 0;
    }
    .button[disabled] {
        pointer-events: none;
        opacity: 0.65;
    }
    @media (prefers-reduced-motion: reduce) {
        .button {
            transition: none;
        }
    }
    :host {
        outline: none;
        margin-right: 4px;
        font-family: inherit;
    }
    :host([size="large"]) .button {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }
    :host([size="small"]) .button {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    }
    :host([block]){
        display: block;
    }
    :host([block]) .button {
        display: block;
        width: 100%;
        padding: 6px 0;
    }
    :host([redbar]),
    :host([redbar]) .button {
        width: 60px;
        height: 50px;
        display: inline-block;
    }
    :host([redbar]) ::slotted(svg) {
        margin: -5px 0 0 0;
        font-size: 24px;
        line-height: 24px;
    }
    :host([theme="primary"]) .button {
        color: #fff;
        background-color: #8b0015;
    }
    :host([theme="primary"]) .button:hover,
    :host([theme="primary"]) .button:focus {
        border-color: transparent;
        background-color: #ab0520;
    }
    :host([theme="primary"][outline]) .button {
        color: #8b0015;
        border-color: #8b0015;
        background-color: transparent;
    }
    :host([theme="primary"][outline]) .button:hover,
    :host([theme="primary"][outline]) .button:focus {
        color: #fff;
        background-color: #8b0015;
        border-color: #8b0015;
    }
    :host([theme="primary"][outline]) .button[disabled] {
        background-color: transparent;
    }
    :host([theme="az-red"]) .button,
    :host([theme="red"]) .button {
        color: #fff;
        background-color: #ab0520;
    }
    :host([theme="red"]) .button:hover,
    :host([theme="red"]) .button:focus,
    :host([theme="az-red"]) .button:hover,
    :host([theme="az-red"]) .button:focus {
        border-color: transparent;
        background-color: #8b0015;
    }
    :host([theme="az-red"][outline]) .button,
    :host([theme="red"][outline]) .button {
        color: #8b0015;
        border-color: #8b0015;
        background-color: transparent;
    }
    :host([theme="az-red"][outline]) .button:hover,
    :host([theme="az-red"][outline]) .button:focus,
    :host([theme="red"][outline]) .button:hover,
    :host([theme="red"][outline]) .button:focus {
        color: #fff;
        background-color: #8b0015;
        border-color: #8b0015;
    }
    // Bloom
    :host([theme="bloom"]) .button {
        color: #fff;
        background-color: #8b0015;
    }
    :host([theme="bloom"]) .button:hover,
    :host([theme="bloom"]) .button:focus {
        border-color: transparent;
        background-color: #ab0520;
    }
    // Bloom Outline
    :host([theme="bloom"][outline]) .button {
        color: white;
        border-color: rgb(239, 64, 86) !important;
        background-color: transparent;
    }
    :host([theme="bloom"][outline]) .button:hover,
    :host([theme="bloom"][outline]) .button:focus {
        color: white;
        background-color: rgb(139, 0, 21) !important;
        border-color: rgb(139, 0, 21) !important;
    }
    :host([theme="bloom"][outline]) .button[disabled] {
        background-color: transparent;
    }
    ::slotted(.icon-text) {
        display: block;
        margin: -5px;
        font-size: 10px;
        line-height: 10px;
    }
`;class AzButton extends(DelegateFocusMixin(lit_element.oi)){static get properties(){return{link:{type:String,reflect:!0},target:{type:String,reflect:!0},toggle:{type:String,reflect:!0},event:{type:String,reflect:!0},elmid:{type:String,reflect:!0},value:{type:String,reflect:!0}}}static get styles(){return[style]}attributeChangedCallback(name,oldVal,newVal){super.attributeChangedCallback(name,oldVal,newVal)}changeAttributes(){this.setAttribute("closed","true"),this.setAttribute("aria-expanded","true"),this.requestUpdate()}handleClick(e){if(eventDataLayerPush(e,""),this.event){const event=new Event(this.event);document.querySelector(this.target).dispatchEvent(event)}else{const openAzOffCanvasMenu=new Event("open-az-offcanvas-menu");document.querySelector(this.target).dispatchEvent(openAzOffCanvasMenu)}}render(){return lit_element.dy`
      ${this.link?lit_element.dy`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${eventDataLayerPush}" id="${this.elmid}">${this.value}<slot></slot></a>`:lit_element.dy`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this.handleClick}" id="${this.elmid}">${this.value}<slot></slot></button>`}
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("role","button")}get focusElement(){return this.shadowRoot.querySelector(".button")}}customElements.get("az-button")||customElements.define("az-button",AzButton);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const linkButtons=({value})=>lit_html.dy`<az-button link='https://www.arizona.edu'>${value}</az-button>`;linkButtons.storyName="link buttons",linkButtons.args={value:"this is a link"},linkButtons.parameters={storySource:{source:"({\n  value\n}) => html`<az-button link='https://www.arizona.edu'>${value}</az-button>`"}};const clickButtons=({value})=>lit_html.dy`<az-button>${value}</az-button>`;clickButtons.storyName="click buttons",clickButtons.args={value:"this is a button"},clickButtons.parameters={storySource:{source:"({\n  value\n}) => html`<az-button>${value}</az-button>`"},controls:{hideNoControlsWarning:!0}};const componentMeta={title:"AzButton",tags:["stories-mdx"],includeStories:["linkButtons","clickButtons"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.h_,{title:"AzButton"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"buttons",children:"Buttons"}),"\n",(0,jsx_runtime.jsx)(blocks.oG,{name:"link buttons",args:{value:"this is a link"},children:({value})=>lit_html.dy`<az-button link='https://www.arizona.edu'>${value}</az-button>`}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Or just use it without link value"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"click buttons",args:{value:"this is a button"},parameters:{controls:{hideNoControlsWarning:!0}},children:({value})=>lit_html.dy`<az-button>${value}</az-button>`})})]})}}};const AzButton_stories=componentMeta}}]);
//# sourceMappingURL=AzButton-stories-mdx.98bab247.iframe.bundle.js.map