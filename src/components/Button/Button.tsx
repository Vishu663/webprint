import { ReactElement, ReactEventHandler } from 'react';
import './Button.css';

export interface ButtonsProps {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  value?: string;
  handleClick?: ReactEventHandler;
  disable?: boolean;
  bTitle: string;
  bType?: 'primary' | 'secondary';
}

export default function Button({
  type = 'button',
  name = 'inputbox',
  value = '',
  handleClick = () => {},
  disable = false,
  bTitle = '',
  bType = 'secondary',
}: ButtonsProps): ReactElement {
  return (
    <div className={bType === 'primary' ? 'btn-primary' : 'btn-secondary'}>
      <button type={type} name={name} value={value} onClick={handleClick} disabled={disable}>
        {bTitle}
      </button>
    </div>
  );
}
