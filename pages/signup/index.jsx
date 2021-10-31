//styles
import styles from './signup.module.scss'

//libraries
import Image from 'next/image'

//components
import Button from '@/components/Button/Button'

const SignUp = () => {
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
        <Button url="#" title="Forgot my password" />
      </div>
      <div className={styles.container__bottom}>
        <Button url="#" title="Sign up" />
      </div>
    </section>
  )
}

export default SignUp
