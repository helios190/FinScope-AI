interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="text-white bg-neutral-800 w-full py-2 rounded-lg enabled:hover:bg-neutral-900 disabled:opacity-50"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
