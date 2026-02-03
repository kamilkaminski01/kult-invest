'use client'

import './style.scss'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import Input from 'components/molecules/Input'
import TextArea from 'components/molecules/TextArea'
import { valid } from 'utils/Validators/validators'
import { validSchemas } from 'utils/Validators/validatorsSchemas'
import Checkbox from 'components/molecules/Checkbox'
import Button from 'components/atoms/Button'
import { useState } from 'react'
import { sendEmail } from 'lib/resend'
import CheckmarkIcon from 'assets/icons/checkmark.svg'
import Spinner from 'components/atoms/Spinner'
import ErrorMessage from 'components/atoms/ErrorMessage'

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const methods = useForm()

  const formID = 'contactForm'

  const onSubmit = async (data: FieldValues) => {
    const { name, company, email, message } = data

    try {
      setStatus('loading')

      await sendEmail({ name, company, email, message })
      methods.reset()

      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <FormProvider {...methods}>
      <form id={formID} className="contact-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className="contact-form__title">Skontaktuj się z nami</h2>
        <Input
          name="name"
          displayName="Podaj imię"
          placeholder="np. Adam"
          validators={{ required: valid.required, ...validSchemas.name }}
        />
        <Input
          name="company"
          displayName="W imieniu jakiej firmy się kontaktujesz? (opcjonalnie)"
          placeholder="np. Kult Invest"
        />
        <Input
          name="email"
          displayName="Podaj e-mail"
          placeholder="np. adam@gmail.com..."
          validators={{ required: valid.required, pattern: valid.emailPattern }}
        />
        <TextArea
          name="message"
          displayName="Wiadomość"
          placeholder="Treść pytania lub wiadomości..."
          validators={{ required: valid.required }}
        />
        <Checkbox name="termsAcceptance" validators={{ required: valid.required }}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez Kult sp. z o.o. z siedzibą w
          Białymstoku, w celu obsługi mojego zapytania przesłanego za pomocą formularza
          kontaktowego.
        </Checkbox>
        <div className="contact-form__footer">
          <Button className="contact-form__button" type="submit" disable={status === 'loading'}>
            Wyślij wiadomość
          </Button>
          {status === 'loading' && <Spinner />}
          {status === 'success' && (
            <img src={CheckmarkIcon.src} alt="Success" className="footer__icon" />
          )}
          {status === 'error' && (
            <ErrorMessage message="Nie udało się wysłać wiadomości." fieldName="contactForm" />
          )}
        </div>
      </form>
    </FormProvider>
  )
}

export default ContactForm
