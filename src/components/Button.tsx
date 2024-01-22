import './Button.css'

type ButtonProps = {
  isDisabled?: boolean,
  variant?: string,
  onClick: () => void,
  children: JSX.Element | string, 
}

// colorScheme : primary, secondary, info...
// variant: ghost, outline, solid

const Button = ({ 
  children,
  variant='solid',
  onClick,
  isDisabled=false, 
}: ButtonProps) => {
  return (
    <button 
      className={`myBtn btn-${variant}`} 
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button