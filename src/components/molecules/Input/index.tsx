import classNames from 'classnames'
import ErrorMessage from 'components/atoms/ErrorMessage'
import { useFormContext } from 'react-hook-form'
import { InputProps } from './interface'
import './style.scss'

const Input = ({ name, displayName, placeholder = '', validators = {} }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className="input-wrapper">
      <label
        htmlFor={name}
        className={classNames('input-wrapper__label', {
          'input-wrapper__label--required': validators.required
        })}>
        {displayName}
      </label>
      <input
        className={classNames('input-wrapper__input', {
          'input-wrapper__input--invalid': errors[name]
        })}
        id={name}
        data-testid={name}
        autoComplete="off"
        placeholder={placeholder}
        type="text"
        {...register(name, validators)}
      />
      {errors[name] && <ErrorMessage message={`${errors[name]?.message}`} fieldName={name} />}
    </div>
  )
}

export default Input
