import classNames from 'classnames'
import ErrorMessage from 'components/atoms/ErrorMessage'
import { useFormContext } from 'react-hook-form'
import { CheckboxProps } from './interface'
import './style.scss'

const Checkbox = ({ children, name, validators = {} }: CheckboxProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <label
      className={classNames(`checkbox-wrapper`, {
        'checkbox-wrapper--required': validators.required
      })}>
      <input
        className="checkbox-wrapper__checkbox"
        data-testid={name}
        type="checkbox"
        {...register(name, validators)}
      />
      <span className="checkbox-wrapper__indicator" />
      <span className="checkbox-wrapper__content">{children}</span>
      {errors[name] && <ErrorMessage message={`${errors[name]?.message}`} fieldName={name} />}
    </label>
  )
}

export default Checkbox
