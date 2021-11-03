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

        <h1>My account</h1>

        <form action="" className={styles.container__top__form}>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Your name" />

          <label htmlFor="">Email address</label>
          <input type="email" placeholder="example@email.com" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <Button btn title="Create" />
        </form>
      </div>
      <div className={styles.container__bottom}>
        <span>Do you have already account?</span>
        <Button url="/login" title="Login" />
      </div>
    </section>
  )
}

export default SignUp
