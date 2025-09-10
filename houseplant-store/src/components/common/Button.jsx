import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  size = 'medium',
  type = 'button',
  className = ''
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`.trim();
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
