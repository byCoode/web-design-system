import { LitElement } from "lit-element";
declare type IconPositionType = 'left' | 'top' | 'bottom' | 'right';
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
export declare class ButtonComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    context: ButtonProps;
    private _iconPosition;
    private clickEmitter;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'byc-button': ButtonComponent;
    }
}
export {};
