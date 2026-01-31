'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import './style.scss'

interface TextareaProps {
  name: string
  displayName: string
  placeholder?: string
  validators?: object
  rows?: number
}

const Textarea = ({ name, displayName, placeholder, validators, rows = 10 }: TextareaProps) => {
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
      {isInvalid && <span className="input-wrapper__error">{errors[name]?.message as string}</span>}
    </div>
  )
}

export default Textarea
