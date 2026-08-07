'use client'

import { useFormContext } from 'react-hook-form'
import './style.scss'
import { TextAreaProps } from './interface'
import ErrorMessage from 'components/atoms/ErrorMessage'

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
      {/* Same component the text inputs use, so this message is announced as a
          live region too — it used to be a bare span with no role. */}
      {isInvalid && <ErrorMessage message={`${errors[name]?.message}`} fieldName={name} />}
    </div>
  )
}

export default TextArea
