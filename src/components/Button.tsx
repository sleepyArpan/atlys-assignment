import { types } from '../utils';

type ButtonProps = types.CommonComponentProps & {
  onClick: () => void;
};

export default function Button({
  children,
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue text-white h-10 px-4 py-2 ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}
