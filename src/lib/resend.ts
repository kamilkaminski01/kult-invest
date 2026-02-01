'use server'

import { Resend } from 'resend'
import EmailTemplate from 'components/atoms/EmailTemplate'

interface EmailProps {
  name: string
  surname: string
  phoneNumber: string
  email: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({ name, surname, phoneNumber, email }: EmailProps) => {
  await resend.emails.send({
    to: 'kamilkaminski39@gmail.com',
    from: 'kontakt@kultinvest.pl',
    subject: `Kult - wiadomość od ${name} ${surname}`,
    react: EmailTemplate({ name, surname, phoneNumber, email })
  })
}
