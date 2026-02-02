'use client'

import { useFormContext } from 'react-hook-form'
import './style.scss'
import { TextAreaProps } from './interface'

const TextArea = ({ name, displayName, placeholder, validators, rows = 10 }: TextAreaProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const isInvalid = !!errors[name]

  return (
    <div className="input-wrapper">
      <label
        htmlFor={name}
        className={`input-wrapper__label ${validators && 'input-wrapper__label--required'}`}>
        {displayName}
      </label>
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        className={`input-wrapper__input input-wrapper__input--textarea ${
          isInvalid ? 'input-wrapper__input--invalid' : ''
        }`}
        {...register(name, validators)}
      />
      {isInvalid && <span className="error-message">{errors[name]?.message as string}</span>}
    </div>
  )
}

export default TextArea
