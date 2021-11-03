import styles from './passSuccess.module.scss'

//libraries
import Image from 'next/image'

//components
import Button from '../../components/Button/Button'

const PasswordRecoverySuccess = () => {
  return (
    <section>
      <figure>
        <h2>Email has been sent!</h2>
        <p>
          Please check your inbox for instructions <br />
          on how to reset the password.
        </p>
        <Image src="/icons/email.svg" width={50} height={50} alt="email-logo" />
      </figure>
      <Button btn url="/login" titie="Login" />
      <div>
        <span>Didnt receibve the email?</span>
        <Button title="Resend" url="password-recovery" />
      </div>
    </section>
  )
}

export default PasswordRecoverySuccess
