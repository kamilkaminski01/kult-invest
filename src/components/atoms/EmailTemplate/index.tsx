import { EmailTemplateProps } from './interface'

const EmailTemplate = ({ name, surname, phoneNumber, email }: EmailTemplateProps) => {
  return (
    <>
      <div>
        {name} {surname} chce wziąć udział w wydarzeniu.
      </div>
      <div>numer telefonu nadawcy: {phoneNumber}</div>
      <div>e-mail nadawcy: {email}</div>
    </>
  )
}

export default EmailTemplate
