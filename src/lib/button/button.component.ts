import { css, html, LitElement, customElement, property } from "lit-element";

type IconPositionType = 'left' | 'top' | 'bottom' | 'right';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Optional click handler
     */
    status?: string;
    /**
     * Optional click handler
     */
    iconPosition: IconPositionType;
  }

@customElement('byc-button')
export class ButtonComponent extends LitElement {

    static override styles = css`
        :host {
            display: inline-block;
        }
        .byc-button {
            position: relative;
            font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: 700;
            border-radius: .5em;
            cursor: pointer;
            padding: 10px 15px;
            background-color: transparent;
            border: 1px solid #1B9CFC;
            color: #1B9CFC;
            transition: background-color .4s, border-radius .1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .byc-icon {
            position: absolute;
            display: inline-block;
        }
        .byc-icon--left {
            left: 0;
        }
        .byc-icon--top {
            top: 0;
        }
        .byc-icon--bottom {
            bottom: 0;
        }
        div {
            position: relative;
            cursor: pointer;
            width: fit-content;
        }
        div:not(:active):hover .byc-button{
            background-color: #1B9CFC;
            color: #FAFAFA;
            border-radius: 3em;
            transition: border-radius 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        div:active .byc-button {
            color: #1B9CFC;
            background-color: #212121;
        }
    `;

    @property({ type: Object }) context!: ButtonProps;

    private _iconPosition(): `byc-icon--${IconPositionType}` {
        return `byc-icon--${this.context.iconPosition}`;
    }

    private clickEmitter() {
        this.dispatchEvent(new Event('clickEmitter'));
    }

    protected override render() {
        return html`
            <div>

                <button class="byc-button" @click=${this.clickEmitter}>${this.context.label}</button>
        
                <slot name="icon" class="byc-icon ${this._iconPosition()}"></slot>
                
            </div>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
      'byc-button': ButtonComponent;
    }
  }