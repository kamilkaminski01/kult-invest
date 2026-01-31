import { ErrorMessageProps } from './interface'
import './style.scss'

const ErrorMessage = ({ message, fieldName }: ErrorMessageProps) => {
  return (
    <span className="error-message" data-testid={fieldName && `${fieldName}ErrorMessage`}>
      {message}
    </span>
  )
}

export default ErrorMessage
