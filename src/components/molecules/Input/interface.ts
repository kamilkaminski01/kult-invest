import { RegisterOptions } from 'react-hook-form'

export interface InputProps {
  name: string
  displayName: string
  placeholder?: string
  validators?: RegisterOptions
}
