/// <reference types="react" />
import './myLabel.css';
export interface Props {
    /**
     * The text that will be shown
     */
    label: string;
    /**
     * The font size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Want the text Uppercase?
     */
    allCaps?: boolean;
    /**
     * Color of the text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color
     */
    fontColor?: string;
    /**
     * Background color of the label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: Props) => JSX.Element;
export default MyLabel;
