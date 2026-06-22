'use server'

import { Resend } from 'resend'
import EmailTemplate from 'components/atoms/EmailTemplate'

interface EmailProps {
  name: string
  company: string
  email: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({ name, company, email, message }: EmailProps) => {
  await resend.emails.send({
    to: 'kontakt@kultinvest.pl',
    from: 'tech@kulttechnology.pl',
    subject: `Kult Invest - wiadomość od ${name} z ${company}`,
    react: EmailTemplate({ email, message })
  })
}
