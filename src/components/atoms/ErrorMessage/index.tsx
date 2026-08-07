import { ErrorMessageProps } from './interface'
import './style.scss'

const ErrorMessage = ({ message, fieldName }: ErrorMessageProps) => {
  return (
    // role="alert" makes the message an assertive live region, so a screen
    // reader announces it the moment validation fails instead of leaving it to
    // be discovered by chance.
    <span
      role="alert"
      className="error-message"
      data-testid={fieldName && `${fieldName}ErrorMessage`}>
      {message}
    </span>
  )
}

export default ErrorMessage
