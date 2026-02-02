import { EmailTemplateProps } from './interface'

const EmailTemplate = ({ email, message }: EmailTemplateProps) => {
  return (
    <>
      <div style={{ whiteSpace: 'pre-line' }}>{message}</div>
      <br />
      <div>e-mail nadawcy {email}</div>
    </>
  )
}

export default EmailTemplate
