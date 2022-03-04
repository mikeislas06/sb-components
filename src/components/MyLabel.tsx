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
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
