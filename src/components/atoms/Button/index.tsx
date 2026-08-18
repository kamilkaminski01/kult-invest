import './style.scss'
import { ButtonProps } from './interface'

const Button = ({ children, type = 'submit', className = '', disable = false }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} type={type} disabled={disable}>
      {children}
    </button>
  )
}

export default Button
