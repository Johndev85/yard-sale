//styles
import styles from './login.module.scss'

//libraries
import Image from 'next/image'

//components
import Button from '@/components/Button/Button'

const Login = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__top}>
        <Image
          src="/logos/logo_yard_sale.svg"
          width="200px"
          height="200px"
          alt="logo yard-sale"
        ></Image>

        <form action="" className={styles.container__top__form}>
          <label htmlFor="">Email address</label>
          <input type="text" placeholder="example@email.com" />

          <label htmlFor="">Password</label>
          <input type="password" />
          <Button btn title="Log in" />
        </form>
        <Button url="/password-recovery" title="Forgot my password" />
      </div>
      <div className={styles.container__bottom}>
        <Button url="/signup" title="Sign up" />
      </div>
    </section>
  )
}

export default Login
