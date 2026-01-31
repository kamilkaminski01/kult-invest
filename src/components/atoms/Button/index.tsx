import './style.scss'
import { ButtonProps } from './interface'

const Button = ({
  children,
  onClick,
  form,
  type = 'submit',
  className = '',
  disable = false
}: ButtonProps) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      form={form}
      onClick={onClick}
      disabled={disable}>
      {children || 'Button'}
    </button>
  )
}

export default Button
