//styles
import styles from './passRecovery.module.scss'

//libraries
import Image from 'next/image'

//components
import Button from '@/components/Button/Button'
import PasswordRecoverySuccess from '@/components/PassRecoverySuccess/PassRecoverySuccess'

const PasswordRecovery = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container__top}>
          <Image
            src="/logos/logo_yard_sale.svg"
            width="200px"
            height="200px"
            alt="logo yard-sale"
          ></Image>

          <h1>Password recovery</h1>

          <p>Inform the email address used to create your account</p>

          <form action="" className={styles.container__top__form}>
            <label htmlFor="">Email address</label>
            <input type="email" placeholder="example@email.com" />

            <Button btn title="Submit" />
          </form>
        </div>
        <div className={styles.container__bottom}>
          <Button url="/login" title="Back to log in" />
        </div>
      </section>
      <PasswordRecoverySuccess />
    </>
  )
}

export default PasswordRecovery
