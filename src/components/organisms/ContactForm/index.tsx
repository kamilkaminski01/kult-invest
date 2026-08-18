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
        <p className="contact-form__note">Wszystkie pola oprócz firmy są wymagane</p>
        <Input
          name="name"
          displayName="Imię i nazwisko"
          placeholder="np. Adam Kowalski"
          validators={{ required: valid.required, ...validSchemas.name }}
        />
        <Input name="company" displayName="Firma (opcjonalnie)" placeholder="np. Kult sp. z o.o." />
        <Input
          name="email"
          displayName="E-mail"
          placeholder="np. adam@firma.pl"
          validators={{ required: valid.required, pattern: valid.emailPattern }}
        />
        <TextArea
          name="message"
          displayName="Twoja sytuacja"
          placeholder="Czego szukasz i w jakim horyzoncie czasowym"
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
          {/* The tick alone said nothing to a screen reader, and nothing at all
              to a sighted visitor who does not read it as "sent". Its meaning
              now lives in the text beside it, so the icon is decorative. */}
          {status === 'success' && (
            <img src={CheckmarkIcon.src} alt="" className="contact-form__icon" />
          )}
          <p className="contact-form__status" role="status">
            {status === 'loading' && 'Wysyłanie wiadomości…'}
            {status === 'success' && 'Wiadomość wysłana. Odezwiemy się.'}
          </p>
          {status === 'error' && (
            <ErrorMessage message="Nie udało się wysłać wiadomości." fieldName="contactForm" />
          )}
        </div>
      </form>
    </FormProvider>
  )
}

export default ContactForm
