import { ReactNode } from 'react'
import { RegisterOptions } from 'react-hook-form'

export interface CheckboxProps {
  children: ReactNode
  name: string
  validators?: RegisterOptions
}
